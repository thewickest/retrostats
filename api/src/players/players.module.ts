import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { StrapiService } from 'src/strapi/strapi.service';
import { StrapiModule } from 'src/strapi/strapi.module';

@Module({
  imports: [StrapiModule],
  controllers: [PlayersController],
  providers: [PlayersService, PrismaService, StrapiService],
})
export class PlayersModule {}
