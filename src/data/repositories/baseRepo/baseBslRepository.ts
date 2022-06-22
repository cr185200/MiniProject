import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { map, Observable, switchMap } from 'rxjs';
import { BslCatalogItem } from '../../entities/bslCatalogItem';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const hmac = require('../../../utils/hmac');

@Injectable()
export class BaseBslRepository {
  constructor(
    private config: ConfigService,
    private httpService: HttpService,
  ) {}

  getHeaders(httpMethod: string, requestURL: string) {
    const date = new Date();

    const options = {
      secretKey: this.config.get('SECRETKEY'),
      date: date,
      sharedKey: this.config.get('SHAREDKEY'),
      nepOrganization: this.config.get('nepOrganization'),
      contentType: 'application/json',
      httpMethod: httpMethod,
      requestURL: requestURL,
    };

    const requestHeaders = {
      'Content-Type': options.contentType,
      Authorization: `AccessKey ${hmac(options)}`,
      'nep-organization': options.nepOrganization,
      Date: options.date.toUTCString(),
      'nep-enterprise-unit': this.config.get('EU'),
    };

    return requestHeaders;
  }

  async bslHttp(
    httpMethod: string,
    requestURL: string,
    dto?: BslCatalogItem,
    id?: string,
  ): Promise<Observable<AxiosResponse<any>>> {
    if (httpMethod == 'PUT') {
      return await this.httpService
        .put(requestURL, dto, {
          headers: this.getHeaders(httpMethod, requestURL),
        })
        .pipe(map((response) => response.data));
    } else if (httpMethod == 'GET') {
      return await this.httpService
        .get(requestURL, {
          headers: this.getHeaders(httpMethod, requestURL),
        })
        .pipe(map((response) => response.data));
    } else if (httpMethod == 'POST') {
      return await this.httpService
        .post(
          `https://us-central1-true-upgrade-353616.cloudfunctions.net/send-email?id=${id}&avail=${'unavailable'}`,
        )
        .pipe(
          switchMap(() =>
            this.httpService.put(
              requestURL,
              { availableForSale: false },
              {
                headers: this.getHeaders('PUT', requestURL),
              },
            ),
          ),
          map((response) => response.data),
        );
    } else {
      return;
    }
  }
}
