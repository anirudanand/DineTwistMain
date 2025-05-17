import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a New Dining Adventure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join DineTwist today and transform your dining experiences. Meet new couples, discover great restaurants, and
          create lasting memories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Download the App
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <img
            src="/placeholder.svg?height=50&width=150&text=App+Store"
            alt="Download on the App Store"
            className="h-12"
          />
          <img
            src="/placeholder.svg?height=50&width=150&text=Google+Play"
            alt="Get it on Google Play"
            className="h-12"
          />
        </div>
      </div>
    </section>
  )
}
