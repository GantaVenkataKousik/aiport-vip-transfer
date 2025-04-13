"use client"

import { useState } from "react"
import { Plane } from "lucide-react"

export function FlightTracker() {
  const [flightNumber, setFlightNumber] = useState("AA1234")

  // Mock flight data
  const flightData = {
    departure: {
      code: "LAX",
      city: "Los Angeles",
      time: "8:00 PM",
      terminal: "Terminal 4",
      gate: "G45",
    },
    arrival: {
      code: "JFK",
      city: "New York",
      time: "4:00 AM",
      terminal: "Terminal 2",
      gate: "B12",
    },
    status: "On Time",
    progress: 65, // percentage of flight completed
  }

  return (
    <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Flight Tracker</h3>
            <p className="text-gray-400">Real-time updates for your flight</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm font-medium mr-2">Flight:</span>
            <span className="bg-[#1A1A1A] px-3 py-1 rounded text-orange-500 font-mono">{flightNumber}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Departure Info */}
          <div className="space-y-2">
            <div className="text-4xl font-bold">{flightData.departure.code}</div>
            <div className="text-gray-400">{flightData.departure.city}</div>
            <div className="text-xl">{flightData.departure.time}</div>
            <div className="text-sm text-gray-400">
              {flightData.departure.terminal}, {flightData.departure.gate}
            </div>
          </div>

          {/* Flight Progress */}
          <div className="flex flex-col justify-center">
            <div className="relative">
              <div className="h-1 bg-[#222222] rounded-full w-full">
                <div className="h-1 bg-orange-500 rounded-full" style={{ width: `${flightData.progress}%` }}></div>
              </div>
              <div className="absolute top-0 transform -translate-y-1/2" style={{ left: `${flightData.progress}%` }}>
                <Plane className="h-5 w-5 text-orange-500 transform -rotate-90" />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-xs text-gray-400">Departed</span>
              <span className="text-xs text-gray-400">
                Status: <span className="text-green-500">{flightData.status}</span>
              </span>
              <span className="text-xs text-gray-400">Arriving</span>
            </div>
          </div>

          {/* Arrival Info */}
          <div className="space-y-2 text-right">
            <div className="text-4xl font-bold">{flightData.arrival.code}</div>
            <div className="text-gray-400">{flightData.arrival.city}</div>
            <div className="text-xl">{flightData.arrival.time}</div>
            <div className="text-sm text-gray-400">
              {flightData.arrival.terminal}, {flightData.arrival.gate}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0A0A0A] p-6 border-t border-[#222222]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm">Your VIP transfer is confirmed and tracking this flight</span>
          </div>
          <div className="text-sm text-orange-500 font-medium">View Details</div>
        </div>
      </div>
    </div>
  )
}
