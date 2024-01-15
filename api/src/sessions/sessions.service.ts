import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
// import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SessionDto } from './dto/session.dto';

@Injectable()
export class SessionsService {
  constructor(private prismaService: PrismaService) {}
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
    //TODO: This method is too slow. We need to change the logic
    //Get all sessions
    const sessions = await this.prismaService.sessions.findMany({
      select: {
        init_date: true,
        score: true,
        duration: true,
        sessions_game_links: {
          select: {
            games: true,
          },
        },
        sessions_game_user_links: {
          select: {
            game_users: true,
          },
        },
      },
      orderBy: [
        {
          init_date: 'desc',
        },
      ],
    });
    //map sessions to proper DTO
    return sessions.map((s) => ({
      initDate: s.init_date,
      duration: s.duration,
      score: s.score,
      game: s.sessions_game_links[0].games,
      user: s.sessions_game_user_links[0].game_users,
    }));
  }

  findOne(id: number) {
    return this.prismaService.sessions.findUnique({
      where: {
        id,
      },
    });
  }
}
