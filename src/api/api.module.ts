import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { ItemavailabilityModule } from './itemavailability/itemavailability.module';

@Module({
  imports: [CatalogModule, ItemavailabilityModule]
})
export class ApiModule {}
