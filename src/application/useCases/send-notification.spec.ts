import { SendNotification } from './send-notification-use-case';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
