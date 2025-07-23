import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "./ui/button.jsx"

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-accent-purple/20 opacity-70 -z-10"></div>
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start space-y-6 text-center lg:text-left">
          <p className="text-lg text-accent-purple font-semibold">I am Geeth Senevirathna</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-text-light">
            Full Stack Developer <span className="text-accent-purple">+</span> UX Designer
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-text-muted">
            I break down complex user experience problems to create integrity, focused solutions that connect billions
            of people.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="bg-accent-purple hover:bg-light-purple text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              Search on
            </Button>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-text-light hover:text-accent-purple transition-all duration-300 hover:scale-125"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-text-light hover:text-accent-purple transition-all duration-300 hover:scale-125"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-text-light hover:text-accent-purple transition-all duration-300 hover:scale-125"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-text-light hover:text-accent-purple transition-all duration-300 hover:scale-125"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 w-full max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-accent-purple">14</span>
              <span className="text-sm text-text-muted">Years of Experience</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-accent-purple">50+</span>
              <span className="text-sm text-text-muted">Project Completed</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-accent-purple">1.5K</span>
              <span className="text-sm text-text-muted">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-accent-purple">14</span>
              <span className="text-sm text-text-muted">Awards Won</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-accent-purple/50">
            <img
              src="/images/geeth-profile.jpg"
              alt="Geeth Senevirathna Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
