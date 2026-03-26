import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { WeeksModule } from '../weeks/weeks.module';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [WeeksModule], // Accède au WeeksService exporté
  controllers: [EventsController],
  providers: [EventsService, PrismaService],
})
export class EventsModule {}