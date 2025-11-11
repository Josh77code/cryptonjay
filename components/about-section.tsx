"use client"

import { Button } from "@/components/ui/button"
import { GitBranch, Users, Zap, Settings } from "lucide-react"

export function AboutSection() {
  const expertise = [
    {
      icon: GitBranch,
      title: "Project Management",
      description: "Leading blockchain and Web3 projects with proven delivery excellence",
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Building engaged communities and driving user retention strategies",
    },
    {
      icon: Zap,
      title: "Business Development",
      description: "Scaling partnerships and identifying growth opportunities in Web3",
    },
    {
      icon: Settings,
      title: "Automation Expert",
      description: "N8N, Discord, Telegram, and Monday.com automation specialist",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-primary rounded-full blur-xl opacity-50" />
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-transparent p-1">
                <div className="bg-card rounded-lg p-8 text-center space-y-4">
                  <div className="text-5xl font-bold text-primary">JAY</div>
                  <p className="text-muted-foreground">Web3 Ecosystem Builder</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-primary">BLOCKCHAIN</span> <span className="text-foreground">INNOVATOR</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                As an English Community Lead and Business Developer at TradeFi, I oversee community growth, engagement,
                and strategic partnerships. My role focuses on scaling the English-speaking community, driving user
                education and retention, and ensuring transparent communication between the core team and community
                members.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
