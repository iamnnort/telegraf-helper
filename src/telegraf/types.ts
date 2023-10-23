import { ApiError, ApiSuccess } from "typegram";

export type TelegramApiError = ApiError;
export type TelegramApiSuccess<T> = ApiSuccess<T>;

export type TelegramButton = {
  type: TelegramButtonTypes;
  label: string;
  link?: string;
  payload?: string;
  hide?: boolean;
};

export enum TelegramErrors {
  FORBIDDEN_USER_DEACTIVATED = "Forbidden: user is deactivated",
  FORBIDDEN_BOT_BLOCKED = "Forbidden: bot was blocked by the user",
  BAD_REQUEST_REMOVE_OWNER = "Bad Request: can't remove chat owner",
  BAD_REQUEST_CHAT_NOT_FOUND = "Bad Request: chat not found",
}

export enum TelegramMessageTypes {
  TEXT = "text",
  PHOTO = "photo",
  VIDEO = "video",
  AUDIO = "audio",
  DOCUMENT = "document",
  VOICE = "voice",
  STICKER = "sticker",
}

export enum TelegramButtonTypes {
  LINK = "link",
  CALLBACK = "callback",
}
