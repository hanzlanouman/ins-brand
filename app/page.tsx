import Hero from "@/components/hero/hero"
import FounderSection from "@/components/founder-section"
import Process from "@/components/process"
import ProofGrid from "@/components/proof-grid"
import Pricing from "@/components/pricing"
import ContactCTA from "@/components/contact-cta"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <Hero />
      <ProofGrid />
      <Process />
      <FounderSection />
      <Pricing />
      <FAQ />
      <ContactCTA />
    </main>
  )
}
