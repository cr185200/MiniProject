import { Query, Args, Resolver } from '@nestjs/graphql';
// import { Void } from 'graphql-scalars/mocks.d';
import { CatalogService } from '../../domain/catalog/catalog.service';
import { bslGet, bslGetAll, CatalogItem } from './models/catalog.model';

@Resolver()
export class CatalogGqlResolver {
  constructor(private catalogService: CatalogService) {}

  @Query((returns) => bslGet)
  async getItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return await this.catalogService.getItem(dto);
  }

  @Query((returns) => bslGetAll)
  async getAllItems() {
    return await this.catalogService.getAllItems();
  }

  @Query((returns) => String)
  async createItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return this.catalogService.createItem(dto);
  }

  @Query((returns) => String)
  async updateItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return this.catalogService.updateItem(dto);
  }

  @Query((returns) => String)
  async deleteCatalogItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return this.catalogService.deleteCatalogItem(dto);
  }
}