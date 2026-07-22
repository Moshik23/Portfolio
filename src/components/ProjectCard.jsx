const statusStyles = {
  live: "text-good border-good/40",
  demo: "text-amber border-amber/40",
  archived: "text-muted border-line",
};

export default function ProjectCard({
  title,
  tagline,
  status = "demo",
  statusLabel,
  stack = [],
  highlights = [],
  note,
  repoHref,
  demoHref,
}) {
  return (
    <article className="rounded-lg border border-line bg-elevated/60 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-display text-2xl">{title}</h3>
        <span
          className={`shrink-0 font-mono text-[11px] uppercase tracking-wider px-2 py-1 rounded border ${statusStyles[status]}`}
        >
          {statusLabel || status}
        </span>
      </div>
      <p className="text-muted leading-relaxed mb-5">{tagline}</p>

      <ul className="flex flex-wrap gap-2 mb-5">
        {stack.map((s) => (
          <li
            key={s}
            className="text-xs font-mono px-2 py-1 rounded bg-elevated2 text-muted"
          >
            {s}
          </li>
        ))}
      </ul>

      {highlights.length > 0 && (
        <ul className="space-y-2 mb-5">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-ink/90 leading-relaxed">
              <span className="text-amber mt-1.5 block h-1 w-1 rounded-full bg-amber shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {note && (
        <p className="text-xs font-mono text-muted border-l-2 border-line pl-3 mb-5 leading-relaxed">
          {note}
        </p>
      )}

      <div className="flex gap-4 font-mono text-xs uppercase tracking-wider">
        {demoHref && (
          <a href={demoHref} className="text-amber hover:underline">
            walkthrough →
          </a>
        )}
        {repoHref && (
          <a href={repoHref} className="text-muted hover:text-ink transition-colors">
            source →
          </a>
        )}
      </div>
    </article>
  );
}
