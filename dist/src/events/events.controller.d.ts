import { EventsService } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(dto: any, req: any): Promise<{
        id: number;
        title: string;
        week_id: number;
        day_name: import("../../prisma/generated/prisma/enums").DayName;
        event_time: string | null;
        location: string | null;
    }>;
    update(id: string, dto: any, req: any): Promise<{
        id: number;
        title: string;
        week_id: number;
        day_name: import("../../prisma/generated/prisma/enums").DayName;
        event_time: string | null;
        location: string | null;
    }>;
    remove(id: string, req: any): Promise<{
        deleted: boolean;
    }>;
    signUp(id: string, req: any): Promise<{
        event_id: number;
        user_id: number;
    }>;
    signOut(id: string, req: any): Promise<{
        event_id: number;
        user_id: number;
    }>;
    assign(id: string, targetId: string, req: any): Promise<{
        event_id: number;
        user_id: number;
    }>;
    unassign(id: string, targetId: string, req: any): Promise<{
        event_id: number;
        user_id: number;
    }>;
    getUsers(): Promise<{
        id: number;
        firstName: string;
        lastName: string;
    }[]>;
    private checkAdmin;
}
