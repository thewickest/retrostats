import { Injectable } from '@nestjs/common';
import { HttpStrapiClient } from 'src/strapi/classes/httpStrapiClient';

@Injectable()
export class SessionsStrapiService extends HttpStrapiClient {
  protected singularName = 'session';
  protected pluralName = 'sessions';
}
