import { useParams } from 'react-router-dom';
import { Artworks, getArtworkPath, ProjectNamesEnum } from './projects';

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
        <div className='flex gap-4 justify-between h-full'>
          <div className='max-h-[40rem] grow'>
            <img
              src={artwork.image}
              alt={artwork.title}
              className='mb-4 max-w-11/12 mx-auto max-h-full'
            />
          </div>
          <div className='min-w-36 mt-8 shrink-0 mr-6'>
            <p className='italic'>{artwork.title}</p>
            <p>{artwork.medium}</p>
            <p>{artwork.dimensions}</p>
            <p>{artwork.date}</p>
            <p>{artwork.available ? 'Available' : 'Not available'}</p>
            {artwork.cost && <p>Cost: ${artwork.cost}</p>}
            {artwork.available && (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='mailto:sranso@gmail.com'
              >
                Email to purchase
              </a>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
