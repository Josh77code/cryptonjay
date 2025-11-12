import Image from "next/image"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const skills = [
    "Project Management",
    "Community Building",
    "Business Development",
    "N8N Automation",
    "Discord Automation",
    "Telegram Automation",
    "Monday.com",
    "Notion",
    "Web3/Blockchain",
    "Strategic Planning",
    "User Retention",
    "Market Analysis",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">
            About <span className="text-primary animate-neon-text-glow">CRYPTONJAY</span>
          </h1>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm CRYPTONJAY (Jeremiah Taiwo), a passionate Web3 specialist with expertise in project management,
                  community building, and business development. With my role as English Community Lead and Business
                  Developer at TradeFi, I specialize in scaling communities, driving user engagement, and building
                  strategic partnerships in the blockchain ecosystem.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in the Web3 space has equipped me with diverse skills spanning across community management,
                  business analysis, automation solutions, and strategic planning. I believe in building authentic
                  communities and creating sustainable growth through transparent communication and innovative
                  strategies.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  <span className="text-primary">Skills</span> & Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  <span className="text-primary">Experience</span>
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-6 pb-4">
                    <h3 className="text-xl font-bold mb-2">TradeFi - English Community Lead & Business Developer</h3>
                    <p className="text-muted-foreground">
                      Overseeing community growth, engagement, and strategic partnerships. Scaling the English-speaking
                      community, driving user education and retention, and ensuring transparent communication between
                      core team and community members. Collaborating with founders, VCs, and market makers to strengthen
                      market positioning.
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-6">
                    <h3 className="text-xl font-bold mb-2">Fortcake.io - DEX Platform Specialist</h3>
                    <p className="text-muted-foreground">
                      Working with Fortcake, a DEX for meme coins featuring 0% exchange fees for swapping. Helping users
                      add new meme tokens and swap without centralized exchanges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Download CV
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                  <div className="relative bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Image placeholder */}
                    <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  <Image
                    src="/cryptonjay professional.jpeg"
                    alt="CRYPTONJAY Profile"
                    fill
                    sizes="(max-width: 768px) 280px, 360px"
                    className="object-cover"
                    priority
                  />
                    </div>

                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4">
                      <h3 className="text-lg font-bold text-primary">CRYPTONJAY</h3>
                      <p className="text-sm text-muted-foreground">Web3 Specialist</p>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent" />
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="bg-card border border-primary/20 rounded-lg p-4 text-center hover:border-primary/50 transition-all">
                    <p className="text-2xl font-bold text-primary">4+</p>
                    <p className="text-sm text-muted-foreground">Years of Experience</p>
                  </div>
                  <div className="bg-card border border-primary/20 rounded-lg p-4 text-center hover:border-primary/50 transition-all">
                    <p className="text-2xl font-bold text-primary">300K+</p>
                    <p className="text-sm text-muted-foreground">Community Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
