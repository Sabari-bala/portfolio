import { approach } from "../../config/portfolio.js";

export default function Approach() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
      {approach.map((item, index) => (
        <div key={item.title} className="bg-card p-6">
          <span className="text-[11px] font-semibold tabular-nums tracking-[0.16em] text-accent-text">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-ink">
            {item.title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
