import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Artwork } from './Artwork';
import { Project } from './Project';
import { NotFound } from './NotFound';

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project/:projectName' element={<Project />} />
        <Route path='/project/:projectName/:artwork' element={<Artwork />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
