import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin } from "../icons/BrandIcons.jsx";
import { profile } from "../../config/portfolio.js";
import Button from "../ui/Button.jsx";

export default function Hero() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;

  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-accent-soft opacity-40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-12 sm:pb-10 sm:pt-16">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-text">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {profile.hero.eyebrow}
        </p>

        <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
          {profile.name}
        </h1>

        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted sm:text-base">
          {profile.hero.intro}
        </p>

        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1 text-[12px] font-medium text-body shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            {profile.hero.availability}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button href="#projects" variant="primary" size="md">
            View Projects
            <ArrowRight size={15} aria-hidden="true" />
          </Button>
          <Button href="#contact" variant="secondary" size="md">
            Get in Touch
          </Button>
          
          <div className="flex items-center gap-1 sm:ml-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-md p-2 text-muted transition-colors hover:bg-sunken hover:text-[#181717] focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-md p-2 text-muted transition-colors hover:bg-sunken hover:text-[#0A66C2] focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose email in Gmail"
              className="rounded-md p-2 text-muted transition-colors hover:bg-sunken hover:text-[#EA4335] focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Proof Strip */}
        <div className="mt-8 flex flex-wrap gap-6 border-y border-line py-4 sm:gap-12">
          {profile.hero.proofs.map((proof) => (
            <div key={proof.label} className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-ink tabular-nums">
                {proof.value}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
                {proof.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Working with
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {profile.hero.workingWith.map((tech) => (
              <span
                key={tech}
                className="rounded border border-line bg-card px-2 py-0.5 text-[11px] font-medium text-body"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}