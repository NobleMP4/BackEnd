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
exports.WeeksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const discord_service_1 = require("../discord/discord.service");
let WeeksService = class WeeksService {
    prisma;
    discordService;
    constructor(prisma, discordService) {
        this.prisma = prisma;
        this.discordService = discordService;
    }
    async updateDiscordId(weekId, msgId) {
        return this.prisma.week.update({
            where: { id: weekId },
            data: { discord_msg_id: msgId },
        });
    }
    async create(data) {
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
    async findOne(id) {
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
        if (!week)
            throw new common_1.NotFoundException(`Semaine ${id} introuvable.`);
        return week;
    }
    async triggerDiscordUpdate(weekId, forceMention = false) {
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
    async remove(id) {
        return this.prisma.week.delete({ where: { id: Number(id) } });
    }
};
exports.WeeksService = WeeksService;
exports.WeeksService = WeeksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        discord_service_1.DiscordService])
], WeeksService);
//# sourceMappingURL=weeks.service.js.map