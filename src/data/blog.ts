export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: number
  tags: string[]
  image?: string
  url?: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Building Resilient Microservices with Go and Kubernetes",
    excerpt:
      "A deep dive into patterns for building fault-tolerant microservices, covering circuit breakers, retries, bulkheads, and Kubernetes health checks.",
    date: "2024-02-15",
    readTime: 12,
    tags: ["Go", "Kubernetes", "Microservices"],
    featured: true,
    url: "https://dev.to/yourusername/building-resilient-microservices",
  },
  {
    id: "post-2",
    title: "The Complete Guide to React Server Components",
    excerpt:
      "Understanding React Server Components, their benefits, and how to gradually adopt them in your Next.js applications.",
    date: "2024-01-20",
    readTime: 15,
    tags: ["React", "Next.js", "RSC"],
    featured: true,
    url: "https://yourblog.dev/react-server-components",
  },
  {
    id: "post-3",
    title: "TypeScript Patterns for Production Applications",
    excerpt:
      "Advanced TypeScript patterns including discriminated unions, template literals, and conditional types for real-world apps.",
    date: "2023-12-10",
    readTime: 10,
    tags: ["TypeScript", "Patterns"],
    featured: true,
    url: "https://dev.to/yourusername/typescript-patterns",
  },
  {
    id: "post-4",
    title: "Optimizing Docker Images for Node.js Applications",
    excerpt:
      "Techniques to reduce Docker image sizes by up to 90% using multi-stage builds, Alpine, and dependency caching strategies.",
    date: "2023-11-05",
    readTime: 8,
    tags: ["Docker", "Node.js", "DevOps"],
    featured: false,
  },
  {
    id: "post-5",
    title: "Understanding CRDTs for Offline-First Applications",
    excerpt:
      "An introduction to Conflict-free Replicated Data Types and how they enable seamless offline collaboration.",
    date: "2023-09-18",
    readTime: 14,
    tags: ["CRDT", "Distributed Systems", "WebRTC"],
    featured: false,
  },
  {
    id: "post-6",
    title: "Accessibility Testing Automation with Playwright",
    excerpt:
      "How to integrate automated accessibility testing into your CI/CD pipeline using Playwright and axe-core.",
    date: "2023-08-22",
    readTime: 7,
    tags: ["A11y", "Testing", "Playwright"],
    featured: false,
  },
]
