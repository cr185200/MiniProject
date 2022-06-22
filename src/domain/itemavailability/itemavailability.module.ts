import { Module } from '@nestjs/common';
import { BslItemAvailabilityRepository } from 'src/data/repositories/bslItemAvailabilityRepository';
import { ItemAvailabilityService } from './itemAvailability.service';

@Module({
  providers: [ItemAvailabilityService],
  imports: [BslItemAvailabilityRepository],
  exports: [ItemAvailabilityService],
})
export class ItemAvailabilityModuleDomain {}
