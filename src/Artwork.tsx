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
        <div className='flex md:flex-row flex-col gap-4 justify-between h-full'>
          <div className='max-h-[40rem] grow'>
            <img
              src={artwork.image}
              alt={artwork.title}
              className='mb-4 max-w-11/12 mx-auto max-h-full'
            />
          </div>
          <div className='min-w-36 md:mt-8 shrink-0 mr-6 text-wrap max-w-60'>
            <p className='italic'>{artwork.title}</p>
            <p className='text-gray-700 mt-1'>{artwork.medium}</p>
            {artwork.dimensions && (
              <p className=' text-gray-700'>{artwork.dimensions}</p>
            )}
            {artwork.href && (
              <p>
                <a
                  href={artwork.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 underline'
                >
                  View the piece
                </a>
              </p>
            )}
            <p className='text-gray-700'>{artwork.date}</p>
            <p className='text-gray-700'>
              {artwork.available ? 'Available' : 'Not available'}
            </p>
            {artwork.cost && (
              <p className='text-gray-700'>Cost: ${artwork.cost}</p>
            )}
            {artwork.available && (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='mailto:sranso@gmail.com'
              >
                Email to purchase
              </a>
            )}
            {artwork.description && (
              <p className='mt-3 text-sm text-gray-700'>
                {artwork.description}
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
