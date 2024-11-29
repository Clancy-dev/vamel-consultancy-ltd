import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const teamMembers = [
  {
    name: 'Ivan',
    role: 'CEO & Founder',
    bio: 'With over 4+ years of experience in HR and recruitment, Ivan founded Vamel Consultancy to revolutionize job placement.',
    avatar: '/person1.jpg',
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

