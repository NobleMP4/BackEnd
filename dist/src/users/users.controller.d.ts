import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        rank: import("../../prisma/generated/prisma/enums").Rank;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        rank: import("../../prisma/generated/prisma/enums").Rank;
        createdAt: Date;
    }[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        rank: import("../../prisma/generated/prisma/enums").Rank;
    }>;
}
