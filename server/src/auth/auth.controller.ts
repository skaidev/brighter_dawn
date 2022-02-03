import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDocument } from './schema/auth.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  resgister(@Body() input: AuthDocument) {
    console.log('body:', input);

    return this.authService.register(input);
  }
}
