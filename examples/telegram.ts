import { Telegram, TelegramMessageTypes, telegramHelper } from "../src";

import "dotenv/config";

async function run() {
  const botId = telegramHelper.getBotId("<bot token>");

  console.log(botId);

  const inlineLink = telegramHelper.makeInlineLink("iamnnort");

  console.log(inlineLink);

  const link = telegramHelper.makeLink("iamnnort");

  console.log(link);

  const telegram = new Telegram("<bot token>");

  await telegram.sendSmart(TelegramMessageTypes.PHOTO, "iamnnort", {
    text: "<text>",
    media: "<photo ID or URL>",
  });
}

run();
