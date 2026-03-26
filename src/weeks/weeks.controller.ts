import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { WeeksService } from './weeks.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('weeks')
export class WeeksController {
  constructor(private readonly weeksService: WeeksService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() dto: { title: string }, @Req() req: any) {
    this.checkAdmin(req.user.rank);
    return this.weeksService.create(dto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return this.weeksService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.weeksService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: any) {
    this.checkAdmin(req.user.rank);
    return this.weeksService.remove(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/publish')
  async publish(@Param('id') id: string, @Req() req: any) {
    this.checkAdmin(req.user.rank);
    await this.weeksService.triggerDiscordUpdate(+id, true);
    return { message: 'Publié sur Discord' };
  }

  private checkAdmin(rank: string) {
    const em = ['CS_IN_CHARGE', 'COMMANDING_OFFICER', 'ASSISTANT_COMMANDING_OFFICER'];
    if (!em.includes(rank)) throw new ForbiddenException('EM Requis.');
  }
}