import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
// import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SessionDto } from './dto/session.dto';
import { StrapiService } from 'src/strapi/strapi.service';

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

  findOne(id: number) {
    return this.prismaService.sessions.findUnique({
      where: {
        id,
      },
    });
  }
}
