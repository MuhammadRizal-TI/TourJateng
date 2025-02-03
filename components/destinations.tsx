"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const images = [
  {
    url: "https://images.unsplash.com/photo-1651890053473-b25f7e1672dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Lawang Sewu historic building",
  },
  {
    url: "https://images.unsplash.com/photo-1565115834629-26a17225676a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mountain landscape",
  },
  {
    url: "https://mediaim.expedia.com/destination/1/32ba696ece18c95c67213a5832662a51.jpg",
    alt: "Karimunjawa island",
  },
  {
    url: "https://images.unsplash.com/photo-1704110070859-813f7b83e7b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Landscape photo",
  },
]

export default function TourismCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 500) // Half of the transition time for the erase effect
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full max-w-xl">
          <Image
            src={images[currentImageIndex].url || "/placeholder.svg"}
            alt={images[currentImageIndex].alt}
            fill
            className={`object-cover rounded-lg transition-opacity duration-1000 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-green-600 leading-tight">
            Kami Membantu Menemukan Tempat Impianmu melalui personalisasi
          </h1>

          <p className="text-gray-600">
            Nikmati destinasi wisata yang memukau dengan kenyamanan maksimal. Kami memahami bahwa setiap perjalanan
            adalah pengalaman berharga, itulah mengapa kami hanya menawarkan harga terbaik dengan perlindungan penuh.
            Mulailah petualanganmu dan dapatkan pengalaman tak terlupakan bersama TourJateng
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600">1000+</div>
                <p className="text-sm text-gray-600 mt-2">
                  Destinasi wisata eksklusif di Jawa Tengah yang siap untuk dijelajahi dan dinikmati.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600">36</div>
                <p className="text-sm text-gray-600 mt-2">
                  kota dan kabupaten di Jawa Tengah dengan keunikan dan pesona masing-masing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600">3</div>
                <p className="text-sm text-gray-600 mt-2">
                  Kategori destinasi yang bisa kamu pilih sesuai dengan minat dan preferensimu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <p className="text-sm text-gray-600 mt-2">
                  Kepuasan pengunjung yang telah menikmati pengalaman wisata di Indonesia bersama kami.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

