import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  @Get('/game/:slug')
  findSessionsByGame(@Param('slug') slug: string, @Query() query: any) {
    return this.sessionsService.findByGame(slug, query);
  }

  @Get('/leaderBoard')
  findLeaderBoard() {
    return this.sessionsService.findLeaderBoard();
  }

  @Get('/leaderBoard/:username')
  findLeaderBoardByUsername(@Param('username') username: string) {
    return this.sessionsService.findLeaderBoardByUsername(username);
  }

  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.sessionsService.findOne(id);
  // }
}
