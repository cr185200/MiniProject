import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DataModule } from './data/data.module';
import { DomainModule } from './domain/domain.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({ 
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
    }),
    DomainModule,
    ApiModule,
    DataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
