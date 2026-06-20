export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp Inc.",
    avatar: "",
    content:
      "One of the most talented engineers I've had the pleasure of working with. Their ability to architect complex systems while maintaining clean, testable code is remarkable. They consistently deliver beyond expectations.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Marcus Rivera",
    role: "CTO",
    company: "StartupXYZ",
    avatar: "",
    content:
      "They took our MVP from concept to production in record time. The architecture decisions made early on saved us months of refactoring. An invaluable team player who elevates everyone around them.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Emily Watson",
    role: "Lead Designer",
    company: "DesignStudio",
    avatar: "",
    content:
      "Working with them was a designer's dream. They have an incredible eye for detail and truly understand the importance of pixel-perfect implementation. Our clients were always impressed.",
    rating: 5,
  },
  {
    id: "test-4",
    name: "David Kim",
    role: "Senior Developer",
    company: "TechCorp Inc.",
    avatar: "",
    content:
      "I learned so much from pairing with them. Their code reviews are thorough and educational, and they always take the time to explain the reasoning behind their suggestions. A true mentor.",
    rating: 5,
  },
]
