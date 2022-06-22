import { Module } from '@nestjs/common';
import { DomainModule } from '../../domain/domain.module';
import { ItemAvailabilityModuleDomain } from '../../domain/itemAvailability/itemAvailability.module';
import { ItemavailabilityGqlResolver } from './itemavailability-gql.resolver';

@Module({
  providers: [ItemavailabilityGqlResolver],
  imports: [DomainModule, ItemAvailabilityModuleDomain],
})
export class ItemavailabilityGqlModule {}