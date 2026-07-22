# Portfolio

My personal portfolio site — built to show cloud consulting employers what
I've actually shipped, not just what I claim I can do.

**Live site:** _add your deployed URL here once live_

## Why this exists

Most of my strongest projects sit behind OAuth or are private by design, so
a portfolio site is where I surface the architecture, the trade-offs, and
the "here's what actually broke and how I fixed it" details that a locked
demo can't show on its own.

## Stack

- **React 19 + Vite** — component structure, fast local dev
- **Tailwind CSS** — design tokens defined in `tailwind.config.js`
- Deployed as a static build (`npm run build` → `dist/`) — works on S3 +
  CloudFront, Azure Static Web Apps, GitHub Pages, or Vercel

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

```
src/
├── App.jsx              — page composition
├── index.css             — design tokens (colors, fonts) + Tailwind entry
└── components/
    ├── Nav.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx       — case study content lives here
    ├── ProjectCard.jsx    — reusable card layout
    └── Contact.jsx
```

## Filling in your content

Everything real about the projects is centralized in
`src/components/Projects.jsx` — edit the `projects` array to update copy,
tech stack tags, or highlights. Each project entry has:

- `repoHref` — link to the project's own GitHub repo
- `demoHref` — link to a short walkthrough video/GIF (recommended for any
  project gated behind login, so a recruiter doesn't have to sign up to see
  it in action)

Contact links live in `src/components/Contact.jsx`.

## Deploying

**Option A — AWS (S3 + CloudFront):** matches the stack used in the
`Milestone` project below; provision a bucket + distribution via Terraform,
then `aws s3 sync dist/ s3://your-bucket --delete`.

**Option B — GitHub Pages / Vercel / Netlify:** point the build command at
`npm run build` and the output directory at `dist/`.

## License

Personal project — feel free to fork the structure, swap in your own
content and design tokens.
