'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Cta() {
  const [offset, setOffset] = useState(0)
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
          backgroundPosition: `center ${offset * 0.5}px`,
          backgroundSize: 'cover',
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] z-20" />
      
      <div className="relative container mx-auto px-4 text-center text-white z-30">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 }
          }}
          transition={{ duration: 0.5 }}
        >
          Jadilah Bagian dari Petualangan Luar Biasa
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bergabunglah dalam misi kami untuk melestarikan keindahan pariwisata dan kekayaan budaya Indonesia.
        </motion.p>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.8 }
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-lg animate-pulse">
            Mulai Petualangan Anda Sekarang
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

