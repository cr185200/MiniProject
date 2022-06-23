import { Injectable } from '@nestjs/common';
import { CatalogItem } from 'src/domain/catalog/models/CatalogItem';
import { BslCatalogRepository } from 'src/data/repositories/bslCatalogRepository';
import { BslCatalogItem } from 'src/data/entities/bslCatalogItem';

@Injectable()
export class CatalogService {
  constructor(private catalogClient: BslCatalogRepository) {}

  format(bsl: CatalogItem, itemCode: string): BslCatalogItem {
    return {
      version: bsl.version,
      packageIdentifiers: [
        {
          type: `${itemCode}_type`,
          value: `${itemCode}_value`,
        },
      ],
      longDescription: {
        values: [
          {
            locale: 'en-US',
            value: `This item is called ${itemCode}`,
          },
        ],
      },
      shortDescription: {
        values: [
          {
            locale: 'en-US',
            value: `This item is called ${itemCode}`,
          },
        ],
      },
      merchandiseCategory: {
        nodeId: '1-846-188-450',
      },
      alternateCategories: [
        {
          nodeId: '1-846-188-450',
        },
      ],
      status: `${bsl.status}`,
      departmentId: '123456',
      nonMerchandise: null,
      familyCode: '732897',
      referenceId: '832022',
      manufacturerCode: '46743234',
      externalIdentifiers: [
        {
          type: 'NACS_CODE',
          value: '3031',
        },
      ],
      posNumber: 'String',
      dynamicAttributes: [
        {
          type: 'String',
          attributes: [
            {
              key: 'key',
              value: 'value',
              localizedValue: {
                values: [
                  {
                    locale: 'en-US',
                    value: 'sample text',
                  },
                ],
              },
            },
          ],
        },
      ],
    };
  }

  async createItem(dto: CatalogItem) {
    return await this.catalogClient.createItem(
      dto.itemCode,
      this.format(dto, dto.itemCode),
    );
  }

  async deleteCatalogItem(dto: CatalogItem) {
    return await this.catalogClient.deleteItem(
      dto.itemCode,
      this.format(dto, dto.itemCode),
    );
  }

  async updateCatalogItem(dto: CatalogItem) {
    return await this.catalogClient.updateItem(
      dto.itemCode,
      this.format(dto, dto.itemCode),
    );
  }

  async getAllItems() {
    return await this.catalogClient.getAllItems();
  }

  async getItem(dto: CatalogItem) {
    return await this.catalogClient.getItem(dto.itemCode);
  }
} // catalog service
