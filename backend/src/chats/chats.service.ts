import { Injectable } from '@nestjs/common'
import { ChatDocument } from './schemas/chat.schemas'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { CreateChatDto } from './dto/create-chat.dto'
import { Chat } from 'src/graphql.schema'

@Injectable()
export class ChatsService {
  constructor(@InjectModel('Chat') private chatModel: Model<ChatDocument>) {}

  async findAll(channel: string): Promise<ChatDocument[]> {
    const chats = await this.chatModel.find({ channel }).exec()
    return chats
  }

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const createdChat = new this.chatModel(createChatDto)
    const chat = await createdChat.save()
    return chat
  }
}
