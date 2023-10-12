## Info

Helpers for Telegraf.js framework - Simple - Customizable - Convenient

## Installation

NPM

```bash
npm install @iamnnort/telegraf-helper
```

Yarn

```bash
yarn add @iamnnort/telegraf-helper
```

## Usage

### messageHelper.makeMessage

Make well formatted messages with header and body sections.

#### Example

```javascript
import { messageHelper } from "@iamnnort/telegraf-helper";

const message = messageHelper.makeMessage({
  header: [
    {
      title: "Telegraf Helper",
      subtitle: "Make your code smaller",
    },
  ],
  body: ["Simple", "Customizable", "Convenient"],
});
```

#### Log

```
<b>Telegraf Helper</b>: Make your code smaller

Simple
Customizable
Convenient
```

#### Parameters

| Parameter            | Description                            |
| -------------------- | -------------------------------------- |
| `header`             | List of configs for the header section |
| `header[i].title`    | Title of the header                    |
| `header[i].subtitle` | Additional title of the header         |
| `body`               | List of strings of the body section    |

### messageHelper.makeEntityMessage

Make well formatted messages for a given entity.

#### Example

```javascript
import { messageHelper } from "@iamnnort/telegraf-helper";

const entityMessage = messageHelper.makeEntityMessage({
  title: "Telegraf Helper",
  comment: "All the Best",
  fallback: "Oops",
  properties: [
    {
      name: "Complexity",
      value: "Simple",
    },
    {
      name: "Flexibility",
      value: "Customizable",
    },
    {
      name: "Usability",
      value: "Convenient",
    },
  ],
});
```

#### Log

```
<b>Telegraf Helper:</b>

— <i>Complexity:</i> Simple
— <i>Flexibility:</i> Customizable
— <i>Usability:</i> Convenient

All the Best
```

#### Parameters

| Parameter             | Description                                     |
| --------------------- | ----------------------------------------------- |
| `title`               | Title of the entity block shown at the top      |
| `comment`             | Comment of the entity block shown at the bottom |
| `fallback`            | Fallback if properties are empty or missing     |
| `properties`          | List of configs for the entity properties       |
| `properties[i].name`  | Name of the property                            |
| `properties[i].value` | Value of the property                           |

### telegramHelper.getBotId

Retrieve the identifier for a given token.

#### Example

```javascript
import { telegramHelper } from "@iamnnort/telegraf-helper";

const botId = telegramHelper.getBotId(process.env.BOT_TOKEN);

// 6607146717
```

### telegramHelper.makeInlineLink

Make the inline link for a given username.

#### Example

```javascript
import { telegramHelper } from "@iamnnort/telegraf-helper";

const inlineLink = telegramHelper.makeInlineLink("iamnnort");

// @iamnnort
```

### telegramHelper.makeLink

Make the external link for a given username.

#### Example

```javascript
import { telegramHelper } from "@iamnnort/telegraf-helper";

const link = telegramHelper.makeLink("iamnnort");

// https://t.me/iamnnort
```

### telegramHelper.makeRequest

Make the request manager for a given bot. To get more information about the request parameters visit [@iamnnort/request](https://github.com/iamnnort/request) package documentation.

#### Example

```javascript
const request = telegramHelper.makeRequest(process.env.BOT_TOKEN, {
  logger: true,
});

const webhookInfo = await request({
  url: "/getWebhookInfo",
});
```

#### Log

```
[Request] http://api.telegram.org/bot6607146717:AAHZ*****98k/getWebhookInfo
[Response] GET http://api.telegram.org/bot6607146717:AAHZ*****98k/getWebhookInfo 200 OK {"ok":true,"result":{"url":"","has_custom_certificate":false,"pending_update_count":0}}
```

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
