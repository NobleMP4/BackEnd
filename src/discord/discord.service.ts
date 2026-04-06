import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DiscordService {
  
  private readonly WEBHOOK_URL = "https://discord.com/api/webhooks/1481212029342716076/dU-vOEs8Edp9pQsGdDLm9F_P74rB4NWb7HSyyg4JN6q_fnsGsZj2a4BGMytUu8HBQKTb";
  //private readonly WEBHOOK_URL = "https://discord.com/api/webhooks/1481216948409733121/fMrvZdSnr9FfVI7VXjsVBWvZ2ZAC5O2WGtCSxE6US5NdLnMffGdiW0NXGSvOWiv0EXUu";
  private readonly ROLE_ACADEMY_ID = "1471485398411645120";
  private readonly ROLE_INSTRUCTEUR_ID = "1471485450467147911";

  constructor(private readonly httpService: HttpService) {}

  async publishPlanning(weekData: any, forceMention: boolean = false) {
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    const events = weekData.events || [];

    const fields = jours.map(j => {
      const dayEvents = events.filter((e: any) => e.day_name === j);
      let val = (dayEvents.length > 0)
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

    const mentionContent = `<@&${this.ROLE_ACADEMY_ID}> <@&${this.ROLE_INSTRUCTEUR_ID}>`;

    const payload = {
      content: mentionContent,
      allowed_mentions: {
        parse: ["roles"]
      },
      embeds: [{
        title: `🏛️ - PLANNING DE LA POLICE ACADEMY - 🏛️\nSemaine du ${weekData.title}`,
        color: 7318776,
        description: "Mise à jour en temps réel depuis le panel.\n\u200b",
        fields: fields,
        footer: { text: "Police Academy - Mission Row" },
        timestamp: new Date()
      }]
    };

    let url = this.WEBHOOK_URL;
    let method: 'post' | 'patch' = 'post';

    if (weekData.discord_msg_id) {
      url = `${this.WEBHOOK_URL}/messages/${weekData.discord_msg_id}`;
      method = 'patch';
    } else {
      url += "?wait=true";
    }

    try {
      const response = await lastValueFrom(this.httpService[method](url, payload));
      return response.data?.id || weekData.discord_msg_id;
    } catch (error: any) {
      console.error("Erreur Discord détaillée:", error.response?.data || error.message);
      return null;
    }
  }
}