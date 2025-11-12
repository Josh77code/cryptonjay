"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 blockchain-grid relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blockchain-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blockchain-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 text-center lg:text-left ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              I'm Project Manager
              <br />
              <span className="text-primary animate-neon-text-glow">CRYPTONJAY</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Web3 specialist, Business Developer, Community Manager, and Business Analyst. I drive growth and
              innovation in blockchain projects through strategic partnerships and community engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Learn More
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative w-full max-w-md mx-auto h-[22rem] sm:h-96">
              {/* 3D Background glow */}
              <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 animate-glow-pulse" />

              {/* 3D Human avatar container */}
              <div className="relative z-10 w-full h-full">
                {/* Head */}
                <div
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full shadow-2xl border-4 border-primary/30 animate-blockchain-float"
                  style={{
                    background: "linear-gradient(135deg, #fed7aa 0%, #fb923c 50%, #f97316 100%)",
                    boxShadow: "0 20px 50px rgba(0, 255, 178, 0.4), inset -10px -10px 30px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Eyes */}
                  <div className="absolute top-6 left-4 w-2 h-2 bg-gray-900 rounded-full animate-pulse" />
                  <div className="absolute top-6 right-4 w-2 h-2 bg-gray-900 rounded-full animate-pulse" />
                  {/* Mouth */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gray-900 rounded-full" />
                </div>

                {/* Body */}
                <div
                  className="absolute top-32 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl border-4 border-primary/30 shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
                    boxShadow: "0 30px 60px rgba(0, 255, 178, 0.3), inset -5px -5px 20px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Chest shine */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-white/20 rounded-lg blur-sm" />
                </div>

                {/* Left Arm */}
                <div
                  className="absolute top-36 left-8 w-4 h-24 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full transform -rotate-12 shadow-lg"
                  style={{
                    background: "linear-gradient(90deg, #fed7aa 0%, #fb923c 100%)",
                    boxShadow: "0 10px 30px rgba(0, 255, 178, 0.2)",
                  }}
                />

                {/* Right Arm */}
                <div
                  className="absolute top-36 right-8 w-4 h-24 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full transform rotate-12 shadow-lg"
                  style={{
                    background: "linear-gradient(90deg, #fed7aa 0%, #fb923c 100%)",
                    boxShadow: "0 10px 30px rgba(0, 255, 178, 0.2)",
                  }}
                />

                {/* Legs */}
                <div className="absolute top-64 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div
                    className="w-3 h-20 bg-gradient-to-b from-gray-800 to-black rounded-full shadow-lg"
                    style={{
                      boxShadow: "0 15px 30px rgba(0, 255, 178, 0.15)",
                    }}
                  />
                  <div
                    className="w-3 h-20 bg-gradient-to-b from-gray-800 to-black rounded-full shadow-lg"
                    style={{
                      boxShadow: "0 15px 30px rgba(0, 255, 178, 0.15)",
                    }}
                  />
                </div>

                {/* Neon outline glow */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
