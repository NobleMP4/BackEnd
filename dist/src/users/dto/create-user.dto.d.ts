import { Rank } from '../../../prisma/generated/prisma/client';
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    rank: Rank;
}
