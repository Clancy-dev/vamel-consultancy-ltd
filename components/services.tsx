import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, FileText, Users, Compass, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Job Matching',
    description: 'We use advanced algorithms to match your skills with the perfect job opportunities.',
    icon: Briefcase,
    gradient: 'from-blue-400 to-blue-600',
    pattern: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
  },
  {
    title: 'Resume Building',
    description: 'Our experts help you craft a compelling resume that stands out to employers.',
    icon: FileText,
    gradient: 'from-green-400 to-green-600',
    pattern: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-1a6 6 0 1 1 0-12 6 6 0 0 1 0 12z'/%3E%3C/g%3E%3C/svg%3E\")",
  },
  {
    title: 'Interview Preparation',
    description: 'We provide comprehensive interview coaching to boost your confidence and performance.',
    icon: Users,
    gradient: 'from-purple-400 to-purple-600',
    pattern: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h20L0 20z'/%3E%3C/g%3E%3C/svg%3E\")",
  },
  {
    title: 'Career Counseling',
    description: 'Get personalized advice to guide your career path and achieve your professional goals.',
    icon: Compass,
    gradient: 'from-orange-400 to-orange-600',
    pattern: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'/%3E%3C/g%3E%3C/svg%3E\")",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-shadow duration-300">
            <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
            <div className="relative h-full" style={{ backgroundImage: service.pattern }}>
              <CardHeader className="pt-6">
                <div className={`p-3 rounded-full mb-4 inline-flex bg-gradient-to-br ${service.gradient}`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="h-full flex flex-col justify-between">
                <CardDescription className="text-sm text-gray-600 mb-4">{service.description}</CardDescription>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} aria-hidden="true" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services

