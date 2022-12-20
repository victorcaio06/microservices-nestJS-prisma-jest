import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateNotificationDto } from '../dtos/createNotificationDto';

@Controller('notifications')
export class NotificationsController {
  @HttpCode(201)
  @Post('create')
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    const { content, category, recipientId } = createNotificationDto;
  }
}
