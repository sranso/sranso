import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Sidebar } from '../src/components/Sidebar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sidebar />
    <main className='flex-1 p-6 md:ml-64'>
      <p>about</p>
    </main>
  </StrictMode>
);
