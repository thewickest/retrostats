import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { GamesService } from './games.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('/slug/:slug')
  @UseGuards(JwtAuthGuard)
  findBySlug(@Param('slug') slug: string) {
    return this.gamesService.findBySlug(slug);
  }
}
