import { Module } from '@nestjs/common';
import { StrapiService } from './strapi.service';
import { SessionsStrapiModule } from './services/sessions/sessions-strapi.module';
import { PlayersStrapiModule } from './services/players/players-strapi.module';
import { BadgesStrapiModule } from './services/badges/badges-strapi.module';

@Module({
  imports: [SessionsStrapiModule, PlayersStrapiModule, BadgesStrapiModule],
  providers: [StrapiService],
  exports: [SessionsStrapiModule, PlayersStrapiModule, BadgesStrapiModule],
})
export class StrapiModule {}
