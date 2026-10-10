import Hero from '../components/sections/Hero'
import Benefits from '../components/sections/Benefits'
import Statement from '../components/sections/Statement'
import Services from '../components/sections/Services'
import Work from '../components/sections/Work'
import Included from '../components/sections/Included'
import Process from '../components/sections/Process'
import Audit from '../components/sections/Audit'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Statement />
      <Services />
      <Included />
      <Process />
      <Work />
      <Audit />
      <FAQ />
      <CTA />
    </>
  )
}
