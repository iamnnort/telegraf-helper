import { telegramHelper } from "../src";

import "dotenv/config";

async function run() {
  const botId = telegramHelper.getBotId(process.env.BOT_TOKEN);

  console.log(botId);

  const inlineLink = telegramHelper.makeInlineLink("iamnnort");

  console.log(inlineLink);

  const link = telegramHelper.makeLink("iamnnort");

  console.log(link);

  const telegram = telegramHelper.makeTelegram(process.env.BOT_TOKEN);

  await telegram.send(telegramHelper.messageTypes.TEXT, "iamnnort", {
    text: "Hey, how is it going?",
  });
}

run();
