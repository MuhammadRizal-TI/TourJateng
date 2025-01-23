'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const testimonials = [
  {
    name: "Nadia Sari Indah",
    text: "Voyanize sangat membantu! Saya menemukan banyak informasi lengkap tentang destinasi impian saya karenanya",
    image: "/placeholder.svg",
    rating: 5
  },
  {
    name: "Viola Natalie",
    text: "Design website ini sangat responsif dan mudah digunakan. Saya bisa mengakses dengan nyaman di smartphone saya!",
    image: "/placeholder.svg",
    rating: 4
  },
  {
    name: "Hendra Saputra Jaya",
    text: "Asisten AI-nya sangat cerdas! Rekomendasi yang diberikan sesuai dengan minat saya, membuat perjalanan saya lebih menyenangkan",
    image: "/placeholder.svg",
    rating: 5
  },
  {
    name: "Muhammad Prasetyo",
    text: "Perjalanan saya jadi lebih terencana dengan bantuan AI! Saya bisa mendapatkan perspektif yang berbeda tentang destinasi tertentu",
    image: "/placeholder.svg",
    rating: 4
  },
  {
    name: "Siti Fatimah Zahra",
    text: "Rekomendasi tempat wisata yang diberikan oleh Voyanize sangat bagus! Saya merasa lebih siap untuk mengunjungi destinasi yang saya pilih",
    image: "/placeholder.svg",
    rating: 5
  },
  {
    name: "Agus Rudi Setiawan",
    text: "Fitur forum diskusinya sangat membantu untuk berbagi pengalaman! Informasi yang saya dapat sangat berharga, melalui Voyanize mencari tempat wisata yang cocok jadi lebih mudah",
    image: "/placeholder.svg",
    rating: 5
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 bg-[#f0f7f4]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-[#2A7862] mb-12"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 }
          }}
          transition={{ duration: 0.5 }}
        >
          Apa Kata Mereka Tentang Voyanize
        </motion.h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 50 }
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronLeft className="w-6 h-6 text-[#2A7862]" />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronRight className="w-6 h-6 text-[#2A7862]" />
          </button>
        </div>
      </div>
    </section>
  )
}

