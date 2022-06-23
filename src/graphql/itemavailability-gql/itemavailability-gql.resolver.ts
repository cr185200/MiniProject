import { Query, Args, Resolver } from '@nestjs/graphql';
import { ItemAvailabilityService } from '../../domain/itemAvailability/itemAvailability.service';
import { All, Availability } from './models/item.model';

@Resolver()
export class ItemavailabilityGqlResolver {
  constructor(private itemAvailabilityService: ItemAvailabilityService) {}

  @Query(() => Availability)
  async getItemAvailability(@Args('id', { type: () => String }) id: string) {
    return await this.itemAvailabilityService.getItemAvailability(id);
  }

  @Query(() => All)
  async getAllItemAvailability() {
    return await this.itemAvailabilityService.getAllItemAvailability();
  }

  @Query(() => String)
  async setItemAvailability(@Args('id', { type: () => String }) id: string) {
    return this.itemAvailabilityService.setItemAvailability(id);
  }
}
