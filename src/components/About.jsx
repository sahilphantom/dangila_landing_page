import React from "react"

const About = () => {
  return (
    <div className="min-h-screen bg-[#fdf9f3] flex items-center justify-center p-8">
      <div className="max-w-7xl w-[80%] m-auto  mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 space-y-8">
          <h1 className="text-[#A6633C] text-5xl font-semibold">ABOUT US</h1>

          <p className="text-gray-700 leading-relaxed">
            And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward
            clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet
            preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating
            terminated day everything.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-[#A6633C] text-white rounded-full hover:bg-[#8B5232] transition-colors">
              Buy Now
            </button>
            <button className="px-8 py-3 bg-[#3A3A3A] text-white rounded-full hover:bg-[#2A2A2A] transition-colors">
              View Details
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 relative">
          {/* Decorative Dots */}
          <div className="absolute top-[-1rem] right-[-1rem] grid grid-cols-6 gap-3">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#A6633C] opacity-60" />
            ))}
          </div>

          {/* Product Image */}
          <div className="bg-[#fdf9f3] rounded-lg p-8">
            <img
              src="https://images.pexels.com/photos/4202349/pexels-photo-4202349.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dangila product bottle"
              className="w-full h-[450px] max-w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;
