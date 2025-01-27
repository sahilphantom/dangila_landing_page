import React from "react"
import { useCountUp } from "../hooks/useCountUp"
import { useInView } from "../hooks/useInView"

const StatItem = ({ value, label, isPercentage = false }) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const count = useCountUp(isInView ? value : 0)

  return (
    <div ref={ref} className="text-center">
      <div className="text-[#8B4513]  text-4xl font-bold sm:text-5xl  mb-2">
        {count.toLocaleString()}
        {isPercentage ? "%" : ""}
      </div>
      <div className="text-[#000] text-sm sm:text-base">{label}</div>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="bg-[#fdf9f3] py-16 px-4 sm:px-8">
      <div className="max-w-7xl w-[70%] m-auto mx-auto  ">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          <StatItem value={25356} label="Happy Customers" />
          <StatItem value={6050} label="Followers" />
          <StatItem value={851} label="Shops" />
          <StatItem value={95} label="Happy Customers" isPercentage={true} />
        </div>
      </div>
    </section>
  )
}

export default Stats

