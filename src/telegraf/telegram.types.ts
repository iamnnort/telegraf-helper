import { InputFile } from 'telegraf/typings/core/types/typegram';
import { TelegramButtonTypes } from './types';

export type PickSmart<T, RK extends keyof T, OK extends keyof T> = Pick<T, RK> &
  Pick<Partial<T>, OK>;

export type TelegramConfig = {
  protectContent?: boolean;
};

export type TelegramButton = {
  type: TelegramButtonTypes;
  label: string;
  link?: string;
  payload?: string;
  hide?: boolean;
};

export type TelegramMessageDto = {
  text: string;
  media: string | InputFile;
  protectContent: boolean;
  buttons: TelegramButton[][];
};
