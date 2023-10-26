import { Telegram as TelegrafTelegram } from 'telegraf';
import { messageHelper } from '../message/message';
import { TelegramMessageTypes } from './types';
import { PickSmart, TelegramMessageDto } from './telegram.types';

export class Telegram extends TelegrafTelegram {
  sendMessageSmart(
    chatId: number | string,
    dto: PickSmart<TelegramMessageDto, 'text', 'buttons' | 'protect'>,
  ) {
    return super.sendMessage(chatId, messageHelper.formatMessage(dto.text), {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
      protect_content: dto.protect,
    });
  }

  sendPhotoSmart(
    chatId: number | string,
    dto: PickSmart<TelegramMessageDto, 'media', 'text' | 'buttons' | 'protect'>,
  ) {
    return super.sendPhoto(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: 'HTML',
      caption: messageHelper.formatMessage(dto.text),
      protect_content: dto.protect,
    });
  }

  sendVideoSmart(
    chatId: number | string,
    dto: PickSmart<TelegramMessageDto, 'media', 'text' | 'buttons' | 'protect'>,
  ) {
    return super.sendVideo(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: 'HTML',
      caption: messageHelper.formatMessage(dto.text),
      protect_content: dto.protect,
    });
  }

  sendAudioSmart(
    chatId: number | string,
    dto: PickSmart<TelegramMessageDto, 'media', 'text' | 'buttons' | 'protect'>,
  ) {
    return super.sendAudio(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: 'HTML',
      caption: messageHelper.formatMessage(dto.text),
      protect_content: dto.protect,
    });
  }

  sendDocumentSmart(
    chatId: number | string,
    dto: PickSmart<TelegramMessageDto, 'media', 'text' | 'buttons' | 'protect'>,
  ) {
    return super.sendDocument(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: 'HTML',
      caption: messageHelper.formatMessage(dto.text),
      protect_content: dto.protect,
    });
  }

  sendVoiceSmart(
    chatId: number | string,
    dto: PickSmart<TelegramMessageDto, 'media', 'text' | 'buttons' | 'protect'>,
  ) {
    return super.sendVoice(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      parse_mode: 'HTML',
      caption: messageHelper.formatMessage(dto.text),
      protect_content: dto.protect,
    });
  }

  sendStickerSmart(
    chatId: number | string,
    dto: PickSmart<TelegramMessageDto, 'media', 'buttons' | 'protect'>,
  ) {
    return super.sendSticker(chatId, dto.media, {
      ...messageHelper.makeMessageButton(dto.buttons),
      protect_content: dto.protect,
    });
  }

  sendSmart(
    type: TelegramMessageTypes,
    chatId: number | string,
    dto: Partial<TelegramMessageDto>,
  ) {
    if (
      [
        TelegramMessageTypes.PHOTO,
        TelegramMessageTypes.VIDEO,
        TelegramMessageTypes.AUDIO,
        TelegramMessageTypes.DOCUMENT,
        TelegramMessageTypes.VOICE,
        TelegramMessageTypes.STICKER,
        TelegramMessageTypes.POLL,
      ].includes(type)
    ) {
      if (!dto.media) {
        throw new Error('Media is not provided.');
      }

      if (type === TelegramMessageTypes.PHOTO) {
        return this.sendPhotoSmart(chatId, {
          ...dto,
          media: dto.media,
        });
      }

      if (type === TelegramMessageTypes.VIDEO) {
        return this.sendVideoSmart(chatId, {
          ...dto,
          media: dto.media,
        });
      }

      if (type === TelegramMessageTypes.AUDIO) {
        return this.sendAudioSmart(chatId, {
          ...dto,
          media: dto.media,
        });
      }

      if (type === TelegramMessageTypes.DOCUMENT) {
        return this.sendDocumentSmart(chatId, {
          ...dto,
          media: dto.media,
        });
      }

      if (type === TelegramMessageTypes.VOICE) {
        return this.sendVoiceSmart(chatId, {
          ...dto,
          media: dto.media,
        });
      }

      if (type === TelegramMessageTypes.STICKER) {
        return this.sendStickerSmart(chatId, {
          ...dto,
          media: dto.media,
        });
      }
    }

    if (!dto.text) {
      throw new Error('Text is not provided.');
    }

    return this.sendMessageSmart(chatId, {
      ...dto,
      text: dto.text,
    });
  }
}
