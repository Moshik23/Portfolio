import ProjectCard from "./ProjectCard";

// TODO: swap the "#" hrefs below for your real repo links and demo
// walkthroughs (see README.md → "Filling in your content").
const projects = [
  {
    title: "SecondServe",
    tagline:
      "A cloud-native food surplus recovery platform for Singapore's hawker ecosystem — built as a capstone project with a vendor-facing app for tiered, time-based discounting.",
    status: "demo",
    statusLabel: "Azure",
    stack: ["Azure Functions", "Azure SQL", "Container Apps", "Terraform", "React", "FastAPI", "Docker"],
    highlights: [
      "Timer-triggered Azure Function automatically discounts surplus stock the closer it gets to closing time",
      "Vendor-facing React UI for live discount control, countdown timers, and deal browsing",
      "Full IaC deployment via Terraform, with Azure DevOps pipelines and firewall-scoped Azure SQL access",
    ],
    note: "Real environment work: resolved Python version conflicts, ODBC driver setup, and Azure SQL firewall rules during deployment.",
    repoHref: "https://github.com/Moshik23/SecondServe",
    demoHref: "https://youtu.be/yg7a0Do0-x0",
    secondaryHref: "https://youtu.be/uuSBZlsWh0o",
    secondaryLabel: "ci/cd demo",
  },
  {
    title: "AI Resume Tailor",
    tagline:
      "Upload a resume and a job description, get back ATS keyword gaps, a tailored rewrite, and a before/after match score.",
    status: "live",
    statusLabel: "Azure",
    stack: ["FastAPI", "Azure Container Apps", "Terraform", "Azure DevOps", "Anthropic API"],
    highlights: [
      "User-assigned managed identity — deliberately not system-assigned, to avoid the chicken-and-egg problem of a container needing Key Vault access before its first revision exists",
      "Secrets (API keys, site password) live only in Key Vault, read via managed identity — never in env vars or pipeline YAML",
      "CI/CD authenticates via workload identity federation (OIDC) — no long-lived service principal secrets",
      "Basic auth check uses a constant-time comparison to avoid timing attacks",
    ],
    note: "This one's gated behind auth for real users — see the walkthrough for a full click-through.",
    repoHref: "https://github.com/Moshik23/resume-updater",
    demoHref: "https://youtu.be/56b7KRppkfE",
  },
  {
    title: "Memories",
    tagline:
      "A full-stack serverless platform for a shared photo timeline, an interactive map of places visited, a month-by-month calendar, and a guestbook — built solo end to end.",
    status: "live",
    statusLabel: "AWS",
    stack: ["S3", "CloudFront", "Lambda", "API Gateway", "DynamoDB", "Terraform", "GitHub Actions"],
    highlights: [
      "S3 fully private, reachable only via CloudFront Origin Access Control scoped to one distribution's ARN",
      "Guestbook backend on API Gateway → Lambda → DynamoDB, with the Lambda role scoped to exactly two actions",
      "GitHub Actions auto-deploys on push; when OIDC role assumption hit AWS's new-account fraud restrictions, fell back to scoped access keys rather than blocking — and documented why",
      "Scale-to-zero by design: on-demand DynamoDB and Lambda keep this running at effectively $0",
    ],
    note: "Originally built as a private gift project — the architecture and security decisions are the portfolio-relevant part.",
    repoHref: "https://github.com/Moshik23/memories",
    demoHref: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-5xl mx-auto px-6 py-24">
      <div className="grid sm:grid-cols-[120px_1fr] gap-8">
        <p className="font-mono text-xs uppercase tracking-widest text-amber pt-1">
          03 / deployed
        </p>
        <div className="space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
