import { Module } from '@nestjs/common';
import { CatalogModuleDomain } from 'src/domain/catalog/catalog.module';
import { CatalogController } from './catalog.controller';

@Module({
  controllers: [CatalogController],
  imports: [CatalogModuleDomain],
})
export class CatalogModule {}
