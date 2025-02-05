"use client"

import { motion } from "framer-motion"
import { MessageSquare, Zap, TreePalm, Calendar } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const travelbotFeatures = [
  { icon: MessageSquare, title: "Chat 24/7", description: "Tanya info wisata Jawa Tengah kapan saja" },
  { icon: Zap, title: "Rekomendasi Cepat", description: "Dapatkan saran wisata sesuai preferensimu" },
  { icon: TreePalm, title: "Info Destinasi", description: "Eksplorasi tempat menarik di Jawa Tengah" },
  { icon: Calendar, title: "Rencana Perjalanan", description: "Buat itinerary Jawa Tengah dengan mudah" },
]

export default function TravelbotSection() {
  return (
    <section className="bg-green-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-600">Asisten Virtual Wisatamu!</h2>
          <p className="text-gray-600 ">
            Rencanakan perjalanan impianmu di Jawa Tengah dengan bantuan AI. Travelbot siap membantu 24/7!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-2xl p-6 relative">
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-teal-800 rounded-full px-4 py-2 font-bold transform -rotate-12">
                AI-Powered
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="bg-teal-100">
                    <AvatarImage src="/path/to/travelbot-avatar.png" alt="Travelbot Avatar" />
                    <AvatarFallback>TB</AvatarFallback>
                  </Avatar>
                  <div className="bg-green-200 rounded-lg p-3 text-gray-800">
                    Halo! Saya Travelbot, asisten perjalanan virtualmu. Mau eksplor kemana hari ini?
                  </div>
                </div>
                <div className="flex items-start space-x-4 justify-end">
                  <div className="bg-white border border-green-200 rounded-lg p-3 text-gray-800">
                    Hai Travelbot! Aku ingin liburan ke Dieng minggu depan. Bisa bantu rencanakan?
                  </div>
                  <Avatar>
                    <AvatarImage src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-start space-x-4">
                  <Avatar className="bg-teal-100">
                    <AvatarImage src="/path/to/travelbot-avatar.png" alt="Travelbot Avatar" />
                    <AvatarFallback>TB</AvatarFallback>
                  </Avatar>
                  <div className="bg-green-200 rounded-lg p-3 text-gray-800">
                    Tentu! Dieng punya banyak tempat menarik seperti Candi Arjuna, Telaga Warna, dan Bukit Sikunir. Mari
                    mulai dengan membuat itinerary yang mencakup...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {travelbotFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group bg-white-50 rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center mb-3">
                    <feature.icon className="text-green-600 w-6 h-6 mr-3 mt-1" />
                    <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-teal-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            <Button className="bg-green-500 hover:bg-green-600 px-5 py-5 text-white rounded-lg font-semibold mt-10 flex items-center">
              Coba Travelbot
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
      </div>
    </section>
  )
}