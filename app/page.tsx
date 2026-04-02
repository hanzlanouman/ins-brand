import Hero from "@/components/hero/hero"
import BeforeAfterStrip from "@/components/before-after-strip"
import Process from "@/components/process"
import ProofGrid from "@/components/proof-grid"
import Pricing from "@/components/pricing"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <Hero />
      <BeforeAfterStrip />
      <Process />
      <ProofGrid />
      <Pricing />
      {/* <FAQ /> */}
      <ContactCTA />
    </main>
  )
}
