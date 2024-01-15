/**
 * game router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::game.game', {
  config: {
    find: {
      middlewares: ['api::game.populate']
    }
  }
});
