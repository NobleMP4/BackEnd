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

    const discordMsgId = await this.discordService.publishPlanning(newWeek);

    if (discordMsgId) {
      return await this.prisma.week.update({
        where: { id: newWeek.id },
        data: { discord_msg_id: discordMsgId },
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

  // forceMention = true : publish manuel depuis le panel (ping les rôles)
  // forceMention = false : mise à jour silencieuse (ajout/modif d'event)
  async triggerDiscordUpdate(weekId: number, forceMention: boolean = false) {
    const week = await this.findOne(weekId);
    if (week) {
      const newDiscordId = await this.discordService.publishPlanning(week, forceMention);

      if (newDiscordId && week.discord_msg_id !== newDiscordId) {
        await this.prisma.week.update({
          where: { id: week.id },
          data: { discord_msg_id: newDiscordId }
        });
      }
    }
  }

  async remove(id: number) {
    return this.prisma.week.delete({ where: { id: Number(id) } });
  }
}