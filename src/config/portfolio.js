// Centralized portfolio content.
// All facts sourced from Sabari's resume. Do not invent data.

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
      "I build full-stack web applications with Django and React. My focus is clean API contracts, secure workspace permissions, and interfaces that are reliable under real use.",
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
      "Multi-tenant project management platform that turns natural-language goals into structured plans, with human approval before AI output is saved.",
    highlights: [
      "Workspace-scoped RBAC across five roles: Owner, Admin, Manager, Member, Viewer.",
      "Four AI workflows: project planning, task breakdown, summarization, and insights.",
      "AI output is validated and staged for review before any write reaches the database.",
      "Kanban board, milestones, subtasks, activity timeline, notifications, and analytics.",
    ],
    decisions: [
      "AI provider hidden behind an abstraction layer, so swapping models stays a one-file change.",
      "Human-in-the-loop approval before AI-generated content is persisted.",
    ],
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "SimpleJWT",
      "Groq API",
    ],
    repository: "https://github.com/Sabari-bala/taskora-ai",
    live: null,
    theme: "violet",
  },
  {
    slug: "shortmetric",
    name: "ShortMetric",
    eyebrow: "URL shortener / Click analytics",
    summary:
      "URL shortening and analytics platform with custom aliases, expiration controls, QR code generation, and interactive dashboards.",
    highlights: [
      "Custom aliases, expiration controls, activation toggles, and QR code generation.",
      "Public redirects validate status and expiration before recording click metadata.",
      "Tracked dimensions: browser, device, operating system, and referrer.",
      "Interactive analytics dashboard for link performance and traffic breakdowns.",
    ],
    decisions: [
      "Public redirect path is unauthenticated, so short links work for anyone; authorization lives on the management APIs.",
      "Click metadata is captured in a single write at redirect time to keep the hot path fast.",
    ],
    stack: [
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "Vite",
      "Tailwind CSS",
      "Recharts",
    ],
    repository: "https://github.com/Sabari-bala/shortmetric",
    live: null,
    theme: "emerald",
  },
];

export const skillGroups = [
  {
    label: "Backend",
    items: ["Python", "Django", "Django REST Framework", "REST APIs", "SimpleJWT", "RBAC"],
  },
  {
    label: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive design"],
  },
  {
    label: "Data & Testing",
    items: ["PostgreSQL", "SQLite", "SQL", "pytest", "pytest-django", "Vitest", "React Testing Library"],
  },
  {
    label: "Tools & Concepts",
    items: ["Git", "GitHub", "GitHub Actions", "Vite", "Axios", "TanStack Query", "Recharts", "OOP", "DSA", "DBMS"],
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
    "I am an entry-level Python Full Stack Developer based in Chennai, India. My background is a B.Sc. in Biotechnology, followed by Python Full Stack Development training at QSpiders, a deliberate move into software.",
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
  lead: "I am always open to discussing new opportunities and how I can contribute to your team. Feel free to reach out via email or connect with me on LinkedIn.",
};
