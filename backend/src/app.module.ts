import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ChatsModule } from './chats/chats.module'
@Module({
  imports: [
    ChatsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true
    })
  ]
})
export class AppModule {}
