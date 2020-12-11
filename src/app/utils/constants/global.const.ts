export enum SortTypesEnum {
  DOWNLOAD_SPEED = 'downloadSpeed',
  UPLOAD_SPEED = 'uploadSpeed',
  PRICE_UP = 'priceUp',
  PRICE_DOWN = 'priceDown'
}

export enum SortingDirections {
  Up =  'asc',
  Down = 'desc'
}

export type TypeSortDirection = SortingDirections.Down | SortingDirections.Up;

export const BENEFITS_CAPTIONS_AMOUNT = 3;
