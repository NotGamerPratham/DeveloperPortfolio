export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  image?: string
  tags: string[]
}

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2024-03",
    credentialUrl: "https://aws.amazon.com/certification",
    tags: ["AWS", "Cloud Architecture", "DevOps"],
  },
  {
    id: "cert-2",
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023-11",
    credentialUrl: "https://cloud.google.com/certification",
    tags: ["GCP", "Cloud Architecture", "Kubernetes"],
  },
  {
    id: "cert-3",
    title: "Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    date: "2023-08",
    credentialUrl: "https://www.cncf.io/certification/cka/",
    tags: ["Kubernetes", "Containers", "Orchestration"],
  },
  {
    id: "cert-4",
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2023-05",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    tags: ["React", "UI/UX", "JavaScript"],
  },
  {
    id: "cert-5",
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2023-02",
    credentialUrl: "https://www.hashicorp.com/certification/terraform-associate",
    tags: ["Terraform", "IaC", "DevOps"],
  },
  {
    id: "cert-6",
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    date: "2022-10",
    credentialUrl: "https://www.mongodb.com/training",
    tags: ["MongoDB", "NoSQL", "Database"],
  },
]
