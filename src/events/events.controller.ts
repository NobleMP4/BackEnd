import { 
  Controller, Post, Body, Get, UseGuards, Req, 
  ForbiddenException, Delete, Param, Patch 
} from '@nestjs/common';
import { EventsService } from './events.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() dto: any, @Req() req: any) {
    this.checkAdmin(req.user.rank);
    return this.eventsService.create(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: any, @Req() req: any) {
    this.checkAdmin(req.user.rank);
    return this.eventsService.update(+id, dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: any) {
    this.checkAdmin(req.user.rank);
    return this.eventsService.remove(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/signup')
  async signUp(@Param('id') id: string, @Req() req: any) {
    return this.eventsService.addParticipant(+id, req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id/signup')
  async signOut(@Param('id') id: string, @Req() req: any) {
    return this.eventsService.removeParticipant(+id, req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/assign/:targetId')
  async assign(@Param('id') id: string, @Param('targetId') targetId: string, @Req() req: any) {
    this.checkAdmin(req.user.rank);
    return this.eventsService.addParticipant(+id, +targetId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id/assign/:targetId')
  async unassign(@Param('id') id: string, @Param('targetId') targetId: string, @Req() req: any) {
    this.checkAdmin(req.user.rank);
    return this.eventsService.removeParticipant(+id, +targetId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('users')
  async getUsers() {
    return this.eventsService.getAllUsers();
  }

  private checkAdmin(rank: string) {
    const adminRanks = ["CS_IN_CHARGE", "COMMANDING_OFFICER", "ASSISTANT_COMMANDING_OFFICER"];
    if (!adminRanks.includes(rank)) throw new ForbiddenException("EM Requis.");
  }
}