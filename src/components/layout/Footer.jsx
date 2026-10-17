import { Mail } from "lucide-react";
import { Github, Linkedin } from "../icons/BrandIcons.jsx";
import { profile } from "../../config/portfolio.js";

const iconClass =
  "rounded-md p-2 text-muted transition-colors hover:bg-sunken hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-muted">
          &copy; {year} {profile.name}
        </p>
        <div className="flex items-center gap-1">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className={iconClass}
          >
            <Mail size={16} aria-hidden="true" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className={iconClass}
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className={iconClass}
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
