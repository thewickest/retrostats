import { Module } from '@nestjs/common';
import { BadgesStrapiService } from './badges-strapi.service';

@Module({
  providers: [BadgesStrapiService],
  exports: [BadgesStrapiService],
})
export class BadgesStrapiModule {}
