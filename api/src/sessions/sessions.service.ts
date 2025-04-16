import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SessionDto } from './dto/session.dto';
import { StrapiService } from 'src/strapi/strapi.service';
import { groupBy, maxBy } from 'lodash';
import { StrapiResponse } from 'strapi-sdk-js';

@Injectable()
export class SessionsService {
  constructor(
    private prismaService: PrismaService,
    private strapi: StrapiService,
  ) {}
  async create(createSessionDto: CreateSessionDto) {
    //TODO: Why i didn't use strapi api?
    try {
      const createdSession: any = await this.prismaService.sessions.create({
        data: {
          init_date: new Date(createSessionDto.initDate),
          duration: createSessionDto.duration,
          score: createSessionDto.score,
          created_at: new Date(),
          updated_at: new Date(),
        },
      });
      await this.prismaService.sessions_game_user_links.create({
        data: {
          session_id: createdSession.id,
          game_user_id: createSessionDto.userId,
        },
      });
      await this.prismaService.sessions_game_links.create({
        data: {
          session_id: createdSession.id,
          game_id: createSessionDto.gameId,
        },
      });
      return createdSession;
    } catch (error: any) {
      console.log('An error ocurred');
      throw error;
    }
  }

  async findAll(): Promise<SessionDto[]> {
    return this.strapi.sessions.findAll().then((data) => data?.data);
  }

  /**
   * Finds the top score of each game inside the databse.
   * @returns A promise containing an array of sessions
   */
  async findLeaderBoard(): Promise<SessionDto[]> {
    //First option:
    //  select s.score, g.game_id
    // from  sessions s, sessions_game_links g
    // where s.id = g.session_id
    //   and s.score in (
    //       select max(ss.score)
    //       from sessions ss, sessions_game_links gg
    //       where gg.game_id = g.game_id and ss.id = gg.session_id
    //     );

    //better
    // select max(score), game_id
    // from sessions s, sessions_game_links g
    // where s.id = g.session_id
    // group by game_id;

    //TODO: This could be done with a proper prisma query. More efficient surely
    const sessions = await this.strapi.sessions.findAll();
    const gp = groupBy(sessions.data, (p) => p.attributes.game.data.id); //group by game
    return Object.keys(gp).map(
      (id) => maxBy(gp[id], (e) => e.attributes.score), //return session with max score
    );
    //
  }

  /**
   * Return one session by given id
   * @param id The id of the session
   * @returns Th
   */
  async findOne(id: number): Promise<SessionDto> {
    return this.strapi.sessions.findOne(id).then((data) => data?.data);
  }

  /**
   * Return a promise containing the sessions within that games' slug
   * @param slug Slug of the game
   * @returns The sessions of that game
   */
  async findByGame(
    slug: string,
    query: any,
  ): Promise<StrapiResponse<SessionDto>> {

    const filters = {
      game: {
        slug: {
          $eq: slug,
        },
      },
    }

    /**Order by Score to get first the position */
    const sessionsOrdered = await this.strapi.sessions.findAll({
      filters,
      pagination: {
        page: 1,
        pageSize: 100
      },
      sort: ['score:desc','id:asc'],
      fields: ['id']
    });

    /**Get current query */
    const sessions = await this.strapi.sessions.findAll({ filters, ...query});

    /**Map the position from the ordered items to the current query */
    const data = sessions?.data.map(item => {
      const position = sessionsOrdered.data.findIndex( session => session.id === item.id )
      return {
        id: item.id,
        attributes: {
          ...item.attributes,
          position: position + 1
        }
      }
    })
    return { data, meta: sessions.meta }
  }
}
