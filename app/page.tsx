import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import BusinessSection from "@/components/business-section"
import TechSection from "@/components/tech-section"
import SustainabilitySection from "@/components/sustainability-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BusinessSection />
        <TechSection />
        <SustainabilitySection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
