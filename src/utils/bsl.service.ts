import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const hmac = require('./hmac');

@Injectable()
export class BslService {
  constructor(private config: ConfigService) {}

  getHeaders(httpMethod: string, requestURL: string) {
    const date = new Date();
    const options = {
      secretKey: this.config.get('secretKey'),
      date: date,
      sharedKey: this.config.get('sharedKey'),
      nepOrganization: this.config.get('nepOrganization'),
      contentType: 'application/json',
      httpMethod: httpMethod,
      requestURL: requestURL,
    };
    const requestsHeaders = {
      'Content-Type': options.contentType,
      Authorization: `AccessKey ${hmac(options)}`,
      'nep-organization': options.nepOrganization,
      Date: options.date.toUTCString(),
      'nep-enterprise-unit': this.config.get('EU'),
    };

    return requestsHeaders;
  }
}
