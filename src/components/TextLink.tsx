export function TextLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} target='_blank' className='text-blue-500 hover:underline'>
      {children}
    </a>
  );
}
