import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { Base64 } from 'js-base64';
import { ConfigService } from '@nestjs/config';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto';

@Injectable()
export class CatalogClient {
  constructor(
    private httpService: HttpService,
    private config: ConfigService,
  ) {}



  async createItem(itemCode: string, CreateCatalogDto: CreateCatalogDto): Promise<Observable<AxiosResponse<any>>> {
    const date = new Date();
    return await this.httpService
      .put(`https://api.ncr.com/catalog/v2/items/${itemCode}`, CreateCatalogDto, {
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
  } // create Items

  async getAllItems(): Promise<Observable<AxiosResponse<any>>> {
    const date = new Date();
    return await this.httpService
      .get(`https://api.ncr.com/catalog/v2/items`, {
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
  } // Get All Items

  deleteCatalogItem(id: number) {
    return 'test line';
  }
}