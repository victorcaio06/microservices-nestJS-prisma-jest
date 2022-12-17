import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { randomUUID } from 'node:crypto';
import { Notification } from '@prisma/client';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  listAll(): Promise<any> {
    return this.prismaService.notification.findMany();
  }

  @Post('create')
  async create(): Promise<Notification> {
    return await this.prismaService.notification.create({
      data: {
        content: 'You have a new friendship request',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
