import { Field, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Availability {
  @Field()
  availableForSale: boolean;
}
