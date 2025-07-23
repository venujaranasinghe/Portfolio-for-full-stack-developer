import { Code, Palette, Layout, Database, GitBranch, Zap } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    { name: "Photoshop", percentage: 90, icon: Palette },
    { name: "Figma", percentage: 85, icon: Layout },
    { name: "Xd", percentage: 80, icon: Code }, // Using Code as a placeholder for Xd
    { name: "WordPress", percentage: 95, icon: Database }, // Using Database as a placeholder for WordPress
    { name: "React", percentage: 89, icon: GitBranch }, // Using GitBranch as a placeholder for React
    { name: "Bootstrap", percentage: 75, icon: Zap }, // Using Zap as a placeholder for Bootstrap
  ]

  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-dark-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-4">My Skills</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted mb-12">
          I possess a diverse set of skills that enable me to deliver high-quality full-stack solutions and intuitive
          user experiences.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg bg-accent-purple/10 border border-accent-purple/20 shadow-md transition-all duration-300 hover:bg-accent-purple/20 hover:shadow-xl hover:scale-105"
            >
              <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-accent-purple/20 mb-4">
                <skill.icon className="h-10 w-10 text-accent-purple" />
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-text-light opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {`${skill.percentage}%`}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-light">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
