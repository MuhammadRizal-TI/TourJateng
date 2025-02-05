"use client"

import { motion } from "framer-motion"
import ArticleCard from "./ui/artikelcard"
import type React from "react"
import Link from "next/link" // Import Link component from Next.js
import { Button } from "./ui/button"

const articles = [
  {
    title: "Keajaiban Alam di Raja Ampat",
    description: "Jelajahi keindahan bawah laut dan pulau-pulau eksotis di surga tropis Indonesia.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "raja-ampat",
  },
  {
    title: "Pesona Budaya Yogyakarta",
    description: "Temukan warisan budaya Jawa di kota yang penuh dengan sejarah dan tradisi.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "yogyakarta",
  },
  {
    title: "Petualangan di Taman Nasional Komodo",
    description: "Bertemu dengan komodo dan nikmati pantai-pantai menakjubkan di Pulau Komodo.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "komodo",
  },
  {
    title: "Keagungan Candi Borobudur",
    description: "Jelajahi keajaiban arsitektur Buddha terbesar di dunia di Jawa Tengah.",
    image: "/placeholder.svg?height=300&width=400",
    slug: "borobudur",
  },
]

const InteractiveTravelArticles: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Jelajahi Indonesia</h2>
          <p className="text-gray-600 ">
            Temukan keindahan dan keunikan destinasi wisata terbaik di Nusantara
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ArticleCard {...article} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12">
          <Button className="bg-green-500 hover:bg-green-600 px-5 py-5 text-white rounded-lg font-semibold">
              Lihat Semua Artikel
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveTravelArticles

