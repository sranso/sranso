export const enum ProjectNamesEnum {
  MOKUHANGA = '2025-mokuhanga',
  CAFE_SERIES = '2024-cafe-series',
  ANIMAL_WORLD = '2024-animal-world',
  SURPRISE_ENCOUNTER = '2024-surprise-encounter',
}

export type Project = {
  title: string;
  image: string;
  description: string;
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
