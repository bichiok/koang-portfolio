import { useState } from "react";
import "./Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  demo: string;
  github: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern and responsive portfolio website built to showcase my skills, projects, education, and experience.",
    category: "Web Apps",
    technologies: ["React", "TypeScript", "Bootstrap"],
    image: "/projects/portfolio.png",
    demo: "#",
    github: "#",
    features: [
      "Fully responsive design",
      "Modern user interface",
      "Reusable React components",
      "Responsive Bootstrap layout",
    ],
  },
  {
    id: 2,
    title: "Task Manager",
    description:
      "A full-stack task management application for creating, organizing, and tracking daily tasks.",
    category: "Web Apps",
    technologies: ["React", "Node.js", "Express"],
    image: "/projects/task-manager.png",
    demo: "#",
    github: "#",
    features: [
      "Create and manage tasks",
      "Task filtering",
      "REST API integration",
      "Responsive dashboard",
    ],
  },
  {
    id: 3,
    title: "Weather API",
    description:
      "A weather application that retrieves real-time weather information through an external API.",
    category: "APIs",
    technologies: ["React", "Node.js", "API"],
    image: "/projects/weather.png",
    demo: "#",
    github: "#",
    features: [
      "Real-time weather data",
      "API integration",
      "Location search",
      "Responsive interface",
    ],
  },
  {
    id: 4,
    title: "E-Commerce Store",
    description:
      "A modern online store interface featuring products, shopping cart functionality, and responsive design.",
    category: "Web Apps",
    technologies: ["React", "Bootstrap", "JavaScript"],
    image: "/projects/ecommerce.png",
    demo: "#",
    github: "#",
    features: [
      "Product browsing",
      "Shopping cart",
      "Responsive design",
      "Product filtering",
    ],
  },
  {
    id: 5,
    title: "Mobile App UI",
    description:
      "A clean mobile application interface designed with usability and modern UI principles in mind.",
    category: "Mobile Apps",
    technologies: ["React Native", "JavaScript"],
    image: "/projects/mobile.png",
    demo: "#",
    github: "#",
    features: [
      "Mobile-first design",
      "Simple navigation",
      "Reusable components",
      "Modern interface",
    ],
  },
  {
    id: 6,
    title: "UI/UX Design System",
    description:
      "A reusable design system containing components and layouts for modern web applications.",
    category: "Designs",
    technologies: ["Figma", "UI/UX", "Design"],
    image: "/projects/design.png",
    demo: "#",
    github: "#",
    features: [
      "Reusable components",
      "Consistent typography",
      "Responsive layouts",
      "Modern design system",
    ],
  },
];

const categories = ["All", "Web Apps", "Mobile Apps", "APIs", "Designs"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projects[0]
  );

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="projects-page py-5">
      <div className="container">

        {/* Hero */}
        <div className="projects-hero mb-5">
          <span className="section-label">MY WORK</span>

          <h1>
            My <span>Projects</span>
          </h1>

          <p>
            Here are some of the projects I've built. Each one helped me
            learn, grow, and improve my skills as a developer.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters mb-5">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div
                className={`project-card ${
                  selectedProject?.id === project.id ? "selected" : ""
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className="project-content">

                  <div className="project-tags">
                    <span>{project.category}</span>

                    {project.technologies.slice(0, 1).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-card-footer">
                    <button className="view-project">
                      View Project →
                    </button>

                    <a
                      href={project.github}
                      onClick={(event) => event.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Project */}
        {selectedProject && (
          <div className="project-details mt-5">

            <div className="row g-4 align-items-center">

              {/* Project Preview */}
              <div className="col-lg-7">
                <div className="project-preview">

                  <div className="preview-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />

                </div>
              </div>

              {/* Project Information */}
              <div className="col-lg-5">

                <div className="project-tags">
                  <span>{selectedProject.category}</span>

                  {selectedProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <h2>{selectedProject.title}</h2>

                <p className="details-description">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="technologies mb-4">
                  {selectedProject.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-buttons mb-4">

                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-demo"
                  >
                    View Live Demo ↗
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-source"
                  >
                    View Source ↗
                  </a>

                </div>

                {/* Features */}
                <h5>Key Features</h5>

                <ul className="feature-list">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;