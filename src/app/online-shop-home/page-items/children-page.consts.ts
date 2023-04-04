import { StoreItemInterface } from '../../shared/components/store-item/store-item.interface';
import { createImagesPaths } from '../../shared/functions';

const directoryPrefix = 'children';

export const childrenPaintings: StoreItemInterface[] = [
  {
    description: 'Any pick from a choice of 9 cute little animal kings and queens, fit for a girl or boy Room.',
    name: 'Animal Kingdom',
    imagesPath: createImagesPaths(['zebra.png', 'rhino.png', 'hippo.png', 'lion.png', 'tiger.png', 'giraffe.png', 'crocodile.png', 'elephant.png', 'monkey.png', 'preview.png'], `${directoryPrefix}/animal-kingdom`),
    year: 2023,
    dimensions: {
      height: 18,
      width: 13
    }
  },
  {
    description: 'Little fairy on a big elephant inside a playroom where anything can can happen with the right imagination',
    imagesPath: createImagesPaths(['elephant.jpeg'], directoryPrefix),
    name: 'Elephant fairy',
    dimensions: {
      height: 45,
      width: 45
    },
    year: 2020
  },
  {
    description: 'Little fairy dreaming in an air balloon, flying up high into the sky.',
    imagesPath: createImagesPaths(['air-baloon-fairy.png'], directoryPrefix),
    name: 'Air balloon Fairy',
    year: 2021,
    dimensions: {
      height: 45,
      width: 45
    }
  },
  {
    description: 'Cute little boy discovering to unknown world filled of wonders.',
    imagesPath: createImagesPaths(['explorer.png'], directoryPrefix),
    name: 'The Explorer',
    year: 2023,
    dimensions: {
      height: 18,
      width: 13
    }
  },
  {
    description: 'What a better fit than an elephant and a bear discovering the many different adventures and worlds inside of books -perfect for book lovers.',
    imagesPath: createImagesPaths(['bear.png', 'elephant.png', 'preview.png'], `${directoryPrefix}/busy-books`),
    name: 'Book Lovers',
    year: 2023,
    dimensions: {
      height: 20,
      width: 25
    }
  },
  {
    description: 'Different forest animals smiling at the tourist who took their picture on their hike in the mountains, while feeling the fresh and quiet air.',
    imagesPath: createImagesPaths(['left.png', 'middle.png', 'right.png', 'preview.png'], `${directoryPrefix}/exploring-friends`),
    name: 'Exploring Friends',
    year: 2023,
    dimensions: {
      height: 18,
      width: 13
    }
  },
  {
    description: 'Not to forget the unseen world of wonders, perfect for those beach and swim lovers.',
    imagesPath: createImagesPaths(['left.png', 'middle.png', 'right.png', 'preview.png'], `${directoryPrefix}/underwater-friends`),
    name: 'Underwater Friends',
    year: 2023,
    dimensions: {
      height: 18,
      width: 13
    }
  },
  {
    description: 'Little Australian animals each nurturing their own little babies, providing them with love and comfort.',
    imagesPath: createImagesPaths(['left.png', 'middle.png', 'right.png', 'preview.png'], `${directoryPrefix}/magic-of-australia`),
    name: 'Little Australia',
    year: 2023,
    dimensions: {
      height: 20,
      width: 25
    }
  },
  {
    description: 'Any boy’s dream room filled with toys, paintings and one big racket to discover the mysterious and unknown planets ',
    imagesPath: createImagesPaths(['astronaut.jpeg', 'missile.jpeg', 'preview.jpg'], `${directoryPrefix}/astronaut-set`),
    name: "Astronaut's Dreams",
    soldOutPrintAvailable: true,
    dimensions: {
      height: 20,
      width: 25
    },
    year: 2020
  },
  {
    description: 'Simple and timeless trilogy with calm colors that can fit any room\n',
    framed: true,
    name: 'Llama Queen',
    soldOutPrintUnavailable: true,
    imagesPath: createImagesPaths(['lama-left.jpeg', 'lama-middle.jpeg', 'lama-right.jpeg', 'lama-preview.jpeg'], `${directoryPrefix}/lama-set`),
    year: 2020,
    dimensions: {
      height: 20,
      width: 25
    }
  },
  {
    description: 'Two little pirates, never alone discovering hidden treasures on their pirate map  \n',
    imagesPath: createImagesPaths(['pirate-left.jpeg', 'pirate-right.jpeg', 'preview.jpg'], `${directoryPrefix}/pirate-set`),
    name: 'Two pirates',
    soldOutPrintAvailable: true,
    year: 2019
  },
  {
    description: 'Angels flying happy in the sky while creating a beautiful orchestra of joy.',
    imagesPath: createImagesPaths(['left.png', 'right.png', 'preview.png'], `${directoryPrefix}/musical-angels`),
    name: 'Musical Angels',
    year: 2023,
    dimensions: {
      height: 25,
      width: 30
    }
  },
  {
    description: 'Flamingo proudly standing with her little crown waiting to be admired from a little girl in her bedroom.',
    imagesPath: createImagesPaths(['flamingo-queen.png'], directoryPrefix),
    name: 'Flamingo Queen',
    soldOutPrintAvailable: true,
    year: 2023,
    dimensions: {
      height: 18,
      width: 13
    }
  },
  {
    description: 'Little royal animal friends who found each other in the forrest.',
    imagesPath: createImagesPaths(['forest-family.png'], directoryPrefix),
    name: 'Royal forrest friends',
    year: 2023,
    dimensions: {
      height: 31,
      width: 25
    }
  }
];
