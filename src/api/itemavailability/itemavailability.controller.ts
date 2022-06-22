import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ItemAvailabilityService } from 'src/domain/itemAvailability/itemAvailability.service';

@Controller('itemAvailability')
export class ItemAvailabilityController {
  constructor(private itemAvailabilityService: ItemAvailabilityService) {}
  @Put('/set/:id')
  async setItemAvailability(@Param('id') id: string) {
    return await this.itemAvailabilityService.setItemAvailability(id);
  }

  @Get('/getAll')
  async getAllItemAvailability() {
    return await this.itemAvailabilityService.getAllItemAvailability();
  }

  @Get('/get/:id')
  async getItemAvailability(@Param('id') id: string) {
    return await this.itemAvailabilityService.getItemAvailability(id);
  }
}
