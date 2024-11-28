'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

const FindUs = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
          version: 'weekly',
        })

        const { Map } = await loader.importLibrary('maps')

        const position = { lat: 0.3576, lng: 32.6469 } // Coordinates for Kireka, Uganda

        new Map(mapRef.current as HTMLElement, {
          center: position,
          zoom: 15,
        })
      } catch (error) {
        console.error('Error loading Google Maps:', error)
      }
    }

    if (typeof window !== 'undefined') {
      initMap()
    }
  }, [])

  return (
    <section id="find-us" className="py-24 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Find Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <p className="text-lg mb-2">Kireka Shopping Center</p>
            <p className="text-lg mb-2">Kireka, Uganda</p>
            <p className="text-lg mb-6">
              We're conveniently located in the heart of Kireka, making it easy for job seekers and employers to connect with us.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg mb-2">Phone: +256 776998076</p>
            <p className="text-lg mb-2">Email: vamelconsultancygroup@gmail.com</p>
            <p className="text-lg">
              Feel free to reach out to us with any questions or to schedule an appointment.
            </p>
          </div>
          {typeof window !== 'undefined' && (
            <div ref={mapRef} className="h-96 rounded-lg shadow-lg" />
          )}
        </div>
      </div>
    </section>
  )
}

export default FindUs

