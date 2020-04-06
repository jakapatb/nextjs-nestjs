import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { ChatsModule } from './chats/chats.module'
import { ConfigModule } from '@nestjs/config'
import { join } from 'path'
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env'
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'interface'
      }
    }),

    MongooseModule.forRoot(process.env.DB_URL),
    ChatsModule
  ]
})
export class AppModule {}
