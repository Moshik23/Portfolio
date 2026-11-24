import ProjectCard from "./ProjectCard";
import scrapbookShot from "../assets/memories/memories-scrapbook.jpg";
import addShot from "../assets/memories/memories-add.jpg";
import monthShot from "../assets/memories/memories-month.jpg";
import monthsShot from "../assets/memories/memories-months.jpg";

// TODO: swap the "#" hrefs below for your real repo links and demo
// walkthroughs (see README.md → "Filling in your content").
const projects = [
  {
    id: "secondserve",
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
    id: "resume-tailor",
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
    id: "memories",
    title: "Memories",
    tagline:
      "A private, scrapbook-style site for my partner and me: photos by month, a map of places we've been, notes to each other, and multi-photo uploads straight from our phones. Built solo, end to end, on serverless AWS.",
    status: "live",
    statusLabel: "AWS",
    stack: ["S3", "CloudFront", "Lambda", "API Gateway", "DynamoDB", "ACM", "Terraform", "HCP Terraform", "GitHub Actions"],
    highlights: [
      "Phones upload straight to S3 through one-time presigned PUT links, signed in the Lambda with a hand-written SigV4 implementation (zero dependencies, verified against the AWS SDK); the browser resizes each photo and reads its EXIF date and GPS first",
      "API Gateway sits behind CloudFront at /api/* under the same password as the site, and every Lambda rejects requests without a CloudFront-only secret header, so the API can't be called around the CDN",
      "Deploys use GitHub OIDC with a role limited to the site bucket and one distribution, and explicitly denied the uploads/ prefix. Traced an earlier AssumeRoleWithWebIdentity failure to GitHub's immutable subject claims and fixed the trust policy",
      "Built so a release can never lose a photo: the deploy sync excludes user uploads, S3 versioning with lifecycle expiry keeps deleted files recoverable, and DynamoDB has point-in-time recovery",
    ],
    note: "Started as a private gift and rebuilt from a static timeline into a living scrapbook we both add to. Photos are blurred in the screenshots; the architecture and security decisions are the portfolio-relevant part.",
    screenshots: [
      { src: scrapbookShot, caption: "Scrapbook home with a running timer" },
      { src: addShot, caption: "Multi-photo upload with EXIF date and place" },
      { src: monthShot, caption: "A month's page" },
      { src: monthsShot, caption: "Every month at a glance" },
    ],
    repoHref: "https://github.com/Moshik23/memories",
  },
  {
    id: "domaine-seetloo",
    title: "Domaine Seetloo Booking Portal",
    tagline:
      "A wedding venue booking system built for family in Mauritius, replacing a paper diary after a double-booking cost them a client.",
    status: "live",
    statusLabel: "AWS",
    stack: ["Next.js", "Prisma", "SQLite", "Terraform", "EC2", "Nginx", "Let's Encrypt", "GitHub Actions", "AWS Systems Manager"],
    highlights: [
      "Conflict-detection engine is the core feature: every booking is checked against existing ones inside a database transaction, not just client-side, so two staff sessions can't double-book the same date",
      "GitHub Actions OIDC role assumption was denied by this AWS account's new-account fraud restrictions — fell back to a narrowly-scoped IAM user whose access key can only send SSM commands to this one instance",
      "Deploys run through AWS Systems Manager Run Command, not SSH — the security group only opens port 22 to one fixed IP, with 80/443 reserved for the app itself",
      "Nginx reverse proxy + Let's Encrypt HTTPS in front of a single EC2 instance running a plain SQLite file — deliberately simple for a single-venue, low-traffic internal tool",
    ],
    note: "Built end to end for family — from a print layout matching their actual paper forms down to the AWS deploy pipeline. Real production use, not a demo.",
    repoHref: "https://github.com/Moshik23/domaine-seetloo-booking",
    demoHref: "https://youtu.be/axsgIrIgOtM",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    tagline:
      "The site you're looking at right now — proof the infrastructure story is real, not just resume copy.",
    status: "live",
    statusLabel: "AWS",
    stack: ["React", "Vite", "Tailwind", "S3", "CloudFront", "ACM", "Terraform", "GitHub Actions"],
    highlights: [
      "Fully private S3 bucket, reachable only via CloudFront Origin Access Control scoped to this distribution's ARN",
      "Terraform-managed end to end, with remote state in S3 and DynamoDB-based locking — safe to run from any machine, not just the one that first applied it",
      "Custom domain with ACM-issued HTTPS covering both the apex domain and www",
      "GitHub Actions auto-builds and redeploys on every push to main, authenticating to AWS through OIDC with a narrowly scoped role (no stored AWS keys)",
    ],
    note: "A little recursive, yes — but the infrastructure behind this page is a genuine project, not just hosting.",
    repoHref: "https://github.com/Moshik23/Portfolio",
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
