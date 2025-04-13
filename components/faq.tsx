import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  const faqs = [
    {
      question: "How does the flight tracking service work?",
      answer:
        "Our system monitors your flight in real-time using the flight number you provide. If your flight is delayed or arrives early, we automatically adjust your pickup time to ensure your chauffeur is there when you need them.",
    },
    {
      question: "What happens if my flight is delayed?",
      answer:
        "Don't worry! We track your flight in real-time and automatically adjust your pickup time based on the actual arrival time. Your chauffeur will be waiting for you regardless of any delays, at no extra charge.",
    },
    {
      question: "How much luggage can I bring?",
      answer:
        "The luggage capacity depends on the vehicle type you choose. Our Executive Sedans can accommodate 2 large and 2 small pieces, Luxury SUVs can fit 4 large and 2 small pieces, and our Premium Vans can handle 7 large and 3 small pieces of luggage.",
    },
    {
      question: "Is there a waiting time charge?",
      answer:
        "We provide a complimentary waiting time of 60 minutes for international flights and 30 minutes for domestic flights after the actual landing time. Additional waiting time is charged at our standard hourly rate.",
    },
    {
      question: "Can I book a return transfer?",
      answer:
        "Yes, you can book a round trip during the reservation process. Simply select the 'Round Trip' option and provide the details for your return journey. You'll receive a discount when booking both transfers together.",
    },
    {
      question: "How do I modify or cancel my booking?",
      answer:
        "You can modify or cancel your booking through your account or by contacting our customer service team. Cancellations made at least 24 hours before the scheduled pickup time receive a full refund. Changes are subject to availability.",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-lg">Find answers to common questions about our VIP airport transfer service</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
