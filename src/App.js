// src/App.js
import React, { useState } from 'react';
import './App.css';
import Home from './projects/home/Home';
import Celebrate from './projects/celebrate/Celebrate';

function App() {
  // Track the selected project (empty string shows a welcome message)
  const [selectedProject, setSelectedProject] = useState('');

  const handleProjectSelection = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h1>Projects</h1>
        <ul>
          <li onClick={() => handleProjectSelection('')}>Home</li>
          <li onClick={() => handleProjectSelection('celebrate')}>Celebrate</li>
          {/* You can add more list items for other projects */}
        </ul>
      </div>
      <div className="main">
        {selectedProject === 'celebrate' ? <Celebrate /> : <Home />}
      </div>
    </div>
  );
}

export default App;
