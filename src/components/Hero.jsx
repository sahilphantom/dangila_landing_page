import React from "react"

const Hero = () => {
  return (
    <main className="px-4 pt-48 sm:px-8 py-12 grid grid-cols-1 w-[85%] m-auto max-sm:pt-24 sm:grid-cols-2 gap-10">
      <div className="space-y-8 " >
        <h1 className="text-[#8B4513] text-5xl font-bold sm:text-9xl">dangila</h1>

        <div className="space-y-4">
          <h2 className="text-[#8B4513] text-xl font-medium">Natural Inner Beauty</h2>
          <p className="text-[#8B4513] text-sm leading-relaxed max-w-md">
            Provide deluxe hydration for those with dry or age-related skin concerns. They add intense moisture to
            dehydrated or mature skin, alleviating uneven, sun-damaged textures to promote natural radiance.
          </p>
        </div>

        <button className="bg-[#8B4513] text-white px-6 py-3 rounded-full inline-flex items-center space-x-4">
          <span>Buy Now</span>
          <span className="font-medium">$49.99</span>
        </button>
      </div>

      <div className="relative mt-8 sm:mt-0">
        <img
          src="https://images.pexels.com/photos/2517447/pexels-photo-2517447.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Dangila product display"
          className="w-full h-[90%] object-contain"
        />
      </div>
    </main>
  )
}

export default Hero

