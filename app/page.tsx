import Hero from "@/components/hero/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import FAQ from "@/components/faq"
import PainPoints from "@/components/pain-points"
import Demo from "@/components/demo"
import Partnership from "@/components/partnership"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <Hero />
      <PainPoints />
      <Services />
      <Demo />
      <Process />
      <Partnership />
      <ContactForm />
      <FAQ />
    </main>
  )
}
