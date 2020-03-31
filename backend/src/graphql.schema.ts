
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class ChannelChatInput {
    channel?: string;
}

export class CreateChatInput {
    channel?: string;
    text?: string;
}

export class Chat {
    id?: number;
    text?: string;
}

export abstract class IMutation {
    abstract createChat(createChatInput?: CreateChatInput): Chat | Promise<Chat>;
}

export abstract class IQuery {
    abstract getChats(): Chat[] | Promise<Chat[]>;

    abstract chat(id: string): Chat | Promise<Chat>;
}

export abstract class ISubscription {
    abstract chatCreated(channelChatInput?: ChannelChatInput): Chat | Promise<Chat>;
}
