import { Navigation } from "@/components/navigation"
import { MessageCircle, Send, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Send,
      title: "Telegram",
      value: "@Jerry2_Defi",
      link: "https://t.me/Jerry2_Defi",
      color: "text-blue-400",
    },
    {
      icon: MessageCircle,
      title: "X / Twitter",
      value: "@JEREMIAHTAIWO10",
      link: "https://x.com/JEREMIAHTAIWO10",
      color: "text-blue-300",
    },
    {
      icon: MessageCircle,
      title: "Discord",
      value: "29cryptojay",
      link: "https://discord.com",
      color: "text-indigo-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Taiwo Jeremiah",
      link: "https://www.linkedin.com/in/taiwo-jeremiah-b0b834249",
      color: "text-blue-500",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6 blockchain-grid relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blockchain-float" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Get In <span className="text-primary animate-neon-text-glow">TOUCH</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Reach out through any of these channels to collaborate or chat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-lg bg-card border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                <method.icon
                  className={`w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform ${method.color}`}
                />
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-primary font-mono mb-4">{method.value}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full"
                >
                  Connect
                </Button>
              </a>
            ))}
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/50 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're looking for project management expertise, business development strategies, community
              building solutions, or automation implementations, let's connect and explore opportunities together.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Start Conversation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
