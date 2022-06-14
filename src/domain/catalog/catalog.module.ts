import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Module({
  providers: [CatalogService]
})
export class CatalogModule {}
