import { Module } from '@nestjs/common';
import { SessionsStrapiService } from './sessions-strapi.service';

@Module({
  providers: [SessionsStrapiService],
  exports: [SessionsStrapiService],
})
export class SessionsStrapiModule {}
