export interface StoreItemInterface {
  name: string;
  description: string;
  imagesPath: string[];
  dimensions?: ItemDimensionsI;
  id?: number;
  framed?: boolean;
  year?: number;
  soldOut?: boolean;
  printAvailable?: boolean;
}

export interface ItemDimensionsI {
  height: number;
  width: number;
}
