import React from "react"
import { Droplet, FlaskRoundIcon as Flask, SprayCanIcon as Spray, Sun, Cookie } from "lucide-react"

const ProductCard = ({ icon: Icon, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#8B4513] stroke-[1.5]" />
      </div>
      <h3 className="text-lg sm:text-xl font-medium text-[#000]">{title}</h3>
    </div>
  )
}

const Products = () => {
  const products = [
    {
      icon: Droplet,
      title: "Cream",
    },
    {
      icon: Flask,
      title: "Serum",
    },
    {
      icon: Spray,
      title: "Lotion",
    },
    {
      icon: Sun,
      title: "Sunscreen",
    },
    {
      icon: Cookie,
      title: "Coconut Oil",
    },
  ]

  return (
    <section className="bg-[#fdf9f3] py-20 px-4 sm:px-8">
      <div className="max-w-7xl w-[80%] m-auto mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center text-[#8B4513] mb-16">OUR PRODUCTS</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
          {products.map((product, index) => (
            <ProductCard key={index} icon={product.icon} title={product.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

