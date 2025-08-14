export const enum ProjectNamesEnum {
  CAFE_SERIES = '2024-cafe-series',

  // tbd
  WORKS_ON_CARDBOARD = 'works-on-cardboard',

  // done
  ANIMAL_WORLD_2024 = '2024-animal-world',
  CLOTHING = 'clothing',
  GSHI_2022 = '2022-gshi',
  INTERIORS_2023 = '2023-interiors',
  MARCIAS_RANCH_2020 = '2020-marcias-ranch',
  MOKUHANGA = '2025-mokuhanga',
  MT_GRETNA_2023 = '2023-mt-gretna',
  OAXACA_2022 = '2022-oaxaca',
  PAROS_2022 = '2022-paros',
  BIRDS_OF_NY_2023 = '2023-birds-of-ny',
  PETS = 'pets',
  ILLUSTRATIONS_AND_CARTOONS = 'illustrations-and-cartoons',
}

const roseSeries: Artwork[] = [
  {
    images: ['/paros-greece/2022-4-rose-series-1.jpg'],
    title: 'The Ninth Rose, 1/9',
    medium: 'drypoint and watercolor on cotton',
    dimensions: '3.75x6"',
    date: '2022-04-01',
    available: true,
  },
  {
    images: ['/paros-greece/2022-4-rose-series-2.jpg'],
    title: 'The Ninth Rose, 2/9',
    medium: 'drypoint and watercolor on cotton',
    dimensions: '3.75x6"',
    date: '2022-04-01',
    available: true,
  },
  {
    images: ['/paros-greece/2022-4-rose-series-3.jpg'],
    title: 'The Ninth Rose, 3/9',
    medium: 'drypoint and watercolor on cotton',
    dimensions: '3.75x6"',
    date: '2022-04-01',
    available: true,
  },
  {
    images: ['/paros-greece/2022-4-rose-series-4.jpg'],
    title: 'The Ninth Rose, 4/9',
    medium: 'drypoint and watercolor on cotton',
    dimensions: '3.75x6"',
    date: '2022-04-01',
    available: false,
  },
  {
    images: ['/paros-greece/2022-4-rose-series-5.jpg'],
    title: 'The Ninth Rose, 5/9',
    medium: 'drypoint and watercolor on cotton',
    dimensions: '3.75x6"',
    date: '2022-04-01',
    available: false,
  },
  {
    images: ['/paros-greece/2022-4-rose-series-6.jpg'],
    title: 'The Ninth Rose, 6/9',
    medium: 'drypoint and watercolor on cotton',
    dimensions: '3.75x6"',
    date: '2022-04-01',
    available: true,
  },
  {
    images: ['/paros-greece/2022-4-rose-series-7.jpg'],
    title: 'The Ninth Rose, 7/9',
    medium: 'drypoint and watercolor on cotton',
    dimensions: '3.75x6"',
    date: '2022-04-01',
    available: true,
  },
  {
    images: ['/paros-greece/2022-4-rose-series-8.jpg'],
    title: 'The Ninth Rose, 8/9',
    medium: 'drypoint and watercolor on cotton',
    dimensions: '3.75x6"',
    date: '2022-04-01',
    available: false,
  },
  {
    images: ['/paros-greece/2022-4-rose-series-9.jpg'],
    title: 'The Ninth Rose, 9/9',
    medium: 'drypoint and watercolor on cotton',
    dimensions: '3.75x6"',
    date: '2022-04-01',
    available: true,
  },
];

/**
 * Making a fake DB here. A project has many artworks.
 */
export type Project = {
  title: string;
  description?: React.ReactNode;
};
export type Artwork = {
  available?: boolean;
  date: string;
  description?: string;
  dimensions?: string;
  href?: string;
  images: string[];
  medium: string;
  // notes are internal, not for sharing
  notes?: string;
  title: string;
  cost?: number;
};

