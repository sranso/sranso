import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Sidebar } from './Sidebar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sidebar />
    <main className='flex-1 p-6 md:ml-64'>
      <p>hi</p>
      {/* Your main content here */}
    </main>
  </StrictMode>
);
