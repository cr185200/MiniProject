import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { ItemAvailabilityDto } from 'src/api/itemavailability/models/Requests/SetItemAvailability.dto';
import { ItemAvailabilityClient } from 'src/utils/itemavailability/itemavailabilityClient';

@Injectable()
export class ItemavailabilityService {
  constructor(private itemAvailabilityClient: ItemAvailabilityClient) {}

  setItemAvailability(itemCode: string) {
    return this.itemAvailabilityClient.setItemAvailability(itemCode);
  }

  getAllItemAvailability() {
    return this.itemAvailabilityClient.getAllItemAvailability();
  }

  getItemAvailability(id: string) {
    return this.itemAvailabilityClient.getItemAvailability(id);
  }

  sendSMS() {
    return this.itemAvailabilityClient.sendSMS();
  }
}
