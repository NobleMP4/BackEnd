import { IsEmail, IsEnum, IsString, MinLength, IsOptional } from 'class-validator';
import { Rank } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Le mot de passe doit faire au moins 8 caractères' })
  password: string;

  @IsEnum(Rank)
  rank: Rank;
}