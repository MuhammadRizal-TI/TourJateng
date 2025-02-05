"use client"

import { motion } from "framer-motion"
import { MapPin, Compass, Building, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const personalizationData = [
  { icon: MapPin, title: "1000+ Destinasi", description: "Destinasi wisata eksklusif di Jawa Tengah."},
  { icon: Compass, title: "3 Kategori", description: "Pilihan sesuai minat dan preferensimu."},
  { icon: Building, title: "36 Kota & Kabupaten", description: "Keunikan dan pesona masing-masing daerah."},
  { icon: Star, title: "100% Personalisasi", description: "Rekomendasi sesuai gaya perjalananmu."},
]

const images = [
  "https://images.unsplash.com/photo-1651890053473-b25f7e1672dd?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565115834629-26a17225676a?q=80&w=1470&auto=format&fit=crop",
  "https://mediaim.expedia.com/destination/1/32ba696ece18c95c67213a5832662a51.jpg",
  "https://images.unsplash.com/photo-1704110070859-813f7b83e7b5?q=80&w=1470&auto=format&fit=crop",
]

export default function PersonalizationSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 lg:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-green-600 leading-tight">
              Kami Membantu Menemukan Tempat Impianmu{" "}
            </h2>
            <p className="text-gray-600 mb-6">
              Nikmati destinasi wisata yang memukau dengan kenyamanan maksimal. Kami memahami bahwa setiap perjalanan adalah pengalaman berharga, itulah mengapa kami hanya menawarkan harga terbaik dengan perlindungan penuh. Mulailah petualanganmu dan dapatkan pengalaman tak terlupakan bersama TourJateng.
            </p>

            {/* Fitur Personalization */}
            <div className="grid grid-cols-2 gap-6">
              {personalizationData.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-3">
                      <item.icon className="w-6 h-6 mr-3 mt-1 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Tombol Eksplorasi */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
            <Button className="bg-green-600 hover:bg-green-700 px-5 py-5 text-white rounded-lg font-semibold">
                Mulai Perjalananmu
              </Button>
            </motion.div>
          </motion.div>

          {/* Gambar Destinasi */}
          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className="relative h-48 md:h-64 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Jawa Tengah destination ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
