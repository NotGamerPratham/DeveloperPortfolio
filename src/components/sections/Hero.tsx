"use client"

import { ArrowDown, Download, Github, Linkedin, Mail } from "@/components/icons"
import { socialLinks } from "@/data/social"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" style={{ animation: "blob 7s infinite 2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px]" style={{ animation: "blob 7s infinite 4s" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="mb-4" style={{ animation: "fadeUp 0.5s ease-out" }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-muted/50 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ animation: "fadeUp 0.5s ease-out 0.1s both" }}>
          Hi, I'm{" "}
          <span className="text-gradient">Your Name</span>
          <br />
          Full-Stack Developer
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" style={{ animation: "fadeUp 0.5s ease-out 0.2s both" }}>
          I build exceptional digital experiences that live at the intersection of
          design and engineering. Specializing in modern web technologies
          with a passion for performance and accessibility.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12" style={{ animation: "fadeUp 0.5s ease-out 0.3s both" }}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium text-white shadow-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-200 animate-gradient"
          >
            <Github size={16} className="mr-2" />
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <Download size={16} className="mr-2" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <Mail size={16} className="mr-2" />
            Get in Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-4" style={{ animation: "fadeUp 0.5s ease-out 0.4s both" }}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border bg-background/50 hover:bg-muted hover:border-foreground/20 transition-all duration-200 text-muted-foreground hover:text-foreground"
              aria-label={link.name}
            >
              {link.name === "GitHub" ? (
                <Github size={20} />
              ) : link.name === "LinkedIn" ? (
                <Linkedin size={20} />
              ) : (
                <span className="text-xs font-bold">{link.name.charAt(0)}</span>
              )}
            </a>
          ))}
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        style={{ animation: "bounce 2s infinite" }}
        aria-label="Scroll to projects"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
