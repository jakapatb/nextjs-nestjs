import { Module } from '@nestjs/common'
import { ChatsResolvers } from './chats.resolvers'
import { ChatsService } from './chats.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ChatSchema } from './schemas/chat.schemas'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }])],
  providers: [ChatsService, ChatsResolvers]
})
export class ChatsModule {}
