import { Module } from '@nestjs/common';
import { CatalogModuleDomain } from '../../domain/catalog/catalog.module';
import { DomainModule } from '../../domain/domain.module';
import { CatalogGqlResolver } from './catalog-gql.resolver';

@Module({
  providers: [CatalogGqlResolver],
  imports: [DomainModule, CatalogModuleDomain],
})
export class CatalogGqlModule {}
