import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BaseBslRepository } from './baseBslRepository';

@Module({
  exports: [BaseBslRepository],
  imports: [HttpModule],
  providers: [BaseBslRepository],
})
export class BslRepositoryModule {}
