import { SendNotification } from '@application/useCases/send-notification-use-case';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationDto } from '../dtos/createNotificationDto';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post('create')
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    const { content, category, recipientId } = createNotificationDto;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    return { notification: NotificationViewModel.toHttp(notification) };
  }
}
