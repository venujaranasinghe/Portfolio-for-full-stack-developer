import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
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
