import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { PlayersService } from './players.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get(':nfc')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('nfc') nfc: string) {
    return this.playersService.findOne(nfc);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findOneByEmail(@Query('email') email: string) {
    return this.playersService.findOneByEmail(email);
  }
}
