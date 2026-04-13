import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DiscordService {
  private readonly logger = new Logger(DiscordService.name);

  private readonly BOT_BRIDGE_URL = "https://nod.edperso.fr/webhook-bridge";

  private readonly SERVERS = [
    {
      channelId: "1480646093405425674",
      roleAcademyId: "1471485398411645120",
      roleInstructeurId: "1471485450467147911",
    },
    {
      channelId: "1449141619746934819",
      roleAcademyId: null,
      roleInstructeurId: null,
    }
  ];

  constructor(private readonly httpService: HttpService) {}

  private buildPayload(weekData: any, roleAcademyId: string | null, roleInstructeurId: string | null) {
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const events = weekData.events || [];

    const fields = jours.map(j => {
      const dayEvents = events.filter((e: any) => e.day_name === j);
      const val = (dayEvents.length > 0)
        ? dayEvents.map((e: any) => {
            const staffList = e.participants?.map((p: any) => `• ${p.user.firstName} ${p.user.lastName}`).join('\n') || '*Aucun instructeur*';
            return `⏰ **${e.event_time}** — ${e.title}\n> 📍 ${e.location}\n${staffList}`;
          }).join('\n\n')
        : "*Aucune session prévue pour le moment*";

      return {
        name: `▬▬▬▬▬▬▬  ${j.toUpperCase()}  ▬▬▬▬▬▬▬`,
        value: val + "\n\u200b",
        inline: false
      };
    });

    const mentionContent = (roleAcademyId && roleInstructeurId)
      ? `<@&${roleAcademyId}> <@&${roleInstructeurId}>`
      : "";

    return {
      content: mentionContent,
      allowed_mentions: roleAcademyId ? { parse: ["roles"] } : { parse: [] },
      embeds: [{
        title: `🏛️ - PLANNING DE LA POLICE ACADEMY - 🏛️\nSemaine du ${weekData.title}`,
        color: 7318776,
        description: "Mise à jour en temps réel depuis le panel.\n\u200b",
        fields: fields,
        footer: { text: "Police Academy - Mission Row" },
        timestamp: new Date()
      }]
    };
  }

  private async sendToServer(channelId: string, messageId: string | null, payload: any): Promise<string | null> {
    try {
      const response = await lastValueFrom(
        this.httpService.post(this.BOT_BRIDGE_URL, {
          channelId,
          messageId,
          payload
        })
      );
      return response.data?.id || messageId;
    } catch (error: any) {
      this.logger.error(`Erreur bridge pour channel ${channelId} : ${error.message}`);
      return messageId || null;
    }
  }

  async publishPlanning(weekData: any, forceMention: boolean = false) {
    const messageIds = [
      weekData.discord_msg_id || null,
      weekData.discord_msg_id_2 || null,
    ];

    const results: { channelId: string; messageId: string | null }[] = [];

    for (let i = 0; i < this.SERVERS.length; i++) {
      const server = this.SERVERS[i];
      const payload = this.buildPayload(weekData, server.roleAcademyId, server.roleInstructeurId);
      const newMessageId = await this.sendToServer(server.channelId, messageIds[i], payload);
      results.push({ channelId: server.channelId, messageId: newMessageId });
    }

    return {
      discord_msg_id: results[0]?.messageId || null,
      discord_msg_id_2: results[1]?.messageId || null,
    };
  }
}