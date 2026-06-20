"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Phone, Loader2 } from "@/components/icons"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    alert("Thanks for reaching out! I'll get back to you soon.")
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <div className={`lg:col-span-2 space-y-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}>
            {[
              { icon: Mail, color: "text-blue-500", bg: "bg-blue-500/10", label: "Email", value: "hello@yourdomain.com", href: "mailto:hello@yourdomain.com" },
              { icon: MapPin, color: "text-purple-500", bg: "bg-purple-500/10", label: "Location", value: "San Francisco, CA" },
              { icon: Phone, color: "text-pink-500", bg: "bg-pink-500/10", label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm p-5 flex items-start gap-3">
                <div className={`p-2 rounded-lg ${item.bg} shrink-0`}>
                  <item.icon size={16} className={item.color} />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={`lg:col-span-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}>
            <div className="rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" name="name" placeholder="John Doe" required className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" name="email" type="email" placeholder="john@example.com" required className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input id="subject" name="subject" placeholder="Project Collaboration" required className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium text-white shadow-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50 animate-gradient"
                >
                  {isSubmitting ? (
                    <><Loader2 size={16} className="mr-2 animate-spin" />Sending...</>
                  ) : (
                    <><Send size={16} className="mr-2" />Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
