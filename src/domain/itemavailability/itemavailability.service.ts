import { Injectable } from '@nestjs/common';
import { BslItemAvailabilityRepository } from 'src/data/repositories/bslItemAvailabilityRepository';

@Injectable()
export class ItemAvailabilityService {
  constructor(
    private itemAvailabilityRepository: BslItemAvailabilityRepository,
  ) {}

  async getItemAvailability(id: string) {
    return await this.itemAvailabilityRepository.getItemAvailability(id);
  }

  async getAllItemAvailability() {
    return await this.itemAvailabilityRepository.getAllItemAvailability();
  }

  async setItemAvailability(id: string) {
    return await this.itemAvailabilityRepository.setItemAvailability(id);
  }
}
