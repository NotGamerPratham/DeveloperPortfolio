"use client"

import { useState } from "react"
import { skills, skillCategories, type SkillCategory } from "@/data/skills"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all")
  const { ref, isVisible } = useScrollAnimation()
  const filtered = activeCategory === "all" ? skills : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="relative py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis to build exceptional digital products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all" ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((skill, index) => (
            <div
              key={skill.name}
              className={`rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm p-4 transition-all duration-500 hover:border-border ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 50}ms`, transitionProperty: "opacity, transform" }}
            >
              <h3 className="text-sm font-medium mb-3">{skill.name}</h3>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-1 block text-right">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
