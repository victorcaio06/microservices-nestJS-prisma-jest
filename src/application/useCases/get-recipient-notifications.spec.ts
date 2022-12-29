import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotification(
      notificationsRepository
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id' })
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id' })
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-two' })
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-id' }),
        expect.objectContaining({ recipientId: 'example-recipient-id' }),
      ])
    );
  });
});
