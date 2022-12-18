import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateNotificationDto } from '../infra/createNotificationDto';
import { PrismaService } from './prisma/prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  listAll(): Promise<any> {
    return this.prismaService.notification.findMany();
  }

  @HttpCode(201)
  @Post('create')
  async create(@Body() createNotificationDto: CreateNotificationDto): Promise<void> {
    const { content, category, recipientId } = createNotificationDto;
    await this.prismaService.notification.create({
      data: {
        content,
        category,
        recipientId,
      },
    });
    return;
  }
}
