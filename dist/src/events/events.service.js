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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const weeks_service_1 = require("../weeks/weeks.service");
let EventsService = class EventsService {
    prisma;
    weeksService;
    constructor(prisma, weeksService) {
        this.prisma = prisma;
        this.weeksService = weeksService;
    }
    async create(data) {
        const event = await this.prisma.event.create({
            data: {
                title: data.title,
                day_name: data.day_name,
                event_time: data.event_time,
                location: data.location || "Mission Row",
                week_id: Number(data.week_id),
            },
        });
        await this.weeksService.triggerDiscordUpdate(event.week_id);
        return event;
    }
    async update(id, data) {
        const event = await this.prisma.event.update({
            where: { id: Number(id) },
            data: {
                title: data.title,
                day_name: data.day_name,
                event_time: data.event_time,
                location: data.location,
            },
        });
        if (event)
            await this.weeksService.triggerDiscordUpdate(event.week_id);
        return event;
    }
    async remove(id) {
        const event = await this.prisma.event.findUnique({ where: { id: Number(id) } });
        if (!event)
            throw new common_1.NotFoundException("Session introuvable.");
        const weekId = event.week_id;
        await this.prisma.event.delete({ where: { id: Number(id) } });
        await this.weeksService.triggerDiscordUpdate(weekId);
        return { deleted: true };
    }
    async addParticipant(eventId, userId) {
        const event = await this.prisma.event.findUnique({ where: { id: Number(eventId) } });
        if (!event)
            throw new common_1.NotFoundException("Session introuvable.");
        try {
            const res = await this.prisma.eventParticipant.create({
                data: { event_id: Number(eventId), user_id: Number(userId) },
            });
            await this.weeksService.triggerDiscordUpdate(event.week_id);
            return res;
        }
        catch (e) {
            throw new common_1.BadRequestException("Déjà inscrit.");
        }
    }
    async removeParticipant(eventId, userId) {
        const event = await this.prisma.event.findUnique({ where: { id: Number(eventId) } });
        if (!event)
            throw new common_1.NotFoundException("Session introuvable.");
        const res = await this.prisma.eventParticipant.delete({
            where: { event_id_user_id: { event_id: Number(eventId), user_id: Number(userId) } },
        });
        await this.weeksService.triggerDiscordUpdate(event.week_id);
        return res;
    }
    async getAllUsers() {
        return this.prisma.user.findMany({ select: { id: true, firstName: true, lastName: true } });
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, weeks_service_1.WeeksService])
], EventsService);
//# sourceMappingURL=events.service.js.map