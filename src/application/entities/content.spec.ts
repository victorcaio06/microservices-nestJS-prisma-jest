import { Content } from './content';

describe('Notification content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaaa')).toThrow();
  });

  it('it should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
