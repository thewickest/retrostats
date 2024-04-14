import { Injectable } from '@nestjs/common';
import { SessionsStrapiService } from './services/sessions/sessions-strapi.service';

@Injectable()
export class StrapiService {
  constructor(private sessionsService: SessionsStrapiService) {}

  get sessions() {
    return this.sessionsService;
  }
}
