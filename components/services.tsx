import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: 'Job Matching',
    description: 'We use advanced algorithms to match your skills with the perfect job opportunities.',
  },
  {
    title: 'Resume Building',
    description: 'Our experts help you craft a compelling resume that stands out to employers.',
  },
  {
    title: 'Interview Preparation',
    description: 'We provide comprehensive interview coaching to boost your confidence and performance.',
  },
  {
    title: 'Career Counseling',
    description: 'Get personalized advice to guide your career path and achieve your professional goals.',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services

