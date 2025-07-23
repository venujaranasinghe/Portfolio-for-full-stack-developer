import Header from "./components/header.jsx"
import HeroSection from "./components/hero-section.jsx" // Will be converted next
import ServicesSection from "./components/services-section.jsx" // Will be converted next
import ProjectsSection from "./components/projects-section.jsx" // Will be converted next
import AboutSection from "./components/about-section.jsx" // Will be converted next
import SkillsSection from "./components/skills-section.jsx" // Will be converted next
import TestimonialsSection from "./components/testimonials-section.jsx" // Will be converted next
import BlogSection from "./components/blog-section.jsx" // Will be converted next
import ContactSection from "./components/contact-section.jsx" // Will be converted next
import Footer from "./components/footer.jsx" // Will be converted next
import "./App.css" // For any App-specific styles if needed

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        {/* These components will be converted in subsequent steps */}
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
