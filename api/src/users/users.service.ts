import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export type User = {
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findOne(username: string) {
    const res = this.prismaService.api_users.findFirst({
      where: {
        user: {
          equals: username,
        },
      },
    });
    return res;
  }
}
