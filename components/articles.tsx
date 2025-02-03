"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function Articles() {
  const articles = [
    {
      number: "01",
      image: "/placeholder.svg?height=80&width=80",
      title: "Menyingkap Sejarah Kerajaan Mataram Kuno di Situs Candi Borobudur",
      category: "Sejarah",
    },
    {
      number: "02",
      image: "/placeholder.svg?height=80&width=80",
      title: "Eksplorasi Keindahan Alam Di Gunung Prau",
      category: "Alam",
    },
    {
      number: "03",
      image: "/placeholder.svg?height=80&width=80",
      title: 'Itinerary Hemat untuk Menikmati Sejarah, Alam, dan Budaya Lokal"',
      category: "Tips Traveling",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container flex mx-auto px-4">
        <div> <h2 className="text-3xl font-bold text-green-500 mb-6">Artikel Wisata Interaktif</h2>
        <p className="text-gray-600 mb-12 max-w-3xl">
          Temukan pesona tak tertandingi dari provinsi yang kaya akan alam, seni budaya, dan sejarah ini. Setiap sudut
          Jawa Tengah menawarkan pengalaman yang memikat hati, mulai dari keindahan panorama alam hingga warisan budaya
          dan sejarah yang menakjubkan.
        </p>
        </div>
        <div className="space-y-4">
          {articles.map((article, index) => (
            <Card key={index} className="group p-4 transition-colors duration-200 hover:bg-green-50 cursor-pointer">
              <div className="flex items-center gap-6">
                <span className="text-xl font-bold text-green-500 w-12">{article.number}</span>
                <div className="h-20 w-20 relative rounded-lg overflow-hidden">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-lg">{article.title}</h3>
                  <Badge variant="outline" className="text-green-500 border-green-500">
                    {article.category}
                  </Badge>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-green-500 p-2 rounded-full">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

