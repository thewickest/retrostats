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
    return this.prismaService.session.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  // update(id: number, updateSessionDto: UpdateSessionDto) {
  //   return `This action updates a #${id} session`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} session`;
  // }
}
