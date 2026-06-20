"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "@/components/icons"
import { testimonials } from "@/data/testimonials"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, isVisible } = useScrollAnimation()
  const test = testimonials[current]

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="relative py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Feedback from colleagues and clients I've worked with.</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm p-8 sm:p-10">
            <Quote size={32} className="text-blue-500/30 mb-4" />
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-muted-foreground italic">
              &ldquo;{test.content}&rdquo;
            </p>
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < test.rating ? "fill-amber-400 text-amber-400" : "text-muted"} />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-medium" style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
                {test.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-sm">{test.name}</p>
                <p className="text-xs text-muted-foreground">{test.role} at {test.company}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={prev}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1.5 px-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "bg-gradient-to-r from-blue-500 to-purple-500 w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
