import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DiscordService {
  private readonly logger = new Logger(DiscordService.name);
  
  // L'URL de ton bot bridge (à adapter selon ton IP/Port)
  private readonly BOT_BRIDGE_URL = "https://nod.edperso.fr/webhook-bridge";
  //URL

  // L'ID du salon où le bot doit poster le planning
  private readonly DISCORD_CHANNEL_ID = "1480646093405425674";

  private readonly ROLE_ACADEMY_ID = "1471485398411645120";
  private readonly ROLE_INSTRUCTEUR_ID = "1471485450467147911";

  constructor(private readonly httpService: HttpService) {}

  async publishPlanning(weekData: any, forceMention: boolean = false) {
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const events = weekData.events || [];

    // --- On garde TOUTE ta logique de mise en forme ici ---
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

    // Le "paquet" (payload) complet qu'on envoie au bot
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

    // --- Envoi vers le BOT BRIDGE ---
    try {
      const response = await lastValueFrom(
        this.httpService.post(this.BOT_BRIDGE_URL, {
          channelId: this.DISCORD_CHANNEL_ID,
          messageId: weekData.discord_msg_id, // Si c'est null, le bot va créer. Sinon, il va éditer.
          payload: payload
        })
      );

      // Le bot renvoie l'ID du message Discord (qu'il soit nouveau ou édité)
      return response.data?.id || weekData.discord_msg_id;

    } catch (error: any) {
      this.logger.error(`Erreur de communication avec le Bot Bridge : ${error.message}`);
      
      // En cas d'erreur de réseau ou autre, on retourne l'ID actuel pour ne pas casser la BDD
      return weekData.discord_msg_id || null;
    }
  }
}