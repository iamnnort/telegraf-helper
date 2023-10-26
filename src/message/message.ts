import { TelegramButtonTypes } from '../telegraf';
import { Markup } from 'telegraf';
import { TelegramButton } from '../telegraf/telegram.types';

function makeMessage(
  params: {
    header?: {
      title: string;
      subtitle?: string;
    }[];
    body?: string[];
  } = {},
) {
  const headerMessage: string[] = [];

  params.header?.forEach((headerRow) => {
    if (headerRow.title) {
      if (headerRow.subtitle) {
        headerMessage.push(`<b>${headerRow.title}</b>: ${headerRow.subtitle}`);
      } else {
        headerMessage.push(`<b>${headerRow.title}</b>`);
      }
    }
  });

  const bodyMessage: string[] = [];

  params.body?.forEach((bodyRow) => {
    if (bodyRow) {
      bodyMessage.push(bodyRow);
    }
  });

  const message = [...headerMessage, ...bodyMessage];

  return message.join('\n\n');
}

function makeEntityMessage(params: {
  title?: string;
  fallback?: string;
  comment?: string;
  properties?: {
    name?: string;
    value: string | number;
    children?: string[];
  }[];
}) {
  const message: string[] = [];

  if (params.title) {
    message.push(`<b>${params.title}:</b>`);
  }

  const propertiesMessage: string[] = [];

  params.properties?.forEach((propertyRow) => {
    const propertyRowMessage: string[] = ['— '];

    if (propertyRow.name) {
      propertyRowMessage.push(`<i>${propertyRow.name}:</i> `);
    }

    if (propertyRow.value !== null && propertyRow.value !== undefined) {
      propertyRowMessage.push(propertyRow.value.toString());
    }

    const propertyRowChildrenMessage: string[] = [];

    propertyRow.children?.forEach((childrenRow) => {
      if (childrenRow) {
        propertyRowMessage.push(`    • ${childrenRow}`);
      }
    });

    propertiesMessage.push(propertyRowMessage.join(''));

    if (propertyRow.children?.length) {
      propertiesMessage.push(propertyRowChildrenMessage.join('\n'));
    }
  });

  if (params.properties?.length) {
    message.push(propertiesMessage.join('\n'));
  } else {
    if (params.fallback) {
      message.push(params.fallback);
    }
  }

  if (params.comment) {
    message.push(params.comment);
  }

  return message.join('\n\n');
}

function makeMessageButton(buttonGroups: TelegramButton[][] = []) {
  return Markup.inlineKeyboard(
    buttonGroups.map((buttonGroup) => {
      return buttonGroup
        .filter((button) => {
          return !button.hide;
        })
        .map((button) => {
          if (button.type === TelegramButtonTypes.LINK) {
            if (!button.link) {
              throw new Error('Link is not provided.');
            }

            return Markup.button.url(button.label, button.link, button.hide);
          }

          if (button.type === TelegramButtonTypes.CALLBACK) {
            if (!button.payload) {
              throw new Error('Payload is not provided.');
            }

            return Markup.button.callback(
              button.label,
              button.payload,
              button.hide,
            );
          }

          throw new Error('Type is not supported.');
        });
    }),
  );
}

function formatMessage(message: string = '') {
  return message
    .replace(/\[b\]([^\]]*)\[b\]/gi, '<b>$1</b>')
    .replace(/\[i\]([^\]]*)\[i\]/gi, '<i>$1</i>')
    .replace(/\[u\]([^\]]*)\[u\]/gi, '<u>$1</u>')
    .replace(/\[t\]([^\]]*)\[t\]/gi, '<s>$1</s>')
    .replace(/\[c\]([^\]]*)\[c\]/gi, '<code>$1</code>')
    .replace(/\[a\]([^\]]*?)=([^\]]*)\[a\]/gi, '<a href="$2">$1</a>')
    .replace(/\[s\]([^\]]*)\[s\]/gi, '<tg-spoiler>$1</tg-spoiler>');
}

export const messageHelper = {
  makeMessage,
  makeEntityMessage,
  makeMessageButton,
  formatMessage,
};
