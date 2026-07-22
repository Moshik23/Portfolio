# Portfolio

My personal portfolio site — built to show cloud consulting employers what
I've actually shipped, not just what I claim I can do.

**Live site:** https://moshikseetloo.com

## Why this exists

Most of my strongest projects sit behind OAuth or are private by design, so
a portfolio site is where I surface the architecture, the trade-offs, and
the "here's what actually broke and how I fixed it" details that a locked
demo can't show on its own.

## Stack

- **React 19 + Vite** — component structure, fast local dev
- **Tailwind CSS** — design tokens defined in `tailwind.config.js`
- **AWS S3 + CloudFront** — static hosting behind a CDN, S3 kept fully
  private and reachable only via CloudFront Origin Access Control
- **ACM** — HTTPS certificate covering both the apex domain and `www`
- **Terraform** — the entire deployment (S3, CloudFront, ACM wiring, bucket
  policy) is defined as code in `terraform/main.tf`
- **Remote state** — Terraform state lives in a dedicated S3 bucket with
  DynamoDB-based locking, so infra changes can be applied safely from any
  machine, not just the one that first ran `terraform apply`
- **GitHub Actions** — every push to `main` automatically builds and
  deploys the site (`.github/workflows/deploy.yml`): install, build, sync
  to S3, invalidate CloudFront

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Building for production

```bash
npm run build   # outputs to dist/
npm run preview # sanity-check the production build locally
```

## Project structure

src/
├── App.jsx — page composition
├── index.css — design tokens (colors, fonts) + Tailwind entry
├── assets/
│ └── memories/ — sanitized screenshots for the Memories project card
└── components/
├── Nav.jsx
├── Hero.jsx
├── About.jsx
├── Skills.jsx
├── Projects.jsx — case study content lives here
├── ProjectCard.jsx — reusable card layout (links, screenshot gallery)
└── Contact.jsx
terraform/
└── main.tf — S3 + CloudFront + ACM + custom domain, as code
.github/workflows/
└── deploy.yml — CI/CD: build + deploy on every push to main

## Filling in your content

Everything real about the projects is centralized in
`src/components/Projects.jsx` — edit the `projects` array to update copy,
tech stack tags, or highlights. Each project entry supports:

- `repoHref` — link to the project's own GitHub repo
- `demoHref` — link to a walkthrough video (optional; omit for projects
  without one)
- `secondaryHref` / `secondaryLabel` — a second link, e.g. a separate video
  showing the CI/CD pipeline in action
- `screenshots` — an array of `{ src, caption }` for projects better shown
  as images than video (e.g. anything with personal/private content that's
  been cropped or redacted before inclusion)

Contact links live in `src/components/Contact.jsx`.

## Deploying

Infrastructure is provisioned via Terraform:

```bash
cd terraform
terraform init
terraform apply \
  -var="bucket_name=moshik-portfolio-2026" \
  -var="domain_name=moshikseetloo.com" \
  -var="acm_certificate_arn=<your-acm-cert-arn>"
```

The site itself deploys automatically on every push to `main` via GitHub
Actions. To deploy manually instead:

```bash
npm run build
aws s3 sync dist/ s3://moshik-portfolio-2026 --delete
aws cloudfront create-invalidation --distribution-id <your-distribution-id> --paths "/*"
```

## License

Personal project — feel free to fork the structure, swap in your own
content and design tokens.