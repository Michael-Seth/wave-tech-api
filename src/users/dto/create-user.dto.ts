import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'michael@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string | null;

  @ApiProperty({ example: '123456' })
  @MinLength(6)
  password?: string;

  @ApiProperty({ example: 'Michael' })
  @IsNotEmpty()
  firstName: string | null;

  @ApiProperty({ example: 'Michael Osas' })
  @IsNotEmpty()
  lastName: string | null;

  hash?: string | null;
}
