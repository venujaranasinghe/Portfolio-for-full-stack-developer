import Header from "./components/header.jsx"
import HeroSection from "./components/hero-section.jsx"
import ServicesSection from "./components/services-section.jsx"
import ProjectsSection from "./components/projects-section.jsx"
import AboutSection from "./components/about-section.jsx"
import SkillsSection from "./components/skills-section.jsx"
import TestimonialsSection from "./components/testimonials-section.jsx"
import BlogSection from "./components/blog-section.jsx"
import ContactSection from "./components/contact-section.jsx"
import Footer from "./components/footer.jsx"

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-bg to-black text-text-light font-sans scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
