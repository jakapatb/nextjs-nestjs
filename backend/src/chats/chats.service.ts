import { Injectable } from '@nestjs/common'
import { Chat } from '../graphql.schema'

@Injectable()
export class ChatsService {
  private readonly chats: Chat[] = [{ id: 1, text: 'Chat' }]

  create(chat: Chat): Chat {
    chat.id = this.chats.length + 1
    this.chats.push(chat)
    return chat
  }

  findAll(): Chat[] {
    return this.chats
  }

  findOneById(id: number): Chat {
    return this.chats.find((chat) => chat.id === id)
  }
}
