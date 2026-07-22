export default function About() {
  return (
    <section id="about" className="relative max-w-5xl mx-auto px-6 py-24">
      <div className="grid sm:grid-cols-[120px_1fr] gap-8">
        <p className="font-mono text-xs uppercase tracking-widest text-amber pt-1">
          01 / about
        </p>
        <div>
          <h2 className="font-display text-3xl mb-6">
            From process coordination to production pipelines
          </h2>
          <div className="space-y-4 text-muted leading-relaxed max-w-2xl">
            <p>
              I started out in quality and process coordination at Schneider
              Electric, then moved into client account management at Great
              Eastern — roles that had nothing to do with cloud
              infrastructure on paper, but taught me how to translate messy,
              cross-team problems into something a stakeholder can actually
              act on. That habit turned out to transfer well.
            </p>
            <p>
              I studied Computer Engineering at NTU, and cloud is where that
              foundation and my operations background actually meet: I like
              systems with moving parts, and I like being the person who can
              explain why they're moving that way. My hands-on work has been
              Azure-first — Functions, Container Apps, Azure SQL, DevOps
              pipelines — and I'm currently building out AWS depth
              deliberately, rather than treating it as a checkbox.
            </p>
            <p>
              Everything below this section was built to prove that, not just
              claim it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
