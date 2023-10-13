import "typegram";

import { BaseRequestConfig, methods, request } from "@iamnnort/request";
import { TelegramApiSuccess } from "./types";

function getBotId(botToken = "") {
  if (!botToken) {
    return NaN;
  }

  return parseInt(botToken.split(":")[0]);
}

function makeInlineLink(username = "") {
  if (!username) {
    return "";
  }

  return `@${username}`;
}

function makeLink(username = "", start = "") {
  if (!username) {
    return "";
  }

  if (start) {
    return `https://t.me/${username}?start=${start}`;
  }

  return `https://t.me/${username}`;
}

function makeRequest<T>(botToken = "", requestConfig: BaseRequestConfig = {}) {
  const req = request({
    ...requestConfig,
    method: methods.POST,
    baseUrl: "https://api.telegram.org",
    url: `bot${botToken}`,
  });

  return req<TelegramApiSuccess<T>>;
}

export const telegramHelper = {
  getBotId,
  makeInlineLink,
  makeLink,
  makeRequest,
};
