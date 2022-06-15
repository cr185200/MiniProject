import { Controller, Param, Put } from '@nestjs/common';
import { ItemavailabilityService } from 'src/domain/itemavailability/itemavailability.service';
import { ItemAvailabilityDto } from './models/Requests/SetItemAvailability.dto';

@Controller('itemavailability')
export class ItemavailabilityController {
  constructor(private itemAvailabilityService: ItemavailabilityService) {}
  @Put('/setAvailability/:id/:itemCode')
  setItemAvailability(
    @Param('id') id: string,
    @Param('itemCode') itemCode: string,
    ItemAvailabilityDto: ItemAvailabilityDto,
  ) {
    return this.itemAvailabilityService.setItemAvailability(
      id,
      itemCode,
      ItemAvailabilityDto,
    );
  }
}
