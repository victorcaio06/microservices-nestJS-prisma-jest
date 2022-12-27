import { Body, Controller, Post } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { SendNotification } from '@application/useCases/send-notification-use-case';
import { CreateNotificationDto } from '../dtos/createNotificationDto';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post('create')
  async create(
    @Body() createNotificationDto: CreateNotificationDto
  ): Promise<Notification> {
    const { content, category, recipientId } = createNotificationDto;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    return notification;
  }
}
