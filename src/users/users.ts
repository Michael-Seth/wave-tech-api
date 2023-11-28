import { EntityCondition } from 'src/utils/entity-condition.type';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { NullableType } from 'src/utils/nullable.type';
import { DeepPartial } from 'typeorm';

export interface IUsersService {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  findOneUser(id: EntityCondition<User>): Promise<NullableType<User>>;
}
