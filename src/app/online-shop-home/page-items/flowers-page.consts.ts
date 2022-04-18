import { StoreItemInterface } from '../../shared/components/store-item/store-item.interface';

const directoryPrefix = 'flowers';

export const flowersPaintings: StoreItemInterface[] = [
  {
    description: 'These small little plants are not only fun to paint, they also have much to offer.' + '\nThey can help purify the air, improve your focus and enhance memory.',
    imagesPath: [`${directoryPrefix}/cactus-set/left.jpeg`, `${directoryPrefix}/cactus-set/middle.jpeg`, `${directoryPrefix}/cactus-set/right.jpeg`, `${directoryPrefix}/cactus-set/preview.jpeg`],
    name: 'Succulent'
  },
  {
    description: 'Classic and romantic flowers with the most wonderful smell.\nNo wonder that they also can release stress and depression.',
    imagesPath: [`${directoryPrefix}/red-rose-set/red-rose.jpeg`],
    name: 'Rose'
  },
  {
    description: 'These are some of my favorite flowers to paint and a known little flower to help shorten common cold symptoms.',
    imagesPath: [`${directoryPrefix}/echinacea.jpeg`],
    id: 1,
    name: 'Echinacea'
  },
  {
    description: "When a leek flower came across me, I couldn't help but paint and reflect it’s beauty. Leek contain a variety of nutrients, may reduce inflammation and promote heart health. ",
    imagesPath: [`${directoryPrefix}/leek-flower-set/leek-flower.jpeg`],
    name: 'Leek Flower'
  },
  {
    description: 'Come in all colors, but the strong saturated pink is my favorite of them.\nThey are some of the longest lasting cut flowers and discharge oxygen and absorb carbon dioxide and other airborne toxins at night ',
    imagesPath: [`${directoryPrefix}/gerbera.jpeg`],
    name: 'Gerbera'
  },
  {
    description: 'Seem so delicate and elegant with the little tone of pink in their white leaves. I could spend hours standing under a magnolia tree.\n',
    framed: true,
    id: 1,
    imagesPath: [`${directoryPrefix}/magnolia.jpeg`],
    name: 'Magnolia'
  },
  {
    description: 'helps to boosts the immune system\n',
    id: 2,
    framed: true,
    imagesPath: [`${directoryPrefix}/echinacea-2.jpeg`],
    name: 'Echinacea'
  },
  {
    description: 'Have anti cancer properties, improve sleep and help relief symptoms of stress and anxiety.',
    imagesPath: [`${directoryPrefix}/magnolia-bad-quality/left.jpeg`, `${directoryPrefix}/magnolia-bad-quality/right.jpeg`],
    id: 2,
    name: 'Magnolia'
  },
  {
    description: 'Palm trees are not only exotic and give that feeling of vacation, but they can increases eyesight, and help maintain a healthier skin, hair and nails. ',
    imagesPath: [`${directoryPrefix}/palm-tree.jpeg`],
    name: 'Antique french palm tree'
  },
  {
    description: 'Purifies the air, promotes restful sleep, removes mold spores from the air.',
    imagesPath: [`${directoryPrefix}/lily.jpeg`],
    name: 'Lily'
  },
  {
    description: 'This flower can fight common infections.',
    imagesPath: [`${directoryPrefix}/echinacea-open-head.jpeg`],
    id: 3,
    name: 'Echinacea'
  },
  {
    description: 'Have anti cancer properties, improve sleep and help relief symptoms of stress and anxiety.',
    imagesPath: [`${directoryPrefix}/magnolia-blue-background.jpeg`],
    id: 3,
    name: 'Magnolia'
  },
  {
    description: '',
    imagesPath: [`${directoryPrefix}/pink-flowers-with-scratches.jpeg`],
    name: ''
  },
  {
    description: 'Is used for insomnia, bladder and liver diseases.',
    framed: true,
    imagesPath: [`${directoryPrefix}/poppy-set/yellow-flowers.jpeg`, `${directoryPrefix}/poppy-set/preview.jpeg`],
    name: 'Poppy'
  },
  {
    description: 'Purifies the air, promotes restful sleep, removes mold spores from the air.',
    imagesPath: [
      `${directoryPrefix}/white-madonna-lilies-set/left.jpeg`,
      `${directoryPrefix}/white-madonna-lilies-set/middle.jpeg`,
      `${directoryPrefix}/white-madonna-lilies-set/right.jpeg`,
      `${directoryPrefix}/white-madonna-lilies-set/preview.jpeg`
    ],
    name: 'White Madonna Lilies'
  }
];
