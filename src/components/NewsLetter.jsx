import React, { useState } from "react"

const NewsLetter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log("Subscribing email:", email)
    setEmail("")
  }

  return (
    <div className="bg-[#fdf9f3] py-20 px-8">
      <div className="max-w-7xl w-[80%] m-auto mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Image */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/13882813/pexels-photo-13882813.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dangila product on platform"
                className="w-full h-[500px]  rounded-bl-[100px] max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Right Column - Newsletter Form */}
          <div className="flex-1 space-y-6">
            <h2 className="text-[#A6633C] text-4xl md:text-5xl font-medium">Subscribe Newsletter</h2>

            <p className="text-gray-600">Enter your email below for daily updates</p>

            <form onSubmit={handleSubmit} className="  flex flex-col pt-4 sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email."
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#A6633C] text-gray-700 bg-white"
                required
              />

              <button
                type="submit"
                className="px-8 py-3 bg-[#A6633C] text-white rounded-full  hover:bg-[#8B5232] transition-colors whitespace-nowrap"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewsLetter;

