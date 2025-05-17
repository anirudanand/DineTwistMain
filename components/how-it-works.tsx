import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Sign up as a couple and tell us about your dining preferences, dietary restrictions, and interests.",
      image: "/placeholder.svg?height=300&width=400&text=Create+Profile",
    },
    {
      number: "02",
      title: "Get Matched",
      description: "Our algorithm matches you with compatible couples for a shared dining experience.",
      image: "/placeholder.svg?height=300&width=400&text=Get+Matched",
    },
    {
      number: "03",
      title: "Receive Your Surprise",
      description: "Discover your restaurant and dining companions the day before your scheduled dinner.",
      image: "/placeholder.svg?height=300&width=400&text=Receive+Surprise",
    },
    {
      number: "04",
      title: "Enjoy Your Evening",
      description: "Meet your dining companions, enjoy great food, and engage with fun conversation games.",
      image: "/placeholder.svg?height=300&width=400&text=Enjoy+Evening",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How DineTwist Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple process designed to create exciting dining experiences and new connections.
          </p>
        </div>
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-rose-600 font-bold text-lg mb-2">{step.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                {index === steps.length - 1 && (
                  <Button className="bg-rose-600 hover:bg-rose-700">Get Started Now</Button>
                )}
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
