import { useParams } from 'react-router-dom';
import { ProjectNamesEnum, Projects } from './projects';

export function Project() {
  const { name } = useParams<{ project: string; name: string }>();
  const project = Projects[name as ProjectNamesEnum];

  if (!project) {
    return (
      <main className='flex-1 p-6 md:ml-64'>
        <div>Project not found.</div>
      </main>
    );
  }

  return (
    <main className='flex-1 p-6 md:ml-64'>
      <img src={project.image} alt={project.title} className='mb-4' />
      <p>{project.description}</p>
    </main>
  );
}
