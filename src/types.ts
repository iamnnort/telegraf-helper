import { ApiError, ApiSuccess } from "typegram";

export type TelegramApiError = ApiError;
export type TelegramApiSuccess<T> = ApiSuccess<T>;
