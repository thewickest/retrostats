import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { StrapiService } from 'src/strapi/strapi.service';
import { StrapiModule } from 'src/strapi/strapi.module';

@Module({
  imports: [StrapiModule],
  controllers: [SessionsController],
  providers: [SessionsService, PrismaService, StrapiService],
})
export class SessionsModule {}
