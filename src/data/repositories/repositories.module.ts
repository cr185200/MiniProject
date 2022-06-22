import { Module } from '@nestjs/common';
import { BslCatalogRepository } from './bslCatalogRepository';
import { BslItemAvailabilityRepository } from './bslItemAvailabilityRepository';
import { BslRepositoryModule } from './baseRepo/BslRepository.module';

@Module({
  exports: [BslCatalogRepository, BslItemAvailabilityRepository],
  imports: [BslRepositoryModule],
  providers: [BslCatalogRepository, BslItemAvailabilityRepository],
})
export class RepositoriesModule {}

