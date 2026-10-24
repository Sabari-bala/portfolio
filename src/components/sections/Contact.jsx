import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "../icons/BrandIcons.jsx";
import { contact, profile } from "../../config/portfolio.js";
import Button from "../ui/Button.jsx";

function displayUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

const cardClass =
  "group flex items-center justify-between rounded-lg border border-line bg-card px-4 py-3.5 transition-colors hover:border-line-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const arrowClass =
  "text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5";

export default function Contact() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      <div>
        <p className="max-w-md text-[15px] font-medium leading-relaxed text-ink">
          {contact.lead}
        </p>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted">
          {contact.availability}
        </p>

        <div className="mt-5">
          <Button
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            aria-label={`Compose an email to ${profile.email} in Gmail (opens in a new tab)`}
          >
            <Mail size={15} aria-hidden="true" />
            {profile.email}
          </Button>
        </div>
      </div>

      <div className="grid gap-2 self-start">
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
          aria-label="LinkedIn profile (opens in a new tab)"
        >
          <span className="flex items-center gap-3">
            <Linkedin size={16} className="text-muted" />
            <span>
              <span className="block text-[13px] font-medium text-ink">LinkedIn</span>
              <span className="block text-[11px] text-muted">
                {displayUrl(profile.links.linkedin)}
              </span>
            </span>
          </span>
          <ArrowUpRight size={14} className={arrowClass} aria-hidden="true" />
        </a>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
          aria-label="GitHub profile (opens in a new tab)"
        >
          <span className="flex items-center gap-3">
            <Github size={16} className="text-muted" />
            <span>
              <span className="block text-[13px] font-medium text-ink">GitHub</span>
              <span className="block text-[11px] text-muted">
                {displayUrl(profile.links.github)}
              </span>
            </span>
          </span>
          <ArrowUpRight size={14} className={arrowClass} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}