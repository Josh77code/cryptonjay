"use client"

import { GitBranch, Users, Zap, Settings, Rocket, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: GitBranch,
      title: "Project Management",
      description: "End-to-end blockchain project coordination, delivery, and stakeholder management.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Scaling engaged communities, driving retention, and building loyalty around blockchain projects.",
    },
    {
      icon: Rocket,
      title: "Business Development",
      description: "Strategic partnerships, market expansion, and identifying growth opportunities in Web3.",
    },
    {
      icon: Zap,
      title: "N8N Automation",
      description: "Advanced workflow automation and integration for blockchain and Web3 platforms.",
    },
    {
      icon: Settings,
      title: "Telegram/Discord Automation",
      description: "Custom automation solutions for Discord and Telegram community management.",
    },
    {
      icon: BarChart3,
      title: "Business Analysis",
      description: "Data-driven insights and strategic analysis for blockchain business decisions.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">WEB3</span> SERVICES
          </h2>
          <p className="text-muted-foreground text-lg">Comprehensive Web3 and blockchain solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
