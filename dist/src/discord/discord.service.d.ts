import { HttpService } from '@nestjs/axios';
export declare class DiscordService {
    private readonly httpService;
    private readonly logger;
    private readonly BOT_BRIDGE_URL;
    private readonly SERVERS;
    constructor(httpService: HttpService);
    private buildPayload;
    private sendToServer;
    publishPlanning(weekData: any, forceMention?: boolean): Promise<{
        discord_msg_id: string | null;
        discord_msg_id_2: string | null;
    }>;
}
