import { Module } from '@nestjs/common'
import { ChatsResolvers } from './chats.resolvers'
import { ChatsService } from './chats.service'

@Module({
  providers: [ChatsService, ChatsResolvers]
})
export class ChatsModule {}
