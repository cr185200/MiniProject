import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity()
@InputType()
export class CatalogItem {
    @Field()
    itemCode: string;

    @Field({nullable: true})
    version?: number;

    @Field({nullable: true})
    longDescription?: string;

    @Field({nullable: true})
    shortDescription?: string;

    @Field()
    status:
      | 'INACTIVE'
      | 'ACTIVE'
      | 'DISCONTINUED'
      | 'SEASONAL'
      | 'TO_DISCONTINUE'
      | 'UNAUTHORIZED';
  }

  @Entity()
  @ObjectType()
  export class LongDescription {
    @Field(() => [DescriptionValues])
    values: DescriptionValues[];
  }

  @Entity()
  @ObjectType()
  export class ShortDescription {
    @Field(() => [DescriptionValues])
    values: DescriptionValues[];
  }

  @Entity()
  @ObjectType()
  export class DescriptionValues {
    @Field()
    locale: string;

    @Field()
    value: string;
  }

  @Entity()
  @ObjectType()
  export class PackageIdentifierDetails {
    @Field()
    value: string;

    @Field()
    type: string;
  }

  @Entity()
  @ObjectType()
  export class NodeIdData {
    @Field()
    nodeId: string;
  }

  @Entity()
  @ObjectType()
  export class ExternalIdentifier {
    @Field()
    type: 'NACS_CODE' | 'TENDER_ID';

    @Field()
    value: string;
  }

  @Entity()
  @ObjectType()
  export class SourceSystemData {
    @Field()
    createdBy: 'ERP' | 'STORE';

    @Field()
    modifiedBy: 'ERP' | 'STORE';
  }

  @Entity()
  @ObjectType()
  export class DynamicAttributes {
    @Field()
    type: string;

    @Field(() => [Attributes])
    attributes: Attributes[];
  }

  @Entity()
  @ObjectType()
  export class LocalizedValue {
    @Field(() => [DescriptionValues])
    values: DescriptionValues[];
  }

  @Entity()
  @ObjectType()
  export class ItemCode {
    @Field()
    itemCode: string;
  }

  @Entity()
  @ObjectType()
  export class Attributes {
    @Field()
    key: string;

    @Field()
    value: string;

    @Field()
    localizedValue: LocalizedValue;
  }
  

  @Entity()
  @ObjectType()
  export class bslGet {
    @Field()
    version: number;

    @Field()
    itemId: ItemCode;

    @Field(() => [PackageIdentifierDetails])
    packageIdentifiers: PackageIdentifierDetails[];

    @Field({nullable: true})
    longDescription?: LongDescription;

    @Field()
    shortDescription: ShortDescription;

    @Field()
    merchandiseCategory: NodeIdData;

    @Field(() => [NodeIdData], {nullable: true})
    alternateCategories?: NodeIdData[];

    @Field()
    status:
    | 'INACTIVE'
    | 'ACTIVE'
    | 'DISCONTINUED'
    | 'SEASONAL'
    | 'TO_DISCONTINUE'
    | 'UNAUTHORIZED';

    @Field()
    departmentId: string;

    @Field()
    nonMerchandise: boolean;

    @Field({nullable: true})
    familyCode?: string;

    @Field({nullable: true})
    referenceId?: string;

    @Field()
    manufacturerCode?: string;

    @Field(() => [ExternalIdentifier], {nullable: true})
    externalIdentifiers?: ExternalIdentifier[];

    @Field({nullable: true})
    posNumber?: string;

    @Field({nullable: true})
    sourceSystem?: SourceSystemData;

    @Field(() => [DynamicAttributes], {nullable: true})
    dynamicAttributes?: DynamicAttributes[];
  }

  @Entity()
  @ObjectType()
  export class bslGetAll {
    @Field()
    lastPage: boolean;

    @Field()
    pageNumber: number;

    @Field()
    totalPages: number;

    @Field()
    totalResults: number;
    
    @Field(() => [bslGet])
    pageContent: bslGet[];
  }
