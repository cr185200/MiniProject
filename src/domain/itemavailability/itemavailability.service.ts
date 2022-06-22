import { Injectable } from '@nestjs/common';
import { BslItemAvailabilityRepository } from 'src/data/repositories/bslItemAvailabilityRepository';

@Injectable()
export class ItemAvailabilityService {
  constructor(
    private itemAvailabilityClient: BslItemAvailabilityRepository,
  ) {}

  async getItemAvailability(id: string) {
    return await this.itemAvailabilityClient.getItemAvailability(id);
  }

  async getAllItemAvailability() {
    return await this.itemAvailabilityClient.getAllItemAvailability();
  }

  async setItemAvailability(id: string) {
    return await this.itemAvailabilityClient.setItemAvailability(id);
  }
}
