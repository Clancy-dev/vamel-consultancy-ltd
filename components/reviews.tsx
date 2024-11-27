import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const reviews = [
  {
    name: 'John Doe',
    role: 'Software Developer',
    content: 'Vamel Consultancy helped me land my dream job at a top tech company. Their personalized approach and interview preparation were invaluable.',
    avatar: '/avatars/john-doe.png',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Manager',
    content: 'I was impressed by the quality of job matches Vamel provided. They truly understood my career goals and found the perfect opportunity for me.',
    avatar: '/avatars/jane-smith.png',
  },
  {
    name: 'David Johnson',
    role: 'Finance Analyst',
    content: 'The career counseling I received from Vamel was eye-opening. It helped me pivot my career in a direction I hadnt considered before.',
    avatar: '/avatars/david-johnson.png',
  },
]

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="flex flex-col justify-between">
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

