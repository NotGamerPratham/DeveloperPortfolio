"use client"

import { ExternalLink, Award } from "@/components/icons"
import { certifications } from "@/data/certifications"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Certifications() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="certifications" className="relative py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Industry-recognized certifications that validate my expertise.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm p-6 transition-all duration-500 hover:border-border hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 80}ms`, transitionProperty: "opacity, transform" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg shrink-0" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))" }}>
                  <Award size={20} className="text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-md border border-transparent bg-secondary text-secondary-foreground px-1.5 py-0 text-[10px] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">{cert.date}</span>
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="View credential">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
