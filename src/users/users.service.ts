import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
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

  // --- Logique de mise à jour implémentée ---
  async update(id: string, updateUserDto: UpdateUserDto) {
    const { password, ...rest } = updateUserDto;
    const dataToUpdate: any = { ...rest };

    // 1. Si un nouveau mot de passe est fourni, on le hache
    if (password) {
      const salt = await bcrypt.genSalt();
      dataToUpdate.password = await bcrypt.hash(password, salt);
    }

    try {
      return await this.prisma.user.update({
        where: { id: Number(id) }, // Converti en Number si ton ID Prisma est un Int
        data: dataToUpdate,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          rank: true,
        },
      });
    } catch (error) {
      // Prisma renvoie une erreur spécifique si le record n'existe pas
      throw new NotFoundException(`Utilisateur avec l'ID ${id} introuvable`);
    }
  }

  async updateRank(id: number, rank: string) {
    return this.prisma.user.update({
      where: { id },
      data: { rank: rank as any },
    });
  }
}