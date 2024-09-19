import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SessionsModule } from './sessions/sessions.module';
import { StrapiModule } from './strapi/strapi.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';
import { PagesModule } from './pages/pages.module';

@Module({
  imports: [
    PrismaModule,
    SessionsModule,
    StrapiModule,
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    PlayersModule,
    GamesModule,
    PagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
