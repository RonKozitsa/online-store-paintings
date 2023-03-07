import { StoreItemInterface } from '../../shared/components/store-item/store-item.interface';
import { createImagesPaths } from '../../shared/functions';

const directoryPrefix = 'children';

export const childrenPaintings: StoreItemInterface[] = [
  {
    description: 'Little fairy on a big elephant inside a playroom where anything can can happen with the right imagination',
    imagesPath: createImagesPaths(['elephant.jpeg'], directoryPrefix),
    name: 'Elephant fairy',
    year: 2020
  },
  {
    description: '',
    name: 'Animal Kingdom',
    imagesPath: createImagesPaths(['zebra.png', 'rhino.png', 'hippo.png', 'lion.png', 'tiger.png', 'giraffe.png', 'crocodile.png', 'elephant.png', 'monkey.png', 'preview.png'], `${directoryPrefix}/animal-kingdom`),
    year: 2023
  },
  {
    description: 'Simple and timeless trilogy with calm colors that can fit any room\n',
    framed: true,
    name: 'Llama Queen',
    soldOut: true,
    imagesPath: createImagesPaths(['lama-left.jpeg', 'lama-middle.jpeg', 'lama-right.jpeg', 'lama-preview.jpeg'], `${directoryPrefix}/lama-set`),
    year: 2020
  },
  {
    description: '',
    imagesPath: createImagesPaths(['explorer.png'], directoryPrefix),
    name: 'The Explorer',
    year: 2023
  },
  {
    description: '',
    imagesPath: createImagesPaths(['bear.png', 'elephant.png', 'preview.png'], `${directoryPrefix}/busy-books`),
    name: 'Busy Books',
    year: 2023
  },
  {
    description: '',
    imagesPath: createImagesPaths(['left.png', 'middle.png', 'right.png', 'preview.png'], `${directoryPrefix}/exploring-friends`),
    name: 'Exploring Friends',
    year: 2023
  },
  {
    description: '',
    imagesPath: createImagesPaths(['left.png', 'middle.png', 'right.png', 'preview.png'], `${directoryPrefix}/underwater-friends`),
    name: 'Underwater Friends',
    year: 2023
  },
  {
    description: '',
    imagesPath: createImagesPaths(['left.png', 'middle.png', 'right.png', 'preview.png'], `${directoryPrefix}/magic-of-australia`),
    name: 'Magic Of Australia',
    year: 2023
  },
  {
    description: 'Any boy’s dream room filled with toys, paintings and one big racket to discover the mysterious and unknown planets ',
    imagesPath: createImagesPaths(['astronaut.jpeg', 'missile.jpeg'], `${directoryPrefix}/astronaut-set`),
    name: "Astronaut's Dreams",
    soldOut: true,
    printAvailable: true,
    year: 2020
  },
  {
    description: 'Two little pirates, never alone discovering hidden treasures on their pirate map  \n',
    imagesPath: createImagesPaths(['pirate-left.jpeg', 'pirate-right.jpeg'], `${directoryPrefix}/pirate-set`),
    name: 'Two pirates',
    soldOut: true,
    printAvailable: true,
    year: 2019
  },
  {
    description: '',
    imagesPath: createImagesPaths(['left.png', 'right.png', 'preview.png'], `${directoryPrefix}/musical-angels`),
    name: 'Musical Angels',
    year: 2023
  },
  {
    description: '',
    imagesPath: createImagesPaths(['flamingo-queen.png'], directoryPrefix),
    name: 'Flamingo Queen',
    year: 2023
  }
];
