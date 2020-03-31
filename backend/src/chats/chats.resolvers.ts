import { ParseIntPipe, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { Chat } from '../graphql.schema'
import { ChatsGuard } from './chats.guard'
import { ChatsService } from './chats.service'
import { CreateChatDto } from './dto/create-chat.dto'

const pubSub = new PubSub()

@Resolver('Chat')
export class ChatsResolvers {
  constructor(private readonly chatsService: ChatsService) {}

  @Query()
  @UseGuards(ChatsGuard)
  async getChats() {
    return this.chatsService.findAll()
  }

  @Query('chat')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number
  ): Promise<Chat> {
    return this.chatsService.findOneById(id)
  }

  @Mutation('createChat')
  async create(@Args('createChatInput') args: CreateChatDto): Promise<Chat> {
    const createdChat = await this.chatsService.create(args)
    const { channel } = args || { channel: 'chatCreated' }
    console.log(`push to channel: ${channel}`)
    pubSub.publish(channel, { chatCreated: createdChat })
    return createdChat
  }

  @Subscription('chatCreated')
  chatCreated(@Args('channelChatInput') args) {
    const { channel } = args || { channel: 'chatCreated' }
    console.log(`Subscription: ${channel}`)
    return pubSub.asyncIterator(channel)
  }
}
