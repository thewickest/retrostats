import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
// import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionsService {
  constructor(private prismaService: PrismaService) {}
  create(createSessionDto: CreateSessionDto) {
    return this.prismaService.session.create({
      data: createSessionDto,
    });
  }

  findAll() {
    return this.prismaService.session.findMany({
      include: {
        game: true,
      },
      orderBy: [
        {
          initDate: 'desc',
        },
      ],
    });
  }

  findOne(id: number) {
    return this.prismaService.session.findUnique({
      where: {
        id,
      },
    });
  }
}
