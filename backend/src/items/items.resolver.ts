import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ItemsService } from './items.service'
import { ItemType } from './dto/create-item.dto'
import { ItemInput } from './input-items.input'

export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query((returns) => [ItemType])
  items(): Promise<ItemType[]> {
    return this.itemsService.findAll()
  }
  @Query(() => String)
  async hello() {
    return 'hello'
  }
}
