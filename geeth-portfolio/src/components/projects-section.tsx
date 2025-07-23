"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      id: 1,
      category: "Web",
      title: "Debulbs",
      description: "New Creative Course Builders, Flexibility, and reload success in the switch to Debulbs",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      category: "Branding",
      title: "Grow Your Business, With Us",
      description: "New Creative Course Builders, Flexibility, and reload success in the switch to Debulbs",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      category: "App",
      title: "Sebastian Camargo",
      description: "New Creative Course Builders, Flexibility, and reload success in the switch to Debulbs",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      category: "UI/UX",
      title: "Bigger, Bolder and Better",
      description: "New Creative Course Builders, Flexibility, and reload success in the switch to Debulbs",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      category: "Web",
      title: "Creative Agency Website",
      description: "A modern and responsive website for a creative agency.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      category: "Branding",
      title: "Brand Identity Design",
      description: "Developing a strong and memorable brand identity.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="works" className="w-full py-16 md:py-24 lg:py-32 bg-dark-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-4">My Recent Works</h2>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["All", "Branding", "UI/UX", "Web", "App"].map((cat) => (
            <Button
              key={cat}
              variant="ghost"
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-accent-purple text-white shadow-lg"
                  : "text-text-muted hover:bg-accent-purple/20 hover:text-accent-purple"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-xl bg-dark-bg border border-accent-purple/30"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-text-light mb-2">{project.title}</h3>
                <p className="text-text-muted text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
