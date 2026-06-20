export interface Experience {
  id: string
  role: string
  company: string
  companyUrl?: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  achievements: string[]
  technologies: string[]
  type: "work" | "education"
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Full-Stack Engineer",
    company: "TechCorp Inc.",
    companyUrl: "https://techcorp.example.com",
    location: "San Francisco, CA",
    startDate: "2023-01",
    endDate: null,
    description: "Leading the development of next-generation cloud infrastructure tools.",
    achievements: [
      "Architected and delivered a real-time monitoring platform serving 50K+ concurrent users",
      "Reduced infrastructure costs by 35% through automated resource optimization",
      "Mentored 4 junior engineers and established code review best practices",
      "Drove migration from monolith to microservices, improving deployment frequency by 5x",
    ],
    technologies: ["React", "TypeScript", "Go", "Kubernetes", "AWS", "GraphQL"],
    type: "work",
  },
  {
    id: "exp-2",
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    companyUrl: "https://startupxyz.example.com",
    location: "New York, NY",
    startDate: "2021-03",
    endDate: "2022-12",
    description: "Core engineer building the company's SaaS platform from the ground up.",
    achievements: [
      "Built the MVP that secured $2M in seed funding within 6 months of launch",
      "Implemented real-time collaboration features using WebSockets and CRDTs",
      "Designed and optimized database schema reducing query times by 60%",
      "Set up CI/CD pipeline achieving 99.9% deployment success rate",
    ],
    technologies: ["Next.js", "Python", "PostgreSQL", "Redis", "Docker", "Terraform"],
    type: "work",
  },
  {
    id: "exp-3",
    role: "Frontend Developer",
    company: "DesignStudio",
    companyUrl: "https://designstudio.example.com",
    location: "Remote",
    startDate: "2019-06",
    endDate: "2021-02",
    description: "Built pixel-perfect, accessible interfaces for enterprise clients.",
    achievements: [
      "Delivered 15+ client projects on time with 98% client satisfaction rate",
      "Developed a reusable component library used across 10+ projects",
      "Improved Lighthouse scores from 45 to 95+ across all client projects",
      "Introduced automated visual regression testing to the team workflow",
    ],
    technologies: ["React", "Vue.js", "Sass", "Storybook", "Jest", "Cypress"],
    type: "work",
  },
  {
    id: "exp-4",
    role: "B.S. Computer Science",
    company: "University of Technology",
    companyUrl: "https://university.example.com",
    location: "Boston, MA",
    startDate: "2015-09",
    endDate: "2019-05",
    description: "Bachelor of Science in Computer Science with a focus on distributed systems.",
    achievements: [
      "Graduated Magna Cum Laude with 3.8 GPA",
      "Published research on distributed consensus algorithms",
      "Won first place in annual hackathon with an IoT smart city solution",
      "Teaching assistant for Data Structures and Algorithms courses",
    ],
    technologies: ["Java", "C++", "Python", "Algorithms", "Distributed Systems"],
    type: "education",
  },
]
