"use client"

import { Calendar, Clock, ArrowUpRight } from "@/components/icons"
import { blogPosts } from "@/data/blog"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export function Blog() {
  const { ref, isVisible } = useScrollAnimation()
  const recent = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Thoughts on software engineering, architecture, and best practices.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recent.map((post, index) => (
            <div
              key={post.id}
              className={`rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm group h-full transition-all duration-500 hover:border-border hover:shadow-md overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms`, transitionProperty: "opacity, transform" }}
            >
              <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1), rgba(236,72,153,0.1))" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold opacity-20" style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {post.title.charAt(0)}
                  </span>
                </div>
                {post.featured && (
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-2.5 py-0.5 text-xs font-semibold">Featured</span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime} min read</span>
                </div>
                <h3 className="font-semibold text-base mb-2 line-clamp-2 transition-all duration-200 group-hover:text-transparent group-hover:bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)" }}>
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-md border border-transparent bg-secondary text-secondary-foreground px-1.5 py-0 text-[10px] font-semibold">{tag}</span>
                  ))}
                </div>
                {post.url && (
                  <a href={post.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Read more <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://dev.to/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-8 rounded-md text-sm font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            View All Articles <ArrowUpRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
