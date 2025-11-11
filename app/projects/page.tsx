import { Navigation } from "@/components/navigation"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "TradeFi.bot",
      description:
        "Next-Gen evolution in automated trading and passive income generation. A future where trading is accessible to everyone through innovative automation and community-driven strategies.",
      url: "https://tradefi.bot",
      category: "Web3 Trading Platform",
      tags: ["Trading", "Automation", "Web3"],
    },
    {
      title: "Fortcake.io",
      description:
        "A DEX for meme coins — a platform where users can add new meme tokens and swap them without going through centralized exchanges. Featuring 0% exchange fee for swapping on the platform.",
      url: "https://fortcake.io",
      category: "DEX Platform",
      tags: ["DEX", "Meme Coins", "DeFi"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20 blockchain-grid relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Featured <span className="text-primary animate-neon-text-glow">PROJECTS</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-16">Web3 and blockchain initiatives I've contributed to</p>

          <div className="space-y-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group border border-border rounded-lg overflow-hidden hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-primary text-sm font-mono">{project.category}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Project
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-12 rounded-lg bg-card border border-border">
            <h2 className="text-3xl font-bold mb-4">
              Interested in <span className="text-primary">Collaborating?</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's build the future of Web3 together through innovative projects and community-driven initiatives
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
