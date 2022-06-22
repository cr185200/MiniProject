import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ItemAvailabilityService } from 'src/domain/itemAvailability/itemAvailability.service';

@Controller('itemavailability')
export class ItemAvailabilityController {
  constructor(private itemAvailabilityService: ItemAvailabilityService) {}
  @Put('/set/:id')
  setItemAvailability(@Param('id') id: string) {
    return this.itemAvailabilityService.setItemAvailability(id);
  }

  @Get('/getAll')
  getAllItemAvailability() {
    return this.itemAvailabilityService.getAllItemAvailability();
  }

  @Get('/get/:id')
  getItemAvailability(@Param('id') id: string) {
    return this.itemAvailabilityService.getItemAvailability(id);
  }
}
