import { Module } from '@nestjs/common';
import { CatalogModuleDomain } from './catalog/catalog.module';
import { ItemAvailabilityModuleDomain } from './itemAvailability/itemAvailability.module';

@Module({
  imports: [CatalogModuleDomain, ItemAvailabilityModuleDomain],
})
export class DomainModule {}
