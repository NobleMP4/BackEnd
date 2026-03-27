import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  update(id: string, updateUserDto: UpdateUserDto) {
    throw new Error('Method not implemented.');
  }
  updateRank(arg0: number, rank: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        rank: true,
        createdAt: true,
      },
      orderBy: {
        lastName: 'asc',
      },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const { password, email, ...rest } = createUserDto;

    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new ConflictException('Cet email est déjà utilisé');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return this.prisma.user.create({
      data: {
        firstName: rest.firstName,
        lastName: rest.lastName,
        email: email,
        password: hashedPassword,
        rank: rest.rank as any,
      },
    });
  }
}