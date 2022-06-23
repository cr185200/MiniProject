import { HttpStatus } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Availability {
  @Field()
  availableForSale: boolean;
}

@Entity()
@ObjectType()
export class PageContent {
  @Field({ nullable: true })
  itemCode: string;

  @Field({ nullable: true })
  enterpriseUnitId: string;
}

@Entity()
@ObjectType()
export class AllReturn {
  @Field()
  lastPage: boolean;

  @Field()
  pageNumber: number;

  @Field()
  totalPages: number;

  @Field()
  totalResults: number;

  @Field(() => [PageContent])
  pageContent: PageContent[];
}
