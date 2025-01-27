import React from "react"

const Company = () => {
  const companies = [
    {
      name: "Psychology Today",
      imageUrl: "https://www.freepnglogos.com/uploads/mac-cosmetic-png-logo/calvin-klein-cosmetics-logo-png-34.png",
      className: "w-[180px]",
    },
    {
      name: "Wellmune",
      imageUrl: "https://cdn.freelogovectors.net/wp-content/uploads/2020/02/kerry-logo.png",
      className: "w-[160px]",
    },
    {
      name: "Kerry",
      imageUrl: "https://logos-download.com/wp-content/uploads/2024/10/Oil_of_Olay_Logo-210x90.png",
      className: "w-[140px]",
    },
    {
      name: "Albion",
      imageUrl: "https://logos-download.com/wp-content/uploads/2024/10/La_Mer_Logo-210x71.png",
      className: "w-[150px]",
    },
    {
      name: "TRAACS",
      imageUrl: "https://www.freepnglogos.com/uploads/avon-png-logo/avon-cosmetics-png-logo-10.png",
      className: "w-[140px]",
    },
  ]

  return (
    <div className="bg-[#fdf9f3] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 md:flex-nowrap">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={company.imageUrl || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className={`${company.className} h-auto object-contain opacity-80 hover:opacity-100 transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Company;
