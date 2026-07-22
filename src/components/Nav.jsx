const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/60 bg-base/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-muted tracking-tight">
          <span className="text-amber">region:</span> moshik-cloud
        </a>
        <ul className="flex gap-6 font-mono text-xs uppercase tracking-widest text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
