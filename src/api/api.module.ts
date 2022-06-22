import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { ItemAvailabilityModule } from './itemAvailability/itemAvailability.module';

@Module({
  imports: [CatalogModule, ItemAvailabilityModule],
})
export class ApiModule {}
