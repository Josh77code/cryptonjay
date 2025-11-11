"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Zap } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-glow-pulse">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-primary animate-neon-text-glow">CRYPTO</span>
              <span className="text-foreground">NJAY</span>
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 relative group ${
                  pathname === link.href ? "text-primary" : "text-foreground"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
