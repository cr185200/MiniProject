import { HttpServer, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { response } from 'express';
import { Base64 } from 'js-base64';
import { map, Observable } from 'rxjs';
import { ItemAvailabilityDto } from 'src/api/itemavailability/models/Requests/SetItemAvailability.dto';

@Injectable()
export class ItemAvailabilityClient {
  constructor(private httpService: HttpServer, private config: ConfigService) {}

  async setItemAvailability(
    id: string,
    itemCode: string,
    ItemAvailabilityDto: ItemAvailabilityDto,
  ) {}
} // Itemavailability client
