import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Lessly AI has saved our restaurant hours each week. The responses are personalized and our customers love the quick replies.",
      author: "Maria Rodriguez",
      role: "Restaurant Owner",
      avatar: "MR",
    },
    {
      quote:
        "As a busy salon owner, I never had time to reply to all our Google reviews. Now Lessly does it for me, and it sounds just like me!",
      author: "James Wilson",
      role: "Salon Owner",
      avatar: "JW",
    },
    {
      quote:
        "Our auto repair shop has seen a 30% increase in new customers since we started responding to every review with Lessly AI.",
      author: "David Chen",
      role: "Auto Shop Manager",
      avatar: "DC",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join hundreds of businesses saving time with Lessly AI
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-4 border-t">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                  <AvatarFallback className="bg-gradient-to-br from-teal-400 to-blue-400 text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{testimonial.author}</span>
                  <span className="text-xs text-gray-500">{testimonial.role}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-6">Trusted by businesses everywhere</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
