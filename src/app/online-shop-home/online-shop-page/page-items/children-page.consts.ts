import {StoreItemInterface} from '../../../shared/components/store-item/store-item.interface';

export const childrenPaintings: StoreItemInterface[] = [
    {
        description: 'Little fairy on a big elephant inside a playroom where anything can can happen with the right imagination',
        id: 1,
        price: 100,
        imagesPath: ['children/elephant.jpeg'],
        name: 'Elephant fairy'
    },
    {
        description: 'Any boy’s dream room filled with toys, paintings and one big racket to discover the mysterious and unknown planets ',
        id: 1,
        price: 100,
        imagesPath: ['children/astronaut-set/astronaut.jpeg', 'children/astronaut-set/missile.jpeg'],
        name: 'Astronaut\'s Dreams - Set'
    },
    {
        description: 'Two little pirates, never alone discovering hidden treasures on their pirate map  \n',
        id: 1,
        price: 100,
        imagesPath: ['children/pirate-set/pirate-left.jpeg', 'children/pirate-set/pirate-right.jpeg'],
        name: 'Two pirates - Set'
    },
    {
        description: 'Simple and timeless trilogy with calm colors that can fit any room\n',
        id: 1,
        framed: true,
        price: 100,
        name: 'Llama Queen - Set',
        imagesPath: ['children/lama-set/lama-left.jpeg', 'children/lama-set/lama-middle.jpeg', 'children/lama-set/lama-right.jpeg',
        'children/lama-set/lama-all.jpeg'],
    },
];
