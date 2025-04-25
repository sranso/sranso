export const enum ProjectNamesEnum {
  MOKUHANGA = '2025-mokuhanga',
  CAFE_SERIES = '2024-cafe-series',
  ANIMAL_WORLD = '2024-animal-world',
  MT_GRETNA_2023 = '2023-mt-gretna',
  SURPRISE_ENCOUNTER = '2024-surprise-encounter',
  WORKS_ON_CARDBOARD = 'works-on-cardboard',
  BIRDS_OF_NY = 'birds-of-ny',
}

/**
 * Making a fake DB here. A project has many artworks.
 */
export type Project = {
  title: string;
  description: string;
};
export type Artwork = {
  available?: boolean;
  date: string;
  description?: string;
  dimensions: string;
  image: string;
  medium: string;
  notes?: string;
  title: string;
  cost?: number;
};

export const Projects: Record<ProjectNamesEnum, Project> = {
  [ProjectNamesEnum.MOKUHANGA]: {
    title: '2025 Mokuhanga',
    description: 'This is Project A.',
  },
  [ProjectNamesEnum.CAFE_SERIES]: {
    title: '2024 Cafe series',
    description: 'This is Project B.',
  },
  [ProjectNamesEnum.ANIMAL_WORLD]: {
    title: '2024 Animal world',
    description: 'This is Project C.',
  },
  [ProjectNamesEnum.SURPRISE_ENCOUNTER]: {
    title: '2024 Surprise encounter',
    description: 'This is Project D.',
  },
  [ProjectNamesEnum.WORKS_ON_CARDBOARD]: {
    title: 'Works on cardboard',
    description: 'This is Project E.',
  },
  [ProjectNamesEnum.MT_GRETNA_2023]: {
    title: '2023 Mt Gretna',
    description: 'This is Project F.',
  },
  [ProjectNamesEnum.BIRDS_OF_NY]: {
    title: 'Birds of NY',
    description: 'This is Project G.',
  },
};

