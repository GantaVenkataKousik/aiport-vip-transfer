import { BookingForm } from "@/components/booking-form"
import { FlightTracker } from "@/components/flight-tracker"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { HowItWorks } from "@/components/how-it-works"
import { FleetGallery } from "@/components/fleet-gallery"
import { Faq } from "@/components/faq"
import { MobileApp } from "@/components/mobile-app"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-poppins">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
          <img src="/images/airport-bg.jpg" alt="Airport VIP Transfer" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl mb-2 font-bold mt-xl">
              Premium VIP Airport Transfer
            </p>
          </div>

          <div className="w-full max-w-4xl bg-[#111111] border border-[#222222] rounded-xl p-6 backdrop-blur-sm">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <HowItWorks />
        </div>
      </section>

      {/* Flight Tracker Preview */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Real-Time Flight Tracking</h2>
          <FlightTracker />
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FleetGallery />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <Features />
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <MobileApp />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Faq />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
