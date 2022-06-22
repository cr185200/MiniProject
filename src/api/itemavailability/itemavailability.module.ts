import { Module } from '@nestjs/common';
import { ItemAvailabilityController } from './itemAvailability.controller';
import { ItemAvailabilityModuleDomain } from 'src/domain/itemAvailability/itemAvailability.module';

@Module({
  controllers: [ItemAvailabilityController],
  imports: [ItemAvailabilityModuleDomain],
})
export class ItemAvailabilityModule {}
