export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden">
      {/* signature element: a faint architecture-diagram connecting the sections below */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] w-full opacity-60"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="lineFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E3B5E" stopOpacity="0" />
            <stop offset="30%" stopColor="#2E3B5E" stopOpacity="1" />
            <stop offset="100%" stopColor="#2E3B5E" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M 500 120 L 220 320 L 220 560" fill="none" stroke="url(#lineFade)" strokeWidth="1.5" strokeDasharray="4 6" />
        <path d="M 500 120 L 500 560" fill="none" stroke="url(#lineFade)" strokeWidth="1.5" strokeDasharray="4 6" />
        <path d="M 500 120 L 780 320 L 780 560" fill="none" stroke="url(#lineFade)" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="500" cy="120" r="5" fill="#E8A33D" className="node-dot" />
        <circle cx="220" cy="320" r="4" fill="#6FA8DC" />
        <circle cx="500" cy="320" r="4" fill="#6FA8DC" />
        <circle cx="780" cy="320" r="4" fill="#6FA8DC" />
      </svg>

      <div className="relative max-w-5xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6">
          status: actively deploying to production
        </p>
        <h1 className="font-display text-5xl sm:text-7xl leading-[1.05] mb-6">
          Moshik Seetloo <span className="text-muted">/</span>
          <br />
          Cloud Engineer, <span className="italic text-azure">multi-region</span>
        </h1>
        <p className="max-w-xl mx-auto text-muted text-lg leading-relaxed">
          Computer Engineering, NTU. Built my early career on Azure — now
          extending into AWS, one certification and one over-engineered side
          project at a time.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 font-mono text-sm">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-amber text-base font-medium rounded hover:bg-amber/90 transition-colors"
          >
            view deployments →
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-line rounded text-ink hover:border-muted transition-colors"
          >
            get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
