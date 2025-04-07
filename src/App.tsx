import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './about';
import { Artwork } from './Artwork';

export function App() {
  return (
    <>
      <main className='flex-1 p-6 md:ml-64'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project/:name' element={<Artwork />} />
        </Routes>
      </main>
    </>
  );
}
