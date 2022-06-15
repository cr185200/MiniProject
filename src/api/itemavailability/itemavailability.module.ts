import { Module } from '@nestjs/common';
import { ItemavailabilityController } from './itemavailability.controller';
import { ItemavailabilityModuleDomain } from 'src/domain/itemavailability/itemavailability.module';

@Module({
  controllers: [ItemavailabilityController],
  imports: [ItemavailabilityModuleDomain],
})
export class ItemavailabilityModule {}
