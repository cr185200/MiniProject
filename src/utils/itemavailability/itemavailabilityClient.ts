import { HttpServer, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ItemAvailabilityDto } from 'src/api/itemavailability/models/Requests/SetItemAvailability.dto';

@Injectable()
export class ItemAvailabilityClient {
  constructor(private config: ConfigService) {}

  async setItemAvailability(
    id: string,
    itemCode: string,
    ItemAvailabilityDto: ItemAvailabilityDto,
  ) {}
} // Itemavailability client
