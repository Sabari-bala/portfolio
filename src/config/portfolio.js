// Centralized portfolio content.

export const profile = {
  name: "Sabari Bala M R",
  monogram: "SB",
  title: "Python Full Stack Developer",
  location: "Chennai, India",
  email: "sabaribala7733@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/sabari-bala",
    github: "https://github.com/Sabari-bala",
  },
  hero: {
    eyebrow: "Python Full Stack Developer",
    intro:
      "I build secure, well-tested full-stack apps with Django REST Framework, React, and PostgreSQL. My latest project, Taskora AI, is a multi-tenant workspace with five-role access control, where AI suggestions need human approval before anything is saved.",
    availability: "Available immediately \u00B7 Chennai, Bengaluru or Remote",
    proofs: [
      { value: "200", label: "tests \u00B7 94% coverage" },
      { value: "2", label: "live full-stack apps" },
      { value: "5", label: "5-role access control" },
    ],
    workingWith: ["Python", "Django", "Django REST Framework", "React", "PostgreSQL", "JWT authentication", "Groq API"],
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
      "AI-assisted project workspace where every AI suggestion needs human approval. Turn an idea into a plan, review it, then manage the work on a Kanban board.",
    highlights: [
      "Workspace-scoped querysets and object-level permissions across five roles, tested with a role x action matrix.",
      "AI-generated plans are normalized and validated against JSON Schema, then reviewed by the user before anything is saved.",
      "Kanban board with drag-and-drop, optimistic updates and automatic rollback when a request fails.",
      "200 automated backend tests with 94% coverage, run in GitHub Actions CI.",
    ],
    decisions: [
      "Built a three-layer backend (Views, Serializers, Services) to keep business logic testable without HTTP.",
      "Added an LLM normalizer layer that maps variable JSON key names to the expected schema (for example \"name\" to \"title\") before validation.",
      "Kept access tokens in memory with HttpOnly refresh cookies; fixed third-party cookie blocking by proxying /api through Vercel so the cookie is first-party.",
    ],
    demoNotice: "Demo login (Owner): sabari@taskora.local / StrongPass!2026",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "Vite",
      "TanStack Query",
      "Tailwind CSS",
      "dnd-kit",
      "SimpleJWT",
      "Groq API",
      "pytest"
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
      "ShortMetric is a link management and analytics platform with a data-heavy dashboard, custom aliases, QR codes and per-user data isolation.",
    highlights: [
      "URL shortening with custom aliases, expiration dates and QR code generation (PNG download).",
      "User-scoped link management with DRF token authentication.",
      "Recharts dashboard showing click activity over time and device, browser and operating-system breakdowns.",
      "Backend tests and GitHub Actions CI (Django checks, tests and a Vite production build).",
    ],
    decisions: [
      "Built a custom User-Agent parser to capture browser, device and OS without an external parsing library.",
      "Fixed a Vercel build failure caused by invisible UTF-8 byte-order marks added by PowerShell.",
      "Resolved CORS and duplicated /api/api/ routing issues while deploying to Render and Vercel.",
    ],
    demoNotice: "Register a free account to try it.",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "Vite",
      "TanStack Query",
      "Tailwind CSS",
      "Recharts",
      "Axios",
      "qrcode.react",
      "GitHub Actions"
    ],
    repository: "https://github.com/Sabari-bala/ShortMetric",
    live: "https://shortmetric.vercel.app",
    theme: "emerald",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    label: "Backend",
    items: ["Django", "Django REST Framework", "REST APIs", "JWT authentication (SimpleJWT)", "role-based access control"],
  },
  {
    label: "AI integration",
    items: ["Groq API", "JSON Schema validation"],
  },
  {
    label: "Frontend",
    items: ["React", "TanStack Query", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "SQLite"],
  },
  {
    label: "Tools & testing",
    items: ["Git", "GitHub", "GitHub Actions (CI)", "pytest", "Factory Boy", "Vercel", "Render", "Neon"],
  },
];

export const approach = [
  {
    title: "Clear API contracts",
    body: "Endpoints are designed around resources with predictable shapes, separating frontend and backend responsibilities.",
  },
  {
    title: "Backend authorization",
    body: "Authorization is enforced at the database and API level. User-level data isolation is a core requirement.",
  },
  {
    title: "Validation at every boundary",
    body: "Incoming data and AI-generated output are strictly validated before reaching the database.",
  },
  {
    title: "Automated testing",
    body: "Testing focuses on core business rules, permissions, and edge cases where silent bugs become security problems.",
  },
  {
    title: "Environment-based config",
    body: "Secrets and API keys live in environment variables, ensuring safe deployment and reproducible setups.",
  },
  {
    title: "Maintainable architecture",
    body: "Code is structured with clear separation of concerns, making it easier to onboard new developers and scale.",
  },
];

export const about = {
  paragraphs: [
    "I\u2019m an entry-level Python Full Stack Developer based in Chennai. I studied Biotechnology (B.Sc.) before training in Python Full Stack Development at QSpiders. That background taught me to work carefully with data, test assumptions, and document what I find, and I bring the same habits to debugging and data modeling.",
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
  lead: "I\u2019m currently seeking entry-level opportunities as a Python Developer, Full Stack Developer, Django Developer, or Junior Software Engineer.",
};
