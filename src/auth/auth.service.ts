import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user && (await bcrypt.compare(pass, user.password))) {
      // ON MET LE GRADE DANS LE PAYLOAD
      const payload = { 
        sub: user.id, 
        email: user.email,
        rank: user.rank, 
        firstName: user.firstName,
        lastName: user.lastName
      };
      
      return {
        access_token: this.jwtService.sign(payload),
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          rank: user.rank
        }
      };
    }
    throw new UnauthorizedException('Identifiants invalides');
  }
}