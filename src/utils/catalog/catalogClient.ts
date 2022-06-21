import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { Base64 } from 'js-base64'; // check if I can delete
import { ConfigService } from '@nestjs/config';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto';
import { HeaderRequest } from '../headerrequest/headerRequest';
import { BslService } from '../bsl.service';

@Injectable()
export class CatalogClient {
  constructor(
    private httpService: HttpService,
    private config: ConfigService,
    private bsl: BslService,
  ) {}

  async createItem(
    itemCode: string,
    CreateCatalogDto: CreateCatalogDto,
  ): Promise<Observable<AxiosResponse<any>>> {
    const url = `https://api.ncr.com/catalog/v2/items/${itemCode}`;
    return await this.httpService
      .put(url, CreateCatalogDto, {
        headers: this.bsl.getHeaders('PUT', url),
      })
      .pipe(map((response) => response.data));
  } // create Items

  async getAllItems(): Promise<Observable<AxiosResponse<any>>> {
    const url = `https://api.ncr.com/catalog/v2/items`;
    return await this.httpService
      .get(url, {
        headers: this.bsl.getHeaders('GET', url),
      })
      .pipe(map((response) => response.data));
  } // Get All Items

  async getItem(itemCode: string): Promise<Observable<AxiosResponse<any>>> {
    const url = `https://api.ncr.com/catalog/v2/items/${itemCode}`;
    return await this.httpService
      .get(url, {
        headers: this.bsl.getHeaders('GET', url),
      })
      .pipe(map((response) => response.data));
  } // Get One Items

  deleteCatalogItem(id: number) {
    return 'test line';
  }
}
