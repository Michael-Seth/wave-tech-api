import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthEmailLoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
