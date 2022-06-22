import { IsNumber, IsNotEmpty, IsNumberString } from 'class-validator';
import {
  DynamicAttributes,
  ExternalIdentifier,
  LongDescription,
  NodeIdData,
  PackageIdentifierDetails,
  ShortDescription,
  SourceSystemData,
} from 'src/api/types';

export class CreateCatalogDto {
  @IsNumber()
  version: number;
  packageIdentifiers: PackageIdentifierDetails[];
  longDescription?: LongDescription;
  shortDescription: ShortDescription;
  merchandiseCategory: NodeIdData;
  alternateCategories?: NodeIdData[];
  status:
    | 'INACTIVE'
    | 'ACTIVE'
    | 'DISCONTINUED'
    | 'SEASONAL'
    | 'TO_DISCONTINUE'
    | 'UNAUTHORIZED';
  departmentId: string;
  nonMerchandise: boolean;
  familyCode?: string;
  referenceId?: string;
  manufacturerCode?: string;
  externalIdentifiers?: ExternalIdentifier[];
  posNumber?: string;
  sourceSystem?: SourceSystemData;
  dynamicAttributes?: DynamicAttributes[];
}
