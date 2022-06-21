import { Controller, Get, Param, Put, Post } from '@nestjs/common';
import { ItemavailabilityService } from 'src/domain/itemavailability/itemavailability.service';
import { ItemAvailabilityDto } from './models/Requests/SetItemAvailability.dto';

@Controller('itemavailability')
export class ItemavailabilityController {
  constructor(private itemAvailabilityService: ItemavailabilityService) {}
  @Put('/setAvailability/:itemCode')
  setItemAvailability(@Param('itemCode') itemCode: string) {
    return this.itemAvailabilityService.setItemAvailability(itemCode);
  }

  @Get('/getAllItemAvailability/') // rename
  getAllItemAvailability() {
    return this.itemAvailabilityService.getAllItemAvailability();
  }

  @Get('/getItemAvailability/:itemCode')
  getItemAvailability(@Param('itemCode') itemCode: string) {
    return this.itemAvailabilityService.getItemAvailability(itemCode);
  }

  @Post('/sendSMS/')
  sendSMS() {
    return this.itemAvailabilityService.sendSMS();
  }
}
