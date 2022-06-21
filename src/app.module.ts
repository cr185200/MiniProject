import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { UtilsModule } from './utils/utils.module';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from './domain/domain.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), //
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    DomainModule,
    ApiModule,
    UtilsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
