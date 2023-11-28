import {
  Controller,
  HttpStatus,
  Inject,
  Get,
  UseGuards,
  Param,
  ParseIntPipe,
  Res,
} from '@nestjs/common';
import { Services } from 'src/utils/constants';
import { IUsersService } from './users';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/strategies/jwt.guard';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(
    @Inject(Services.USERS) private readonly usersService: IUsersService,
  ) {}

  @Get(':id')
  async getUser(@Res() res, @Param('id', ParseIntPipe) userId) {
    const user = await this.usersService.findOneUser({ id: userId });
    return res.status(HttpStatus.OK).json(user);
  }
}
