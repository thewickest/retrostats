import { Injectable } from '@nestjs/common';
import { StrapiService } from 'src/strapi/strapi.service';

@Injectable()
export class BadgesService {
  constructor(private strapiService: StrapiService) {}
  findAll() {
    const params = {
      populate: {
        image: true
      }
    }
    return this.strapiService.badges.findAll(params)
  }
}
