import { PrismaService } from '../../prisma/prisma.service';
import { DiscordService } from '../discord/discord.service';
export declare class WeeksService {
    private prisma;
    private discordService;
    constructor(prisma: PrismaService, discordService: DiscordService);
    updateDiscordId(weekId: number, msgId: string): Promise<{
        id: number;
        title: string;
        discord_msg_id: string | null;
        created_at: Date;
        discord_msg_id_2: string | null;
    }>;
    create(data: {
        title: string;
    }): Promise<{
        events: ({
            participants: ({
                user: {
                    id: number;
                    firstName: string;
                    lastName: string;
                    email: string;
                    password: string;
                    rank: import("../../prisma/generated/prisma/enums").Rank;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                event_id: number;
                user_id: number;
            })[];
        } & {
            id: number;
            title: string;
            week_id: number;
            day_name: import("../../prisma/generated/prisma/enums").DayName;
            event_time: string | null;
            location: string | null;
        })[];
    } & {
        id: number;
        title: string;
        discord_msg_id: string | null;
        created_at: Date;
        discord_msg_id_2: string | null;
    }>;
    findAll(): Promise<({
        events: ({
            participants: ({
                user: {
                    id: number;
                    firstName: string;
                    lastName: string;
                };
            } & {
                event_id: number;
                user_id: number;
            })[];
        } & {
            id: number;
            title: string;
            week_id: number;
            day_name: import("../../prisma/generated/prisma/enums").DayName;
            event_time: string | null;
            location: string | null;
        })[];
    } & {
        id: number;
        title: string;
        discord_msg_id: string | null;
        created_at: Date;
        discord_msg_id_2: string | null;
    })[]>;
    findOne(id: number): Promise<{
        events: ({
            participants: ({
                user: {
                    id: number;
                    firstName: string;
                    lastName: string;
                };
            } & {
                event_id: number;
                user_id: number;
            })[];
        } & {
            id: number;
            title: string;
            week_id: number;
            day_name: import("../../prisma/generated/prisma/enums").DayName;
            event_time: string | null;
            location: string | null;
        })[];
    } & {
        id: number;
        title: string;
        discord_msg_id: string | null;
        created_at: Date;
        discord_msg_id_2: string | null;
    }>;
    triggerDiscordUpdate(weekId: number, forceMention?: boolean): Promise<void>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        discord_msg_id: string | null;
        created_at: Date;
        discord_msg_id_2: string | null;
    }>;
}
