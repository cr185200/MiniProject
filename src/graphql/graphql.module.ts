import { Module } from '@nestjs/common';
import { CatalogGqlModule } from './catalog-gql/catalog-gql.module';
import { ItemavailabilityGqlModule } from './itemavailability-gql/itemavailability-gql.module';

@Module({
  imports: [ItemavailabilityGqlModule, CatalogGqlModule],
  exports: [ItemavailabilityGqlModule, CatalogGqlModule],
})
export class GraphqlModule {}