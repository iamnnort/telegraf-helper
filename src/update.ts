import { User, Chat } from "typegram";

function getSender(ctx: any): User {
  return (
    ctx.update.message?.from ||
    ctx.update.edited_message?.from ||
    ctx.update.channel_post?.sender_chat ||
    ctx.update.edited_channel_post?.sender_chat ||
    ctx.update.callback_query?.from ||
    ctx.update.shipping_query?.from ||
    ctx.update.pre_checkout_query?.from ||
    ctx.update.my_chat_member?.from ||
    ctx.update.chat_member?.from ||
    ctx.update.chat_join_request?.from ||
    ctx.update.inline_query?.from
  );
}

function getChat(ctx: any): Chat {
  return (
    ctx.update.message?.chat ||
    ctx.update.edited_message?.chat ||
    ctx.update.channel_post?.chat ||
    ctx.update.edited_channel_post?.chat ||
    ctx.update.callback_query?.message?.chat ||
    ctx.update.my_chat_member?.chat ||
    ctx.update.chat_member?.chat ||
    ctx.update.chat_join_request?.chat
  );
}

function getInviteLinkOwner(ctx: any): User {
  return ctx.update.chat_join_request?.invite_link?.creator;
}

function getInlineQuery(ctx: any) {
  return ctx.update.inline_query?.query || "";
}

function getMessageText(ctx: any): string {
  return ctx.update.message?.text || ctx.update.channel_post?.text;
}

function getOriginChat(ctx: any): Chat {
  return ctx.update.message?.forward_from_chat;
}

export const updateHelper = {
  getSender,
  getChat,
  getInviteLinkOwner,
  getInlineQuery,
  getMessageText,
  getOriginChat,
};
