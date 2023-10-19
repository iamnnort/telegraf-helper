import { Telegram } from "telegraf";
import { config } from "./config";
import { InputFile } from "telegraf/typings/core/types/typegram";
import { FmtString } from "telegraf/typings/format";

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

function makeTelegram(botToken = "") {
  const telegram = new Telegram(botToken);

  function send(
    type: string,
    chatId: number | string,
    dto: {
      media?: string | InputFile;
      text?: string | FmtString;
    }
  ) {
    if (dto.media) {
      if (type === config.telegram.messageTypes.PHOTO) {
        return telegram.sendPhoto(chatId, dto.media, {
          parse_mode: "HTML",
          caption: dto.text,
        });
      }

      if (type === config.telegram.messageTypes.VIDEO) {
        return telegram.sendVideo(chatId, dto.media, {
          parse_mode: "HTML",
          caption: dto.text,
        });
      }

      if (type === config.telegram.messageTypes.AUDIO) {
        return telegram.sendAudio(chatId, dto.media, {
          parse_mode: "HTML",
          caption: dto.text,
        });
      }

      if (type === config.telegram.messageTypes.DOCUMENT) {
        return telegram.sendDocument(chatId, dto.media, {
          parse_mode: "HTML",
          caption: dto.text,
        });
      }

      if (type === config.telegram.messageTypes.VOICE) {
        return telegram.sendVoice(chatId, dto.media, {
          parse_mode: "HTML",
          caption: dto.text,
        });
      }

      if (type === config.telegram.messageTypes.STICKER) {
        return telegram.sendSticker(chatId, dto.media);
      }
    }

    if (dto.text) {
      return telegram.sendMessage(chatId, dto.text, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
      });
    }
  }

  return {
    ...telegram,
    send,
  };
}

export const telegramHelper = {
  ...config.telegram,
  getBotId,
  makeInlineLink,
  makeLink,
  makeTelegram,
};