export const Projects: Record<ProjectNamesEnum, Project> = {
  [ProjectNamesEnum.ILLUSTRATIONS_AND_CARTOONS]: {
    title: 'Illustrations & Cartoons',
  },
  [ProjectNamesEnum.CLOTHING]: {
    title: 'Painted clothing',
    description: (
      <p>
        Painting clothes has been a fun way to upcycle clothing (eg shirt with a
        stain gets a new life) and materials (eg a fitted sheet my cats ruined
        can be a tied top). I have enjoyed the opportunity to experiment with
        different canvas shapes, and to find new ways to give paintings air time
        in the world.
        <br />
        <br />
        🌸🌸🌸 If you're interested in a painted item,{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='inline text-blue-500 underline'
          href='https://docs.google.com/forms/d/e/1FAIpQLSeUhhHO-ChppMtT4jyYvOxfn0_a4tw4CEYX2omY0iUHFRgiwg/viewform'
        >
          fill out this form.
        </a>{' '}
        🌸🌸🌸
      </p>
    ),
  },
  [ProjectNamesEnum.MOKUHANGA]: {
    title: '2025 Mokuhanga',
    description: (
      <p>
        Mokuhanga is a Japanese art form that uses a unique style of
        printmaking. The weekend of June 5-6 2025 I took a Mokuhanga print
        workshop at @zeamaysprintmaking and I loved it. It's an art form I have
        admired for a while now, first really learning about it at
        @kentlerdrawing when they had a Mokuhanga Sisters exhibition. I since
        got & read @aprilvollmer_artist's book, and finally signed up for a
        class.
        <br />
        <br />
        This is the beginning of experimenting with the technique, stay tuned.
      </p>
    ),
  },
  [ProjectNamesEnum.CAFE_SERIES]: {
    title: '2024 Cafe series',
    description: (
      <p>
        During 2023-2024, I spent a good bit of time working at cafes in
        Brooklyn NY because I was working remotely and living alone with two
        cats. Basically, I felt pretty isolated and wanted to be around people
        and outside of my house. There is an interesting aspect of cafes in that
        they are meant to create a space and a mood while serving food and
        drinks that nourish us. I wanted to show that in these paintings, and
        hint at the community that I was missing when I could.
      </p>
    ),
  },
  [ProjectNamesEnum.ANIMAL_WORLD_2024]: {
    title: '2024 Animal world',
    description: (
      <p>
        I've always been drawn to animals. As another animal myself, I feel a
        lot of empathy for them and believe that we are all in this life
        together. There is much to learn from other animals, whether it's about
        family, expressing emotion, or using what's in front of us to create and
        survive.
        <br />
        <br />
        These sketches are the beginning of a project that is not yet finished.
        It's a story about being human, through the simpler and more tender form
        of other animals.
      </p>
    ),
  },
  [ProjectNamesEnum.WORKS_ON_CARDBOARD]: {
    title: 'Works on cardboard',
  },
  [ProjectNamesEnum.MT_GRETNA_2023]: {
    title: '2023 Mt Gretna',
    description: (
      <p>
        For six weeks in the summer of 2023, I was a resident at the{' '}
        <a href='https://www.mgsoa.org/' target='_blank'>
          Mount Gretna School of Art.
        </a>{' '}
        It was a quiet and reflective time, and through converstations with the
        visiting artists and students who were there (in a parallel but separate
        program), I learned a lot about color, mixing, and intention. I am still
        reflecting on and learning from my time there, and am immensely grateful
        for the community of artists I now know.
      </p>
    ),
  },
  [ProjectNamesEnum.GSHI_2022]: {
    title: '2022 Great Spruce Head Island Art Week',
    description: (
      <p>
        In 2022 I was fortunate to attend{' '}
        <a
          href='https://maineartsjournal.com/anina-porter-fuller-great-spruce-head-island-art-week-1993-present/'
          target='_blank'
          className='text-blue-500 underline'
        >
          Great Spruce Head Island Art Week
        </a>
        , a week-long residency with 11 other artists at Fairfield Porter's
        family home in Maine. This was a top five life experience. The island
        was full of beauty and potential, and I realized how much I love making
        art alongside others.
        <br />
        <br />
        For the first time, I made large watercolors (18x24"). Previously, I had
        only worked small out of timidity, but another artist there had the
        large Arches blocks and encouraged me to try. I got to play with large,
        bold strokes of color, and it freed me to play more in this way.
      </p>
    ),
  },
  [ProjectNamesEnum.BIRDS_OF_NY_2023]: {
    title: '2023 Birds of NY',
    description: (
      <p>
        One of my best friends and her husband have a home in Red Hook, NY. Her
        husband loves birds and asked if I would paint six of the birds he often
        sees in that area. This was a very enjoyable project and I love how they
        look as a group, with the branches going off the paper and connecting to
        the other images.
      </p>
    ),
  },
  [ProjectNamesEnum.PETS]: {
    title: 'Pets',
    description: (
      <p>
        What can I say? I love animals. They are a delight to be around and to
        paint. I have done some pet portraits over the years and it's always fun
        to find a way to communicate their personality.
      </p>
    ),
  },
  [ProjectNamesEnum.MARCIAS_RANCH_2020]: {
    title: '2020 Marcias Ranch',
    description: (
      <p>
        In the summer between my junior and senior year of college, I worked as
        a gallery assistant at{' '}
        <a
          href='https://www.artlacuna.com/'
          target='_blank'
          className='text-blue-500 underline'
        >
          Marcia Burtt's gallery
        </a>
        . She and I kept in touch and during the pandemic, I lived with her at
        her ranch in Santa Maria, CA, working during the day and painting at
        night. She is a master of color and acrylic painting, and with her
        guidance I learned about color, painting shapes rather than lines, and
        falling in love with what you see.
      </p>
    ),
  },
  [ProjectNamesEnum.OAXACA_2022]: {
    title: '2022 Oaxaca',
    description: (
      <p>
        I spent 3 months in Oaxaca, Mexico in 2022 because I wanted to live
        somewhere that had studios for rent, and where art was part of the
        community. I spent much of my time at Temenk gallery, speaking Spanish
        and learning more about etching with the people who worked there.
      </p>
    ),
  },
  [ProjectNamesEnum.PAROS_2022]: {
    title: '2022 Paros',
    description: (
      <p>
        Between my sophomore and junior year of college, I took a year off to
        study art at{' '}
        <a
          href='https://www.aegeancenter.com/'
          target='_blank'
          className='text-blue-500 underline'
        >
          The Aegean Center of Fine Arts
        </a>
        . It was the first time I really loved learning, and I found great joy
        in learning how to paint and draw, in the philosophy of art. This is one
        of the most important decisions I have made in my life, and I have my
        mom to thank for encouraging me to do it.
        <br />
        <br />
        In 2022, I asked Jane (the painting teacher) if I could come do a
        residency with her for 3 months. You can see that I was looking to
        artists like Morandi, Cezanne, and Durher for skill and answers to
        questions.
      </p>
    ),
  },
  [ProjectNamesEnum.INTERIORS_2023]: {
    title: '2023 Interiors',
    description: (
      <p>
        For six months in 2023 I lived in my friends' basement while I was
        coming down from my year off of art, and looking for a job. One of the
        beautiful things about living with friends as an adult is you get to see
        what their lives look like in the quiet and downtimes.
        <br />
        <br />I painted some interiors of their home, which is a beautiful house
        with a lot of character.
      </p>
    ),
  },
};

export const Artworks: Record<ProjectNamesEnum, Artwork[]> = {
  [ProjectNamesEnum.ILLUSTRATIONS_AND_CARTOONS]: [
    {
      images: ['/illustrations/2024-book-rats.jpg'],
      title: 'Book rats',
      medium: 'pen and digital color',
      dimensions: '2x6"',
      description: "Bookmark for my best friend's book club",
      available: false,
      date: '2024-11-01',
    },
    {
      images: ['/illustrations/fish-in-the-sea-2018.jpg'],
      title:
        'Daily Shout for The New Yorker – A sampling of the many fish in the sea',
      medium: 'watercolor',
      available: false,
      date: '2018-01-01',
      href: 'https://www.newyorker.com/humor/daily-shouts/a-sampling-of-the-many-fish-in-the-sea',
    },
    {
      images: ['/illustrations/things-a-startup-has-instead-hr.jpg'],
      title:
        'Daily Shout for The New Yorker – Things a startup has instead of HR',
      medium: 'watercolor',
      available: false,
      date: '2018-01-01',
      href: 'https://www.newyorker.com/humor/daily-shouts/things-a-startup-has-instead-of-hr',
    },
    {
      images: ['/illustrations/water-towers-2018.jpg'],
      title:
        'Daily Shout for The New Yorker - Water towers that could hold my tears',
      medium: 'watercolor',
      available: false,
      date: '2018-01-01',
      href: 'https://www.newyorker.com/humor/daily-shouts/water-towers-that-could-hold-my-tears',
    },
    {
      images: ['/illustrations/2018-10-greg-microdoses.jpg'],
      title: 'Cartoon for The New Yorker - Greg microdoses',
      medium: 'pen and ink on paper',
      available: false,
      date: '2018-10-01',
      href: 'https://condenaststore.com/featured/gods-elbow-sarah-ransohoff.html',
    },
    {
      images: ['/illustrations/meditation-retreat-squirrel-18.gif'],
      title:
        'Daily Shout for The New Yorker - Main forms of entertainment on a meditation retreat',
      medium: 'watercolor and iPad',
      available: false,
      date: '2018-10-01',
      href: 'https://www.newyorker.com/humor/daily-shouts/main-forms-of-entertainment-on-a-meditation-retreat',
    },
    {
      images: ['/illustrations/owl-wisdom-2019.jpg'],
      title: 'Daily Shout for The New Yorker - Owl wisdom',
      medium: 'watercolor and iPad',
      available: false,
      date: '2019-01-01',
      href: 'https://www.newyorker.com/humor/daily-shouts/owl-wisdom',
    },
    {
      images: ['/illustrations/2023-meat-alts.jpg'],
      title:
        'Daily Shout for The New Yorker - Super realistic meat alternatives',
      medium: 'watercolor and iPad',
      available: false,
      date: '2023-01-01',
      href: 'https://www.newyorker.com/humor/daily-shouts/super-realistic-meat-alternatives',
    },
  ],

  [ProjectNamesEnum.MOKUHANGA]: [
    {
      available: true,
      date: '2025-04-05',
      dimensions: '8x10"',
      images: ['/mokuhanga/2025-04-05-cat-flower.jpg'],
      medium: 'watercolor on Rives BFK cream',
      title: 'Miso being bad',
    },
    {
      available: true,
      date: '2025-04-05',
      dimensions: '8x10"',
      images: ['/mokuhanga/2025-04-05-xena.jpg'],
      medium: 'watercolor on Rives BFK cream',
      title: 'Xena the seal',
    },
    {
      available: false,
      date: '2025-04-05',
      dimensions: '8x10"',
      images: ['/mokuhanga/2025-04-05-chickens.jpg'],
      medium: 'watercolor on Rives BFK cream',
      title: 'Chickens',
    },
    {
      available: true,
      date: '2025-04-05',
      dimensions: '8x10"',
      images: ['/mokuhanga/2025-04-05-chicken.jpg'],
      medium: 'watercolor on Rives BFK cream',
      title: 'Holding a chicken',
    },
    {
      available: true,
      date: '2025-04-05',
      dimensions: '8x10"',
      images: ['/mokuhanga/2025-04-05-curled-cat.jpg'],
      medium: 'watercolor on Rives BFK cream',
      title: 'Curled cat',
    },
    {
      available: true,
      date: '2025-04-05',
      dimensions: '8x10"',
      images: ['/mokuhanga/2025-04-05-flowers.jpg'],
      medium: 'watercolor on Rives BFK cream',
      title: 'Flowers',
    },
  ],

  [ProjectNamesEnum.CAFE_SERIES]: [
    {
      images: ['/nyc/2023-11-26.jpg'],
      title: 'Golden light',
      medium: 'oil on canvas',
      dimensions: '40x26"',
      available: false,
      date: '2023-01-26',
    },
    {
      images: ['/nyc/2024-02-08.jpeg'],
      title: 'Untitled',
      medium: 'oil on cardboard',
      dimensions: '10x10"',
      available: true,
      cost: 240,
      date: '2024-02-08',
    },
    {
      images: ['/nyc/2024-02-28.jpeg'],
      title: 'Light and wind',
      medium: 'oil on canvas',
      dimensions: '20x16"',
      available: true,
      cost: 240,
      date: '2024-02-24',
    },
    {
      images: ['/nyc/2024-03-10-frankels.jpeg'],
      title: 'Frankels',
      medium: 'oil on cardboard',
      dimensions: '9x12"',
      available: true,
      cost: 150,
      date: '2024-03-10',
    },
  ],

  [ProjectNamesEnum.ANIMAL_WORLD_2024]: [
    {
      available: true,
      date: '2024-06-01',
      dimensions: '8x5"',
      images: ['/2024-animal-world/24-deer-in-thicket.jpg'],
      medium: 'pen and whiteout paper',
      title: 'Deer in thicket',
    },
    {
      available: true,
      date: '2024-06-01',
      dimensions: '12x6.5"',
      images: ['/2024-animal-world/bear.jpg'],
      medium: 'pen on paper',
      title: 'The wise bear',
    },
    {
      available: true,
      date: '2024-06-01',
      dimensions: '8x11"',
      images: ['/2024-animal-world/community.jpg'],
      medium: 'pen on paper',
      title: 'The infinite and the specific / Community',
    },
    {
      available: true,
      date: '2024-06-01',
      dimensions: '6.5x9"',
      images: ['/2024-animal-world/ghosts.jpg'],
      medium: 'pen and whiteout on paper',
      title: 'Ghosts',
    },
    {
      available: true,
      date: '2024-06-01',
      dimensions: '13x6"',
      images: ['/2024-animal-world/hidden-bear.jpg'],
      medium: 'pen and whiteout on paper',
      title: 'Hidden bear',
    },
    {
      available: true,
      date: '2024-06-01',
      dimensions: '6x8"', // todo
      images: ['/2024-animal-world/mcgorlick.jpg'],
      medium: 'pen and whiteout on paper',
      title: 'McGorlick',
    },
    {
      available: true,
      date: '2024-06-01',
      dimensions: '6.5x12"',
      images: ['/2024-animal-world/storm-sec-1.jpg'],
      medium: 'pen and whiteout on paper',
      title: 'Looking into the crevasse',
    },
    {
      available: true,
      date: '2024-06-01',
      dimensions: '8.5x13.5"',
      images: ['/2024-animal-world/storm-sec-2.jpg'],
      medium: 'pen and whiteout on paper',
      title: 'A flash of light',
    },
  ],

  [ProjectNamesEnum.WORKS_ON_CARDBOARD]: [
    {
      date: '2023-09-11',
      images: ['/nyc/2023-09-11.jpg'],
      medium: 'gouache on carton board',
      title: 'Figs and bar tools',
      dimensions: '6x8"',
      available: false,
    },
    {
      date: '2023-09-10',
      images: ['/nyc/2023-09-10.jpg'],
      title: 'First time here',
      medium: 'gouache on carton board',
      dimensions: '6x8"',
      available: true,
      cost: 125,
    },
  ],

  [ProjectNamesEnum.MT_GRETNA_2023]: [
    {
      images: ['/mount-gretna/07-08-23-martha-sun.jpg'],
      title: "Martha's sun",
      medium: 'watercolor & gouache on paper',
      dimensions: '8x10"',
      date: '2023-07-08',
      available: false,
    },
    {
      images: ['/mount-gretna/06-01-23.jpg'],
      title: 'Nature shapes',
      medium: 'watercolor & gouache on carton board',
      dimensions: '8x10"',
      date: '2023-06-01',
      available: false,
    },
    {
      images: ['/mount-gretna/06-01-23-self-p.jpg'],
      title: 'Self portrait',
      medium: 'oil on carton board',
      dimensions: '10x8"',
      date: '2023-06-01',
      available: false,
    },
    {
      images: ['/mount-gretna/07-08-23-the-tree.jpg'],
      title: 'The tree',
      medium: 'oil on carton boards',
      dimensions: '24x12.5"',
      date: '2023-07-08',
      available: true,
      cost: 240,
    },
    {
      images: ['/mount-gretna/07-08-22.jpg'],
      title: 'A rock and two roads',
      medium: 'oil on birch',
      dimensions: '24x24"',
      date: '2023-07-08',
      available: true,
      cost: 240,
    },
    {
      images: ['/mount-gretna/07-06-23-rain.jpg'],
      title: 'Inside on a rainy day',
      medium: 'oil on birch',
      dimensions: '24x24"',
      date: '2023-07-06',
      available: true,
      cost: 240,
    },
    {
      images: ['/mount-gretna/06-28-23-rain.jpg'],
      title: 'From under the porch on a rainy day',
      medium: 'oil on three carton boards',
      dimensions: '9x36"',
      date: '2023-06-28',
      available: true,
      cost: 240,
    },
    {
      images: ['/mount-gretna/06-25-23-night.jpg'],
      title: 'Night light',
      medium: 'oil on carton board',
      dimensions: '8x10"',
      date: '2023-06-25',
      available: true,
      cost: 240,
    },
    {
      images: ['/mount-gretna/06-25-23-branches.jpg'],
      title: 'Sticks, leaves, and moss',
      medium: 'oil on two carton boards',
      dimensions: '9x24"',
      date: '2023-06-25',
      available: true,
      cost: 240,
    },
  ],

  [ProjectNamesEnum.BIRDS_OF_NY_2023]: [
    {
      images: ['/nyc/2022-12-1-tufted-titmouse.jpg'],
      title: 'Tufted titmouse',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      images: ['/nyc/2022-12-1-red-winged-blackbird.jpg'],
      title: 'Red winged blackbird',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      images: ['/nyc/2022-12-1-oriole.jpg'],
      title: 'Oriole',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      images: ['/nyc/2022-12-1-northern-flicker.jpg'],
      title: 'Northern flicker',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      images: ['/nyc/2022-12-1-northern-cardinal.jpg'],
      title: 'Northern cardinal',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
    {
      images: ['/nyc/2022-12-1-eastern-bluebird.jpg'],
      title: 'Eastern bluebird',
      medium: 'watercolor on paper',
      dimensions: '10x8"',
      date: '2022-12-01',
      available: false,
    },
  ],

  [ProjectNamesEnum.GSHI_2022]: [
    {
      images: ['/maine/2022-6-30-neil.jpg'],
      title: 'Neil, 2022',
      medium: 'pen on paper',
      dimensions: '14x11"',
      available: false,
      cost: 125,
      date: '2022-06-30',
    },
    {
      images: ['/maine/2022-7-1-wc.jpg'],
      title: 'A seal jumped for fish',
      medium: 'watercolor on paper',
      dimensions: '18x24"',
      available: false,
      date: '2022-07-01',
      cost: 730,
    },
    {
      images: ['/maine/2022-6-29-wc.jpg'],
      title: 'A slug sat in my palette',
      medium: 'watercolor on paper',
      dimensions: '18x24"',
      available: false,
      date: '2022-06-29',
      cost: 730,
    },
    {
      images: ['/maine/2022-7-1-water-wc.jpg'],
      title: 'From under the bridge',
      medium: 'watercolor on paper',
      dimensions: '18x24"',
      available: false,
      date: '2022-07-01',
      cost: 730,
    },
    {
      images: ['/maine/2022-6-27.jpg'],
      title: 'Great Spruce Head Island',
      medium: 'acrylic on board',
      dimensions: '12x9"',
      available: false,
      date: '2022-06-27',
    },
    {
      images: ['/maine/2022-6-28.jpg'],
      title: 'Great Spruce Head Island',
      medium: 'acrylic on board',
      dimensions: '12x9"',
      available: false,
      date: '2022-06-28',
      cost: 270,
    },
  ],

  [ProjectNamesEnum.PETS]: [
    {
      images: ['/pets/25-Lainey.jpg'],
      title: 'Lainey',
      medium: 'iPad',
      available: false,
      date: '2025-08-05',
      dimensions: '14x10" printed',
    },
    {
      available: true,
      date: '2025-04-05',
      dimensions: '8x10"',
      images: ['/mokuhanga/2025-04-05-cat-flower.jpg'],
      medium: 'watercolor on Rives BFK cream',
      title: 'Miso being bad',
    },
    {
      available: true,
      date: '2025-04-05',
      dimensions: '8x10"',
      images: ['/mokuhanga/2025-04-05-xena.jpg'],
      medium: 'watercolor on Rives BFK cream',
      title: 'Xena the seal',
    },
    {
      images: ['/pets/2023-01-31-Ollie.jpg'],
      title: 'Milo',
      medium: 'iPad',
      available: false,
      date: '2023-01-31',
      dimensions: 'n/a',
    },
    {
      images: ['/pets/2023-01-31-Ethan.jpg'],
      title: 'Ethan',
      medium: 'iPad',
      available: false,
      date: '2023-01-31',
      dimensions: 'n/a',
    },
    {
      images: ['/pets/2022-5-Dean.jpg'],
      title: 'Dean',
      medium: 'iPad',
      available: false,
      date: '2022-05-01',
      dimensions: 'n/a',
    },
    {
      images: ['/pets/2021-12-6-jerry.png'],
      title: 'Jerry',
      medium: 'iPad',
      available: false,
      date: '2021-12-06',
      dimensions: 'n/a',
    },
    {
      images: ['/pets/2020-brisket.jpg'],
      title: 'Brisket',
      medium: 'watercolor on paper',
      dimensions: '14x10"',
      available: false,
      date: '2020-01-01',
    },
    {
      images: ['/pets/2020-angus.jpg'],
      title: 'Angus',
      medium: 'watercolor on paper',
      dimensions: '14x10"',
      available: false,
      date: '2020-01-01',
    },
    {
      images: ['/marcias-ranch/2020-9-5-toby.jpg'],
      title: 'Toby',
      medium: 'acrylic on board',
      dimensions: '4x4"',
      available: false,
      date: '2020-09-05',
    },
    {
      images: ['/marcias-ranch/2020-9-5-eartha.jpg'],
      title: 'Eartha',
      medium: 'acrylic on board',
      dimensions: '3x4"',
      available: false,
      date: '2020-09-05',
    },
    {
      images: ['/nyc/2021-12-25.jpg'],
      title: 'Miso',
      medium: 'iPad',
      available: false,
      date: '2021-12-25',

      dimensions: 'n/a',
    },
    {
      images: ['/nyc/2021-12-24-xena.jpg'],
      title: 'Xena',
      medium: 'iPad',
      available: false,
      date: '2021-12-24',
      dimensions: 'n/a',
    },
  ],

  [ProjectNamesEnum.MARCIAS_RANCH_2020]: [
    {
      images: ['/marcias-ranch/2020-8-14-purple-sky.JPG'],
      title: 'Sunset',
      medium: 'watercolor on paper',
      dimensions: '8x11.5"',
      available: false,
      date: '2020-08-14',
    },
    {
      images: ['/marcias-ranch/2020-8-14-pink-sky.JPG'],
      title: 'Sunset',
      medium: 'watercolor on paper',
      dimensions: '8x11.5"',
      available: false,
      date: '2020-08-14',
    },
    {
      images: ['/marcias-ranch/2020-07-16-peonies.jpg'],
      title: 'Peonies',
      medium: 'acrylic on board',
      dimensions: '6x8"',
      available: true,
      date: '2020-07-16',
    },
    {
      images: ['/marcias-ranch/2020-07-17-hollyhocks.jpg'],
      title: 'Hollyhocks',
      medium: 'acrylic on board',
      dimensions: '6x8"',
      available: true,
      date: '2020-07-17',
    },
    {
      images: ['/marcias-ranch/2020-07-18-purples.jpg'],
      title: 'Purple sage',
      medium: 'acrylic on board',
      dimensions: '6x8"',
      available: false,
      date: '2020-07-18',
    },
    {
      images: ['/marcias-ranch/2020-08-01-succulent.jpg'],
      title: 'Succulent',
      medium: 'acrylic on board',
      dimensions: '9x12"',
      available: true,
      date: '2020-08-01',
      cost: 250,
    },
    {
      images: ['/marcias-ranch/2020-8-23-clouds-mtns.jpg'],
      title: 'Mountains and clouds',
      medium: 'acrylic on board',
      dimensions: '6x6"',
      available: true,
      date: '2020-08-23',
      cost: 110,
    },
    {
      images: ['/marcias-ranch/2020-8-23-clouds.jpg'],
      title: 'Clouds',
      medium: 'acrylic on board',
      dimensions: '6x6"',
      available: true,
      date: '2020-08-23',
      cost: 110,
    },
    {
      images: ['/marcias-ranch/2020-8-23-cows.jpg'],
      title: 'Cows',
      medium: 'acrylic on board',
      dimensions: '6x6"',
      available: true,
      date: '2020-08-23',
      cost: 110,
    },
    {
      images: ['/marcias-ranch/2020-8-30-diptych.jpg'],
      title: 'Leaves',
      medium: 'acrylic on panels',
      dimensions: '12x12"', // not right
      available: true,
      date: '2020-08-30',
    },
    {
      images: ['/marcias-ranch/2020-8-31-pregnant-cow.jpg'],
      title: 'Pregnant cow',
      medium: 'acrylic on board',
      dimensions: '6x8"',
      available: true,
      date: '2020-08-31',
    },
    {
      images: ['/marcias-ranch/2020-9-2-pool.jpg'],
      title: 'Pool',
      medium: 'acrylic on board',
      dimensions: '6x8"',
      available: false,
      date: '2020-09-02',
    },
    {
      images: ['/marcias-ranch/2020-9-5-casita.jpg'],
      title: 'The Casita',
      medium: 'acrylic on board',
      dimensions: '9x12"',
      available: true,
      date: '2020-09-05',
    },
    {
      images: ['/marcias-ranch/2020-9-5-i-came-from-you.jpg'],
      title: 'I came from you',
      medium: 'acrylic on board',
      dimensions: '9x12"',
      available: false,
      date: '2020-09-05',
    },
    {
      images: ['/marcias-ranch/2020-9-7-road.jpg'],
      title: 'The road',
      medium: 'acrylic on board',
      dimensions: '9x12"', // not right
      available: false,
      date: '2020-09-07',
    },
  ],

  [ProjectNamesEnum.OAXACA_2022]: [
    {
      images: ['/oaxaca/2022-10-08.jpg'],
      title: 'Nature study, 2022',
      medium: 'watercolor on paper',
      dimensions: '16x12"',
      available: false,
      date: '2022-10-08',
    },
    {
      images: ['/oaxaca/2022-09-13-print.jpg'],
      title: 'Untitled, edition of 5',
      medium: 'woodcut, ink on cotton',
      dimensions: '7.5x9.5"',
      available: true, // 2 avail?
      date: '2022-09-13',
      cost: 180,
    },
    {
      images: ['/oaxaca/2022-10-20.jpg'],
      title: 'Flowers, edition of 10',
      medium: 'etching, ink on cotton',
      dimensions: '7.6x7.6"',
      available: true,
      date: '2022-10-20',
      cost: 185,
    },
    {
      images: ['/oaxaca/2022-09-05.jpg'],
      title: 'Bedroom at night, 2022',
      medium: 'ink on bristol',
      dimensions: '8x24"',
      available: false,
      cost: 250,
      date: '2022-09-05',
    },
    {
      images: ['/oaxaca/2022-09-11.jpg'],
      title: 'Untitled, 2022',
      medium: 'pen on paper',
      dimensions: '14x11"',
      available: false,
      cost: 200,
      date: '2022-09-11',
    },
    {
      images: ['/oaxaca/2022-10-04.jpg'],
      title: 'Buddies',
      medium: 'watercolor on paper',
      dimensions: '16x12"',
      available: true,
      cost: 400,
      date: '2022-10-04',
    },
    {
      images: ['/oaxaca/2022-09-20.JPG'],
      title: 'Nature sketch',
      medium: 'watercolor on paper',
      dimensions: '10x12"',
      available: false,
      date: '2022-09-20',
    },
    {
      images: ['/oaxaca/2022-09-09.jpg'],
      title: 'Night study',
      medium: 'watercolor on paper',
      dimensions: '16x12"',
      available: false,
      date: '2022-09-09',
    },
    {
      images: ['/oaxaca/2022-09-30.jpg'],
      title: 'Flowers in space, 2022',
      medium: 'acrylic on three boards',
      dimensions: '16x16"',
      available: true,
      date: '2022-09-30',
      cost: 820,
    },
    {
      images: ['/oaxaca/2022-09-23.jpg'],
      title: 'Flowers, 2022',
      medium: 'acrylic on two boards',
      dimensions: '10x16"',
      available: false,
      date: '2022-09-23',
    },
    {
      images: ['/oaxaca/2022-09-22-corner.jpg'],
      title: 'Add it to the wall series!, 2022',
      medium: 'acrylic on canvas',
      dimensions: '10x8"',
      available: false,
      date: '2022-09-22',
    },
    {
      images: ['/oaxaca/2022-09-19.jpg'],
      title: 'Rainy season, 2022',
      medium: 'acrylic on canvas',
      dimensions: '6x8"',
      available: true,
      date: '2022-09-19',
      cost: 150,
    },
    {
      images: ['/oaxaca/2022-09-17.jpg'],
      title: 'To stay, 2022',
      medium: 'acrylic on two boards',
      dimensions: '12x18"',
      available: false,
      date: '2022-09-17',
      cost: 540,
    },
    {
      images: ['/oaxaca/2022-09-10.jpg'],
      title: 'Night porch, 2022',
      medium: 'acrylic on two boards',
      dimensions: '8x16"',
      available: false,
      date: '2022-09-10',
      cost: 320,
    },
  ],

  [ProjectNamesEnum.PAROS_2022]: [
    ...roseSeries,
    // coffee drawings ?
    {
      images: ['/paros-greece/2022-3-27-bread.jpg'],
      title: 'Holy bread, 2022',
      medium: 'graphite and gouache on gray paper',
      dimensions: '11.75x15.25"',
      available: true,
      cost: 235,
      date: '2022-03-27',
    },
    {
      images: ['/paros-greece/2022-3-self-portrait.jpg'],
      title: 'Self portrait, 2022',
      medium: 'graphite and gouache on gray paper',
      dimensions: '20x14.5"',
      available: false,
      cost: 235,
      date: '2022-03-27',
    },
    {
      images: ['/paros-greece/2022-3-23-flowers.jpg'],
      title: 'Untitled, 2022',
      medium: 'acrylic on paper',
      dimensions: '29x40"',
      available: false,
      date: '2022-03-23',
    },
    {
      images: ['/paros-greece/2022-4-morandi.jpg'],
      title: 'Untitled, 2022',
      medium: 'oil on board',
      dimensions: '9x12"',
      available: false,
      date: '2022-04-01',
    },
    {
      images: ['/paros-greece/2022-4-still-bird.jpg'],
      title: 'Untitled, 2022',
      medium: 'oil on board',
      dimensions: '11x11"',
      available: false,
      date: '2022-04-01',
    },
    {
      images: ['/paros-greece/2022-4-cezanne-still.jpg'],
      title: 'Untitled, 2022',
      medium: 'oil on canvas',
      dimensions: '19.75x19.75"',
      available: false,
      date: '2022-04-01',
    },
  ],

  [ProjectNamesEnum.INTERIORS_2023]: [
    {
      images: ['/nyc/2023-01-26.jpg'],
      title: 'Maquette, 2023',
      medium: 'acrylic on board',
      dimensions: '10x8"',
      available: true,
      cost: 240,
      date: '2023-01-26',
    },
    {
      images: ['/nyc/2023-01-23.jpg'],
      title: 'Untitled, 2023',
      medium: 'acrylic on board',
      dimensions: '10x8"',
      available: false,
      cost: 240,
      date: '2023-01-23',
    },
    {
      images: ['/nyc/2023-01-15.jpg'],
      title: 'Finding space, 2023',
      medium: 'acrylic on two boards',
      dimensions: '12x18"',
      available: false,
      cost: 540,
      date: '2023-01-15',
    },
    {
      images: ['/nyc/2023-01-14-2.jpg'],
      title: 'Yin yang, 2023',
      medium: 'acrylic on two boards',
      dimensions: '12x18"',
      available: false,
      cost: 540,
      date: '2023-01-14',
    },
    {
      images: ['/nyc/2023-01-04.jpg'],
      title: "The sun's going down, 2023",
      medium: 'acrylic on board',
      dimensions: '10x8"',
      available: false,
      cost: 240,
      date: '2023-01-04',
    },
  ],

  [ProjectNamesEnum.CLOTHING]: [
    {
      images: [
        '/clothing/2025-shorts-front.jpeg',
        '/clothing/2025-shorts-back.jpeg',
      ],
      title: 'Chickens on the farm',
      medium: 'acrylic on shorts',
      available: true,
      cost: 225,
      date: '2025-03-01',
    },
    {
      images: [
        '/clothing/2025-lilies-front.jpeg',
        '/clothing/2025-lilies-back.jpeg',
      ],
      title: 'Lilies',
      medium: 'acrylic on shirt',
      available: false,
      date: '2025-03-01',
    },
    {
      images: [
        '/clothing/2025-rinad-front.jpeg',
        '/clothing/2025-rinad-back.jpeg',
      ],
      title: 'Sunflowers and tomatoes',
      medium: 'acrylic on shirt',
      available: false,
      date: '2025-03-01',
    },
    {
      images: [
        '/clothing/25-antoine-shorts-f.jpg',
        '/clothing/25-antoine-shorts-b.jpg',
      ],
      title: "Antoine's shorts – Maria the sheep",
      medium: 'fabric pen on shorts',
      available: false,
      date: '2025-05-01',
    },
    {
      images: ['/clothing/25-jlo-front.jpg', '/clothing/25-jlo-back.jpg'],
      title: "Kate's shirt – Jackruit and apples",
      medium: 'acrylic on shirt',
      available: false,
      date: '2025-07-01',
      cost: 225,
    },
    {
      images: ['/clothing/2025-peacock.jpeg'],
      title: 'Peacock',
      medium: 'acrylic on torn linen bedsheet',
      available: false,
      date: '2025-03-01',
    },
    {
      images: [
        '/clothing/2025-seth-front.jpeg',
        '/clothing/2025-seth-back.jpeg',
        '/clothing/2025-seth-side.jpeg',
        '/clothing/2025-seth-front-off.jpeg',
        '/clothing/2025-seth-back-off.jpeg',
      ],
      title: 'France, landscapes, and cocktails',
      medium: 'acrylic on shirt',
      available: false,
      date: '2025-03-01',
    },
    {
      images: [
        '/clothing/2025-first-one-f.jpeg',
        '/clothing/2025-first-one-b.jpeg',
      ],
      title: 'Fruits and flowers',
      medium: 'acrylic on shirt',

      available: false,
      date: '2025-03-01',
    },
    {
      images: [
        '/clothing/2025-flower-jacob-front.jpeg',
        '/clothing/2025-flower-jacob-side.jpeg',
      ],
      title: 'Flowers and France',
      medium: 'acrylic on shirt',
      available: false,
      date: '2025-03-01',
    },
    {
      images: [
        '/clothing/2025-cat-bar-front.jpeg',
        '/clothing/2025-cat-bar-back.jpeg',
      ],
      title: 'Cats at the bar',
      medium: 'acrylic on shirt',
      available: false,
      date: '2025-03-01',
    },
    {
      images: ['/clothing/25-conor-f.jpg', '/clothing/25-conor-b.jpg'],
      title: "Conor's shirt – CA landscape",
      medium: 'acrylic on shirt',
      available: false,
      date: '2025-06-01',
    },
  ],
};

export const getArtworkPath = (
  artwork: Artwork | HomepageArtwork,
  project?: ProjectNamesEnum
) => {
  return `${project ? `project/${project}/` : ''}${artwork.date}-${artwork.title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/,/g, '-')
    .replace(/\//g, '-')}`;
};

// const penAndPencil: Artwork[] = [
//   {
//     images: ['/nyc/2021-09-26-roof-plants.jpg'],
//     title: 'Rooftop plants, 2021',
//     medium: 'graphite on paper',
//     dimensions: '14x17"',
//     available: true,
//     cost: 310,
//     date: '2021-09-26',
//   },
//   {
//     images: ['/canada/2022-7-12-jimmy.jpg'],
//     title: 'Jimmy, 2022',
//     medium: 'pen on paper',
//     dimensions: '14x11"',
//     available: false,
//     cost: 125,
//     date: '2022-07-12',
//   },
//   {
//     images: ['/canada/2022-7-12-shelley-milo.jpg'],
//     title: 'Shelley and Milo, 2022',
//     medium: 'pen on paper',
//     dimensions: '14x11"',
//     available: false,
//     cost: 125,
//     date: '2022-07-12',
//   },
//   {
//     images: ['/nc/2022-08-23.jpg'],
//     title: 'The back yard, 2022',
//     medium: 'ink on bristol',
//     dimensions: '8x24"',
//     available: false,
//     cost: 250,
//     date: '2022-08-23',
//   },
//   {
//     images: ['/nc/2022-08-24.jpg'],
//     title: 'Dry Creek Trail, 2022',
//     medium: 'ink on bristol',
//     dimensions: '11x24"',
//     available: false,
//     cost: 345,
//     date: '2022-08-24',
//   },
// ];

// const miscWatercolor: Artwork[] = [
//   // 2022 and earlier
//   {
//     images: ['/nc/2022-6-18.jpg'],
//     title: 'The red tree again',
//     medium: 'watercolor on paper',
//     dimensions: '4x6"',
//     available: false,
//     date: '2022-06-18',
//   },
//   {
//     images: ['/nc/2022-6-17.jpg'],
//     title: 'The red tree',
//     medium: 'watercolor on paper',
//     dimensions: '4x6"',
//     available: false,
//     date: '2022-06-17',
//   },
//   {
//     images: ['/paros-greece/2022-2-church.jpg'],
//     title: 'Church',
//     medium: 'watercolor on paper',
//     dimensions: '9x12"',
//     available: false,
//     date: '2022-02-01',
//   },
//   {
//     images: ['/nc/2020-6-29-rosemary-field.jpg'],
//     title: "Rosemary's farm",
//     medium: 'watercolor on paper',
//     dimensions: '5.5x12"',
//     available: false,
//     date: '2020-06-29',
//   },
//   {
//     images: ['/nc/2020-5-jlo.jpg'],
//     title: 'North Carolina home',
//     medium: 'watercolor on paper',
//     dimensions: '4x6"',
//     available: false,
//     date: '2020-05-01',
//   },
//   {
//     images: ['/nc/2020-4-18-barn.jpg'],
//     title: "Rosemary's barn",
//     medium: 'watercolor on paper',
//     dimensions: '5x8"',
//     available: false,
//     date: '2020-04-18',
//   },
//   {
//     images: ['/canada/2017-canada-sketch.jpg'],
//     title: 'The Big House',
//     medium: 'watercolor on paper',
//     dimensions: '5x8"',
//     available: false,
//     date: '2017-01-01',
//   },
// ];

// const iPad: Artwork[] = [
//   {
//     images: ['/nyc/2023-01-05.JPG'],
//     title: 'Mood, 2023',
//     medium: 'iPad',
//     dimensions: '10x10"',
//     available: true, // prints
//     date: '2023-01-05',
//     notes:
//       'Signed prints available. Printed on 100% cotton fine art paper. $240',
//   },
//   {
//     images: ['/nyc/2022-11-08-tree.jpg'],
//     title: 'The colors, 2022',
//     medium: 'iPad',
//     dimensions: '12x12", 16x16"',
//     available: true, // prints
//     date: '2022-11-08',
//     notes:
//       'Signed prints available. 12x12" for $60, 16x16" for $100. Printed on 100% cotton fine art paper',
//   },
//   {
//     images: ['/nyc/2022-10-27-brooklyn-grange.JPG'],
//     title: 'Brooklyn Grange rooftop, 2022',
//     medium: 'iPad',
//     dimensions: '12x8"',
//     available: true, // prints
//     date: '2022-10-27',
//     notes:
//       'Signed prints available. 12x8" for $50. Printed on 100% cotton fine art paper',
//   },
//   {
//     images: ['/paros-greece/2022-2-9-bowl.png'],
//     title: 'Untitled, 2022',
//     medium: 'iPad',
//     available: false,
//     date: '2022-02-09',
//     notes:
//       'Signed prints available. 12x8" for $50. Printed on 100% cotton fine art paper',
//   },
//   {
//     images: ['/nc/2021-12-27.png'],
//     title: "Mom and dad's back yard, 2021",
//     medium: 'iPad',
//     available: false,
//     date: '2021-12-27',
//   },
//   {
//     images: ['/canada/2021-11-17-canada.jpg'],
//     title: 'Untitled, 2021',
//     medium: 'iPad',
//     available: false,
//     date: '2021-11-17',
//   },
//   {
//     images: ['/canada/2021-11-17-canada.jpg'],
//     title: 'Untitled, 2021',
//     medium: 'iPad',
//     available: false,
//     date: '2021-11-17',
//   },
//   {
//     images: ['/marcias-ranch/2021-11-15-Holly.jpg'],
//     title: 'Hollyhocks, 2021',
//     medium: 'iPad',
//     available: false,
//     date: '2021-11-15',
//   },
// ];

type HomepageArtwork = Artwork & {
  project: ProjectNamesEnum;
};
export const homepageArtworks: HomepageArtwork[] = [
  {
    available: true,
    date: '2025-04-05',
    dimensions: '8x10"',
    images: ['/mokuhanga/2025-04-05-cat-flower.jpg'],
    medium: 'watercolor on Rives BFK cream',
    title: 'Miso being bad',
    project: ProjectNamesEnum.MOKUHANGA,
  },
  {
    available: true,
    date: '2025-04-05',
    dimensions: '8x10"',
    images: ['/mokuhanga/2025-04-05-xena.jpg'],
    medium: 'watercolor on Rives BFK cream',
    title: 'Xena the seal',
    project: ProjectNamesEnum.MOKUHANGA,
  },
  {
    available: false,
    date: '2025-04-05',
    dimensions: '8x10"',
    images: ['/mokuhanga/2025-04-05-chickens.jpg'],
    medium: 'watercolor on Rives BFK cream',
    title: 'Chickens',
    project: ProjectNamesEnum.MOKUHANGA,
  },
  {
    date: '2023-09-11',
    images: ['/nyc/2023-09-11.jpg'],
    medium: 'gouache on carton board',
    title: 'Figs and bar tools',
    dimensions: '6x8"',
    available: false,
    project: ProjectNamesEnum.WORKS_ON_CARDBOARD,
  },
  {
    date: '2023-09-10',
    images: ['/nyc/2023-09-10.jpg'],
    title: 'First time here',
    medium: 'gouache on carton board',
    dimensions: '6x8"',
    available: true,
    cost: 125,
    project: ProjectNamesEnum.WORKS_ON_CARDBOARD,
  },
  {
    images: ['/nyc/2023-11-26.jpg'],
    title: 'Golden light',
    medium: 'oil on canvas',
    dimensions: '40x26"',
    available: false,
    date: '2023-01-26',
    project: ProjectNamesEnum.CAFE_SERIES,
  },
  {
    images: ['/nyc/2024-02-08.jpeg'],
    title: 'Untitled',
    medium: 'oil on cardboard',
    dimensions: '10x10"',
    available: true,
    cost: 240,
    date: '2024-02-08',
    project: ProjectNamesEnum.CAFE_SERIES,
  },
  {
    available: true,
    date: '2024-06-01',
    dimensions: '8x5"',
    images: ['/2024-animal-world/24-deer-in-thicket.jpg'],
    medium: 'pen and whiteout paper',
    title: 'Deer in thicket',
    project: ProjectNamesEnum.ANIMAL_WORLD_2024,
  },
  {
    available: true,
    date: '2024-06-01',
    dimensions: '12x6.5"',
    images: ['/2024-animal-world/bear.jpg'],
    medium: 'pen on paper',
    title: 'The wise bear',
    project: ProjectNamesEnum.ANIMAL_WORLD_2024,
  },
  {
    available: true,
    date: '2024-06-01',
    dimensions: '8x11"',
    images: ['/2024-animal-world/community.jpg'],
    medium: 'pen on paper',
    title: 'The infinite and the specific / Community',
    project: ProjectNamesEnum.ANIMAL_WORLD_2024,
  },
  {
    available: true,
    date: '2024-06-01',
    dimensions: '6.5x9"',
    images: ['/2024-animal-world/ghosts.jpg'],
    medium: 'pen and whiteout on paper',
    title: 'Ghosts',
    project: ProjectNamesEnum.ANIMAL_WORLD_2024,
  },
  {
    available: true,
    date: '2024-06-01',
    dimensions: '13x6"',
    images: ['/2024-animal-world/hidden-bear.jpg'],
    medium: 'pen and whiteout on paper',
    title: 'Hidden bear',
    project: ProjectNamesEnum.ANIMAL_WORLD_2024,
  },
];
