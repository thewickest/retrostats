import { Module } from '@nestjs/common';
import { PlayersStrapiService } from './players-strapi.service';

@Module({
  providers: [PlayersStrapiService],
  exports: [PlayersStrapiService],
})
export class PlayersStrapiModule {}
