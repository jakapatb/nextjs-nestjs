import { ParseIntPipe, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { Chat } from '../graphql.schema'
import { ChatsGuard } from './chats.guard'
import { ChatsService } from './chats.service'
import { CreateChatDto } from './dto/create-chat.dto'
import { ChatDocument } from './schemas/chat.schemas'

const pubSub = new PubSub()

@Resolver('Chat')
export class ChatsResolvers {
  constructor(private readonly chatsService: ChatsService) {}

  @Query('chats')
  @UseGuards(ChatsGuard)
  async chats(@Args('channel') args: string): Promise<ChatDocument[]> {
    return this.chatsService.findAll(args)
  }
  @Mutation('createChat')
  async create(@Args('createChatInput') args: CreateChatDto): Promise<Chat> {
    const createdChat = await this.chatsService.create(args)
    const { channel } = args || { channel: 'chatCreated' }
    pubSub.publish(channel, { chatCreated: createdChat })
    return createdChat
  }

  @Subscription('chatCreated')
  chatCreated(@Args('channelChatInput') args) {
    const { channel } = args || { channel: 'chatCreated' }
    return pubSub.asyncIterator(channel)
  }
  /*   @Query('chat')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number
  ): Promise<Chat> {
    return this.chatsService.findOneById(id)
  } */
}
