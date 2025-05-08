import { useParams } from 'react-router-dom';
import { Artworks, getArtworkPath, ProjectNamesEnum } from './projects.tsx';

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
  const artwork = artworks.find(
    (artwork) => getArtworkPath(artwork) === artworkParam
  );

  if (!artwork)
    return (
      <main className='flex-1 p-6 md:ml-64'>
        <div>Artwork not found.</div>
      </main>
    );

  return (
    <>
      <main className='flex-1 p-6 md:ml-64 h-full'>
        <div className='flex gap-4 h-full'>
          <div>
            <img
              src={artwork.image}
              alt={artwork.title}
              className='mb-4 max-h-4/5'
            />
          </div>
          <div className='min-w-32 mt-8 shrink-0'>
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
