import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeeksService } from './weeks.service';
import { WeeksController } from './weeks.controller';
import { DiscordService } from '../discord/discord.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [WeeksController],
  providers: [WeeksService, DiscordService, PrismaService],
  exports: [WeeksService], // INDISPENSABLE pour EventsModule
})
export class WeeksModule {}