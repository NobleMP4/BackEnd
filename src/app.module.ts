import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { WeeksModule } from './weeks/weeks.module';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    WeeksModule,
    EventsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}