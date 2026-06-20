"use client"

import { useState } from "react"
import { ExternalLink, Github, Star, GitFork } from "@/components/icons"
import { projects } from "@/data/projects"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all")
  const { ref, isVisible } = useScrollAnimation()
  const filtered = filter === "all" ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A selection of projects I've built with passion and precision.
          </p>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                filter === "all" ? "bg-primary text-primary-foreground shadow" : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                filter === "featured" ? "bg-primary text-primary-foreground shadow" : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className={`rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm group h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-border hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms`, transitionDuration: "500ms", transitionProperty: "opacity, transform" }}
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold opacity-30 group-hover:opacity-50 transition-opacity" style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors"
                        aria-label="View source"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  {project.featured && (
                    <span className="inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-2.5 py-0.5 text-xs font-semibold shrink-0">Featured</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
              <div className="px-6 pb-3 flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-md border border-transparent bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-4 pt-4 border-t flex items-center justify-between w-full text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  {project.stars != null && (
                    <span className="flex items-center gap-1"><Star size={14} />{project.stars}</span>
                  )}
                  {project.forks != null && (
                    <span className="flex items-center gap-1"><GitFork size={14} />{project.forks}</span>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                      <Github size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
