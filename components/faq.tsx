import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How does the matching process work?",
      answer:
        "Our algorithm matches couples based on location, dietary preferences, cuisine interests, and communication styles. We aim to create compatible dining groups where conversation flows naturally and everyone enjoys the experience.",
    },
    {
      question: "When do we find out which restaurant we'll be dining at?",
      answer:
        "You'll receive the restaurant details the day before your scheduled dinner. This maintains an element of surprise while giving you enough time to plan your evening.",
    },
    {
      question: "What if we have dietary restrictions or allergies?",
      answer:
        "During the profile creation process, you can specify any dietary restrictions or allergies. We ensure that the selected restaurants can accommodate these needs for all diners in your group.",
    },
    {
      question: "Can we opt out of a specific date or restaurant?",
      answer:
        "Yes, you can opt out of a specific date or restaurant if necessary. We understand that conflicts arise, and we want to ensure you have a positive experience.",
    },
    {
      question: "How many couples will we be dining with?",
      answer:
        "Typically, you'll be matched with one other couple for a more intimate dining experience. This creates a balanced dynamic for conversation and connection.",
    },
    {
      question: "Is there a membership fee to use DineTwist?",
      answer:
        "DineTwist operates on a subscription model with different tiers available. You can choose the plan that best fits your dining frequency and preferences.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the DineTwist experience.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-900">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
