import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Footer from './Footer'
import ReviewSection from './ReviewSection'
import ContactSection from './ContactSection'
import Header from './Header'
import Portfolio from './Portfolio'
import ServiceSection from './ServiceSection'

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <Portfolio />
    <ReviewSection />
    <ContactSection />
    <Footer />
    </>
  )
}
