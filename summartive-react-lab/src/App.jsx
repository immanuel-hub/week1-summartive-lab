import { useState } from 'react';
import './components/styling/App.css';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

const initialProjects = [
  { id: 1, title: 'Weather App', description: 'A simple weather forecast application' },
  { id: 2, title: 'Todo List', description: 'Basic task management system' },
  { id: 3, title: 'Calculator', description: 'Simple math calculator with basic operations' },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const addProject = (newProject) => {
    setProjects(prev => [...prev, newProject]);
  };

  return (
   <div className="app">
    <header className="header">
      <h1>Personal Project Showcase App</h1>
    </header>

  <main className="main">
    <ProjectForm onAdd={addProject} />
      <section className="projects-section">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <ProjectList projects={filteredProjects} />
      </section>
   </main>
    </div>
  );
}

export default App;
