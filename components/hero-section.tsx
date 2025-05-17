import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-orange-50 -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Surprise Social Dining for Couples
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              DineTwist connects couples for exciting dining experiences at surprise restaurants. Discover new places,
              meet interesting people, and enjoy memorable evenings together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="group">
                How It Works
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=40&width=40&text=User${i}`}
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">500+</span> couples already enjoying DineTwist
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800&text=Couples+Dining"
                alt="Couples enjoying dinner"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Next dinner</p>
                  <p className="text-xs text-gray-500">Wednesday, 7:30 PM</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-rose-100 rounded-full p-2">
                  <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">New connections</p>
                  <p className="text-xs text-gray-500">Meet 2 new couples</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