export const Artworks: Record<ProjectNamesEnum, Artwork[]> = {
  [ProjectNamesEnum.MOKUHANGA]: [
    {
      available: true,
      date: '2024-01-01',
      description: 'This is Artwork D.',
      dimensions: '100 x 100 cm',
      image: '/2024-surprise-encounter/24-moose.jpg',
      medium: 'Oil on canvas',
      notes: 'This is a note.',
      title: 'Artwork D',
    },
    {
      available: true,
      date: '2024-01-01',
      description: 'This is Artwork D.',
      dimensions: '100 x 100 cm',
      image: '/2024-surprise-encounter/24-moose.jpg',
      medium: 'Oil on canvas',
      notes: 'This is a note.',
      title: 'Artwork D',
    },
    {
      available: true,
      date: '2024-01-01',
      description: 'This is Artwork D.',
      dimensions: '100 x 100 cm',
      image: '/2024-surprise-encounter/24-moose.jpg',
      medium: 'Oil on canvas',
      notes: 'This is a note.',
      title: 'Artwork D',
    },
  ],
  [ProjectNamesEnum.CAFE_SERIES]: [
    {
      available: true,
      date: '2024-01-01',
      description: 'This is Artwork B.',
      dimensions: '100 x 100 cm',
      image: '/images/artwork-b.jpg',
      medium: 'Oil on canvas',
      notes: 'This is a note.',
      title: 'Artwork B',
    },
  ],
  [ProjectNamesEnum.ANIMAL_WORLD]: [
    {
      available: true,
      date: '2024-01-01',
      description: 'This is Artwork C.',
      dimensions: '100 x 100 cm',
      image: '/images/artwork-c.jpg',
      medium: 'Oil on canvas',
      notes: 'This is a note.',
      title: 'Artwork C',
    },
  ],
  [ProjectNamesEnum.SURPRISE_ENCOUNTER]: [
    {
      available: true,
      date: '2024-01-01',
      description: 'This is Artwork D.',
      dimensions: '100 x 100 cm',
      image: '/images/artwork-d.jpg',
      medium: 'Oil on canvas',
      notes: 'This is a note.',
      cost: 400, // idk
      title: 'Artwork D',
    },
  ],
  [ProjectNamesEnum.WORKS_ON_CARDBOARD]: [
    {
      date: '2023-09-11',
      image: '/img/nyc/2023-09-11.jpg',
      medium: 'gouache on carton board',
      title: 'Figs and bar tools',
      dimensions: '6x8"',
      available: false,
    },
    {
      date: '2023-09-10',
      image: '/img/nyc/2023-09-10.jpg',
      title: 'First time here',
      medium: 'gouache on carton board',
      dimensions: '6x8"',
      available: true,
      cost: 125,
    },
  ],
  [ProjectNamesEnum.MT_GRETNA_2023]: [
    {
      image: '/img/mount-gretna/07-08-23-martha-sun.jpg',
      title: "Martha's sun",
      medium: 'watercolor & gouache on paper',
      dimensions: '8x10"',
      date: '2023-07-08',
      available: false,
    },
    {
      image: '/img/mount-gretna/06-01-23.jpg',
      title: 'Nature shapes',
      medium: 'watercolor & gouache on carton board',
      dimensions: '8x10"',
      date: '2023-06-01',
      available: false,
    },
  ],
  [ProjectNamesEnum.BIRDS_OF_NY]: [
    {
      image: '/img/nyc/2022-12-1-tufted-titmouse.jpg',
      title: 'Tufted titmouse',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      image: '/img/nyc/2022-12-1-red-winged-blackbird.jpg',
      title: 'Red winged blackbird',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      image: '/img/nyc/2022-12-1-oriole.jpg',
      title: 'Oriole',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      image: '/img/nyc/2022-12-1-northern-flicker.jpg',
      title: 'Northern flicker',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      image: '/img/nyc/2022-12-1-northern-cardinal.jpg',
      title: 'Northern cardinal',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      image: '/img/nyc/2022-12-1-eastern-bluebird.jpg',
      title: 'Eastern bluebird',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
  ],
};

export const getArtworkPath = (artwork: Artwork) => {
  return `${artwork.date}-${artwork.title.toLowerCase().replace(/ /g, '-')}`;
};

const idk: Artwork[] = [
  {
    image: '/img/oaxaca/2022-10-04.jpg',
    title: 'Buddies',
    medium: 'watercolor on paper',
    dimensions: '16x12"',
    available: true,
    cost: 400,
    date: '2022-10-04',
  },
  {
    image: '/img/oaxaca/2022-09-20.JPG',
    title: 'Nature sketch',
    medium: 'watercolor on paper',
    dimensions: '10x12"',
    available: false,
    date: '2022-09-20',
  },
  {
    image: '/img/oaxaca/2022-09-09.jpg',
    title: 'Night study',
    medium: 'watercolor on paper',
    dimensions: '16x12"',
    available: false,
    date: '2022-09-09',
  },
  // gshi
  {
    image: '/img/maine/2022-7-1-water-wc.jpg',
    title: 'From under the bridge',
    medium: 'watercolor on paper',
    dimensions: '18x24"',
    available: false,
    date: '2022-07-01',
    cost: 730,
  },
  {
    image: '/img/maine/2022-7-1-wc.jpg',
    title: 'A seal jumped for fish',
    medium: 'watercolor on paper',
    dimensions: '18x24"',
    available: false,
    date: '2022-07-01',
    cost: 730,
  },
  {
    image: '/img/maine/2022-6-29-wc.jpg',
    title: 'A slug sat in my palette',
    medium: 'watercolor on paper',
    dimensions: '18x24"',
    available: false,
    date: '2022-06-29',
    cost: 730,
  },
  // 2022 and earlier
  {
    image: '/img/nc/2022-6-18.jpg',
    title: 'The red tree again',
    medium: 'watercolor on paper',
    dimensions: '4x6"',
    available: false,
    date: '2022-06-18',
  },
  {
    image: '/img/nc/2022-6-17.jpg',
    title: 'The red tree',
    medium: 'watercolor on paper',
    dimensions: '4x6"',
    available: false,
    date: '2022-06-17',
  },
  {
    image: '/img/paros-greece/2022-2-church.jpg',
    title: 'Church',
    medium: 'watercolor on paper',
    dimensions: '9x12"',
    available: false,
    date: '2022-02-01',
  },
  {
    image: '/img/marcias-ranch/2020-8-14-purple-sky.JPG',
    title: 'Sunset',
    medium: 'watercolor on paper',
    dimensions: '8x11.5"',
    available: false,
    date: '2020-08-14',
  },
  {
    image: '/img/marcias-ranch/2020-8-14-pink-sky.JPG',
    title: 'Sunset',
    medium: 'watercolor on paper',
    dimensions: '8x11.5"',
    available: false,
    date: '2020-08-14',
  },
  {
    image: '/img/nc/2020-6-29-rosemary-field.jpg',
    title: "Rosemary's farm",
    medium: 'watercolor on paper',
    dimensions: '5.5x12"',
    available: false,
    date: '2020-06-29',
  },
  {
    image: '/img/nc/2020-5-jlo.jpg',
    title: 'North Carolina home',
    medium: 'watercolor on paper',
    dimensions: '4x6"',
    available: false,
    date: '2020-05-01',
  },
  {
    image: '/img/nc/2020-4-18-barn.jpg',
    title: "Rosemary's barn",
    medium: 'watercolor on paper',
    dimensions: '5x8"',
    available: false,
    date: '2020-04-18',
  },
  {
    image: '/img/canada/2017-canada-sketch.jpg',
    title: 'The Big House',
    medium: 'watercolor on paper',
    dimensions: '5x8"',
    available: false,
    date: '2017-01-01',
  },
];
