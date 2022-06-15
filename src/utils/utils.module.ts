import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CatalogClient } from './catalog/catalogClient';
import { ItemAvailabilityClient } from './itemavailability/itemavailabilityClient';

@Module({
  exports: [CatalogClient, ItemAvailabilityClient, ConfigService, HttpModule],
  imports: [HttpModule], // importing Httpmodule and configservice worked but i dont know why
  providers: [CatalogClient, ItemAvailabilityClient, ConfigService],
})
export class UtilsModule {}
