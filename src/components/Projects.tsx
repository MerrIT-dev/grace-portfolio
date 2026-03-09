import { useState } from "react"

type Project = {
  id: number
  name: string
  description: string
  category: string
  year: string
  accent: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "MODO Dashboard",
    description:
      "Visual productivity dashboard for tracking routines and progress.",
    category: "Productivity / UX",
    year: "2026",
    accent: "from-indigo-500/30 to-cyan-400/20",
  },
  {
    id: 2,
    name: "Travel Map Journal",
    description:
      "Location-based travel logging experience with interactive maps.",
    category: "Travel / Map UX",
    year: "2026",
    accent: "from-cyan-500/30 to-emerald-400/20",
  },
  {
    id: 3,
    name: "Finance Tracker",
    description:
      "Minimal personal finance tracker with category analytics.",
    category: "Finance / Dashboard",
    year: "2026",
    accent: "from-violet-500/30 to-sky-400/20",
  },
  {
    id: 4,
    name: "Search App",
    description:
      "Real-time search interface built with API integration.",
    category: "Frontend / API",
    year: "2026",
    accent: "from-fuchsia-500/30 to-cyan-400/20",
  },
]

function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0])

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <p className="projects-label">Selected Work</p>
          <h2 className="projects-title">Projects</h2>
        </div>

        <div className="projects-layout">
          <div className="projects-list">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-item ${
                  activeProject.id === project.id ? "project-item-active" : ""
                }`}
                onMouseEnter={() => setActiveProject(project)}
              >
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 className="project-name">{project.name}</h3>

                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="project-preview">
            <div className="project-preview-card">
              <div
                className={`project-preview-glow bg-gradient-to-br ${activeProject.accent}`}
              />

              <div className="project-preview-ui">
                <div className="preview-topbar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="preview-content">
                  <p className="preview-label">{activeProject.category}</p>
                  <h3 className="preview-title">{activeProject.name}</h3>
                  <p className="preview-text">{activeProject.description}</p>

                  <div className="preview-panels">
                    <div className="preview-panel preview-panel-large" />
                    <div className="preview-panel-row">
                      <div className="preview-panel" />
                      <div className="preview-panel" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects