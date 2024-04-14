import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
// import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SessionDto } from './dto/session.dto';
import { StrapiService } from 'src/strapi/strapi.service';
import { groupBy, maxBy } from 'lodash';

@Injectable()
export class SessionsService {
  constructor(
    private prismaService: PrismaService,
    private strapi: StrapiService,
  ) {}
  async create(createSessionDto: CreateSessionDto) {
    try {
      const createdSession: any = await this.prismaService.sessions.create({
        data: {
          init_date: new Date(createSessionDto.initDate),
          duration: new Date(createSessionDto.duration),
          score: createSessionDto.score,
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
    return this.strapi.sessions.findAll().then((data) => data.data);
  }

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

  findOne(id: number) {
    return this.prismaService.sessions.findUnique({
      where: {
        id,
      },
    });
  }
}
