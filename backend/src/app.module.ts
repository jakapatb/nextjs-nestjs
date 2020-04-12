import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { join } from 'path'
import { BookModule } from './book/book.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env'
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: true
    }),

    /*   MongooseModule.forRoot(process.env.DB_URL), */

    BookModule
  ]
})
export class AppModule {}
