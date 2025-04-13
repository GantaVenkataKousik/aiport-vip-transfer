import { Car, Clock, CreditCard, MapPin, Plane, Shield } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Plane className="h-10 w-10 text-orange-500" />,
      title: "Real-Time Flight Tracking",
      description:
        "Our system monitors your flight status in real-time, adjusting pickup times automatically for delays or early arrivals.",
    },
    {
      icon: <Car className="h-10 w-10 text-orange-500" />,
      title: "Luxury Fleet",
      description:
        "Choose from our premium selection of vehicles, from executive sedans to luxury SUVs, all maintained to the highest standards.",
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "Punctual Service",
      description: "Our drivers arrive 15 minutes before the scheduled time, ensuring you never have to wait.",
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-500" />,
      title: "Professional Chauffeurs",
      description: "Experienced, professional, and discreet chauffeurs trained to provide exceptional VIP service.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-orange-500" />,
      title: "Door-to-Door Service",
      description: "Seamless transfers from your doorstep to your destination with no hassle or stress.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-orange-500" />,
      title: "Transparent Pricing",
      description: "All-inclusive pricing with no hidden fees or surcharges, pay only what you see.",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Airport Transfer Experience</h2>
        <p className="text-gray-400 text-lg">
          Our VIP service combines luxury, technology, and exceptional customer care
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-[#222222] rounded-xl p-6 transition-all duration-300 hover:border-orange-500/50"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
