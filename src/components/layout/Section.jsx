export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  bordered = true,
}) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-line" : ""} scroll-mt-16 py-5 sm:py-6`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || description) && (
          <header className="mb-3 max-w-2xl sm:mb-4">
            {eyebrow && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink sm:text-[24px]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-[14px] leading-relaxed text-muted">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}