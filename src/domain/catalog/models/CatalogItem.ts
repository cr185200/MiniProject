import {
  DynamicAttributes,
  ExternalIdentifier,
  LongDescription,
  NodeIdData,
  PackageIdentifierDetails,
  ShortDescription,
  SourceSystemData,
} from 'src/data/entities/types';

export class CatalogItem {
  itemCode: string;
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
