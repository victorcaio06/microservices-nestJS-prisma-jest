import { Notification } from '@application/entities/notification';

export class NotificationViewModel {
  static toHttp(notification: Notification) {
    return {
      notification: {
        id: notification.id,
        content: notification.content,
        category: notification.category,
        recipientId: notification.recipientId,
      },
    };
  }
}
