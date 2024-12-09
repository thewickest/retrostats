import { Module } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { BadgesController } from './badges.controller';
import { StrapiModule } from 'src/strapi/strapi.module';
import { StrapiService } from 'src/strapi/strapi.service';

@Module({
  imports: [StrapiModule],
  controllers: [BadgesController],
  providers: [BadgesService, StrapiService],
})
export class BadgesModule {}
