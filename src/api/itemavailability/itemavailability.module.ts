import { Module } from '@nestjs/common';
import { ItemavailabilityController } from './itemavailability.controller';

@Module({
  controllers: [ItemavailabilityController]
})
export class ItemavailabilityModule {}
