import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesService {
  constructor(private prismaService: PrismaService) {}
  findBySlug(slug: string) {
    return this.prismaService.games.findFirst({
      where: {
        slug: {
          equals: slug,
        },
      },
    });
  }
}
