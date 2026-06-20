"use client"

import { Heart, ArrowUp, SocialIcon } from "@/components/icons"
import { socialLinks } from "@/data/social"

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#hero"
              className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Portfolio
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                aria-label={link.name}
              >
                <SocialIcon name={link.icon} size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; {new Date().getFullYear()} Portfolio. Made with <Heart size={14} className="fill-red-500 text-red-500" /> by You.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
