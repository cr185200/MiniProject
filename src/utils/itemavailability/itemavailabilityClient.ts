import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable, switchMap } from 'rxjs';
import { BslService } from '../bsl.service';

@Injectable()
export class ItemAvailabilityClient {
  constructor(private httpService: HttpService, private bsl: BslService) {}
  async getItemAvailability(
    id: string,
  ): Promise<Observable<AxiosResponse<any>>> {
    const url = `https://api.ncr.com/ias/v1/item-availability/${id}`;
    return await this.httpService
      .get(url, {
        headers: this.bsl.getHeaders('GET', url),
      })
      .pipe(map((response) => response.data));
  } // Get One Item

  async getAllItemAvailability(): Promise<Observable<AxiosResponse<any>>> {
    const url = `https://api.ncr.com/ias/v1/item-availability?pageNumber=0&pageSize=200`;
    return await this.httpService
      .get(url, {
        headers: this.bsl.getHeaders('GET', url),
      })
      .pipe(map((response) => response.data));
  } // Get All Items

  async setItemAvailability(
    id: string,
  ): Promise<Observable<AxiosResponse<any>>> {
    const url = `https://api.ncr.com/ias/v1/item-availability/${id}`;
    return await this.httpService
      .post(
        `https://us-central1-esoteric-cider-353616.cloudfunctions.net/sendSMS`,
      )
      .pipe(
        switchMap(() =>
          this.httpService.put(
            url,
            { availableForSale: false },
            {
              headers: this.bsl.getHeaders('PUT', url),
            },
          ),
        ),
        map((response) => response.data),
      );
  } // Update Item Availability

  async sendSMS() {
    const url = `https://us-central1-esoteric-cider-353616.cloudfunctions.net/sendSMS`;
    return await this.httpService
      .post(url)
      .pipe(map((response) => response.data));
  }
} // Itemavailability client
