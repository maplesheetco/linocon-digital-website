import Hero from '../components/sections/Hero'
import Statement from '../components/sections/Statement'
import Services from '../components/sections/Services'
import Included from '../components/sections/Included'
import Process from '../components/sections/Process'
import Audit from '../components/sections/Audit'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <Included />
      <Process />
      <Audit />
      <FAQ />
      <CTA />
    </>
  )
}
