"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users } from "lucide-react"

export function FleetGallery() {
  const fleet = [
    {
      name: "Executive Sedan",
      description: "Ideal for business travelers and solo riders",
      image: "/images/sedan.jpg", // Placeholder image
      capacity: "3 Passengers, 2 Luggage",
      features: ["Leather SeaWhat Our Clients Sayts", "Climate Control", "WiFi"],
    },
    {
      name: "Luxury SUV",
      description: "Perfect for families or small groups with extra luggage",
      image: "/images/suv.jpg", // Placeholder image
      capacity: "6 Passengers, 4 Luggage",
      features: ["Spacious Interior", "Premium Sound System", "Privacy Windows"],
    },
    {
      name: "Premium Van",
      description: "Great for large groups and events",
      image: "/images/van.jpg", // Placeholder image
      capacity: "8 Passengers, 6 Luggage",
      features: ["Ample Legroom", "Entertainment System", "USB Charging Ports"],
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Fleet</h2>
        <p className="text-gray-400 text-lg">
          Choose from our exclusive selection of vehicles for a comfortable and stylish ride
        </p>
      </div>

      <Tabs defaultValue="sedan" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          {fleet.map((vehicle, index) => (
            <TabsTrigger key={index} value={vehicle.name.toLowerCase().replace(/ /g, "-")}>
              {vehicle.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {fleet.map((vehicle, index) => (
          <TabsContent key={index} value={vehicle.name.toLowerCase().replace(/ /g, "-")} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="rounded-xl object-cover w-full h-full aspect-video"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{vehicle.name}</h3>
                <p className="text-gray-400">{vehicle.description}</p>
                <div className="text-gray-300">
                  <p>
                    <Users className="inline-block mr-2 h-4 w-4" />
                    {vehicle.capacity}
                  </p>
                </div>
                <ul className="list-disc list-inside text-gray-400">
                  {vehicle.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button className="bg-orange-500 hover:bg-orange-600">Book Now</Button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
