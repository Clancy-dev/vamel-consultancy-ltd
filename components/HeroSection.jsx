'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
// import ShimmerButton from './ui/shimmer-button'

const backgroundImages = [
  '/hero1.jpeg?height=600&width=1200&text=Image1',
  '/hero2.jpeg?height=600&width=1200&text=Image2',
  '/hero3.jpeg?height=600&width=1200&text=Image3',
  '/hero4.jpeg?height=600&width=1200&text=Image4',
  '/hero5.jpeg?height=600&width=1200&text=Image5',
]

const welcomeTexts = [
  { title: "Welcome to Vamel Consultancy Ltd", subtitle: "Your bridge to dream career opportunities" },
  { title: "Unlock Your Career Potential", subtitle: "We connect talent with transformative job opportunities" },
  { title: "Navigate Your Career Journey", subtitle: "Expert guidance to your ideal professional path" },
  { title: "Empowering Job Seekers", subtitle: "Turn your career aspirations into reality" },
  { title: "Your Dream Job Awaits", subtitle: "Let us help you take the next step in your career" },
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTextVisible, setIsTextVisible] = useState(true)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 6000)

    const textInterval = setInterval(() => {
      setIsTextVisible(false)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % welcomeTexts.length)
        setIsTextVisible(true)
      }, 500)
    }, 6000)

    return () => {
      clearInterval(imageInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <section className="relative  min-h-[50vh] sm:min-h-[70vh] md:min-h-[90vh] lg:min-h-[100vh] max-w-[100%] overflow-hidden p-6">
      {backgroundImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Background ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0  bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className={`transition-all duration-500 ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 p-4 ">{welcomeTexts[currentTextIndex].title}</h1>
            <p className="text-xl md:text-2xl mb-8 ">{welcomeTexts[currentTextIndex].subtitle}</p>
          </div>
          <Button asChild size="lg" className=" border-b-[1px] border-l-[1px]  bg-red-500 hover:bg-orange-600 text-white">
            <Link href="/jobs">Find Your Dream Job</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

