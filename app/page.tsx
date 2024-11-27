'use client'


import Services from '@/components/services'
import About from '@/components/about'
import FindUs from '@/components/find-us'
import Reviews from '@/components/reviews'
import HeroSection from '@/components/HeroSection'
import Team from '@/components/team'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import LazyLoad from '@/components/lazy-load'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LazyLoad>
          <HeroSection/>
        </LazyLoad>
        <LazyLoad>
          <Services />
        </LazyLoad>
        <LazyLoad>
          <About />
        </LazyLoad>
        <LazyLoad>
          <FindUs />
        </LazyLoad>
        <LazyLoad>
          <Reviews />
        </LazyLoad>
        <LazyLoad>
          <Team />
        </LazyLoad>
        <LazyLoad>
          <Contact />
        </LazyLoad>
      </main>
      <Footer />
    </div>
  )
}

