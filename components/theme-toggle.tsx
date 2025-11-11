"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center hover-glow group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent animate-gradient" />
      <div className="relative z-10 transition-transform duration-500 ease-in-out">
        {theme === "dark" ? (
          <Moon className="w-6 h-6 text-primary animate-bounce-in" />
        ) : (
          <Sun className="w-6 h-6 text-primary animate-bounce-in" />
        )}
      </div>
      <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}
