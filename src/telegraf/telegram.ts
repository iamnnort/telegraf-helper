import { Telegram as TelegrafTelegram } from "telegraf";
import { InputFile } from "telegraf/typings/core/types/typegram";
import { messageHelper } from "../message";
import { TelegramMessageTypes } from "./types";

export class Telegram extends TelegrafTelegram {
  sendMessage(chatId: number | string, text: string) {
    return super.sendMessage(chatId, messageHelper.formatMessage(text), {
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });
  }

  send(
    type: TelegramMessageTypes,
    chatId: number | string,
    dto: {
      text?: string;
      media?: string | InputFile;
    }
  ) {
    if (dto.media) {
      if (type === TelegramMessageTypes.PHOTO) {
        return this.sendPhoto(chatId, dto.media, {
          parse_mode: "HTML",
          caption: messageHelper.formatMessage(dto.text),
        });
      }

      if (type === TelegramMessageTypes.VIDEO) {
        return this.sendVideo(chatId, dto.media, {
          parse_mode: "HTML",
          caption: messageHelper.formatMessage(dto.text),
        });
      }

      if (type === TelegramMessageTypes.AUDIO) {
        return this.sendAudio(chatId, dto.media, {
          parse_mode: "HTML",
          caption: messageHelper.formatMessage(dto.text),
        });
      }

      if (type === TelegramMessageTypes.DOCUMENT) {
        return this.sendDocument(chatId, dto.media, {
          parse_mode: "HTML",
          caption: messageHelper.formatMessage(dto.text),
        });
      }

      if (type === TelegramMessageTypes.VOICE) {
        return this.sendVoice(chatId, dto.media, {
          parse_mode: "HTML",
          caption: messageHelper.formatMessage(dto.text),
        });
      }

      if (type === TelegramMessageTypes.STICKER) {
        return this.sendSticker(chatId, dto.media);
      }
    }

    if (dto.text) {
      return this.sendMessage(chatId, dto.text);
    }
  }
}
