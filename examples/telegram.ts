import { telegramHelper } from '../src';

async function run() {
  const botId = telegramHelper.getBotId('<bot token>');

  console.log(botId);

  const inlineLink = telegramHelper.makeInlineLink('iamnnort');

  console.log(inlineLink);

  const link = telegramHelper.makeLink('iamnnort');

  console.log(link);
}

run();
