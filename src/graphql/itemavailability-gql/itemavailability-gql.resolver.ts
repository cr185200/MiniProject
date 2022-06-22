import { Query, Args, Resolver } from '@nestjs/graphql';
// import { Void } from 'graphql-scalars/mocks.d';
import { ItemAvailabilityService } from '../../domain/itemAvailability/itemAvailability.service';
import { Availability } from './models/item.model';

@Resolver()
export class ItemavailabilityGqlResolver {
  constructor(private itemAvailabilityService: ItemAvailabilityService) {}

  @Query((returns) => Availability)
  async getItemAvailability(@Args('id', { type: () => String }) id: string) {
    return await this.itemAvailabilityService.getItemAvailability(id);
  }

  @Query((returns) => String)
  async setItemAvailability(@Args('id', { type: () => String }) id: string) {
    return this.itemAvailabilityService.setItemAvailability(id);
  }
}
