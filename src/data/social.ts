export interface SocialLink {
  name: string
  url: string
  icon: string
  username: string
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
    username: "@yourusername",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
    username: "in/yourusername",
  },
  {
    name: "Twitter / X",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
    username: "@yourusername",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/yourusername",
    icon: "devto",
    username: "@yourusername",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@yourusername",
    icon: "youtube",
    username: "@yourusername",
  },
]
