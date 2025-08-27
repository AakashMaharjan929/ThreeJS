import LogoSection from './sections/LogoSection'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
    console.log("App rendered");
  return (
    <>
    <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />

    </>
  )
}

export default App