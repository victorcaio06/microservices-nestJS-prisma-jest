import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Aqui é o conteúdo da notificação'),
        category: 'Social',
        recipientId: 'example-recipient-id',
      })
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Here is the notification content'),
        category: 'Social',
        recipientId: 'example-recipient-id',
      })
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('Here is the notification content'),
        category: 'Social',
        recipientId: 'example-recipient-id-two',
      })
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id',
    });

    expect(count).toEqual(2);
  });
});
