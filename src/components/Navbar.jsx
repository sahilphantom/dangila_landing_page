import React, { useState, useEffect } from "react"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { cn } from "../utils/motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300",
        scrolled ? "bg-[#f3d9c6] shadow-md" : "bg-transparent",
      )}
    >
      <div className="flex  items-center justify-between">
        <a href="/" className="text-[#8B4513] text-xl font-medium">
          dangila™
        </a>

        <div className="hidden sm:flex items-center space-x-12">
          <a href="#products" className="text-[#8B4513] hover:border-b-2 border-solid border-[#8B4513]">
            Products
          </a>
          <a href="#story" className="text-[#8B4513] hover:border-b-2 border-solid border-[#8B4513]">
            Story
          </a>
          <a href="#manufacturing" className="text-[#8B4513] hover:border-b-2 border-solid border-[#8B4513]">
            Manufacturing
          </a>
          <a href="#packaging" className="text-[#8B4513] hover:border-b-2 border-solid border-[#8B4513]">
            Packaging
          </a>
          <a href="#team" className="text-[#8B4513] hover:border-b-2 border-solid border-[#8B4513]">
            Team
          </a>
        </div>

        <div className="hidden sm:flex items-center space-x-6">
          <Search className="h-5 w-5 text-[#8B4513] cursor-pointer" />
          <ShoppingBag className="h-5 w-5 text-[#8B4513] cursor-pointer" />
          <User className="h-5 w-5 text-[#8B4513] cursor-pointer" />
        </div>

        <button className="sm:hidden text-[#8B4513]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={cn(
          "sm:hidden fixed left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out bg-[#f3d9c6]",
          isOpen ? "max-h-screen" : "max-h-0",
        )}
      >
        <div className="px-4 py-2 space-y-2">
          <a href="#products" className="block text-[#8B4513] hover:underline py-2">
            Products
          </a>
          <a href="#story" className="block text-[#8B4513] hover:underline py-2">
            Story
          </a>
          <a href="#manufacturing" className="block text-[#8B4513] hover:underline py-2">
            Manufacturing
          </a>
          <a href="#packaging" className="block text-[#8B4513] hover:underline py-2">
            Packaging
          </a>
          <a href="#team" className="block text-[#8B4513] hover:underline py-2">
            Team
          </a>
        </div>
        <div className="flex justify-center space-x-6 py-4">
          <Search className="h-5 w-5 text-[#8B4513] cursor-pointer" />
          <ShoppingBag className="h-5 w-5 text-[#8B4513] cursor-pointer" />
          <User className="h-5 w-5 text-[#8B4513] cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

