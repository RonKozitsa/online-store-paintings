import {StoreItemInterface} from '../../shared/components/store-item/store-item.interface';

const directoryPrefix = 'animals';

export const animalPaintings: StoreItemInterface[] = [
    {
        description: '',
        id: 1,
        price: 100,
        name: 'Peacock On Tree',
        imagesPath: [`${directoryPrefix}/peacock-on-tree.jpeg`],
    },
    {
        description: '',
        id: 1,
        price: 100,
        name: 'Flamingos',
        imagesPath: [`${directoryPrefix}/flamingos.jpeg`],
    },
    {
        description: '',
        id: 1,
        price: 100,
        name: 'Parrot',
        imagesPath: [`${directoryPrefix}/parrot.jpeg`],
    },
    {
        description: '',
        id: 1,
        price: 100,
        name: 'Peacock On Purple Background',
        imagesPath: [`${directoryPrefix}/peacock-purple.jpeg`],
    },
    {
        description: '',
        id: 1,
        price: 100,
        name: 'Cow',
        imagesPath: [`${directoryPrefix}/cow.jpeg`, `${directoryPrefix}/cow-preview.jpeg`],
    },
    {
        description: '',
        id: 1,
        price: 100,
        name: 'Peacock',
        imagesPath: [`${directoryPrefix}/peacock.jpeg`],
    },
];
