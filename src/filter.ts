import { Update } from "typegram";

function inlineQuery() {
  return (update: Update): update is Update.InlineQueryUpdate => {
    return "inline_query" in update;
  };
}

export const filterHelper = {
  inlineQuery,
};
