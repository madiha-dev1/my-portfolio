import Intro from '../components/Intro'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import SkillsSection from '../components/SkillsSection'
import Pricing from '../components/pricing'
import SignalCore from '../components/SignalCore'

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <AboutPreview />
      <SkillsSection />
      <Pricing/>
      <SignalCore />
    </>
  )
}
