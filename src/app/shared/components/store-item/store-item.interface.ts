export interface StoreItemInterface {
  name: string;
  description: string;
  id: number;
  imagesPath: string[];
  price?: number;
  dimensions?: ItemDimensionsI;
  framed?: boolean;
}

export interface ItemDimensionsI {
  height: number;
  width: number;
}
