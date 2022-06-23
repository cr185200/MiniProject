import { Query, Args, Resolver } from '@nestjs/graphql';
import { CatalogService } from '../../domain/catalog/catalog.service';
import { bslGet, bslGetAll, CatalogItem } from './models/catalog.model';

@Resolver()
export class CatalogGqlResolver {
  constructor(private catalogService: CatalogService) {}

  @Query(() => bslGet)
  async getItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return await this.catalogService.getItem(dto);
  }

  @Query(() => bslGetAll)
  async getAllItems() {
    return await this.catalogService.getAllItems();
  }

  @Query(() => String)
  async createItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return this.catalogService.createItem(dto);
  }

  @Query(() => String)
  async updateItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return this.catalogService.updateItem(dto);
  }

  @Query(() => String)
  async deleteCatalogItem(@Args('dto', { type: () => CatalogItem }) dto: CatalogItem) {
    return this.catalogService.deleteCatalogItem(dto);
  }
}