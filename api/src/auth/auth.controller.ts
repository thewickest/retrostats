import { Body, Controller, Injectable, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';

@Injectable()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: UserDto) {
    return this.authService.login(user);
  }
}
