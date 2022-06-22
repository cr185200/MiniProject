export interface LongDescription {
  values: DescriptionValues[];
}

export interface ShortDescription {
  values: DescriptionValues[];
}

export interface DescriptionValues {
  locale: string;
  value: string;
}
export interface PackageIdentifierDetails {
  value: string;
  type: string;
}
export interface NodeIdData {
  nodeId: string;
}

export interface ExternalIdentifier {
  
  type: 'NASC_CODE' | 'TENDER_ID';
  value: string;
}

export interface SourceSystemData {
  createdBy: 'ERP' | 'STORE';
  modifiedBy: 'ERP' | 'STORE';
}

export interface DynamicAttributes {
  type: string;
  attributes: Attributes[];
}

export interface Attributes {
  key: string;
  value: string;
  localizedValue: LocalizedValue;
}

export interface LocalizedValue {
  values: DescriptionValues[];
}
