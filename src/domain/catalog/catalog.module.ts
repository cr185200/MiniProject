import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogClient } from 'src/utils/catalog/catalogClient';
import { UtilsModule } from 'src/utils/utils.module';


@Module({
  providers: [CatalogService],
  exports: [CatalogService],
  imports: [UtilsModule]
})
export class CatalogModuleDomain {}
