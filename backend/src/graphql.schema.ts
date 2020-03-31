/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class CreateChatInput {
  text?: string
}

export abstract class Chat {
  id?: number
  text?: string
}

export abstract class IMutation {
  abstract createChat(createChatInput?: CreateChatInput): Chat | Promise<Chat>
}

export abstract class IQuery {
  abstract getChats(): Chat[] | Promise<Chat[]>

  abstract chat(id: string): Chat | Promise<Chat>

  abstract temp__(): boolean | Promise<boolean>
}

export abstract class ISubscription {
  abstract chatCreated(): Chat | Promise<Chat>
}
