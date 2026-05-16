import { projects } from "@/lib/portfolio-data";
import type { CSSProperties } from "react";

export function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <article
          className="project-card"
          key={project.title}
          style={{ "--delay": `${index * 80}ms` } as CSSProperties}
        >
          <p>{project.type}</p>
          <h3>{project.title}</h3>
          <span>{project.description}</span>
          <ul aria-label={`${project.title} stack`}>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href={project.href} aria-label={`Discuss ${project.title}`}>
            Discuss project
          </a>
        </article>
      ))}
    </div>
  );
}
