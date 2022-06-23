import { Module } from '@nestjs/common';
import { DomainModule } from '../../domain/domain.module';
import { CatalogModuleDomain } from '../../domain/catalog/catalog.module';
import { CatalogGqlResolver } from './catalog-gql.resolver';

@Module({
  providers: [CatalogGqlResolver],
  imports: [DomainModule, CatalogModuleDomain],
})
export class CatalogGqlModule {}