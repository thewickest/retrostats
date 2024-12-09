import { Injectable } from '@nestjs/common';
import { SessionsStrapiService } from './services/sessions/sessions-strapi.service';
import { BadgesStrapiService } from './services/badges/badges-strapi.service';
import { PlayersStrapiService } from './services/players/players-strapi.service';

@Injectable()
export class StrapiService {
  constructor(
    private sessionsService: SessionsStrapiService,
    private playersService: PlayersStrapiService,
    private badgesService: BadgesStrapiService,
  ) {}

  get sessions() {
    return this.sessionsService;
  }

  get players() {
    return this.playersService;
  }

  get badges() {
    return this.badgesService;
  }
}
