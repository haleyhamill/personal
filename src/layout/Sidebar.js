import './Sidebar.css';

function Sidebar({ setSelectedProject }) {
  const options = [
    { key: 'home', name: 'Home' },
    { key: 'celebrate', name: 'Celebrate' },
  ];

  return (
    <div className="sidebar">
      <h1>Haley Hamill</h1>
      <ul>
        {options.map((option) => (
          <li
            key={option.key}
            onClick={() => setSelectedProject(option.key)}
            className="sidebar-item"
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
