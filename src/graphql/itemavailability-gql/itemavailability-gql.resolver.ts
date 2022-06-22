import { Query, Args, Resolver } from '@nestjs/graphql';
import { ItemAvailabilityService } from '../../domain/itemAvailability/itemAvailability.service';

@Resolver()
export class ItemavailabilityGqlResolver {
  constructor(private itemAvailabilityService: ItemAvailabilityService) {}

  @Query((returns) => String)
  async getItemAvailability(@Args('id', { type: () => String }) id: string) {
    return this.itemAvailabilityService.getItemAvailability(id);
  }
}
