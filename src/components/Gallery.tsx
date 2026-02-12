import { useNavigate } from 'react-router-dom';
import { Artwork, getArtworkPath, ProjectNamesEnum } from '../projects';

export const Gallery = ({ artworks }: { artworks: Artwork[] }) => {
  const navigate = useNavigate();
  if (artworks.length > 1) {
  return (
    <div className='p-4'>
      <div className='columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2'>
        {artworks.map((artwork, i) => (
          <div
            key={i}
            className='hover:cursor-pointer w-full rounded-xl object-cover break-inside-avoid'
            onClick={() => {
              navigate(
                getArtworkPath(
                  artwork,
                  'project' in artwork
                    ? (artwork.project as ProjectNamesEnum)
                    : undefined
                )
              );
            }}
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
    <div className='p-4' onClick={() => {
      navigate(
        getArtworkPath(
          singleArtwork,
          'project' in singleArtwork
            ? (singleArtwork.project as ProjectNamesEnum)
            : undefined
        )
      );
    }}>
      <img src={singleArtwork.images[0]} alt={singleArtwork.title} />
    </div>
  );
}

};
