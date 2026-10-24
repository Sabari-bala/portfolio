import { about } from "../../config/portfolio.js";

export default function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
      <div className="space-y-4">
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[15px] leading-[1.7] text-body"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <aside className="h-fit rounded-lg border border-line bg-card p-6">
        <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
          At a glance
        </h3>
        <dl className="mt-4 space-y-3.5">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 text-[13px] leading-snug text-body">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}