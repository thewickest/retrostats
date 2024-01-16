import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SessionsModule } from './sessions/sessions.module';
import { StrapiModule } from './strapi/strapi.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, SessionsModule, StrapiModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
