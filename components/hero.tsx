'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Hero() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  return (
    <section ref={ref} className="relative pt-16 overflow-hidden bg-[#f0f7f4]">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 pt-10 lg:pt-20"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2A7862] leading-tight mb-6">
              Mulailah Perjalananmu Menuju Destinasi Impian dengan Mudah dan Nyaman!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Temukan keindahan tersembunyi Indonesia bersama Voyanize
            </p>
            <div className="flex items-center mb-8">
              <Input 
                type="text" 
                placeholder="Cari destinasi impianmu..." 
                className="w-full rounded-r-none"
              />
              <Button className="rounded-l-none bg-[#2A7862] hover:bg-[#236752]">
                <Search className="w-5 h-5" />
              </Button>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-lg animate-pulse">
              Temukan Petualangan Anda
            </Button>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 relative mt-12 lg:mt-0"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#2A7862] rounded-bl-[300px] animate-blob" />
            <img
              src="/images/Traveller.png"
              alt="Traveler"
              className="w-full h-full relative z-10 animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

