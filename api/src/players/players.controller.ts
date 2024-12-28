import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { PlayersService } from './players.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get(':nfc')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('nfc') nfc: string) {
    return this.playersService.findOne(nfc);
  }

  @Get()
  //TODO Add proper auth here with google or github auth
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOneByEmail(@Query('email') email: string) {
    return this.playersService.findOneByEmail(email);
  }
}
