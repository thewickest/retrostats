import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatsModule } from './stats/stats.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [StatsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
