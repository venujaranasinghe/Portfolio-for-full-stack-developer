import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between relative z-50">
      <div className="flex items-center gap-2">
        <Link href="#" className="flex items-center gap-2 text-2xl font-bold text-accent-purple">
          <span className="font-extrabold text-3xl">G</span>
          <span className="hidden md:inline">geethsenevirathna.com</span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-text-light text-lg font-medium">
        <Link href="#home" className="hover:text-accent-purple transition-colors duration-300">
          Home
        </Link>
        <Link href="#services" className="hover:text-accent-purple transition-colors duration-300">
          Services
        </Link>
        <Link href="#works" className="hover:text-accent-purple transition-colors duration-300">
          Works
        </Link>
        <Link href="#resume" className="hover:text-accent-purple transition-colors duration-300">
          Resume
        </Link>
        <Link href="#skills" className="hover:text-accent-purple transition-colors duration-300">
          Skills
        </Link>
        <Link href="#testimonials" className="hover:text-accent-purple transition-colors duration-300">
          Testimonials
        </Link>
        <Link href="#contact" className="hover:text-accent-purple transition-colors duration-300">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="hidden md:inline-flex bg-accent-purple hover:bg-light-purple text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
          Hire Me!
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-text-light">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-dark-bg border-l border-accent-purple/30 text-text-light">
            <div className="flex flex-col gap-6 py-6">
              <Link
                href="#home"
                className="text-lg font-medium hover:text-accent-purple transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-lg font-medium hover:text-accent-purple transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="#works"
                className="text-lg font-medium hover:text-accent-purple transition-colors duration-300"
              >
                Works
              </Link>
              <Link
                href="#resume"
                className="text-lg font-medium hover:text-accent-purple transition-colors duration-300"
              >
                Resume
              </Link>
              <Link
                href="#skills"
                className="text-lg font-medium hover:text-accent-purple transition-colors duration-300"
              >
                Skills
              </Link>
              <Link
                href="#testimonials"
                className="text-lg font-medium hover:text-accent-purple transition-colors duration-300"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium hover:text-accent-purple transition-colors duration-300"
              >
                Contact
              </Link>
              <Button className="bg-accent-purple hover:bg-light-purple text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                Hire Me!
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
