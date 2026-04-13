import { PrismaService } from '../../prisma/prisma.service';
import { WeeksService } from '../weeks/weeks.service';
import { DayName } from '../../prisma/generated/prisma/client';
export declare class EventsService {
    private prisma;
    private weeksService;
    constructor(prisma: PrismaService, weeksService: WeeksService);
    create(data: any): Promise<{
        id: number;
        title: string;
        week_id: number;
        day_name: DayName;
        event_time: string | null;
        location: string | null;
    }>;
    update(id: number, data: any): Promise<{
        id: number;
        title: string;
        week_id: number;
        day_name: DayName;
        event_time: string | null;
        location: string | null;
    }>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
    addParticipant(eventId: number, userId: number): Promise<{
        event_id: number;
        user_id: number;
    }>;
    removeParticipant(eventId: number, userId: number): Promise<{
        event_id: number;
        user_id: number;
    }>;
    getAllUsers(): Promise<{
        id: number;
        firstName: string;
        lastName: string;
    }[]>;
}
