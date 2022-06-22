import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { CatalogService } from './catalog.service';

@Module({
  providers: [CatalogService],
  exports: [CatalogService],
  imports: [RepositoriesModule],
})
export class CatalogModuleDomain {}
