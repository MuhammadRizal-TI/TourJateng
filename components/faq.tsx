'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[#2A7862] mb-6">
              Paling Sering Ditanyakan
            </h2>
            <p className="text-gray-600 mb-8">
              Temukan jawaban untuk pertanyaan umum tentang Wisata Djateng dan layanan kami.
            </p>
            <Image
              src="/images/Wisatawann.png"
              alt="FAQ Illustration"
              width={600}
              height={600}
              className="mx-auto lg:mx-0"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#2A7862] hover:text-[#236752]">
                  Apa itu Wisata Djateng?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Wisata Djateng adalah platform responsif yang menyajikan informasi mendetal tentang berbagai tujuan wisata, dilengkapi dengan asisten AI cerdas untuk membantu Anda merencanakan perjalanan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#2A7862] hover:text-[#236752]">
                  Apa yang bisa saya temukan di Wisata Djateng?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Informasi lengkap tentang destinasi wisata, tips perjalanan, dan rekomendasi personal.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#2A7862] hover:text-[#236752]">
                  Bagaimana cara menggunakan asisten AI di Wisata Djateng?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Cukup ajukan pertanyaan Anda dan asisten AI kami akan membantu merencanakan perjalanan Anda.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#2A7862] hover:text-[#236752]">
                  Apakah informasi di Wisata Djateng selalu diperbarui?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Ya, kami selalu memperbarui informasi secara berkala untuk memastikan akurasi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#2A7862] hover:text-[#236752]">
                  Apakah ada biaya untuk menggunakan Wisata Djateng?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Layanan dasar kami gratis, namun beberapa fitur premium mungkin memerlukan biaya tambahan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

