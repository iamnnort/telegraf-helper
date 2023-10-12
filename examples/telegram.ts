import { telegramHelper } from "../src";

import "dotenv/config";

async function run() {
  const botId = telegramHelper.getBotId(process.env.BOT_TOKEN);

  console.log(botId);

  const inlineLink = telegramHelper.makeInlineLink("iamnnort");

  console.log(inlineLink);

  const link = telegramHelper.makeLink("iamnnort");

  console.log(link);

  const request = telegramHelper.makeRequest(process.env.BOT_TOKEN, {
    logger: true,
  });

  const webhookInfo = await request({
    url: "/getWebhookInfo",
  });

  console.log(webhookInfo);
}

run();
