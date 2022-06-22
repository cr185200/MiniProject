import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BslCatalogRepository } from './repositories/bslCatalogRepository';
import { BslItemAvailabilityRepository } from './repositories/bslItemAvailabilityRepository';
import { BslRepository } from './repositories/baseBslRepository';

@Module({
  exports: [BslCatalogRepository, BslItemAvailabilityRepository, HttpModule],
  imports: [HttpModule],
  providers: [BslCatalogRepository, BslItemAvailabilityRepository, BslRepository],
})
export class DataModule {}
