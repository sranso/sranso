import { useParams } from 'react-router-dom';
import { Artworks, ProjectNamesEnum, Projects } from './projects';
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
      <p className='text-md font-medium'>{project.title}</p>
      {project.description && (
        <div className='max-w-3xl text-gray-800 mt-2'>
          {project.description}
        </div>
      )}
      <div className='max-w-7xl mx-auto'>
        <Gallery artworks={artworks} />
      </div>
    </main>
  );
}
