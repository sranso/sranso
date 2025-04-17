import { useParams } from 'react-router-dom';
import { Artworks, ProjectNamesEnum } from './projects';

export function Artwork() {
  const { projectName, artwork: artworkParam } = useParams<{
    projectName: string;
    artwork: string;
  }>();
  if (!artworkParam)
    return (
      <main className='flex-1 p-6 md:ml-64'>
        <div>Artwork not found.</div>
      </main>
    );
  const artworks = Artworks[projectName as ProjectNamesEnum];
  const artwork = artworks.find((artwork) => artwork.path === artworkParam);

  if (!artwork)
    return (
      <main className='flex-1 p-6 md:ml-64'>
        <div>Artwork not found.</div>
      </main>
    );

  return (
    <>
      <main className='flex-1 p-6 md:ml-64'>
        <div className='flex gap-4'>
          <div>
            <img src={artwork.image} alt={artwork.title} className='mb-4' />
          </div>
          <div className='flex-1 min-w-24 mt-8'>
            <p className='italic'>{artwork.title}</p>
            <p>{artwork.medium}</p>
            <p>{artwork.dimensions}</p>
            <p>{artwork.date}</p>
            <p>{artwork.available ? 'Available' : 'Not available'}</p>
          </div>
        </div>
      </main>
    </>
  );
}
