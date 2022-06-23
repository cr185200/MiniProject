import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { BslCatalogItem } from '../entities/bslCatalogItem';
import { BaseBslRepository } from './baseRepo/baseBslRepository';

@Injectable()
export class BslCatalogRepository {
  constructor(private bsl: BaseBslRepository, private config: ConfigService) {}

  async createItem(
    itemCode: string,
    bsl: BslCatalogItem,
  ): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp(
      'PUT',
      this.config.get('CATALOGURL') + itemCode,
      bsl,
    );
  } // create Items

  async getAllItems(): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp('GET', this.config.get('CATALOGURL'));
  } // Get All Items

  async getItem(itemCode: string): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp(
      'GET',
      this.config.get('CATALOGURL') + itemCode,
    );
  } // Get One Items

  async deleteItem(
    itemCode: string,
    bsl: BslCatalogItem,
  ): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp(
      'PUT',
      this.config.get('CATALOGURL') + itemCode,
      bsl,
    );
  }

  async updateItem(
    itemCode: string,
    bsl: BslCatalogItem,
  ): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp(
      'PUT',
      this.config.get('CATALOGURL') + itemCode,
      bsl,
    );
  } /// Set Status Inactive
}
