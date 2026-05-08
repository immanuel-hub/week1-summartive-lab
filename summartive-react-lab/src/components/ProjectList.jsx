function ProjectList({ projects }) {
  return (
    <div className="projects-list">
    {projects.length === 0 ? (
      <p className="no-results">No projects found.</p>
    ) : (
      projects.map((project) => (
     <div className="project-item" key={project.id}>
      <div className="project-icon">
        <svg viewBox="0 0 40 40" width="40" height="40">
          <line x1="8" y1="8" x2="32" y2="32" stroke="#333" strokeWidth="2"/>
          <line x1="32" y1="8" x2="8" y2="32" stroke="#333" strokeWidth="2"/>
        </svg>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
      ))
    )}
    </div>
  );
}

export default ProjectList;