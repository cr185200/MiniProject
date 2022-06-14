import { Module } from '@nestjs/common';
import { ItemavailabilityService } from './itemavailability.service';

@Module({
  providers: [ItemavailabilityService]
})
export class ItemavailabilityModule {}
