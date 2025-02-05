import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

interface ArticleCardProps {
  title: string
  description: string
  image: string
  slug: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, image, slug }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/article/${slug}`}>
        <div className="relative h-48 sm:h-64">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
          <motion.span
            className="inline-flex items-center text-sm font-medium text-green-600"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            Baca selengkapnya
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.span>
        </div>
      </Link>
    </motion.div>
  )
}

export default ArticleCard

