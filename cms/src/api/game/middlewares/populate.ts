'use strict';

export default () => {
  return (ctx, next) => {
    ctx.query = {
      ...ctx.query,
      populate: {
        image: true,
      }
    }
    return next();
  }
}