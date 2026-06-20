"use client"

import { Briefcase, GraduationCap, Calendar } from "@/components/icons"
import { experiences } from "@/data/experience"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and academic background.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative pl-0 sm:pl-20 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms`, transitionProperty: "opacity, transform" }}
              >
                <div className="absolute left-0 sm:left-[27px] top-1 w-4 h-4 sm:w-[10px] sm:h-[10px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden sm:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                <div className="p-6 rounded-xl border bg-card hover:border-border/80 transition-all duration-200">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {exp.type === "work" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                        <span>{exp.company}</span>
                        <span>·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-md border border-transparent bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold shrink-0 gap-1">
                      <Calendar size={12} />
                      {exp.startDate} - {exp.endDate || "Present"}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>

                  <ul className="space-y-1.5 mb-3">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-md border border-input bg-background px-2.5 py-0.5 text-xs font-semibold text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
