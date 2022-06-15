import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Base64 } from 'js-base64';

@Injectable()
export class HeaderRequest {
  constructor(private date, private config: ConfigService) {
    this.date = date;
  }

  headers = {
    date: this.date,
    nepOrganization: 'test-drive-17dda190000840ec98776',
  };

  requestsHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${Base64.encode(
      `${this.config.get('USERNAME')}:${this.config.get('PASSWORD')}`,
    )}`,
    'nep-organization': this.headers.nepOrganization,
    Date: this.date.toUTCString(),
    Accept: 'application/json',
    'Accept-Language': 'en-us',
  };
}
