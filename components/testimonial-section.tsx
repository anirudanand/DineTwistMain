import { Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "DineTwist has completely transformed our date nights. We've met amazing couples and discovered restaurants we never would have found on our own.",
      author: "Sarah & Michael",
      location: "New York, NY",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=S&M",
    },
    {
      quote:
        "As busy professionals, we love that DineTwist handles all the planning. The surprise element makes weeknight dinners exciting again!",
      author: "James & Emma",
      location: "Chicago, IL",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=J&E",
    },
    {
      quote:
        "The conversation games are genius! They made breaking the ice with new couples so much easier and more fun than we expected.",
      author: "David & Lisa",
      location: "San Francisco, CA",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=D&L",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from couples who have enjoyed the DineTwist experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
