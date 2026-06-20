export interface Skill {
  name: string
  level: number
  category: SkillCategory
  icon?: string
}

export type SkillCategory = "frontend" | "backend" | "devops" | "database" | "languages" | "tools"

export interface SkillCategoryInfo {
  id: SkillCategory
  label: string
  color: string
}

export const skillCategories: SkillCategoryInfo[] = [
  { id: "frontend", label: "Frontend", color: "from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", color: "from-purple-500 to-pink-500" },
  { id: "languages", label: "Languages", color: "from-amber-500 to-orange-500" },
  { id: "database", label: "Database", color: "from-emerald-500 to-teal-500" },
  { id: "devops", label: "DevOps & Cloud", color: "from-red-500 to-rose-500" },
  { id: "tools", label: "Tools & Workflow", color: "from-indigo-500 to-violet-500" },
]

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 92, category: "languages" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 88, category: "frontend" },
  { name: "Framer Motion", level: 85, category: "frontend" },
  { name: "Vue.js", level: 78, category: "frontend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Python", level: 85, category: "languages" },
  { name: "Go", level: 70, category: "languages" },
  { name: "Rust", level: 60, category: "languages" },
  { name: "GraphQL", level: 82, category: "backend" },
  { name: "REST APIs", level: 88, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "MongoDB", level: 80, category: "database" },
  { name: "Redis", level: 75, category: "database" },
  { name: "Prisma", level: 82, category: "backend" },
  { name: "Docker", level: 85, category: "devops" },
  { name: "Kubernetes", level: 72, category: "devops" },
  { name: "AWS", level: 80, category: "devops" },
  { name: "CI/CD", level: 82, category: "devops" },
  { name: "Git", level: 90, category: "tools" },
  { name: "Figma", level: 72, category: "tools" },
  { name: "VS Code", level: 92, category: "tools" },
  { name: "Linux", level: 85, category: "tools" },
]
