export interface StoreItemInterface {
    name: string;
    description: string;
    price: number;
    id: number;
    imagesPath?: string[];
    dimensions?: ItemDimensionsI;
}

export interface ItemDimensionsI {
  height: number;
  width: number;
}
