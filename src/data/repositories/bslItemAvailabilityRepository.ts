import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { BslRepository } from './baseBslRepository';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class BslItemAvailabilityRepository {
  constructor(
    private bsl: BslRepository,
    private config: ConfigService,
  ) {}
  
  async getItemAvailability(id: string): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp('GET', this.config.get('CATALOGURL') + id);
  } // Get One Item

  async getAllItemAvailability(): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp('GET', this.config.get('CATALOGURL'));
  } // Get All Items

  async setItemAvailability(id: string): Promise<Observable<AxiosResponse<any>>> {
    return await this.bsl.bslHttp('POST', this.config.get('CATALOGURL') + id);
  } // Update Item Availability
}
