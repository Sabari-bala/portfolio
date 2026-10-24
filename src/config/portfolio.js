// Centralized portfolio content.
// Final recruiter-focused accuracy pass.

export const profile = {
  name: "Sabari Bala M R",
  monogram: "SB",
  title: "Python Full Stack Developer",
  location: "Chennai, India",
  email: "sabaribala7733@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/sabari-bala",
    github: "https://github.com/Sabari-bala",
  },
  hero: {
    eyebrow: "Python Full Stack Developer",
    intro:
      "I build secure, well-tested web apps with Django, DRF, React, and PostgreSQL. I focus on API design, authorization, and practical full-stack development.",
    workingWith: ["Python", "Django", "React", "PostgreSQL"],
  },
};

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    slug: "taskora-ai",
    name: "Taskora AI",
    eyebrow: "Multi-tenant SaaS / AI-assisted",
    summary:
      "AI-assisted project management platform that helps teams turn project ideas into structured plans, review proposed tasks, and manage work in a workspace.",
    highlights: [
      "Workspace-level permissions and five-role RBAC enforced at the queryset level.",
      "AI-generated project plans and task breakdowns validated against strict JSON Schema before user approval.",
      "Kanban-based task management with optimistic UI updates and automatic rollback on API failure.",
      "Django REST Framework backend with secure auth using in-memory access tokens and HttpOnly refresh cookies.",
    ],
    decisions: [
      "Built a three-layer backend (Views, Serializers, Services) to keep complex business logic entirely testable without HTTP.",
      "Engineered an LLM normalizer layer to map variable JSON key names to expected schemas, significantly reducing schema validation failures.",
    ],
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "Vite",
      "React Router",
      "TanStack Query",
      "Tailwind CSS",
      "dnd-kit",
      "SimpleJWT",
      "Groq API"
    ],
    repository: "https://github.com/Sabari-bala/taskora-ai",
    live: "https://taskora-ai-delta.vercel.app",
    theme: "violet",
  },
  {
    slug: "shortmetric",
    name: "ShortMetric",
    eyebrow: "URL shortener / Click analytics",
    summary:
      "Full-stack SaaS link management and click analytics platform. Features URL shortening, custom aliases, and interactive data visualizations.",
    highlights: [
      "URL shortening, custom aliases, link expiration controls, and QR code generation.",
      "Implemented DRF token authentication and user-scoped link management. The React client attaches credentials to API requests.",
      "Interactive Recharts dashboard transforms raw click events into time-series, device, and referrer breakdowns.",
      "Built a custom User-Agent parser from raw request strings to capture deep click metadata.",
    ],
    decisions: [
      "Diagnosed and resolved a Vercel build failure caused by Windows PowerShell injecting invisible Byte Order Marks (BOM) into files.",
      "Debugged PaaS deployment issues, including CORS misconfigurations and duplicated API paths, ensuring smooth Vercel-Render communication.",
    ],
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "TanStack Query",
      "Recharts",
      "Axios",
      "qrcode.react"
    ],
    repository: "https://github.com/Sabari-bala/ShortMetric",
    live: "https://shortmetric.vercel.app",
    theme: "emerald",
  },
];

export const skillGroups = [
  {
    label: "Backend",
    items: ["Python", "Django", "Django REST Framework"],
  },
  {
    label: "Frontend",
    items: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Database",
    items: ["SQL", "PostgreSQL", "SQLite"],
  },
  {
    label: "Testing & API",
    items: ["pytest", "Factory Boy", "Axios", "TanStack Query"],
  },
  {
    label: "Tools & Deployment",
    items: ["Git", "GitHub", "Vite", "Vercel", "Render", "Neon"],
  },
];

export const approach = [
  {
    title: "Clear API contracts",
    body: "Endpoints are designed around resources with predictable shapes, separating frontend and backend responsibilities.",
  },
  {
    title: "Backend authorization",
    body: "Authorization is enforced at the database and API level. User-level data isolation is a core requirement, not an afterthought.",
  },
  {
    title: "Validation at every boundary",
    body: "Incoming data and AI-generated output are strictly validated before reaching the database.",
  },
  {
    title: "Automated testing",
    body: "Testing focuses on core business rules, permissions, and edge cases where silent bugs become security or reporting problems.",
  },
  {
    title: "Environment-based config",
    body: "Secrets and API keys live in environment variables, ensuring safe deployment and reproducible setups.",
  },
];

export const about = {
  paragraphs: [
    "I'm an entry-level Python Full Stack Developer based in Chennai. I studied Biotechnology (B.Sc.) before training in Python Full Stack Development at QSpiders. That background taught me to work carefully with data, test assumptions, and document what I find, and I bring the same habits to debugging and data modeling.",
    "I work primarily with Django, Django REST Framework, React, and PostgreSQL. The part of engineering I focus on is the part that holds up under real use: workspace permissions, clean API contracts, and considered interfaces.",
    "The two projects on this page are where that work lives. Taskora AI is a multi-tenant platform with role-based access and human-approved AI workflows. ShortMetric is a focused study in data-heavy UI, URL shortening, and click analytics.",
  ],
  facts: [
    { label: "Location", value: "Chennai, India" },
    { label: "Training", value: "Python Full Stack Development, QSpiders" },
    { label: "Education", value: "B.Sc. Biotechnology, RVS College of Arts and Science" },
    { label: "Focus", value: "Django REST Framework, React, PostgreSQL" },
  ],
};

export const contact = {
  lead: "Seeking entry-level opportunities as a Python Developer, Full Stack Developer, Django Developer, or Junior Software Developer.",
};
