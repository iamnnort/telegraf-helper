function getBotId(botToken = "") {
  if (!botToken) {
    return NaN;
  }

  return parseInt(botToken.split(":")[0]);
}

function getInlineLink(username = "") {
  if (!username) {
    return "";
  }

  return `@${username}`;
}

function getLink(username = "", start = "") {
  if (!username) {
    return "";
  }

  if (start) {
    return `https://t.me/${username}?start=${start}`;
  }

  return `https://t.me/${username}`;
}

export const telegramHelper = {
  getBotId,
  getInlineLink,
  getLink,
};
