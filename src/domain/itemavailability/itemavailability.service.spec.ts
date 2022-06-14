import { Test, TestingModule } from '@nestjs/testing';
import { ItemavailabilityService } from './itemavailability.service';

describe('ItemavailabilityService', () => {
  let service: ItemavailabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemavailabilityService],
    }).compile();

    service = module.get<ItemavailabilityService>(ItemavailabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
