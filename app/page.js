import Hero from "@/components/sections/Hero"
import Section2 from "@/components/sections/Section2"
import Section3 from "@/components/sections/Section3"
import Section4 from "@/components/sections/Section4"
import Footer from "@/components/layout/Footer"
import Section5 from "@/components/sections/Section5"
import FAQ from "@/components/sections/Faq"
import Section6 from "@/components/sections/Section6"
import Started from "@/components/sections/Started"
import Navbar from "@/components/layout/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <FAQ />
      <Section6 />
      <Started />
      <Footer />
    </>
  )
}
