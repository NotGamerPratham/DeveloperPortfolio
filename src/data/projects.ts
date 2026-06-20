export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  stars?: number
  forks?: number
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "CloudFlow",
    description: "Real-time cloud infrastructure monitoring dashboard with predictive analytics",
    longDescription:
      "A comprehensive monitoring solution that provides real-time visibility into cloud infrastructure. Features include predictive anomaly detection, auto-scaling recommendations, and cost optimization insights across AWS, GCP, and Azure.",
    image: "/placeholder-project.svg",
    tags: ["React", "TypeScript", "Node.js", "WebSocket", "D3.js"],
    githubUrl: "https://github.com/yourusername/cloudflow",
    liveUrl: "https://cloudflow-demo.vercel.app",
    featured: true,
    stars: 128,
    forks: 34,
  },
  {
    id: "project-2",
    title: "NexusDB",
    description: "Edge-computing database with real-time sync and offline-first architecture",
    longDescription:
      "A distributed edge database designed for offline-first applications. Supports CRDT-based conflict resolution, real-time sync via WebRTC, and automatic migration management for schema changes.",
    image: "/placeholder-project.svg",
    tags: ["Rust", "WebAssembly", "SQLite", "WebRTC", "CRDT"],
    githubUrl: "https://github.com/yourusername/nexusdb",
    stars: 89,
    forks: 21,
    featured: true,
  },
  {
    id: "project-3",
    title: "Synthwave UI",
    description: "Design system and component library with 60+ accessible components",
    longDescription:
      "A production-ready design system featuring 60+ React components with full accessibility support, dark mode, RTL languages, and theme customization. Built with Storybook and comprehensive testing.",
    image: "/placeholder-project.svg",
    tags: ["React", "Storybook", "A11y", "CSS Variables", "Jest"],
    liveUrl: "https://synthwave-ui.vercel.app",
    featured: true,
    stars: 256,
    forks: 67,
  },
  {
    id: "project-4",
    title: "DevLens",
    description: "AI-powered code review assistant for pull requests",
    longDescription:
      "An intelligent code review tool that integrates with GitHub and GitLab. Uses machine learning to detect code smells, security vulnerabilities, and suggests optimal refactoring patterns.",
    image: "/placeholder-project.svg",
    tags: ["Python", "FastAPI", "OpenAI", "GitHub API", "Docker"],
    githubUrl: "https://github.com/yourusername/devlens",
    stars: 67,
    forks: 12,
    featured: false,
  },
  {
    id: "project-5",
    title: "FlowState",
    description: "Pomodoro technique app with deep focus analytics and team accountability",
    longDescription:
      "A focus-enhancement application combining the Pomodoro technique with social accountability. Features include focus streaks, distraction blocking, team challenges, and productivity analytics.",
    image: "/placeholder-project.svg",
    tags: ["Next.js", "Prisma", "PostgreSQL", "WebSockets", "Redis"],
    githubUrl: "https://github.com/yourusername/flowstate",
    liveUrl: "https://flowstate.app",
    stars: 45,
    forks: 8,
    featured: false,
  },
  {
    id: "project-6",
    title: "KubeDeck",
    description: "Kubernetes management UI with drag-and-drop deployment pipelines",
    longDescription:
      "A visual Kubernetes management interface that simplifies cluster operations. Features drag-and-drop pipeline builder, real-time pod logs, resource monitoring, and one-click rollbacks.",
    image: "/placeholder-project.svg",
    tags: ["Go", "React", "Kubernetes", "Helm", "gRPC"],
    githubUrl: "https://github.com/yourusername/kubedeck",
    featured: false,
    stars: 34,
    forks: 9,
  },
]
