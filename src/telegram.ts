import { Telegram as TelegrafTelegram } from "telegraf";
import { InputFile } from "telegraf/typings/core/types/typegram";
import { FmtString } from "telegraf/typings/format";
import { TelegramMessageTypes } from "./types";

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
  class Telegram extends TelegrafTelegram {
    send(
      type: string,
      chatId: number | string,
      dto: {
        media?: string | InputFile;
        text?: string | FmtString;
      }
    ) {
      if (dto.media) {
        if (type === TelegramMessageTypes.PHOTO) {
          return this.sendPhoto(chatId, dto.media, {
            parse_mode: "HTML",
            caption: dto.text,
          });
        }

        if (type === TelegramMessageTypes.VIDEO) {
          return this.sendVideo(chatId, dto.media, {
            parse_mode: "HTML",
            caption: dto.text,
          });
        }

        if (type === TelegramMessageTypes.AUDIO) {
          return this.sendAudio(chatId, dto.media, {
            parse_mode: "HTML",
            caption: dto.text,
          });
        }

        if (type === TelegramMessageTypes.DOCUMENT) {
          return this.sendDocument(chatId, dto.media, {
            parse_mode: "HTML",
            caption: dto.text,
          });
        }

        if (type === TelegramMessageTypes.VOICE) {
          return this.sendVoice(chatId, dto.media, {
            parse_mode: "HTML",
            caption: dto.text,
          });
        }

        if (type === TelegramMessageTypes.STICKER) {
          return this.sendSticker(chatId, dto.media);
        }
      }

      if (dto.text) {
        return this.sendMessage(chatId, dto.text, {
          parse_mode: "HTML",
          disable_web_page_preview: true,
        });
      }
    }
  }

  return new Telegram(botToken);
}

export const telegramHelper = {
  getBotId,
  makeInlineLink,
  makeLink,
  makeTelegram,
};
