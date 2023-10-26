import { messageHelper } from './message';

describe('messageHelper', () => {
  describe('makeMessage', () => {
    test('should process default values', () => {
      expect(messageHelper.makeMessage()).toBe('');
    });

    test('should generate a single header', () => {
      expect(
        messageHelper.makeMessage({
          header: [
            {
              title: 'Project',
              subtitle: 'Telegraf Helper',
            },
            {
              title: 'Section',
              subtitle: 'Message Helper',
            },
          ],
        }),
      ).toBe(
        '<b>Project</b>: Telegraf Helper\n\n<b>Section</b>: Message Helper',
      );
    });

    test('should generate a single body', () => {
      expect(
        messageHelper.makeMessage({
          body: ['All the Best!'],
        }),
      ).toBe('All the Best!');
    });

    test('should generate a header with a body', () => {
      expect(
        messageHelper.makeMessage({
          header: [
            {
              title: 'Project',
              subtitle: 'Telegraf Helper',
            },
            {
              title: 'Section',
              subtitle: 'Message Helper',
            },
          ],
          body: ['All the Best!'],
        }),
      ).toBe(
        '<b>Project</b>: Telegraf Helper\n\n<b>Section</b>: Message Helper\n\nAll the Best!',
      );
    });
  });
});
