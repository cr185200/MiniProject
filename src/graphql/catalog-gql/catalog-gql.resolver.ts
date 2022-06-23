// import { Query } from '@nestjs/common';
import { Query, Args, Resolver } from '@nestjs/graphql';
import { CatalogService } from '../../domain/catalog/catalog.service';
import { BslGet, BslGetAll, CatalogItem } from './models/catalog.model';

@Resolver()
export class CatalogGqlResolver {
  constructor(private catalogService: CatalogService) {}

  @Query((returns) => String)
  async createItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return await this.catalogService.createItem(dto);
  }

  @Query((returns) => BslGet)
  async getItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return await this.catalogService.getItem(dto);
  }

  @Query((returns) => String)
  async deleteItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return await this.catalogService.deleteCatalogItem(dto);
  }

  @Query((returns) => String)
  async updateItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return await this.catalogService.updateCatalogItem(dto);
  }

  @Query((returns) => BslGetAll)
  async getAllItems() {
    return await this.catalogService.getAllItems();
  }

  // @Query()
  // async getItem() {}

  // @Query()
  // async deleteItem() {}

  // @Query()
  // async getAllItems() {}
}
