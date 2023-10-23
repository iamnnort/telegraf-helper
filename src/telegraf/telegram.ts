import { Markup, Telegram as TelegrafTelegram } from "telegraf";
import { InputFile } from "telegraf/typings/core/types/typegram";
import { messageHelper } from "../message";
import { TelegramButton, TelegramMessageTypes } from "./types";

export class Telegram extends TelegrafTelegram {
  sendMessageSmart(
    chatId: number | string,
    dto: {
      text: string;
      buttons?: TelegramButton[][];
    }
  ) {
    return super.sendMessage(chatId, messageHelper.formatMessage(dto.text), {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    });
  }

  sendPhotoSmart(
    chatId: number | string,
    dto: {
      media: string | InputFile;
      text?: string;
      buttons?: TelegramButton[][];
    }
  ) {
    return super.sendPhoto(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: "HTML",
      caption: messageHelper.formatMessage(dto.text),
    });
  }

  sendVideoSmart(
    chatId: number | string,
    dto: {
      media: string | InputFile;
      text?: string;
      buttons?: TelegramButton[][];
    }
  ) {
    return super.sendVideo(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: "HTML",
      caption: messageHelper.formatMessage(dto.text),
    });
  }

  sendAudioSmart(
    chatId: number | string,
    dto: {
      media: string | InputFile;
      text?: string;
      buttons?: TelegramButton[][];
    }
  ) {
    return super.sendAudio(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: "HTML",
      caption: messageHelper.formatMessage(dto.text),
    });
  }

  sendDocumentSmart(
    chatId: number | string,
    dto: {
      media: string | InputFile;
      text?: string;
      buttons?: TelegramButton[][];
    }
  ) {
    return super.sendDocument(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: "HTML",
      caption: messageHelper.formatMessage(dto.text),
    });
  }

  sendVoiceSmart(
    chatId: number | string,
    dto: {
      media: string | InputFile;
      text?: string;
      buttons?: TelegramButton[][];
    }
  ) {
    return super.sendVoice(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: "HTML",
      caption: messageHelper.formatMessage(dto.text),
    });
  }

  sendStickerSmart(
    chatId: number | string,
    dto: {
      media: string | InputFile;
      buttons?: TelegramButton[][];
    }
  ) {
    return super.sendSticker(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
    });
  }

  send(
    type: TelegramMessageTypes,
    chatId: number | string,
    dto: {
      text?: string;
      media?: string | InputFile;
      buttons?: TelegramButton[][];
    }
  ) {
    if (dto.media) {
      if (type === TelegramMessageTypes.PHOTO) {
        return this.sendPhotoSmart(chatId, {
          text: dto.text,
          media: dto.media,
          buttons: dto.buttons,
        });
      }

      if (type === TelegramMessageTypes.VIDEO) {
        return this.sendVideoSmart(chatId, {
          text: dto.text,
          media: dto.media,
          buttons: dto.buttons,
        });
      }

      if (type === TelegramMessageTypes.AUDIO) {
        return this.sendAudioSmart(chatId, {
          text: dto.text,
          media: dto.media,
          buttons: dto.buttons,
        });
      }

      if (type === TelegramMessageTypes.DOCUMENT) {
        return this.sendDocumentSmart(chatId, {
          text: dto.text,
          media: dto.media,
          buttons: dto.buttons,
        });
      }

      if (type === TelegramMessageTypes.VOICE) {
        return this.sendVoiceSmart(chatId, {
          text: dto.text,
          media: dto.media,
          buttons: dto.buttons,
        });
      }

      if (type === TelegramMessageTypes.STICKER) {
        return this.sendStickerSmart(chatId, {
          media: dto.media,
          buttons: dto.buttons,
        });
      }
    }

    if (dto.text) {
      if (type === TelegramMessageTypes.TEXT) {
        return this.sendMessageSmart(chatId, {
          text: dto.text,
          buttons: dto.buttons,
        });
      }
    }

    throw new Error("Types is not supported");
  }
}
