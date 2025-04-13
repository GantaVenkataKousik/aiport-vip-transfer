import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222222] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Airport VIP Transfer</h3>
            <p className="text-gray-400 mb-4">
              Premium airport transfer service with real-time flight tracking and luxury vehicles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Airport Pickup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  City Transfers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Corporate Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Event Transportation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Airport Boulevard</li>
              <li>Los Angeles, CA 90045</li>
              <li>+1 (800) 123-4567</li>
              <li>info@airportviptransfer.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222222] mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Airport VIP Transfer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
