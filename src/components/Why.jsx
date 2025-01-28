import React from "react"
import { Sprout, BanIcon, Award } from "lucide-react"

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 text-[#8B4513]">
        <Icon className="w-12 h-12 stroke-[1.5]" />
      </div>
      <h3 className="text-xl font-medium text-[#000] mb-3">{title}</h3>
      <p className="text-[#8B4513]/80 text-sm leading-relaxed max-w-xs">
        Yourself required no at thoughts <br /> delicate landlord it be.
      </p>
    </div>
  )
}

const Why = () => {
  const features = [
    {
      icon: Sprout,
      title: "Natural",
    },
    {
      icon: BanIcon,
      title: "No Side effect",
    },
    {
      icon: Award,
      title: "100% Organic",
    },
  ]

  return (
    <section className="bg-[#fae4cb] py-20 px-4 sm:px-8">
      <div className="max-w-7xl w-[80%] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-medium text-center text-[#8B4513] mb-4">WHY DANGILA?</h2>
        <p className="text-center text-[#8B4513]/80 mb-16 max-w-2xl mx-auto">
          Yourself required no at thoughts delicate landlord it be. Branched dashwood do<br /> is whatever it. Farther be
          chapter at visited married in it pressed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why

