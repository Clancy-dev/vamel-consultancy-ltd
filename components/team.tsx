import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const teamMembers = [
  {
    name: 'Ivan',
    role: 'CEO & Founder',
    bio: 'With over 4+ years of experience in HR and recruitment, Alice founded Vamel Consultancy to revolutionize job placement.',
    avatar: '/head.jpg',
  },
  {
    name: 'name',
    role: 'unknown',
    bio: 'unknown',
    avatar: '/person2.jpg',
  },
  {
    name: 'name',
    role: 'unknown',
    bio: 'unknown',
    avatar: '/person3.jpg',
  },
  {
    name: 'name',
    role: 'Unknown',
    bio: 'Unknown',
    avatar: '/person4.jpg',
  },
]

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex flex-col justify-between">
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

export default Team

