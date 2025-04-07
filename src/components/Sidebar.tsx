export const Sidebar = () => {
  return (
    <aside className='w-full md:w-64 p-6 md:fixed md:h-screen md:border-r border-gray-300 text-sm leading-relaxed'>
      <div className='mb-8'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
      </div>

      <nav className='space-y-2'>
        <a href='#' className='block hover:underline'>
          Info
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
