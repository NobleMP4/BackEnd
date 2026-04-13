import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { DiscordService } from '../discord/discord.service';

@Injectable()
export class WeeksService {
  constructor(
    private prisma: PrismaService,
    private discordService: DiscordService
  ) {}

  async updateDiscordId(weekId: number, msgId: string) {
    return this.prisma.week.update({
      where: { id: weekId },
      data: { discord_msg_id: msgId },
    });
  }

  async create(data: { title: string }) {
    const newWeek = await this.prisma.week.create({
      data: { title: data.title },
      include: {
        events: {
          include: {
            participants: { include: { user: true } }
          }
        }
      }
    });

    const msgIds = await this.discordService.publishPlanning(newWeek);

    if (msgIds) {
      return await this.prisma.week.update({
        where: { id: newWeek.id },
        data: {
          discord_msg_id: msgIds.discord_msg_id,
          discord_msg_id_2: msgIds.discord_msg_id_2,
        },
        include: {
          events: {
            include: {
              participants: { include: { user: true } }
            }
          }
        }
      });
    }

    return newWeek;
  }

  async findAll() {
    return this.prisma.week.findMany({
      include: {
        events: {
          include: {
            participants: { include: { user: { select: { id: true, firstName: true, lastName: true } } } },
          },
        },
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(id: number) {
    const week = await this.prisma.week.findUnique({
      where: { id: Number(id) },
      include: {
        events: {
          include: {
            participants: { include: { user: { select: { id: true, firstName: true, lastName: true } } } }
          },
        },
      },
    });
    if (!week) throw new NotFoundException(`Semaine ${id} introuvable.`);
    return week;
  }

  async triggerDiscordUpdate(weekId: number, forceMention: boolean = false) {
    const week = await this.findOne(weekId);
    if (week) {
      const msgIds = await this.discordService.publishPlanning(week, forceMention);

      if (msgIds) {
        await this.prisma.week.update({
          where: { id: week.id },
          data: {
            discord_msg_id: msgIds.discord_msg_id,
            discord_msg_id_2: msgIds.discord_msg_id_2,
          }
        });
      }
    }
  }

  async remove(id: number) {
    return this.prisma.week.delete({ where: { id: Number(id) } });
  }
}