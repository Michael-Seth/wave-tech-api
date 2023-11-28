import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthEmailLoginDto } from './dtos/auth-email-login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    console.log('Gotten to Constructor AuthService ');

    // super({
    //   usernameField: 'email',
    //   passwordField: 'password',
    // });
    super();
  }

  async validate(loginDto: AuthEmailLoginDto): Promise<any> {
    const user = await this.authService.validateLogin(loginDto);
    console.log('Gotten to validate Local.auth ');
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
