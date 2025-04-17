import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import ProjectDisplay from './ProjectDisplay';

function App() {
  const [selectedProject, setSelectedProject] = useState('home');

  return (
    <div className="App">
      <Sidebar setSelectedProject={setSelectedProject} />
      <ProjectDisplay selectedProject={selectedProject} />
    </div>
  );
}

export default App;
