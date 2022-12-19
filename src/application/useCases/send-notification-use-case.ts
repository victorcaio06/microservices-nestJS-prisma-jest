import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: ISendNotificationRequest
  ): Promise<ISendNotificationResponse> {
    const { content, category, recipientId } = request;
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return { notification };
  }
}
