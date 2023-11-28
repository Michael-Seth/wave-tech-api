import {
  Injectable,
  Inject,
  HttpException,
  NotAcceptableException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Services } from 'src/utils/constants';
import { IUsersService } from 'src/users/users';
import { AuthEmailLoginDto } from './dtos/auth-email-login.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(Services.USERS) private readonly usersService: IUsersService,

    private jwtService: JwtService,
  ) {}
  async validateLogin(loginDto: AuthEmailLoginDto): Promise<any> {
    const user = await this.usersService.findOneUser({
      email: loginDto.email,
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: 'notFound',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            password: 'incorrectPassword',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const { password, ...result } = user;
    const tokenData = this.jwtService.sign(
      { id: user.id },
      {
        expiresIn: '1d', //1 Day
      },
    );
    return { user: result, accessToken: tokenData };
  }

  async login(req: any) {
    const payload = {
      user: {
        id: req.user.id,
        email: req.user.email,
        username: req.user.username,
        created_at: req.user.created_at,
        updated_at: req.user.updated_at,
      },
    };
    return {
      user: payload.user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data) {
    data.password = await bcrypt.hash(data.password, 10);
    const response = await this.usersService.createUser(data);
    if (response) {
      const { password, ...result } = response;
      return result;
    }
  }
  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}
