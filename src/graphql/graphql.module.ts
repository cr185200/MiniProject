import { Module } from '@nestjs/common';
import { ItemavailabilityGqlModule } from './itemavailability-gql/itemavailability-gql.module';
import { CatalogGqlModule } from './catalog-gql/catalog-gql.module';

@Module({
  imports: [ItemavailabilityGqlModule, CatalogGqlModule],
  exports: [ItemavailabilityGqlModule],
})
export class GraphqlModule {}
