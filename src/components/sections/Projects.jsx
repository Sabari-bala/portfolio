import { projects } from "../../config/portfolio.js";
import ProjectCard from "../projects/ProjectCard.jsx";

export default function Projects() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}