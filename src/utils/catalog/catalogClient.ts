import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { Base64 } from 'js-base64';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CatalogClient {
  constructor(
    private httpService: HttpService,
    private config: ConfigService,
  ) {}

  async createCatalogItem(itemCode: string): Promise<Observable<AxiosResponse<any>>> {
    const data = JSON.stringify({
      version: 1,
      packageIdentifiers: [
        {
          type: 'Type_3',
          value: 'value_3',
        },
      ],
      longDescription: {
        values: [
          {
            locale: 'en-US',
            value: 'Sample text in American English',
          },
          {
            locale: 'fr-ca',
            value: 'Sample text in French Canadian',
          },
          {
            locale: 'en-br',
            value: 'Sample text in American English',
          },
        ],
      },
      shortDescription: {
        values: [
          {
            locale: 'en-US',
            value: 'Sample text in American English',
          },
          {
            locale: 'fr-ca',
            value: 'Sample text in French Canadian',
          },
          {
            locale: 'en-br',
            value: 'Sample text in American English',
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
      status: 'ACTIVE',
      departmentId: '783497',
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
                  {
                    locale: 'fr-ca',
                    value: 'Sample text in French Canadian',
                  },
                ],
              },
            },
          ],
        },
      ],
    });

    const date = new Date();
    //console.log(this.config.get('USERNAME'));
    return await this.httpService
      .put(`https://api.ncr.com/catalog/v2/items/${itemCode}`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Base64.encode(
            `${this.config.get('USERNAME')}:${this.config.get('PASSWORD')}`,
          )}`,
          'nep-organization': 'test-drive-17dda190000840ec98776',
          Date: date.toUTCString(),
          Accept: 'application/json',
          'Accept-Language': 'en-us',
        },
      })
      .pipe(map((response) => response.data));
      
  }

  updateCatalogItem(id: number) {
    return 'test line';
  }

  deleteCatalogItem(id: number) {
    return 'test line';
  }

  async getCatalogItems(): Promise<Observable<AxiosResponse<any>>> {
    const date = new Date();

    return await this.httpService
      .get('https://api.ncr.com/catalog/v2/items/please3', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Base64.encode(
            `${this.config.get('USERNAME')}:${this.config.get('PASSWORD')}`,
          )}`,
          'nep-organization': 'test-drive-17dda190000840ec98776',
          Date: date.toUTCString(),
          Accept: 'application/json',
          'Accept-Language': 'en-us',
        },
      })
      .pipe(map((response) => response.data));
  }
}