export class CatalogItem {
  itemCode: string;
  version?: number;
  longDescription?: string;
  shortDescription?: string;
  status:
    | 'INACTIVE'
    | 'ACTIVE'
    | 'DISCONTINUED'
    | 'SEASONAL'
    | 'TO_DISCONTINUE'
    | 'UNAUTHORIZED';
}
