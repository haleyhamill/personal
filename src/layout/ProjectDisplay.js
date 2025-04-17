import Home from '../projects/home/Home';
import Celebrate from '../projects/celebrate/Celebrate';
import './ProjectDisplay.css';

const projectComponents = {
  home: Home,
  celebrate: Celebrate,
};

function ProjectDisplay({ selectedProject }) {
  // Get the component for the selected project, default to Home if not found
  const CurrentProject = projectComponents[selectedProject] || Home;

  return (
    <div className="project-display">
      <CurrentProject />
    </div>
  );
}

export default ProjectDisplay;
