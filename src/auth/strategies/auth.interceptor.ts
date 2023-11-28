import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(private authService: AuthService) {}

  intercept(context: ExecutionContext, next: CallHandler): any {
    const req = context.switchToHttp().getRequest();
    const tokenArray = req.headers.authorization;

    if (tokenArray) {
      const decodedToken = this.authService.decodeToken(
        tokenArray.split(' ')[1],
      );

      if (decodedToken) {
        req.body['user'] = decodedToken.user;
      } else {
        console.error('Failed to decode token.');
      }
    }

    return next.handle();
  }
}
