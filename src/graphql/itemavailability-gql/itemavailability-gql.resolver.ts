import { HttpCode, HttpStatus } from '@nestjs/common';
import { Query, Args, Resolver } from '@nestjs/graphql';
import { ItemAvailabilityService } from '../../domain/itemAvailability/itemAvailability.service';
import { AllReturn, Availability } from './models/item.model';

@Resolver()
export class ItemavailabilityGqlResolver {
  constructor(private itemAvailabilityService: ItemAvailabilityService) {}

  @Query((returns) => Availability)
  async getItemAvailability(@Args('id', { type: () => String }) id: string) {
    return await this.itemAvailabilityService.getItemAvailability(id);
  }

  @Query((returns) => AllReturn)
  async getAllItemAvailability() {
    return this.itemAvailabilityService.getAllItemAvailability();
  }

  @Query((returns) => String)
  async setItemAvailability(@Args('id', { type: () => String }) id: string) {
    return await this.itemAvailabilityService.setItemAvailability(id);
  }
}
