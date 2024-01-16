
export default () => {
  return (ctx, next) => {
    ctx.query = {
      ...ctx.query,
      populate: {
        game: {
          populate: ['image']
        },
        game_user: true,
      }
    }
    return next();
    
  }
  
} 