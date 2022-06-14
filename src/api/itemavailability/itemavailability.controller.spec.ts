import { Test, TestingModule } from '@nestjs/testing';
import { ItemavailabilityController } from './itemavailability.controller';

describe('ItemavailabilityController', () => {
  let controller: ItemavailabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemavailabilityController],
    }).compile();

    controller = module.get<ItemavailabilityController>(ItemavailabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
