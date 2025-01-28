import React, { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <footer className="bg-[#fdf9f3] py-16 px-8">
      <div className=" w-[80%] m-auto max-w-7xl  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-6">
            <p className="text-gray-700 max-w-xs">Learn To Love Growth And Change And You Will Be A Success.</p>
            <div className="flex gap-4">
              <a href="#" className="text-[#A6633C] hover:text-[#8B5232]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-[#A6633C] hover:text-[#8B5232]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-[#A6633C] hover:text-[#8B5232]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.52-.71 1.37-1.1 2.25-1.1 1.65 0 3 1.35 3 3v3z" />
                </svg>
              </a>
              <a href="#" className="text-[#A6633C] hover:text-[#8B5232]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div className="space-y-4">
            <a href="#" className="block text-gray-700 hover:text-[#A6633C]">
              Best Seller
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#A6633C]">
              Skin Products
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#A6633C]">
              beauty products
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#A6633C]">
              Track your order
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#A6633C]">
              About Us
            </a>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <p className="text-gray-700">11772 Tabrzi Street NW, Suite 21389, Atlanta, GA 902344</p>
            <p className="text-gray-700">+1 789 123456</p>
            <a href="mailto:hello@dangila.co" className="text-[#A6633C] hover:text-[#8B5232]">
              hello@dangila.co
            </a>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-4">
            <p className="text-gray-700">Receive special offers and get our latest updates.</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter e-mail"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#A6633C]"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#A6633C] text-white rounded-md hover:bg-[#8B5232] transition-colors"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
