export interface StoreItemInterface {
  name: string;
  description: string;
  imagesPath: string[];
  dimensions?: ItemDimensionsI;
  id?: number;
  framed?: boolean;
  price?: number;
  pricePrint?: number;
  year?: number;
  soldOutPrintAvailable?: boolean;
  soldOutPrintUnavailable?: boolean;
}

export interface ItemDimensionsI {
  height: number;
  width: number;
}
