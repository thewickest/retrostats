import { Module } from '@nestjs/common';
import { StrapiService } from './strapi.service';
import { SessionsStrapiModule } from './services/sessions/sessions-strapi.module';

@Module({
  imports: [SessionsStrapiModule],
  providers: [StrapiService],
  exports: [SessionsStrapiModule],
})
export class StrapiModule {}
