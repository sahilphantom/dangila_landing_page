import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import Why from "./components/Why"
import Products from "./components/Products"
import About from "./components/About"
import Company from "./components/company"

function App() {
  return (
    <div className="min-h-screen bg-[#fae4cb]">
      <Navbar />
      <Hero />
      <Stats />
      <Why />
      <Products />
      <About />
      <Company />
    </div>
  )
}

export default App

