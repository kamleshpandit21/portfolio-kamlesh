
function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Project 1 */}
          <div className="col">
            <div className="project-card h-100">
              <div className="card-body text-center">
                <h5 className="card-title gradient-text">Portfolio Website</h5>
                <p className="card-text">
                  Responsive React portfolio showcasing my work and projects with smooth animations.
                </p>
                <a href="#" className="btn btn-glow mt-2">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col">
            <div className="project-card h-100">
              <div className="card-body text-center">
                <h5 className="card-title gradient-text">Weather App</h5>
                <p className="card-text">
                  Real-time weather app built with OpenWeather API and React hooks.
                </p>
                <a href="#" className="btn btn-glow mt-2">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col">
            <div className="project-card h-100">
              <div className="card-body text-center">
                <h5 className="card-title gradient-text">Task Manager</h5>
                <p className="card-text">
                  A simple task manager with CRUD features built using React and Local Storage.
                </p>
                <a href="#" className="btn btn-glow mt-2">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col">
            <div className="project-card h-100">
              <div className="card-body text-center">
                <h5 className="card-title gradient-text">E-commerce UI</h5>
                <p className="card-text">
                  A minimal e-commerce frontend built with React and Bootstrap.
                </p>
                <a href="#" className="btn btn-glow mt-2">View Project</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
