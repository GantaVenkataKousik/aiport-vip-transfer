import { Check, Plane, Car, MapPin } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Plane className="h-10 w-10 text-orange-500" />,
      title: "Book Your Transfer",
      description:
        "Select your pickup location, destination, date, and time. Add your flight details for real-time tracking.",
    },
    {
      icon: <Check className="h-10 w-10 text-orange-500" />,
      title: "Receive Confirmation",
      description: "Get instant confirmation with all your trip details and chauffeur contact information.",
    },
    {
      icon: <Plane className="h-10 w-10 text-orange-500" />,
      title: "Flight Monitoring",
      description: "We track your flight in real-time and adjust pickup time based on actual arrival.",
    },
    {
      icon: <Car className="h-10 w-10 text-orange-500" />,
      title: "Meet Your Chauffeur",
      description: "Your professional chauffeur will be waiting at the designated meeting point.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-orange-500" />,
      title: "Enjoy Your Ride",
      description: "Relax in comfort as we transport you safely to your destination.",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-400 text-lg">Experience our seamless VIP airport transfer service in 5 simple steps</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-[28px] top-10 bottom-10 w-1 bg-gradient-to-b from-orange-500 to-blue-500 hidden md:block"></div>

        <div className="space-y-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#111111] border border-[#333333] flex items-center justify-center z-10">
                {step.icon}
              </div>
              <div className="bg-[#111111] border border-[#222222] rounded-xl p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
