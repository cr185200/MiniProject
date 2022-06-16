import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { Base64 } from 'js-base64'; // check if I can delete
import { ConfigService } from '@nestjs/config';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto';
import { HeaderRequest } from '../headerrequest/headerRequest';

@Injectable()
export class CatalogClient {
  constructor(
    private httpService: HttpService,
    private config: ConfigService,
  ) {}

  async createItem(
    itemCode: string,
    CreateCatalogDto: CreateCatalogDto,
  ): Promise<Observable<AxiosResponse<any>>> {
    const headerRequest = new HeaderRequest(new Date(), this.config);
    return await this.httpService
      .put(
        `https://api.ncr.com/catalog/v2/items/${itemCode}`,
        CreateCatalogDto,
        {
          headers: headerRequest.requestsHeaders,
        },
      )
      .pipe(map((response) => response.data));
  } // create Items

  async getAllItems(): Promise<Observable<AxiosResponse<any>>> {
    const headerRequest = new HeaderRequest(new Date(), this.config);
    return await this.httpService
      .get(`https://api.ncr.com/catalog/v2/items`, {
        headers: headerRequest.requestsHeaders,
      })
      .pipe(map((response) => response.data));
  } // Get All Items

  async getItem(itemCode: string): Promise<Observable<AxiosResponse<any>>> {
    const headerRequest = new HeaderRequest(new Date(), this.config);
    return await this.httpService
      .get(`https://api.ncr.com/catalog/v2/items/${itemCode}`, {
        headers: headerRequest.requestsHeaders,
      })
      .pipe(map((response) => response.data));
  } // Get One Items

  deleteCatalogItem(id: number) {
    return 'test line';
  }
}
