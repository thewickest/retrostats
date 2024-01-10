import { Injectable } from '@nestjs/common';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatsService {
  constructor(private prismaService: PrismaService) {}
  create(createStatDto: CreateStatDto) {
    return 'This action adds a new stat';
  }

  findAll() {
    return this.prismaService.stats.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} stat`;
  }

  update(id: number, updateStatDto: UpdateStatDto) {
    return `This action updates a #${id} stat`;
  }

  remove(id: number) {
    return `This action removes a #${id} stat`;
  }
}
