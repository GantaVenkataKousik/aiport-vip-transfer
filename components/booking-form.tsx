"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format } from "date-fns"
import { CalendarIcon, Clock, MapPin, Plus, Plane } from "lucide-react"

export function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [step, setStep] = useState(1)
  const [passengerCount, setPassengerCount] = useState(1)
  const [additionalPassengers, setAdditionalPassengers] = useState<string[]>([])
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null)

  const airports = [
    { value: "lax", label: "Los Angeles (LAX)" },
    { value: "jfk", label: "New York (JFK)" },
    { value: "ord", label: "Chicago (ORD)" },
    { value: "dfw", label: "Dallas (DFW)" },
    { value: "mia", label: "Miami (MIA)" },
  ]

  const locations = [
    { value: "downtown", label: "Downtown" },
    { value: "beverly_hills", label: "Beverly Hills" },
    { value: "santa_monica", label: "Santa Monica" },
    { value: "hollywood", label: "Hollywood" },
    { value: "malibu", label: "Malibu" },
  ]

  const fixedRoutes = [
    { id: "route1", pickup: "LAX Airport", destination: "Downtown", distance: "18 km", time: "25 min", price: "$85" },
    {
      id: "route2",
      pickup: "LAX Airport",
      destination: "Beverly Hills",
      distance: "22 km",
      time: "35 min",
      price: "$110",
    },
    {
      id: "route3",
      pickup: "LAX Airport",
      destination: "Santa Monica",
      distance: "15 km",
      time: "30 min",
      price: "$95",
    },
    { id: "route4", pickup: "LAX Airport", destination: "Hollywood", distance: "28 km", time: "40 min", price: "$120" },
  ]

  const addPassenger = () => {
    setAdditionalPassengers([...additionalPassengers, ""])
  }

  const updatePassenger = (index: number, value: string) => {
    const updated = [...additionalPassengers]
    updated[index] = value
    setAdditionalPassengers(updated)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Booking submitted successfully!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="airport" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="airport">Airport Pickup</TabsTrigger>
          <TabsTrigger value="city">City Transfer</TabsTrigger>
        </TabsList>

        <TabsContent value="airport" className="space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Airport Pickup</Label>
                  <Select>
                    <SelectTrigger id="pickup" className="bg-[#111111] border-[#333333]">
                      <SelectValue placeholder="Select airport" />
                    </SelectTrigger>
                    <SelectContent>
                      {airports.map((airport) => (
                        <SelectItem key={airport.value} value={airport.value}>
                          {airport.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Select>
                    <SelectTrigger id="destination" className="bg-[#111111] border-[#333333]">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-[#111111] border-[#333333]"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Select>
                    <SelectTrigger id="time" className="bg-[#111111] border-[#333333]">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <SelectItem key={i} value={`${i}:00`}>
                          {`${i}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passengers">Passengers</Label>
                  <Select
                    value={passengerCount.toString()}
                    onValueChange={(value) => setPassengerCount(Number.parseInt(value))}
                  >
                    <SelectTrigger id="passengers" className="bg-[#111111] border-[#333333]">
                      <SelectValue placeholder="Passengers" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Passenger" : "Passengers"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Fixed Routes Section */}
              <div className="mt-6">
                <Label className="mb-3 block">Popular Routes</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {fixedRoutes.map((route) => (
                    <div
                      key={route.id}
                      className={`border ${selectedRoute === route.id ? "border-orange-500" : "border-[#333333]"} rounded-lg p-4 cursor-pointer transition-all hover:border-orange-500/70`}
                      onClick={() => setSelectedRoute(route.id)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-medium">
                            {route.pickup} → {route.destination}
                          </div>
                          <div className="text-sm text-gray-400">Fixed route</div>
                        </div>
                        <div className="text-lg font-bold text-orange-500">{route.price}</div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-orange-500" />
                          <span>{route.distance}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-orange-500" />
                          <span>{route.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    <span>25 km</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>35 min</span>
                  </div>
                  <div className="text-sm font-bold">$120</div>
                </div>

                <Button type="button" onClick={() => setStep(2)} className="bg-orange-500 hover:bg-orange-600">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" className="bg-[#111111] border-[#333333]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" className="bg-[#111111] border-[#333333]" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-[#111111] border-[#333333]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="flightNumber">Flight Number (Optional)</Label>
                <div className="flex items-center gap-2">
                  <Input id="flightNumber" placeholder="e.g. AA1234" className="bg-[#111111] border-[#333333]" />
                  <div className="bg-[#1A1A1A] p-2 rounded-md">
                    <Plane className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  We'll track your flight in real-time and adjust pickup time if needed
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requirements or additional information"
                  className="bg-[#111111] border-[#333333]"
                />
              </div>

              {passengerCount > 1 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Accompanying Passengers</Label>
                    {additionalPassengers.length < passengerCount - 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addPassenger}
                        className="border-[#333333]"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Passenger
                      </Button>
                    )}
                  </div>

                  {additionalPassengers.map((passenger, index) => (
                    <Input
                      key={index}
                      value={passenger}
                      onChange={(e) => updatePassenger(index, e.target.value)}
                      placeholder={`Passenger ${index + 2} name`}
                      className="bg-[#111111] border-[#333333]"
                    />
                  ))}

                  {additionalPassengers.length < passengerCount - 1 && (
                    <p className="text-sm text-gray-400">
                      {passengerCount - 1 - additionalPassengers.length} more passenger(s) to add
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-between items-center pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="border-[#333333]">
                  Back
                </Button>

                <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                  Complete Booking
                </Button>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="city" className="space-y-6">
          {/* Similar structure as airport tab but with city locations */}
          <div className="text-center py-8">
            <p>City transfer booking form would go here with similar fields</p>
          </div>
        </TabsContent>
      </Tabs>
    </form>
  )
}
