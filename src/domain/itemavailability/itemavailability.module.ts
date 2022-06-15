import { Module } from '@nestjs/common';
import { ItemAvailabilityClient } from 'src/utils/itemavailability/itemavailabilityClient';
import { UtilsModule } from 'src/utils/utils.module';
import { ItemavailabilityService } from './itemavailability.service';

@Module({
  providers: [ItemavailabilityService],
  imports: [UtilsModule],
  exports: [ItemavailabilityService],
})
export class ItemavailabilityModuleDomain {}
