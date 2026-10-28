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
      { value: "201", label: "backend tests \u00B7 94% coverage" },
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
      "Five roles (Owner, Admin, Manager, Member, Viewer) enforced with workspace-scoped querysets and object-level permission classes, tested with a role × action matrix.",
      "AI project planner, task breakdown, summarization and project insights: output is normalized, validated against JSON Schema and reviewed by the user before anything is saved.",
      "Kanban board with drag-and-drop, optimistic updates and automatic rollback when a request fails.",
      "JWT authentication with in-memory access tokens and HttpOnly refresh cookies, with refresh-token rotation and logout blacklisting.",
      "201 backend tests (94% coverage) and a Vitest component test, run in GitHub Actions CI on every push.",
    ],
    decisions: [
      "Structured the backend as Views, Serializers and Services so business logic is testable without HTTP.",
      "Added an LLM normalizer that maps variable JSON key names (for example “name” to “title”) before schema validation, plus backend fallbacks when the AI returns empty priorities.",
      "Avoided third-party cookie blocking by proxying /api through Vercel so the HttpOnly refresh cookie is first-party, and added a catch-all rewrite so deep links survive a refresh.",
      "Fixed a test-suite failure (100+ tests failing from a SECURE_SSL_REDIRECT setting) with a global pytest fixture.",
      "Made the app usable on mobile: dynamic viewport height for the sidebar, and a touch-sensor delay so Kanban cards can be dragged without scrolling the page.",
      "Gated backend deploys: after backend and frontend checks pass on main, a GitHub Actions job triggers the Render deploy hook.",
      "Verified Argon2 password hashing in production and locked the demo accounts against password changes.",
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
      "Vitest",
      "GitHub Actions",
      "Vercel",
      "Render",
      "Neon"
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
      "Short links with generated codes or custom aliases (reserved-word and duplicate protection), expiration dates, enable/disable and edit, plus QR codes with PNG download.",
      "Per-user data isolation through owner-filtered querysets; DRF token authentication on all protected routes.",
      "Public redirect endpoint validates link status and expiry, then records timestamp, referrer and user-agent data using a custom User-Agent parser with no external library.",
      "Recharts dashboard with click activity over time and browser, device and OS breakdowns, plus search, filtering, sorting and server-side pagination.",
      "18 backend tests and a Vitest component test, run in GitHub Actions CI on every push.",
    ],
    decisions: [
      "Fixed Vercel 404 errors on browser refresh with vercel.json rewrites.",
      "Diagnosed a build failure caused by invisible UTF-8 byte-order marks added by Windows PowerShell, and removed them.",
      "Fixed CI failures by pinning Node 22 and correcting the Python cache path.",
      "Split routes with React.lazy so heavy dependencies like Recharts stay out of the initial bundle.",
      "Moved the production database to Neon PostgreSQL and configured CORS between the Vercel frontend and the Render API.",
      "Fixed an alias-edit bug where a link’s own alias failed the uniqueness check, by excluding the current record in the serializer.",
      "Documented known limitations: tokens do not expire, the public redirect has no rate limiting, and bot or link-preview traffic can inflate click counts.",
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
      "Vitest",
      "GitHub Actions",
      "Vercel",
      "Render",
      "Neon"
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
    items: ["Django", "Django REST Framework", "REST API Development", "JWT Authentication (SimpleJWT)", "Token Authentication", "Argon2 password hashing", "Role-based access control"],
  },
  {
    label: "AI Integration",
    items: ["Groq API", "JSON Schema Validation"],
  },
  {
    label: "Frontend",
    items: ["React", "React Router", "TanStack Query", "Tailwind CSS", "Axios", "Recharts", "HTML5", "CSS3"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "SQLite", "Django ORM"],
  },
  {
    label: "Testing & CI",
    items: ["pytest", "Factory Boy", "Vitest", "React Testing Library", "GitHub Actions"],
  },
  {
    label: "Tools & Deployment",
    items: ["Git", "GitHub", "Vite", "pre-commit", "Vercel", "Render", "Neon"],
  },
  {
    label: "CS Fundamentals",
    items: ["Object-Oriented Programming (OOP)", "Data Structures and Algorithms (DSA)", "Database Management Systems (DBMS)", "Computer Networks", "Operating Systems"],
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
    { label: "Training", value: "Python Full Stack Development, QSpiders; Technology Job Simulation, Deloitte (Forage)" },
    { label: "Education", value: "B.Sc. Biotechnology, RVS College of Arts and Science, Coimbatore (April 2025)" },
    { label: "Focus", value: "Django REST Framework, React, PostgreSQL" },
  ],
};

export const contact = {
  lead: "I’m currently seeking entry-level opportunities as a Python Developer, Full Stack Developer, Django Developer, or Junior Software Engineer.",
  availability: "Available immediately. Open to roles in Chennai, Bengaluru, or Remote."
};