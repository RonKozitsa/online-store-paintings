import { StoreItemInterface } from '../../shared/components/store-item/store-item.interface';
import { createImagesPaths } from '../../shared/functions';

const directoryPrefix = 'flowers';

export const flowersPaintings: StoreItemInterface[] = [
  {
    description: 'These small little plants are not only fun to paint, they also have much to offer.' + '\nThey can help purify the air, improve your focus and enhance memory.',
    imagesPath: createImagesPaths(['left.jpeg', 'right.jpeg', 'middle.jpeg', 'preview.jpeg'], `${directoryPrefix}/cactus-set`),
    name: 'Succulent',
    year: 2020
  },
  {
    description: 'Classic and romantic flowers with the most wonderful smell.\nNo wonder that they also can release stress and depression.',
    imagesPath: createImagesPaths(['red-rose.jpeg'], `${directoryPrefix}`),
    name: 'Rose',
    year: 2019
  },
  {
    description: 'These are some of my favorite flowers to paint and a known little flower to help shorten common cold symptoms.',
    imagesPath: createImagesPaths(['echinacea.jpeg'], directoryPrefix),
    id: 1,
    name: 'Echinacea',
    year: 2021
  },
  {
    description: "When a leek flower came across me, I couldn't help but paint and reflect it's beauty. Leek contain a variety of nutrients, may reduce inflammation and promote heart health.",
    imagesPath: createImagesPaths(['leek-flower.jpeg'], `${directoryPrefix}`),
    name: 'Leek Flower',
    year: 2021
  },
  {
    description: 'Come in all colors, but the strong saturated pink is my favorite of them.\nThey are some of the longest lasting cut flowers and discharge oxygen and absorb carbon dioxide and other airborne toxins at night ',
    imagesPath: createImagesPaths(['gerbera.jpeg'], directoryPrefix),
    name: 'Gerbera',
    year: 2018
  },
  {
    description: 'Seem so delicate and elegant with the little tone of pink in their white leaves. I could spend hours standing under a magnolia tree.\n',
    framed: true,
    id: 1,
    imagesPath: createImagesPaths(['magnolia.jpeg'], directoryPrefix),
    name: 'Magnolia',
    year: 2018
  },
  {
    description: 'helps to boosts the immune system',
    id: 2,
    framed: true,
    imagesPath: createImagesPaths(['echinacea-2.jpeg'], directoryPrefix),
    name: 'Echinacea',
    year: 2018
  },
  {
    description: 'The Magnolia flower has anti cancer properties, improve sleep and help relief symptoms of stress and anxiety.',
    imagesPath: createImagesPaths(['left.jpeg', 'right.jpeg'], `${directoryPrefix}/magnolia-bad-quality`),
    id: 2,
    name: 'Magnolia',
    year: 2018
  },
  {
    description: 'Palm trees are not only exotic and give that feeling of vacation, but they can increases eyesight, and help maintain a healthier skin, hair and nails. ',
    imagesPath: createImagesPaths(['palm-tree.jpeg'], directoryPrefix),
    name: 'Antique french palm tree',
    year: 2019
  },
  {
    description: 'Purifies the air, promotes restful sleep, removes mold spores from the air.',
    imagesPath: createImagesPaths(['lily.jpeg'], directoryPrefix),
    name: 'Lily',
    year: 2018
  },
  {
    description: 'This flower can fight common infections.',
    imagesPath: createImagesPaths(['echinacea-open-head.jpeg'], directoryPrefix),
    id: 3,
    name: 'Echinacea',
    year: 2019
  },
  {
    description: 'Have anti cancer properties, improve sleep and help relief symptoms of stress and anxiety.',
    imagesPath: createImagesPaths(['magnolia-blue-background.jpeg'], directoryPrefix),
    id: 3,
    name: 'Magnolia',
    year: 2019
  },
  {
    description: '',
    imagesPath: createImagesPaths(['pink-flowers-with-scratches.jpeg'], directoryPrefix),
    name: 'Pink Flowers',
    year: 2019
  },
  {
    description: 'Is used for insomnia, bladder and liver diseases.',
    framed: true,
    imagesPath: createImagesPaths(['poppy.jpeg'], `${directoryPrefix}`),
    name: 'Poppy',
    year: 2018
  },
  {
    description: 'Purifies the air, promotes restful sleep, removes mold spores from the air.',
    imagesPath: createImagesPaths(['left.jpeg', 'right.jpeg', 'middle.jpeg', 'preview.jpeg'], `${directoryPrefix}/white-madonna-lilies-set`),
    name: 'White Madonna Lilies',
    year: 2019
  }
];
