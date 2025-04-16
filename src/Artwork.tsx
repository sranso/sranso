import { useParams } from 'react-router-dom';

const data: Record<
  string,
  { title: string; image: string; description: string }
> = {
  'artwork-a': {
    title: 'Artwork A',
    image: '/2024-surprise-encounter/24-moose.jpg',
    description: 'This is Artwork A.',
  },
  'artwork-b': {
    title: 'Artwork B',
    image: '/images/artwork-b.jpg',
    description: 'This is Artwork B.',
  },
};

export function Artwork() {
  const { artwork: artworkParam } = useParams<{ artwork: string }>();
  const artwork = data[artworkParam || ''];

  if (!artwork)
    return (
      <main className='flex-1 p-6 md:ml-64'>
        <div>Artwork not found.</div>
      </main>
    );

  return (
    <>
      <main className='flex-1 p-6 md:ml-64'>
        <img src={artwork.image} alt={artwork.title} className='mb-4' />
        <p>{artwork.description}</p>
      </main>
    </>
  );
}
