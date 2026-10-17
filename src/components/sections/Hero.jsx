import { ArrowRight } from "lucide-react";
import { profile } from "../../config/portfolio.js";
import Button from "../ui/Button.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-accent-soft opacity-40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-5 pt-8 sm:pb-6 sm:pt-10">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-text">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {profile.hero.eyebrow}
        </p>

        <h1 className="mt-1.5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-[26px] lg:text-[28px]">
          {profile.name}
        </h1>

        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[15px]">
          {profile.hero.intro}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button href="#projects" variant="primary" size="md">
            View Projects
            <ArrowRight size={15} aria-hidden="true" />
          </Button>
          <Button href="#contact" variant="secondary" size="md">
            Get in Touch
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">
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
