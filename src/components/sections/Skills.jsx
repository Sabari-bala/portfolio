import { skillGroups } from "../../config/portfolio.js";

export default function Skills() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {skillGroups.map((group) => (
        <div
          key={group.label}
          className="grid gap-2 py-3 sm:grid-cols-[180px_1fr] sm:gap-10"
        >
          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
              {group.label}
            </h3>
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded border border-line bg-card px-2.5 py-1 text-[13px] font-medium text-body transition-colors hover:border-line-strong"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
