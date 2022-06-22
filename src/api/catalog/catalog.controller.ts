import { Controller, Post, Get, Delete, Body } from '@nestjs/common';
import { CatalogItemDto } from 'src/api/catalog/models/CatalogItemDto';
import { CatalogService } from 'src/domain/catalog/catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Post('/create')
  async createItem(@Body() dto: CatalogItemDto) {
    return await this.catalogService.createItem(dto);
  }

  @Delete('/delete')
  async deleteCatalogItem(@Body() dto: CatalogItemDto) {
      return await this.catalogService.deleteCatalogItem(dto);
  }

  @Get('/getAll')
  async getAllItems() {
    return await this.catalogService.getAllItems();
  }

  @Get('/get')
  async getItem(@Body() dto: CatalogItemDto) {
    return await this.catalogService.getItem(dto);
  }
} // Catalog Controller
