import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';
// import { GraphQLModule } from '@nestjs/graphql';
// import { join } from 'path';
// import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // GraphQLModule.forRoot({ 
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
    // }),
    DomainModule,
    ApiModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
