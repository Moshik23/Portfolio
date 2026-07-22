export default function Contact() {
  return (
    <section id="contact" className="relative max-w-5xl mx-auto px-6 py-24">
      <div className="grid sm:grid-cols-[120px_1fr] gap-8">
        <p className="font-mono text-xs uppercase tracking-widest text-amber pt-1">
          04 / connect
        </p>
        <div>
          <h2 className="font-display text-3xl mb-4">Let's talk cloud</h2>
          <p className="text-muted max-w-lg leading-relaxed mb-8">
            Open to cloud consultant and cloud engineering roles. Happy to
            walk through the architecture behind any project above.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            {/* TODO: replace with your real contact links */}
            <a href="mailto:mseetloo@gmail.com" className="px-5 py-2.5 bg-amber text-base rounded font-medium hover:bg-amber/90 transition-colors">
              email me
            </a>
            <a href="https://www.linkedin.com/in/moshik-seetloo/" className="px-5 py-2.5 border border-line rounded hover:border-muted transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/Moshik23" className="px-5 py-2.5 border border-line rounded hover:border-muted transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <p className="mt-24 text-center font-mono text-xs text-muted/60">
        built with React, Vite, and Tailwind — deployed on AWS S3 + CloudFront
      </p>
    </section>
  );
}
