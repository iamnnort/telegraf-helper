import { Telegram, TelegramMessageTypes } from '../src';

async function run() {
  const telegram = new Telegram('<bot token>');

  await telegram.sendSmart(TelegramMessageTypes.PHOTO, 'iamnnort', {
    text: '<text>',
    media: '<photo ID or URL>',
  });
}

run();
