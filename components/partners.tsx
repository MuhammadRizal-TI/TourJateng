'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const partners = [
  { name: "Kampus Merdeka", logo: "/kampus-merdeka-logo.svg" },
  { name: "Alterra Academy", logo: "/alterra-academy-logo.svg" },
  { name: "MSIB", logo: "/msib-logo.svg" },
  { name: "Traveloka", logo: "/traveloka-logo.svg" },
  { name: "Wonderful Indonesia", logo: "/wonderful-indonesia-logo.svg" },
]

export function Partners() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2A7862] mb-12">
          Dipercaya dan Didukung Oleh
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${offset * 20}%)` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-none w-1/5 px-4">
                <div className="bg-gray-100 p-6 rounded-lg h-32 flex items-center justify-center transition-transform hover:scale-105">
                  <Image 
                    src={partner.logo || "/placeholder.svg"} 
                    alt={partner.name} 
                    width={160} 
                    height={60} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

