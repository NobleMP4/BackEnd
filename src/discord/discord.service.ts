import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DiscordService {
  private readonly WEBHOOK_URL = "https://discord.com/api/webhooks/1481212029342716076/dU-vOEs8Edp9pQsGdDLm9F_P74rB4NWb7HSyyg4JN6q_fnsGsZj2a4BGMytUu8HBQKTb";
  private readonly ROLE_ACADEMY_ID = "1471485398411645120";
  private readonly ROLE_INSTRUCTEUR_ID = "1471485450467147911";

  constructor(private readonly httpService: HttpService) {}

  async publishPlanning(weekData: any, forceMention: boolean = false) {
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // On s'assure que weekData.events existe, sinon on prend un tableau vide
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

    // On mentionne les rôles si :
    // - C'est un nouveau message (pas encore d'ID discord)
    // - Ou si forceMention est explicitement demandé
    const shouldMention = !weekData.discord_msg_id || forceMention;
    const mentionContent = `<@&${this.ROLE_ACADEMY_ID}> <@&${this.ROLE_INSTRUCTEUR_ID}>`;

    const payload = {
      content: shouldMention ? mentionContent : "",
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
      // Si on a un ID, on modifie le message existant
      url = `${this.WEBHOOK_URL}/messages/${weekData.discord_msg_id}`;
      method = 'patch';
    } else {
      // Sinon, on poste un nouveau message et on demande l'ID en retour (?wait=true)
      url += "?wait=true";
    }

    try {
      const response = await lastValueFrom(this.httpService[method](url, payload));
      // Discord renvoie l'ID dans response.data.id pour un POST ?wait=true
      return response.data?.id || weekData.discord_msg_id;
    } catch (error: any) {
      console.error("Erreur Discord détaillée:", error.response?.data || error.message);
      return null;
    }
  }
}