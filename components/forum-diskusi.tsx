"use client"

import { motion } from "framer-motion"
import { Users, MessageCircle, TrendingUp, SignpostBig, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const forumTopics = [
  { id: 1, title: "Memahami sejarah keindahan", comments: 23,},
  { id: 2, title: "Mencoba kuliner makanan di Solo", comments: 45,},
  { id: 3, title: "Pengalaman Solo Traveling ke Semarang", comments: 37},
]

const forumFeatures = [
  { icon: Users, title: "Komunitas Global", description: "Terhubung dengan ribuan traveler di jawa tengah" },
  { icon: MessageCircle, title: "Diskusi Seru", description: "Berbagi pengalaman perjalanan antar traveler" },
  { icon: TrendingUp, title: "Tren Terbaru", description: "Ikuti update destinasi populer di wilayah jawa tengah" },
  { icon: SignpostBig, title: "Inspirasi Perjalanan", description: "Temukan ide petualangan baru serta sensasi menarik" },
]

export default function ForumSection() {
  return (
    <section className="bg-green-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Bagian Kiri */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Bergabunglah dengan Komunitas Traveler Kami
            </h2>
            <p className="text-gray-600 mb-6">
              Jelajahi dunia bersama ribuan traveler lainnya. Berbagi cerita, dapatkan inspirasi, dan rencanakan
              petualangan tak terlupakan.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {forumFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    className="group bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-3">
                    <FeatureIcon className="text-green-600 w-6 h-6 mr-3 mt-1" />
                      <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
            <Button className="bg-green-500 hover:bg-green-600 px-5 py-5 text-white rounded-lg font-semibold">
              Bergabung Sekarang 
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            </Button>
          </motion.div>

          {/* Bagian Kanan */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-2xl p-8 relative">
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-black rounded-full px-4 py-2 font-bold transform -rotate-12">
                Topik Terpopuler
              </div>
              {forumTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  className="mb-6 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-green-600">{topic.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MessageCircle size={16} />
                      <span>{topic.comments} komentar</span>
                    </div>
                    
                  </div>
                </motion.div>
              ))}
              <motion.button
                className="mt-6 text-green-600 font-semibold flex items-center hover:text-green-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Lihat Semua Topik
                <ArrowRight className="ml-2" size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}