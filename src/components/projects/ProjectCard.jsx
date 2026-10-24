import { ArrowUpRight, Info } from "lucide-react";
import { Github } from "../icons/BrandIcons.jsx";
import Button from "../ui/Button.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-card p-6 sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-text">
        {project.eyebrow}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-muted">
        {project.summary}
      </p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-body">
            <span
              className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-lg border border-line bg-sunken p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-text">
          Design decisions
        </p>
        <ul className="mt-2 space-y-1.5">
          {project.decisions.map((item) => (
            <li key={item} className="text-[12px] leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5" aria-label="Technology stack">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-line bg-card px-2 py-0.5 text-[11px] font-medium text-body"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {project.repository ? (
          <Button
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            aria-label={`View ${project.name} repository on GitHub (opens in a new tab)`}
          >
            <Github size={14} />
            View Repository
          </Button>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-line-strong px-3 py-1.5 text-[12px] font-medium text-muted">
            View Repository coming soon
          </span>
        )}
        {project.live ? (
          <Button
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            aria-label={`View live site for ${project.name} (opens in a new tab)`}
          >
            <ArrowUpRight size={14} />
            View Live
          </Button>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-line-strong px-3 py-1.5 text-[12px] font-medium text-muted">
            View Live coming soon
          </span>
        )}
      </div>
      
      {project.live && (
        <div className="mt-3 space-y-1">
          <p className="flex items-center gap-1.5 text-[11px] text-muted">
            <Info size={12} aria-hidden="true" />
            Backend runs on a free tier. First load may take up to 60 seconds.
          </p>
          {project.demoNotice && (
            <p className="text-[11px] text-muted">
              {project.demoNotice}
            </p>
          )}
        </div>
      )}
    </article>
  );
}