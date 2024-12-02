'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const teamMembers = [
  {
    name: 'Muhwezi Ivan',
    role: 'CEO & Founder',
    bio: 'With over 4+ years of experience in HR and recruitment, Ivan founded Vamel Consultancy to revolutionize job placement.',
    avatar: '/ivan.jpg',
  },
  {
    name: 'Ninyebaza Penina',
    role: 'Field Officer',
    bio: 'She is a proactive team member at Vamel Consultancy Ltd., focused on connecting job seekers with their ideal roles. She excels in fieldwork, building relationships, and ensuring effective collaboration between clients and employers.',
    avatar: '/person2.jpg',
  },
  {
    name: 'Jacinta Ajilong',
    role: 'Field Officer',
    bio: ' She is a skilled professional at Vamel Consultancy Ltd, dedicated to linking job seekers with employers. She excels in field operations, fostering networks, and ensuring seamless candidate-employer coordination.',
    avatar: '/person3.jpg',
  },
  {
    name: 'Ruth Kyoshabire',
    role: 'Front Desk Officer',
    bio: 'She is the welcoming face of Vamel Consultancy Ltd., ensuring a professional and friendly experience for all visitors. She excels in client support, managing inquiries, and maintaining smooth office operations.',
    avatar: '/person4.jpg',
  },
  {
    name: 'Trinity Anek Daisy',
    role: 'Legal and Governance',
    bio: 'She ensures that Vamel Consultancy Ltd complies with all local, national, and international laws, particularly those related to employment and recruitment.',
    avatar: '/daisy.jpg',
  },
  {
    name: 'Ruth Kyoshabire',
    role: 'Front Desk Officer',
    bio: 'She is the welcoming face of Vamel Consultancy Ltd., ensuring a professional and friendly experience for all visitors. She excels in client support, managing inquiries, and maintaining smooth office operations.',
    avatar: '/person4.jpg',
  },
]

const SlidingTeamMembers = () => {
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
        container.scrollLeft = container.scrollWidth / 2 - moveAmount
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
    <section id="sliding-team" className="py-24 px-6 bg-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div 
          ref={containerRef}
          className="flex overflow-x-hidden touch-pan-y"
          onTouchStart={handleTouch}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
            <Card key={index} className="flex-shrink-0 w-[300px] mx-4">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <p className="text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SlidingTeamMembers

