import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { WeeksService } from '../weeks/weeks.service';
import { DayName } from '../../prisma/generated/prisma/client';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService, private weeksService: WeeksService) {}

  async create(data: any) {
    const event = await this.prisma.event.create({
      data: {
        title: data.title,
        day_name: data.day_name as DayName,
        event_time: data.event_time,
        location: data.location || "Mission Row",
        week_id: Number(data.week_id),
      },
    });
    await this.weeksService.triggerDiscordUpdate(event.week_id);
    return event;
  }

  async update(id: number, data: any) {
    const event = await this.prisma.event.update({
      where: { id: Number(id) },
      data: {
        title: data.title,
        day_name: data.day_name as DayName,
        event_time: data.event_time,
        location: data.location,
      },
    });
    if (event) await this.weeksService.triggerDiscordUpdate(event.week_id);
    return event;
  }

  async remove(id: number) {
    const event = await this.prisma.event.findUnique({ where: { id: Number(id) } });
    if (!event) throw new NotFoundException("Session introuvable.");
    const weekId = event.week_id;
    await this.prisma.event.delete({ where: { id: Number(id) } });
    await this.weeksService.triggerDiscordUpdate(weekId);
    return { deleted: true };
  }

  async addParticipant(eventId: number, userId: number) {
    const event = await this.prisma.event.findUnique({ where: { id: Number(eventId) } });
    if (!event) throw new NotFoundException("Session introuvable.");
    try {
      const res = await this.prisma.eventParticipant.create({
        data: { event_id: Number(eventId), user_id: Number(userId) },
      });
      await this.weeksService.triggerDiscordUpdate(event.week_id);
      return res;
    } catch (e) { throw new BadRequestException("Déjà inscrit."); }
  }

  async removeParticipant(eventId: number, userId: number) {
    const event = await this.prisma.event.findUnique({ where: { id: Number(eventId) } });
    if (!event) throw new NotFoundException("Session introuvable.");
    const res = await this.prisma.eventParticipant.delete({
      where: { event_id_user_id: { event_id: Number(eventId), user_id: Number(userId) } },
    });
    await this.weeksService.triggerDiscordUpdate(event.week_id);
    return res;
  }

  async getAllUsers() {
    return this.prisma.user.findMany({ select: { id: true, firstName: true, lastName: true } });
  }
}