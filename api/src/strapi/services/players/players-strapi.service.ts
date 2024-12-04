import { Injectable } from '@nestjs/common';
import { HttpStrapiClient } from 'src/strapi/classes/httpStrapiClient';

@Injectable()
export class PlayersStrapiService extends HttpStrapiClient {
  protected singularName = 'game-user';
  protected pluralName = 'game-users';
}
