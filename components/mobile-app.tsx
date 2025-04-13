import { Button } from "@/components/ui/button"
import { Apple, MapPin, Bell, Clock } from "lucide-react"

export function MobileApp() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-block bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
          Mobile Experience
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">Download Our Mobile App for a Seamless Experience</h2>

        <p className="text-gray-400 text-lg">
          Track your driver in real-time, receive notifications about your upcoming transfers, and manage your bookings
          on the go.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-[#111111] p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Real-Time Tracking</h3>
              <p className="text-gray-400">See your driver's location and estimated arrival time</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#111111] p-3 rounded-lg">
              <Bell className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Push Notifications</h3>
              <p className="text-gray-400">Get timely updates about your transfer status</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#111111] p-3 rounded-lg">
              <Clock className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Booking Management</h3>
              <p className="text-gray-400">View, modify, or cancel your bookings anytime</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button className="bg-black border border-white hover:bg-white hover:text-black text-white">
            <Apple className="mr-2 h-5 w-5" />
            App Store
          </Button>
          <Button className="bg-black border border-white hover:bg-white hover:text-black text-white">
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414C17.523 14.7522 17.8368 14.1763 18.3311 13.7677L21.7178 10.9823C21.8802 10.8471 21.8656 10.5878 21.6873 10.4725C21.1188 10.0873 19.6108 9.25335 18.0284 10.3974L13.9781 13.5189C13.0487 14.2009 12.5511 15.3473 12.5511 16.5545V23.31C12.5511 23.5569 12.8242 23.7097 13.0312 23.5713C13.9061 23.0379 15.6348 21.8362 17.523 19.9819C17.523 19.9819 17.523 16.2744 17.523 15.3414Z" />
              <path d="M6.47723 15.3414C6.47723 14.7522 6.16344 14.1763 5.66912 13.7677L2.28241 10.9823C2.12005 10.8471 2.13464 10.5878 2.31296 10.4725C2.88142 10.0873 4.38947 9.25335 5.97183 10.3974L10.0222 13.5189C10.9516 14.2009 11.4492 15.3473 11.4492 16.5545V23.31C11.4492 23.5569 11.1761 23.7097 10.9691 23.5713C10.0942 23.0379 8.36547 21.8362 6.47723 19.9819C6.47723 19.9819 6.47723 16.2744 6.47723 15.3414Z" />
            </svg>
            Google Play
          </Button>
        </div>
      </div>

      <div className="relative mx-auto max-w-sm">
        <div className="absolute -top-6 -left-6 w-64 h-64 bg-orange-500/20 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-70"></div>

        <div className="relative bg-[#111111] border-8 border-[#222222] rounded-[3rem] p-2 shadow-2xl">
          <div className="rounded-[2.5rem] overflow-hidden">
            <img src="/images/airport-bg.jpg" alt="Mobile App" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
