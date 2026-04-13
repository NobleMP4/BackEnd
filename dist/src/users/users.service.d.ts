import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        rank: import("../../prisma/generated/prisma/enums").Rank;
        createdAt: Date;
    }[]>;
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        rank: import("../../prisma/generated/prisma/enums").Rank;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        rank: import("../../prisma/generated/prisma/enums").Rank;
    }>;
    updateRank(id: number, rank: string): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        rank: import("../../prisma/generated/prisma/enums").Rank;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
