'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { smoothScroll } from '@/utils/smoothScroll'


const navItems = [
  { href: '/', label: 'Home' }, 
  { href: '#services', label: 'Our Services', id: 'services' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#find-us', label: 'Find Us', id: 'find-us' },
  { href: '#reviews', label: 'Reviews', id: 'reviews' },
  { href: '#team', label: 'Our Team', id: 'team' },
  { href: '#contact', label: 'Contact Us', id: 'contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
  
    <header className="bg-white text-blue-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className=" tiny-logo w-[5.3rem] h-[4.3rem] sm:w-[6rem] sm:h-[5rem] lg:w-[8rem] lg:h-[6.4rem] relative">
            <Image
              src="/logo1.png?height=10&width=20"
              alt="Vamel Consultancy Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className=" sm:text-[1.2rem] md:text-2xl lg:text-2xl font-bold text-red-500 font">Vamel Consultancy Ltd</span>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => item.id && smoothScroll(e, item.id)}
                  className={`hover:text-blue-800 transition-colors paragraph text-lg ${
                    pathname === item.href ? 'text-red-500 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden border-blue-600 text-blue-600"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white text-blue-600">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg hover:text-blue-800 transition-colors paragraph ${
                    pathname === item.href ? 'text-orange-500 font-semibold' : ''
                  }`}
                  onClick={(e) => {
                    setIsOpen(false);
                    item.id && smoothScroll(e, item.id);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

