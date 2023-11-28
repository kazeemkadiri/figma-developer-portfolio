import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Expertise from '@/components/Expertise/Expertise'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--site-black)] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
