import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/data/repositories/repositories.module';
import { ItemAvailabilityService } from './itemAvailability.service';

@Module({
  providers: [ItemAvailabilityService],
  imports: [RepositoriesModule],
  exports: [ItemAvailabilityService],
})
export class ItemAvailabilityModuleDomain {}
