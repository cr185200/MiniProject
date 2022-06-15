import { Module } from '@nestjs/common';
import { CatalogModuleDomain } from './catalog/catalog.module';
import { ItemavailabilityModule } from './itemavailability/itemavailability.module';

@Module({
  imports: [CatalogModuleDomain, ItemavailabilityModule]
})
export class DomainModule {}
