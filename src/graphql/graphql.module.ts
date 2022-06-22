import { Module } from '@nestjs/common';
import { ItemavailabilityGqlModule } from './itemavailability-gql/itemavailability-gql.module';

@Module({
  imports: [ItemavailabilityGqlModule],
  exports: [ItemavailabilityGqlModule],
})
export class GraphqlModule {}