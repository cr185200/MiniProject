import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { BslCatalogRepository } from 'src/data/repositories/bslCatalogRepository';

@Module({
  providers: [CatalogService],
  exports: [CatalogService],
  imports: [BslCatalogRepository],
})
export class CatalogModuleDomain {}
