import { Module } from '@nestjs/common';
import { CatalogModuleDomain } from './catalog/catalog.module';
import { ItemavailabilityModuleDomain } from './itemavailability/itemavailability.module';

@Module({
  imports: [CatalogModuleDomain, ItemavailabilityModuleDomain],
})
export class DomainModule {}
