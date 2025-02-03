"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Testimonials() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  const testimonials = [
    {
      name: "Muhammad Rizal",
      image: "/placeholder.svg",
      rating: 5,
      text: '"Forum diskusinya keren banget! Saya dapat banyak tips bermanfaat."',
    },
    {
      name: "Ananda Pramestisyah",
      image: "/placeholder.svg",
      rating: 5,
      text: '"Saya suka sekali dengan rekomendasi wisata yang website ini berikan."',
    },
    {
      name: "Joshua Andrian",
      image: "/placeholder.svg",
      rating: 4,
      text: '"Peta interaktifnya detail dan mudah digunakan. aku bisa lihat banyak informasi."',
    },
    {
      name: "Azril Purnama",
      image: "/placeholder.svg",
      rating: 4,
      text: '"Artikel nya memberikan informasi yang hangat, jadi saya tidak tertinggal informasi baru."',
    },
    {
      name: "Linda T.",
      image: "/placeholder.svg",
      rating: 5,
      text: '"Chatbot AI nya sangat membantu untuk menjawab pertanyaan dengan cepat."',
    },
    {
      name: "Sheila Nur Cahya",
      image: "/placeholder.svg",
      rating: 5,
      text: '"Baru kali ini saya menemukan website wisata yang fiturnya lengkap banget."',
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-green-500 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Apa Kata Mereka yang Sudah Menjelajahi?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div className="relative w-12 h-12 rounded-full overflow-hidden" whileHover={{ scale: 1.1 }}>
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                      >
                        <Star
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

