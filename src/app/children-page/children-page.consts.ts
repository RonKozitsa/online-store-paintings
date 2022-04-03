import {StoreItemInterface} from '../shared/components/store-item/store-item.interface';

export const childrenPaintings: StoreItemInterface[] = [
    {
        description: 'desc',
        id: 1,
        price: 100,
        imagesPath: ['children/elephant.jpeg'],
        name: 'Elephant'
    },
    {
        description: 'desc',
        id: 1,
        price: 100,
        imagesPath: ['children/astronaut-set/astronaut.jpeg', 'children/astronaut-set/missile.jpeg'],
        name: 'Astronaut\'s Dreams - Set'
    },
    {
        description: 'desc',
        id: 1,
        price: 100,
        imagesPath: ['children/pirate-set/pirate-left.jpeg', 'children/pirate-set/pirate-right.jpeg'],
        name: 'Pirate - Set'
    },
    {
        description: 'desc',
        id: 1,
        price: 100,
        name: 'Lama - Set',
        imagesPath: ['children/lama-set/lama-left.jpeg', 'children/lama-set/lama-middle.jpeg', 'children/lama-set/lama-right.jpeg'],
    },
];
