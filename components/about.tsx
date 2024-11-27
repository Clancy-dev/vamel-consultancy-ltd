import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Vamel Consultancy Limited</h2>
            <p className="text-lg text-gray-600">
              At Vamel Consultancy Limited, we bridge the gap between talented professionals and their dream careers. With years of experience in the job market, we understand the unique challenges faced by both job seekers and employers.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to empower individuals to reach their full potential by connecting them with opportunities that align with their skills, passions, and career goals. We work tirelessly to understand the needs of both our clients and partner companies, ensuring perfect matches that drive success and satisfaction.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Personalized career guidance</li>
              <li>Access to exclusive job opportunities</li>
              <li>Resume and interview preparation</li>
              <li>Long-term career development support</li>
            </ul>
            <Button asChild size="lg" className="mt-4">
              <a href="/services">Learn More About Our Services</a>
            </Button>
          </div>
          <div className="relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/about.jpg?height=800&width=600&text=Vamel+Consultancy+Team"
              alt="Vamel Consultancy Team"
              layout="fill"
              objectFit="cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

