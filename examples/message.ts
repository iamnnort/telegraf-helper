import { messageHelper } from "../src";

function run() {
  const message = messageHelper.makeMessage({
    header: [
      {
        title: "Telegraf Helper",
        subtitle: "Make your code smaller",
      },
    ],
    body: ["Simple", "Customizable", "Convenient"],
  });

  console.log(message);

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

  console.log(entityMessage);

  const formattedMessage = messageHelper.formatMessage("[b]Telegraf Helper[b]");

  console.log(formattedMessage);
}

run();
