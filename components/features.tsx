'use client'

import Image from 'next/image'
import { MapPin, Users, ListIcon as Category, ThumbsUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Features() {
  const ref = useRef(null)
  const controls = useScrollAnimation(ref)

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image src="https://images.unsplash.com/photo-1651890053473-b25f7e1672dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF3YW5nJTIwc2V3dXxlbnwwfHwwfHx8MA%3D%3D" alt="Destination 1" width={280} height={280} className="rounded-lg transform transition duration-500 hover:scale-105" />
            <Image src="https://images.unsplash.com/photo-1735315855421-349c8dce5b17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Destination 2" width={280} height={280} className="rounded-lg transform transition duration-500 hover:scale-105" />
            <Image src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJBTEl8ZW58MHx8MHx8fDA%3D" alt="Destination 3" width={280} height={280} className="rounded-lg transform transition duration-500 hover:scale-105" />
            <Image src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QkFMSXxlbnwwfHwwfHx8MA%3D%3D" alt="Destination 4" width={280} height={280} className="rounded-lg transform transition duration-500 hover:scale-105" />
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-[#2A7862] mb-6">
              Kami Membantu Menemukan Tempat Impianmu
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Nikmati destinasi wisata yang memukau dengan kenyamanan maksimal. Kami memahami bahwa setiap perjalanan adalah pengalaman berharga, itulah mengapa kami hanya menawarkan harga terbaik dengan perlindungan penuh. Mulailah petualangan Anda dan dapatkan pengalaman tak terlupakan bersama Voyanize.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                className="flex items-center"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <MapPin className="w-12 h-12 text-[#2A7862] mr-4" />
                <div>
                  <h3 className="text-4xl font-bold text-[#2A7862]">1000+</h3>
                  <p className="text-gray-600">Destinasi wisata eksklusif</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Users className="w-12 h-12 text-[#2A7862] mr-4" />
                <div>
                  <h3 className="text-4xl font-bold text-[#2A7862]">38</h3>
                  <p className="text-gray-600">Provinsi dengan layanan unik</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <Category className="w-12 h-12 text-[#2A7862] mr-4" />
                <div>
                  <h3 className="text-4xl font-bold text-[#2A7862]">3</h3>
                  <p className="text-gray-600">Kategori destinasi pilihan</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 }
                }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <ThumbsUp className="w-12 h-12 text-[#2A7862] mr-4" />
                <div>
                  <h3 className="text-4xl font-bold text-[#2A7862]">100rb+</h3>
                  <p className="text-gray-600">Pengunjung puas</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

