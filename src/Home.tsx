import { Gallery } from './components/Gallery';
import { homepageArtworks } from './projects';

export function Home() {
  return (
    <main className='flex-1 p-6 md:ml-64'>
      <Gallery artworks={homepageArtworks} />
    </main>
  );
}
