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

      <nav className='space-y-2'>
        <a href='/about' className='block hover:underline'>
          About
        </a>
        <a href='#' className='block hover:underline'>
          Shop
        </a>
        <a href='#' className='block hover:underline'>
          Instagram
        </a>
        <a href='#' className='block hover:underline'>
          Newsletter
        </a>
        <a href='#' className='block hover:underline'>
          Contact
        </a>
      </nav>
    </aside>
  );
};
