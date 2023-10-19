import { TelegramMessageTypes, telegramHelper } from "../src";

import "dotenv/config";

async function run() {
  const botId = telegramHelper.getBotId("<bot token>");

  console.log(botId);

  const inlineLink = telegramHelper.makeInlineLink("iamnnort");

  console.log(inlineLink);

  const link = telegramHelper.makeLink("iamnnort");

  console.log(link);

  const telegram = new telegramHelper.Telegram("<bot token>");

  await telegram.send(TelegramMessageTypes.TEXT, "iamnnort", {
    text: "<text>",
  });
}

run();
