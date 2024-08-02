import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlayersService {
  constructor(private prismaService: PrismaService) {}
  async findOne(nfc: string) {
    try {
      return this.prismaService.game_users.findFirst({
        where: {
          nfc: {
            equals: nfc,
          },
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new HttpException(
          {
            statusCode: 500,
            message: 'Some error happened while finding the user',
          },
          500,
        );
      }
    }
  }
}
