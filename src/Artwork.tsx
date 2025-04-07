import { useParams } from 'react-router-dom';

const data: Record<
  string,
  { title: string; image: string; description: string }
> = {
  'project-a': {
    title: 'Project A',
    image: '/images/project-a.jpg',
    description: 'This is Project A.',
  },
  'project-b': {
    title: 'Project B',
    image: '/images/project-b.jpg',
    description: 'This is Project B.',
  },
};

export function Artwork() {
  const { artwork } = useParams<{ artwork: string }>();
  const project = data[artwork || ''];

  if (!project) return <div>Project not found.</div>;

  return (
    <>
      <main className='flex-1 p-6 md:ml-64'>
        <img src={project.image} alt={project.title} className='mb-4' />
        <p>{project.description}</p>
      </main>
    </>
  );
}
