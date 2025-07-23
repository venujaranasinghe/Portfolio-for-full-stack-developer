import { Briefcase, GraduationCap } from "lucide-react"

export default function AboutSection() {
  const experience = [
    {
      years: "2022 - Present",
      title: "LEAD DEVELOPER",
      company: "Blockbusta, London",
    },
    {
      years: "2021 - 2022",
      title: "FULL STACK WEB DEVELOPER",
      company: "Persons, The New Critical",
    },
    {
      years: "2020 - 2021",
      title: "UI DESIGNER",
      company: "House of Life, Leeds",
    },
    {
      years: "2018 - 2020",
      title: "JUNIOR GRAPHICS DESIGNER",
      company: "Frame Solutions, Dubai",
    },
  ]

  const education = [
    {
      years: "2020 - 2023",
      title: "PROGRAMMING COURSE",
      institution: "Harvard University",
    },
    {
      years: "2018 - 2020",
      title: "GRAPHIC DESIGN COURSE",
      institution: "University of California",
    },
    {
      years: "2017 - 2018",
      title: "WEB DESIGN COURSE",
      institution: "University of London",
    },
    {
      years: "2016 - 2017",
      title: "DESIGN & TECHNOLOGY",
      institution: "Parsons The New School",
    },
  ]

  return (
    <section id="resume" className="w-full py-16 md:py-24 lg:py-32 bg-dark-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-12">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Placeholder Image for About Section */}
          <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
            <div className="relative w-full max-w-md h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl border border-accent-purple/30">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="About Me Background"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-accent-purple mb-6 flex items-center gap-3">
                <Briefcase className="h-7 w-7" /> My Experience
              </h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-lg bg-accent-purple/10 border border-accent-purple/20 shadow-md transition-all duration-300 hover:bg-accent-purple/20 hover:shadow-xl"
                  >
                    <p className="text-sm text-text-muted mb-1">{item.years}</p>
                    <h4 className="text-lg font-semibold text-text-light">{item.title}</h4>
                    <p className="text-base text-text-muted">{item.company}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-accent-purple mb-6 flex items-center gap-3">
                <GraduationCap className="h-7 w-7" /> My Education
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-lg bg-accent-purple/10 border border-accent-purple/20 shadow-md transition-all duration-300 hover:bg-accent-purple/20 hover:shadow-xl"
                  >
                    <p className="text-sm text-text-muted mb-1">{item.years}</p>
                    <h4 className="text-lg font-semibold text-text-light">{item.title}</h4>
                    <p className="text-base text-text-muted">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
