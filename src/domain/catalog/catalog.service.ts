import { Injectable } from '@nestjs/common';
import { CatalogItem } from 'src/domain/catalog/models/CatalogItem';
import { BslCatalogRepository } from 'src/data/repositories/bslCatalogRepository';
import { BslCatalogItem } from 'src/data/entities/bslCatalogItem';

@Injectable()
export class CatalogService {
  constructor(
    private catalogClient: BslCatalogRepository,
  ) {}

  format(dto: CatalogItem): BslCatalogItem {
    return;
  }

  async createItem(dto: CatalogItem) {
    return await this.catalogClient.createItem(dto.itemCode, this.format(dto));
  }

  async deleteCatalogItem(dto: CatalogItem) {
    return this.catalogClient.deleteItem(dto.itemCode, this.format(dto));
  }

  getAllItems() {
    return this.catalogClient.getAllItems();
  }

  getItem(dto: CatalogItem) {
    return this.catalogClient.getItem(dto.itemCode);
  }
} // catalog service
