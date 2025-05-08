import { useParams } from 'react-router-dom';
import { Artworks, ProjectNamesEnum, Projects } from './projects.tsx';
import { Gallery } from './components/Gallery';

export function Project() {
  const { projectName } = useParams<{ projectName: string }>();
  const project = Projects[projectName as ProjectNamesEnum];
  const artworks = Artworks[projectName as ProjectNamesEnum];

  if (!project) {
    return (
      <main className='flex-1 p-6 md:ml-64'>
        <div>Project not found.</div>
      </main>
    );
  }

  return (
    <main className='flex-1 p-6 md:ml-64'>
      {project.description && (
        <div className='max-w-7xl mx-auto'>{project.description}</div>
      )}
      <div className='max-w-7xl mx-auto'>
        <Gallery artworks={artworks} />
      </div>
    </main>
  );
}
