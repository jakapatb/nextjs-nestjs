import { Document, Schema } from 'mongoose'
import { Chat } from '../../graphql.schema'
export interface ChatDocument extends Chat, Document {}

export const ChatSchema: Schema = new Schema({
  text: String
})
