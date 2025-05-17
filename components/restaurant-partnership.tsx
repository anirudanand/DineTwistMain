import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RestaurantPartnership() {
  const benefits = [
    "Reach new customers and increase table bookings",
    "Fill tables during off-peak hours",
    "Gain exposure to the DINK demographic",
    "Receive detailed analytics and customer feedback",
    "Offer exclusive promotions to DineTwist users",
    "No upfront costs to join the platform",
  ]

  return (
    <section id="restaurants" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner With DineTwist</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our network of restaurants and connect with new customers looking for exceptional dining experiences.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-600">{benefit}</p>
                </li>
              ))}
            </ul>
            <Button className="bg-rose-600 hover:bg-rose-700">Become a Partner</Button>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=500&width=600&text=Restaurant+Partner"
                alt="Restaurant partner"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-rose-100 rounded-full p-2">
                  <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">50+ Restaurant Partners</p>
                  <p className="text-xs text-gray-500">Join our growing network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
