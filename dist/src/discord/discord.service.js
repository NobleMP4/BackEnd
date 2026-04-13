"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DiscordService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let DiscordService = DiscordService_1 = class DiscordService {
    httpService;
    logger = new common_1.Logger(DiscordService_1.name);
    BOT_BRIDGE_URL = "https://nod.edperso.fr/webhook-bridge";
    SERVERS = [
        {
            channelId: "1480646093405425674",
            roleAcademyId: "1471485398411645120",
            roleInstructeurId: "1471485450467147911",
        },
        {
            channelId: "1484561666535457008",
            roleAcademyId: null,
            roleInstructeurId: null,
        }
    ];
    constructor(httpService) {
        this.httpService = httpService;
    }
    buildPayload(weekData, roleAcademyId, roleInstructeurId) {
        const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
        const events = weekData.events || [];
        const fields = jours.map(j => {
            const dayEvents = events.filter((e) => e.day_name === j);
            const val = (dayEvents.length > 0)
                ? dayEvents.map((e) => {
                    const staffList = e.participants?.map((p) => `• ${p.user.firstName} ${p.user.lastName}`).join('\n') || '*Aucun instructeur*';
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
    async sendToServer(channelId, messageId, payload) {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.post(this.BOT_BRIDGE_URL, {
                channelId,
                messageId,
                payload
            }));
            return response.data?.id || messageId;
        }
        catch (error) {
            this.logger.error(`Erreur bridge pour channel ${channelId} : ${error.message}`);
            return messageId || null;
        }
    }
    async publishPlanning(weekData, forceMention = false) {
        const messageIds = [
            weekData.discord_msg_id || null,
            weekData.discord_msg_id_2 || null,
        ];
        const results = [];
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
};
exports.DiscordService = DiscordService;
exports.DiscordService = DiscordService = DiscordService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], DiscordService);
//# sourceMappingURL=discord.service.js.map