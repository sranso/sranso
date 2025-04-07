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
        <p className='font-medium'>Projects</p>
        <a href='/project/2025-mokuhanga' className='block hover:underline'>
          2025 Mokuhanga
        </a>
        <a href='/project/2024-cafe-series' className='block hover:underline'>
          2024 Cafe series
        </a>
        <a href='/project/2024-animal-world' className='block hover:underline'>
          2024 Animal world
        </a>
        <a
          href='/project/2024-surprise-encounter'
          className='block hover:underline'
        >
          2024 Surprise encounter
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
