import { useNavigate } from 'react-router-dom';
import { Artwork, getArtworkPath, ProjectNamesEnum } from '../projects';

export const Gallery = ({
  artworks,
  layout = 'masonry',
}: {
  artworks: Artwork[];
  layout?: 'masonry' | 'centered';
}) => {
  const navigate = useNavigate();

  const goToArtwork = (artwork: Artwork) => {
    navigate(
      getArtworkPath(
        artwork,
        'project' in artwork
          ? (artwork.project as ProjectNamesEnum)
          : undefined
      )
    );
  };

  if (layout === 'centered') {
    return (
      <div className='flex items-center justify-center gap-4 p-4 h-[calc(100dvh-3rem)] max-h-[calc(100dvh-3rem)] min-h-0 overflow-hidden'>
        {artworks.map((artwork, i) => (
          <div
            key={i}
            className='hover:cursor-pointer h-full min-w-0 flex items-center justify-center'
            onClick={() => goToArtwork(artwork)}
          >
            <img
              src={artwork.images[0]}
              alt={artwork.title}
              className='max-h-full max-w-full object-contain'
            />
          </div>
        ))}
      </div>
    );
  }

  if (artworks.length > 1) {
    return (
      <div className='p-4'>
        <div className='columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2'>
          {artworks.map((artwork, i) => (
            <div
              key={i}
              className='hover:cursor-pointer w-full rounded-xl object-cover break-inside-avoid'
              onClick={() => goToArtwork(artwork)}
            >
              <img src={artwork.images[0]} alt={artwork.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  const singleArtwork = artworks[0];
  if (singleArtwork) {
    return (
      <div
        className='flex items-center justify-center p-4 h-[calc(100dvh-3rem)] max-h-[calc(100dvh-3rem)] min-h-0 overflow-hidden cursor-pointer'
        onClick={() => goToArtwork(singleArtwork)}
      >
        <img
          src={singleArtwork.images[0]}
          alt={singleArtwork.title}
          className='max-h-full max-w-full object-contain'
        />
      </div>
    );
  }
};
