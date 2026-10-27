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
      { value: "200+", label: "tests \u00B7 94% coverage" },
      { value: "2", label: "live full-stack apps" },
      { value: "5", label: "ACCESS ROLES (RBAC)" },
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
      "Multi-tenant 5-role RBAC (Owner, Admin, Manager, Member, Viewer) enforced at the queryset level.",
      "AI co-pilot validates output against JSON Schema; backend fallbacks auto-populate priorities if AI returns empty.",
      "Optimistic Kanban board with dnd-kit and TanStack Query, featuring automatic rollback on API errors.",
      "Three-layer backend (Views, Serializers, Services) ensuring business logic is testable without HTTP.",
      "202 automated tests (backend + frontend) running in GitHub Actions CI on every push.",
    ],,
    decisions: [
      "Built a three-layer backend (Views, Serializers, Services) to keep business logic testable without HTTP.",
      "Added an LLM normalizer layer that maps variable JSON key names to the expected schema before validation, plus backend fallbacks that auto-populate urgent priorities from the database if the AI returns empty results.",
      "Fixed a rogue SECURE_SSL_REDIRECT bug failing 100+ tests via a global conftest fixture, and resolved third-party cookie blocking by proxying /api through Vercel.",
    ],
    demoNotice: "Demo login: sabari@taskora.local / StrongPass!2026",
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
      "pytest",
      "GitHub Actions"
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
      "URL shortening with custom aliases, expiration dates, and dynamic QR code generation (PNG download).",
      "Custom User-Agent parser extracts browser, device, and OS without external libraries.",
      "Recharts dashboard transforms raw click events into interactive time-series and traffic breakdowns.",
      "Strict per-user data isolation via ORM querysets; DRF token authentication for all protected routes.",
      "19 automated tests (backend + frontend) running in GitHub Actions CI on every push.",
    ],,
    decisions: [
      "Built a custom User-Agent parser to capture browser, device and OS without an external parsing library.",
      "Fixed Vercel SPA 404 errors on browser refresh by configuring vercel.json rewrites. Acknowledged V2 trade-offs: DRF tokens do not expire, and public redirects need rate limiting.",
      "Debugged CI/CD pipeline crashes by forcing Node 22 (fixing undici worker errors) and correcting Python cache paths.",
    ],
    demoNotice: "Demo login: SabariBalaMR / ShortMetric@2026",
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
    items: ["Python", "SQL", "JavaScript"],
  },
  {
    label: "Backend",
    items: ["Django", "Django REST Framework", "REST API design", "JWT authentication"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "SQLite", "Django ORM"],
  },
  {
    label: "Frontend",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "AI integration",
    items: ["Groq API", "JSON Schema validation"],
  },
  {
    label: "Testing & tools",
    items: ["pytest", "Vitest", "React Testing Library", "Git", "GitHub", "Vite", "GitHub Actions"],
  },
  {
    label: "Computer science fundamentals",
    items: ["OOP", "Data Structures & Algorithms", "DBMS", "Computer Networks", "Operating Systems"],
  },
];

export const approach = [
  {
    title: "Clear API contracts",
    body: "Endpoints are designed around resources with predictable shapes, keeping frontend and backend responsibilities separate.",
  },
  {
    title: "Backend authorization",
    body: "Authorization is enforced in the API and query layers, not in the UI. Workspace and user-level data isolation are core requirements.",
  },
  {
    title: "Validation at every boundary",
    body: "Incoming data and AI-generated output are validated before they are saved.",
  },
  {
    title: "Automated testing",
    body: "Tests focus on permissions, authentication, business rules, and failure paths, where silent bugs become security problems.",
  },
  {
    title: "Environment-based config",
    body: "Secrets and API keys live in environment variables, never in the repository.",
  },
  {
    title: "Debugging in production",
    body: "Deployment issues such as cookies, CORS, routing, and file encoding are traced to their root cause and fixed there.",
  },
];

export const about = {
  paragraphs: [
    "I’m an entry-level Python Full Stack Developer based in Chennai. I earned a B.Sc. in Biotechnology before training in Python Full Stack Development at QSpiders. That background taught me to work carefully with data, test assumptions, and document what I find, and I bring the same habits to debugging and data modeling.",
    "I work primarily with Django, Django REST Framework, React, and PostgreSQL. I focus on the parts of engineering that hold up under real use: workspace permissions, clean API contracts, and reliable interfaces.",
    "The two projects on this page are where that work lives. Taskora AI is a multi-tenant platform with role-based access and human-approved AI workflows. ShortMetric is a link analytics platform with a data-heavy dashboard, QR codes, and per-user data isolation.",
    "I use AI coding assistants for planning, code review, and debugging. I review and test everything I ship, and I can explain how each part of my projects works."
  ],
  facts: [
    { label: "Location", value: "Chennai, India" },
    { label: "Training", value: "Python Full Stack Development, QSpiders" },
    { label: "Education", value: "B.Sc. Biotechnology, RVS College of Arts and Science (2025)" },
    { label: "Focus", value: "Django REST Framework, React, PostgreSQL" },
  ],
};

export const contact = {
  lead: "I’m currently seeking entry-level opportunities as a Python Developer, Full Stack Developer, Django Developer, or Junior Software Engineer.",
  availability: "Available immediately. Open to roles in Chennai, Bengaluru, or Remote."
};