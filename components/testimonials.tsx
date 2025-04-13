import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content:
        "The flight tracking feature is a game-changer. My flight was delayed by 2 hours, but I didn't have to worry about my transfer as they were monitoring my flight in real-time.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Frequent Traveler",
      content:
        "Exceptional service from start to finish. The booking process was simple, the vehicle was luxurious, and the chauffeur was professional and courteous.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Family Vacation",
      content:
        "Traveling with three children can be stressful, but your service made our airport transfer seamless. The spacious vehicle and punctual pickup were perfect.",
      rating: 4,
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-400 text-lg">
          Hear from travelers who have experienced our VIP airport transfer service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#111111] border border-[#222222] rounded-xl p-6">
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < testimonial.rating ? "text-orange-500 fill-orange-500" : "text-gray-600"}`}
                />
              ))}
            </div>
            <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
            <div>
              <div className="font-bold">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
