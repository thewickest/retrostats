import { Module } from '@nestjs/common';
import { StrapiService } from './strapi.service';
import { SessionsStrapiModule } from './services/sessions/sessions-strapi.module';
import { PlayersStrapiModule } from './services/players/players-strapi.module';

@Module({
  imports: [SessionsStrapiModule, PlayersStrapiModule],
  providers: [StrapiService],
  exports: [SessionsStrapiModule, PlayersStrapiModule],
})
export class StrapiModule {}
