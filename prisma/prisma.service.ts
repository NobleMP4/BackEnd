import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Au lieu de créer un pool mysql2 manuellement, 
    // on passe l'URL directement à l'adaptateur.
    const adapter = new PrismaMariaDb(process.env.DATABASE_URL as string);

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    // TRÈS IMPORTANT pour ton quota d'hébergeur : 
    // ferme la connexion quand NestJS redémarre.
    await this.$disconnect();
  }
}