/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface ChannelChatInput {
  channel?: string
}

export interface CreateChatInput {
  channel?: string
  text?: string
}

export interface Chat {
  id?: number
  text?: string
}

export interface IMutation {
  createChat(createChatInput?: CreateChatInput): Chat | Promise<Chat>
}

export interface IQuery {
  getChats(): Chat[] | Promise<Chat[]>
  chat(id: string): Chat | Promise<Chat>
}

export interface ISubscription {
  chatCreated(channelChatInput?: ChannelChatInput): Chat | Promise<Chat>
}
