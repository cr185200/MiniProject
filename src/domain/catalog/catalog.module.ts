import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogClient } from 'src/utils/catalog/catalogClient';
import { UtilsModule } from 'src/utils/utils.module';
import { DomainModule } from '../domain.module';
import { CatalogResolver } from './catalog.resolver';

@Module({
  providers: [CatalogService, CatalogResolver],
  exports: [CatalogService],
  imports: [UtilsModule],
})
export class CatalogModuleDomain {}
