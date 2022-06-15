import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { UtilsModule } from './utils/utils.module';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DomainModule,
    ApiModule,
    UtilsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
