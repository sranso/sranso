import { useNavigate } from 'react-router-dom';
import { Artwork } from '../projects';

export const Gallery = ({ artworks }: { artworks: Artwork[] }) => {
  const navigate = useNavigate();
  return (
    <div className='p-4'>
      <div className='columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2'>
        {artworks.map((artwork, i) => (
          <div
            key={i}
            className='hover:cursor-pointer w-full rounded-xl object-cover break-inside-avoid'
            onClick={() => {
              navigate(`${artwork.path}`);
            }}
          >
            <img src={artwork.image} alt={artwork.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
