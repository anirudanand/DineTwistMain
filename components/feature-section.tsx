import { Utensils, Users, Calendar, Star, MessageCircle, MapPin } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Utensils className="h-6 w-6 text-rose-600" />,
      title: "Curated Restaurants",
      description: "Discover new dining spots handpicked for quality and ambiance.",
    },
    {
      icon: <Users className="h-6 w-6 text-rose-600" />,
      title: "Compatible Matches",
      description: "Meet couples with similar interests and dietary preferences.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-rose-600" />,
      title: "Hassle-Free Scheduling",
      description: "We handle all the reservations and scheduling details.",
    },
    {
      icon: <Star className="h-6 w-6 text-rose-600" />,
      title: "Surprise Element",
      description: "Experience the excitement of a surprise dining location.",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-rose-600" />,
      title: "Interactive Games",
      description: "Break the ice with fun conversation starters and games.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-rose-600" />,
      title: "City Center Locations",
      description: "Convenient, accessible restaurant locations for everyone.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Couples Love DineTwist</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've designed every aspect of the experience to create memorable evenings and meaningful connections.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-rose-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
