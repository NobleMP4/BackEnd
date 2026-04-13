import { WeeksService } from './weeks.service';
export declare class WeeksController {
    private readonly weeksService;
    constructor(weeksService: WeeksService);
    create(dto: {
        title: string;
    }, req: any): Promise<{
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
    findOne(id: string): Promise<{
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
    remove(id: string, req: any): Promise<{
        id: number;
        title: string;
        discord_msg_id: string | null;
        created_at: Date;
        discord_msg_id_2: string | null;
    }>;
    publish(id: string, req: any): Promise<{
        message: string;
    }>;
    private checkAdmin;
}
