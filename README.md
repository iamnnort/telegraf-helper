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

Makes well formatted messages with header and body sections.

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

Making well formatted messages for given entity.

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

| Parameter            | Description                                     |
| -------------------- | ----------------------------------------------- |
| `title`              | Title of the entity block shown at the top      |
| `comment`            | Comment of the entity block shown at the bottom |
| `fallback`           | Fallback if properties are empty or missing     |
| `properties`         | List of configs for the entity properties       |
| `properties[i].name` | Name of the property                            |
| `properties[i].`     | Value of the property                           |

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
