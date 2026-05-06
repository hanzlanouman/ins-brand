import Hero from "@/components/hero/hero"
import ContentNotes from "@/components/content-notes"
import FocusAreas from "@/components/focus-areas"
import AboutArfah from "@/components/about-arfah"
import ContentLibrary from "@/components/content-library"
import ResourcesEcosystem from "@/components/resources-ecosystem"
import FinalConversionCTA from "@/components/final-conversion-cta"
import OtherWork from "@/components/other-work"


export default function Home() {
  return (
    <main className="min-h-screen mx-auto">
      <div className="bg-[#efc5d040] sm:mx-auto mx-2 max-w-[82.25rem] rounded-3xl my-4">
        <Hero />
        <ContentNotes />
      </div>
      <FocusAreas />
      <AboutArfah />
      <ContentLibrary />
      <ResourcesEcosystem />
      <OtherWork />
      <FinalConversionCTA />
    </main>
  )
}
