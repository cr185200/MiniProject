import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { BaseBslRepository } from './baseRepo/baseBslRepository';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class BslItemAvailabilityRepository {
  constructor(
    private bsl: BaseBslRepository,
    private config: ConfigService,
  ) {}
  
  async getItemAvailability(id: string): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp('GET', this.config.get('ITEMAVAILURL') + id);
  } // Get One Item

  async getAllItemAvailability(): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp('GET', this.config.get('ITEMAVAILURL'));
  } // Get All Items

  async setItemAvailability(id: string): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp('POST', this.config.get('ITEMAVAILURL') + id, undefined, id);
  } // Update Item Availability
}
