"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function JoinCommunity() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="py-16 bg-green-500">
      <motion.div
        className="container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.h2 className="text-4xl font-bold text-white mb-6" variants={itemVariants}>
          Bergabunglah dengan Komunitas Traveler Jawa Tengah
        </motion.h2>
        <motion.p className="text-white/90 mb-2" variants={itemVariants}>
          Dapatkan akses ke fitur eksklusif, forum diskusi, dan rekomendasi perjalanan personal.
        </motion.p>
        <motion.p className="text-white/90 mb-8" variants={itemVariants}>
          Mulai petualangan kamu sekarang!
        </motion.p>
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="bg-white text-green-500 hover:bg-black hover:text-white delay-100 gap-2 text-base px-8"
            size="lg"
          >
            Daftar Gratis
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

