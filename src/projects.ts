export const enum ProjectNamesEnum {
  MOKUHANGA = '2025-mokuhanga',
  CAFE_SERIES = '2024-cafe-series',
  ANIMAL_WORLD = '2024-animal-world',
  SURPRISE_ENCOUNTER = '2024-surprise-encounter',
}

/**
 * Making a fake DB here. A project has many artworks.
 */
export type Project = {
  title: string;
  // todo remove this?
  image: string;
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
};

export const Projects: Record<ProjectNamesEnum, Project> = {
  [ProjectNamesEnum.MOKUHANGA]: {
    title: '2025 Mokuhanga',
    image: '/images/project-a.jpg',
    description: 'This is Project A.',
  },
  [ProjectNamesEnum.CAFE_SERIES]: {
    title: '2024 Cafe series',
    image: '/images/project-b.jpg',
    description: 'This is Project B.',
  },
  [ProjectNamesEnum.ANIMAL_WORLD]: {
    title: '2024 Animal world',
    image: '/images/project-c.jpg',
    description: 'This is Project C.',
  },
  [ProjectNamesEnum.SURPRISE_ENCOUNTER]: {
    title: '2024 Surprise encounter',
    image: '/images/project-d.jpg',
    description: 'This is Project D.',
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
      title: 'Artwork D',
    },
  ],
};

export const getArtworkPath = (artwork: Artwork) => {
  return `${artwork.date}-${artwork.title.toLowerCase().replace(/ /g, '-')}`;
};
