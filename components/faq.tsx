"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
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
              hidden: { opacity: 0, x: -50 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[#16A34A] mb-6">Paling Sering Ditanyakan</h2>
            <p className="text-gray-600 mb-8">
              Temukan jawaban untuk pertanyaan umum tentang TourJateng dan layanan kami.
            </p>
            <Image
              src="/images/Wisatawann.png"
              alt="FAQ Illustration"
              width={600}
              height={600}
              quality={100}
              className="mx-auto lg:mx-0"
            />
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#16A34A] hover:text-[#236752]">
                  Apa itu TourJateng?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  TourJateng adalah platform responsif yang menyajikan informasi mendetal tentang berbagai tujuan
                  wisata, dilengkapi dengan asisten AI cerdas untuk membantu Anda merencanakan perjalanan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#16A34A] hover:text-[#236752]">
                  Apa yang bisa saya temukan di TourJateng?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Informasi lengkap tentang destinasi wisata, tips perjalanan, dan rekomendasi personal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#16A34A] hover:text-[#236752]">
                  Apakah ada biaya untuk menggunakan aplikasi ini?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Website TourJateng sepenuhnya gratis untuk diunduh dan digunakan. Semua fitur, termasuk rekomendasi wisata, peta interaktif, dan AI Bot, dapat diakses tanpa biaya tambahan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#16A34A] hover:text-[#236752]">
                  Siapa saja yang bisa bergabung di forum diskusi?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Semua pengguna yang memiliki akun di website TourJateng dapat bergabung dan berpartisipasi di forum diskusi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-[#16A34A] hover:text-[#236752]">
                  Bagaimana cara mendaftar akun di aplikasi TourJateng
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Pengguna dapat mendaftar akun menggunakan alamat email atau melalui integrasi dengan akun media sosial seperti Google serta prosesnya cepat dan mudah.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

