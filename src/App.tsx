import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './about';
import { Artwork } from './Artwork';

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project/:name' element={<Artwork />} />
      </Routes>
    </>
  );
}
