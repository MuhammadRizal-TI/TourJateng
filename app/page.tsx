import Image from 'next/image'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Faq } from '@/components/faq'
import { Testimonials } from '@/components/testimonials'
import { Cta } from '@/components/cta'
import { Partners } from '@/components/partners'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Faq />
      <Testimonials />
      <Cta />
      <Partners />
      <Footer />
    </main>
  )
}

