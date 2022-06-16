import { Injectable, Param } from '@nestjs/common';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto';
import { CatalogClient } from 'src/utils/catalog/catalogClient';
import { CreateCatalogRequestDto } from './models/CreateCatalogRequest';
@Injectable()
export class CatalogService {
  constructor(private catalogClient: CatalogClient) {}

  createItem(itemCode: string, CreateCatalogRequest: CreateCatalogRequestDto) {
    return this.catalogClient.createItem(itemCode, CreateCatalogRequest);
  }

  getAllItems() {
    return this.catalogClient.getAllItems();
  }

  getItem(itemCode: string) {
    return this.catalogClient.getItem(itemCode);
  }
} // catalog service
