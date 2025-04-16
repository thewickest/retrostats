import { Injectable } from '@nestjs/common';
import { HttpStrapiClient } from 'src/strapi/classes/httpStrapiClient';

@Injectable()
export class BadgesStrapiService extends HttpStrapiClient {
  protected singularName = 'badge';
  protected pluralName = 'badges';
}
