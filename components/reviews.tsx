'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const reviews = [
  {
    name: 'Syliva Kansime',
    role: 'NSSF Adminstrator',
    content: 'Vamel Consultancy helped me land my dream job at a top tech company. Their personalized approach and interview preparation were invaluable.',
    avatar: '/rev3.jpg',
  },
  {
    name: 'Kyambadde Derrick',
    role: 'Quality Logistics ltd - Accountant',
    content: 'I was impressed by the quality of job matches Vamel provided. They truly understood my career goals and found the perfect opportunity for me.',
    avatar: '/rev1.jpg',
  },
  {
    name: 'Ochieng David',
    role: 'BBA student Mubs',
    content: 'The career counseling I received from Vamel was eye-opening. It helped me pivot my career in a direction I hadnt considered before.',
    avatar: '/rev2.jpg',
  },
]

const Reviews = () => {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (!isPaused) {
        const moveAmount = (progress * 0.02) % (container.scrollWidth / 2)
        container.scrollLeft = moveAmount
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused])

  const handleTouch = () => {
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  return (
    <section id="reviews" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div 
          ref={containerRef}
          className="flex overflow-x-hidden touch-pan-y"
          onTouchStart={handleTouch}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <Card key={index} className="flex-shrink-0 w-[300px] mx-4">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">{review.content}</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback>{review.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews

