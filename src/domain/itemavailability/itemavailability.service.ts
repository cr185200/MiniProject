import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { ItemAvailabilityDto } from 'src/api/itemavailability/models/Requests/SetItemAvailability.dto';
import { ItemAvailabilityClient } from 'src/utils/itemavailability/itemavailabilityClient';

@Injectable()
export class ItemavailabilityService {
  constructor(private itemAvailabilityClient: ItemAvailabilityClient) {}

  setItemAvailability(
    id: string,
    itemCode: string,
    itemAvailabilityDto: ItemAvailabilityDto,
  ) {
    return this.itemAvailabilityClient.setItemAvailability(
      id,
      itemCode,
      itemAvailabilityDto,
    );
  }
}
