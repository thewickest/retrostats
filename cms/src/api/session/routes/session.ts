/**
 * session router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::session.session', {
  config: {
    find: {
      middlewares: ['api::session.populate']
    }
  }
});
