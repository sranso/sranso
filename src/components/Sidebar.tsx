import { ProjectNamesEnum } from '../projects';

export const Sidebar = () => {
  return (
    <aside className='w-full md:w-64 p-6 md:fixed md:h-screen md:border-r border-gray-300 text-sm leading-relaxed'>
      <div className='mb-8'>
        <a href='/' className='logo font-bold'>
          Sarah Ransohoff
        </a>

        <p>
          Drawings, paintings, illustrations, & things that make me smile or
          laugh or feel strongly.
        </p>
      </div>

      <nav className='space-y-1'>
        <p className='font-medium text-gray-600 text-xs'>Projects</p>
        <a
          href={`/project/${ProjectNamesEnum.TREBOUL_2025}`}
          className='block hover:underline'
        >
          2025 Treboul
        </a>
        <div className='flex flex-col gap-1'>
          <p >Paros</p>
          <a
            href={`/project/${ProjectNamesEnum.PAROS_2025}`}
            className='block hover:underline ml-2'
            >
            2025
          </a>
          <a
            href={`/project/${ProjectNamesEnum.PAROS_2022}`}
            className='block hover:underline ml-2'
          >
            2022
          </a>
        </div>
        <a
          href={`/project/${ProjectNamesEnum.MOKUHANGA}`}
          className='block hover:underline'
        >
          2025 Mokuhanga
        </a>
        <a
          href={`/project/${ProjectNamesEnum.CLOTHING_2025}`}
          className='block hover:underline'
        >
          2025 Painted clothing
        </a>
        <a
          href={`/project/${ProjectNamesEnum.CAFE_SERIES}`}
          className='block hover:underline'
        >
          2024 Cafe series
        </a>
        <a
          href={`/project/${ProjectNamesEnum.ANIMAL_WORLD_2024}`}
          className='block hover:underline'
        >
          2024 Animal world
        </a>
        {/* <a
          href='/project/2024-surprise-encounter'
          className='block hover:underline'
        >
          2024 Surprise encounter
        </a> */}
        <a
          href={`/project/${ProjectNamesEnum.INTERIORS_2023}`}
          className='block hover:underline'
        >
          2023 Interiors
        </a>
        <a
          href={`/project/${ProjectNamesEnum.MT_GRETNA_2023}`}
          className='block hover:underline'
        >
          2023 Mt Gretna
        </a>
        <a
          href={`/project/${ProjectNamesEnum.BIRDS_OF_NY_2023}`}
          className='block hover:underline'
        >
          2023 Birds of NY
        </a>
        <a
          href={`/project/${ProjectNamesEnum.GSHI_2022}`}
          className='block hover:underline'
        >
          2022 Great Spruce Head Island
        </a>
        <a
          href={`/project/${ProjectNamesEnum.OAXACA_2022}`}
          className='block hover:underline'
        >
          2022 Oaxaca
        </a>
        <a
          href={`/project/${ProjectNamesEnum.MARCIAS_RANCH_2020}`}
          className='block hover:underline'
        >
          2020 Marcias Ranch
        </a>
        <a
          href={`/project/${ProjectNamesEnum.PETS}`}
          className='block hover:underline'
        >
          Pets
        </a>
        <a
          href={`/project/${ProjectNamesEnum.ILLUSTRATIONS_AND_CARTOONS}`}
          className='block hover:underline'
        >
          Illustrations & Cartoons
        </a>

        <div className='bg-gray-600 w-full h-px my-2'></div>
        <p className='font-medium text-gray-600 text-xs'>Silly sites</p>
        {/* <a className='block hover:underline' href='/art/cartoons'>
          The New Yorker
        </a> */}
        <a
          className='block hover:underline'
          href='https://prettygoodtherapy.com/'
          target='_blank'
        >
          Pretty Good Therapy
        </a>
        <a
          className='block hover:underline'
          href='https://sarah-got-a-job.vercel.app/'
          target='_blank'
        >
          Sarah Got A Job
        </a>
        <a
          className='block hover:underline'
          href='https://www.rhizomaticnetwork.art/'
          target='_blank'
        >
          rhizomaticnetwork.art
        </a>
        <a
          className='block hover:underline'
          href='https://scone-heads.com/'
          target='_blank'
        >
          Scone Heads
        </a>

        <div className='bg-gray-600 w-full h-px my-2'></div>
        <a href='/about' className='block hover:underline'>
          About
        </a>
        <a
          href='https://www.instagram.com/sranso'
          target='_blank'
          className='block hover:underline'
        >
          Instagram
        </a>
        <a
          href='mailto:sranso@gmail.com'
          target='_blank'
          className='block hover:underline'
        >
          Contact
        </a>
      </nav>
    </aside>
  );
};
