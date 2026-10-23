// Centralized portfolio content.
// Final verified accuracy pass based on strict codebase audit.

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
      "I build secure, well-tested web apps with Django, DRF, React, and PostgreSQL. I care about permissions, clean API contracts, and interfaces that hold up under real use.",
    workingWith: ["Python", "Django", "React", "PostgreSQL"],
  },
};

export const navigation = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
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
      "Production-style project management platform where AI acts as a planning co-pilot. Features 5-role access control and human approval before saving to the database.",
    highlights: [
      "Multi-tenant 5-role RBAC (Owner, Admin, Manager, Member, Viewer) with tenant isolation at the queryset level.",
      "AI co-pilot uses strict JSON Schema validation; zero AI writes hit the database without user approval.",
      "Optimistic Kanban board built with dnd-kit and TanStack Query, featuring automatic rollback on API failure.",
      "Secure JWT auth with in-memory access tokens and HttpOnly refresh cookies, covered by 200 tests (94% coverage).",
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
      "Full-stack SaaS-style link management and click analytics platform. Features secure token auth, custom URL aliases, dynamic QR codes, and interactive dashboards with device and browser breakdowns.",
    highlights: [
      "Secure token-based authentication, link management (CRUD), custom aliases, expiration controls, and dynamic QR code generation.",
      "Interactive analytics dashboard uses Recharts to transform raw click events into time-series, device, and referrer breakdowns.",
      "Backend querysets enforce strict per-user data isolation; React frontend uses protected routing and Axios interceptors.",
      "Built a custom User-Agent parser from raw request strings to capture deep click metadata without external dependencies.",
    ],
    decisions: [
      "Diagnosed and resolved a Vercel build failure caused by Windows PowerShell injecting invisible Byte Order Marks (BOM) into files.",
      "Debugged critical PaaS deployment issues, including CORS misconfigurations and duplicated API path routing (/api/api/), ensuring smooth communication between Vercel and Render.",
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
    items: ["Python", "Django", "Django REST Framework", "REST APIs", "SimpleJWT", "RBAC", "drf-spectacular"],
  },
  {
    label: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Router", "TanStack Query", "Radix UI"],
  },
  {
    label: "Data & Testing",
    items: ["PostgreSQL", "SQLite", "SQL", "pytest", "pytest-django", "Factory Boy"],
  },
  {
    label: "Tools & Deployment",
    items: ["Git", "GitHub", "GitHub Actions", "Vite", "Axios", "Vercel", "Render", "Neon", "Gunicorn"],
  },
];

export const approach = [
  {
    title: "Understand before implementing",
    body: "Data model, permissions, and failure modes are settled before any UI is built.",
  },
  {
    title: "Clear API contracts",
    body: "Endpoints are designed around resources with predictable shapes, so the frontend and backend move independently.",
  },
  {
    title: "Permissions in the backend",
    body: "Authorization is a database and API concern. Hiding a button is not a permission. Refusing the request is.",
  },
  {
    title: "Validate at every boundary",
    body: "Inputs from the browser, the AI layer, and external services are validated before they reach the database.",
  },
  {
    title: "Test the paths where failures matter",
    body: "Coverage is concentrated on auth, permissions, business rules, and analytics, where a silent bug becomes a security or reporting problem.",
  },
  {
    title: "Environment-based configuration",
    body: "Secrets, database URLs, and API keys live in environment variables, not in code.",
  },
];

export const about = {
  paragraphs: [
    "I?m an entry-level Python Full Stack Developer based in Chennai. I studied Biotechnology (B.Sc.) before training in Python Full Stack Development at QSpiders. That background taught me to work carefully with data, test assumptions, and document what I find, and I bring the same habits to debugging and data modeling.",
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
  lead: "Available immediately. Open to roles in Chennai, Bengaluru, or Remote.",
};
