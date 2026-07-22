const groups = [
  {
    label: "Azure",
    color: "text-azure",
    items: ["Functions", "Container Apps", "Azure SQL", "Azure DevOps", "App Settings & Managed Identities"],
  },
  {
    label: "AWS",
    color: "text-amber",
    items: ["S3 + CloudFront", "Lambda", "API Gateway", "DynamoDB", "IAM", "CLF-C02 (in progress)"],
  },
  {
    label: "Infra & delivery",
    color: "text-good",
    items: ["Terraform", "Docker", "GitHub Actions", "CI/CD pipelines", "REST API design"],
  },
  {
    label: "Application",
    color: "text-ink",
    items: ["React", "FastAPI", "Python", "Node.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-5xl mx-auto px-6 py-24">
      <div className="grid sm:grid-cols-[120px_1fr] gap-8">
        <p className="font-mono text-xs uppercase tracking-widest text-amber pt-1">
          02 / stack
        </p>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className={`font-mono text-sm mb-3 ${g.color}`}>{g.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded border border-line text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
