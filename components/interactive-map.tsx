"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  // Remove the hoveredLocation state
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const constraintsRef = useRef(null)

  const locations = [
    { id: 1, name: "Candi Borobudur", x: 30, y: 40, image: "/destinations/borobudur.jpg" },
    { id: 2, name: "Karimunjawa", x: 70, y: 20, image: "/destinations/karimunjawa.jpg" },
    { id: 3, name: "Dataran Tinggi Dieng", x: 20, y: 60, image: "/destinations/dieng.jpg" },
    { id: 4, name: "Lawang Sewu", x: 60, y: 50, image: "/destinations/lawangsewu.jpg" },
  ]

  const handleDragStart = () => setIsDragging(true)
  const handleDragEnd = () => setIsDragging(false)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start">
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-green-600">Peta Interaktif Destinasi Wisata</h2>
            <p className="text-gray-600 mb-6">
              Jelajahi destinasi wisata Jawa Tengah dengan peta interaktif kami. Temukan lokasi, deskripsi, hingga
              aktivitas menarik dalam satu platform. Klik pada marker untuk melihat informasi destinasi!
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] bg-blue-100 rounded-lg overflow-hidden" ref={constraintsRef}>
              <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                animate={position}
                className="absolute inset-0 cursor-move"
              >
                <Image src="/jawa-tengah-map.jpg" alt="Peta Jawa Tengah" layout="fill" objectFit="cover" />
                {locations.map((location) => (
                  <motion.div
                    key={location.id}
                    className="absolute w-8 h-8 -ml-4 -mt-4"
                    style={{ left: `${location.x}%`, top: `${location.y}%` }}
                  >
                    <motion.button
                      className="w-full h-full bg-red-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      onClick={() => !isDragging && setSelectedLocation(location)}
                    >
                      <MapPin className="text-white" size={16} />
                    </motion.button>
                  </motion.div>
                ))}
                <AnimatePresence>
                  {selectedLocation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bg-white p-4 rounded-lg shadow-lg max-w-[200px]"
                      style={{
                        left: `${selectedLocation.x}%`,
                        top: `${selectedLocation.y}%`,
                        transform: "translate(-50%, -100%)",
                      }}
                    >
                      <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={() => setSelectedLocation(null)}
                      >
                        &times;
                      </button>
                      <Image
                        src={selectedLocation.image || "/placeholder.svg"}
                        alt={selectedLocation.name}
                        width={180}
                        height={120}
                        className="rounded-lg mb-2"
                      />
                      <h3 className="text-lg font-semibold mb-1">{selectedLocation.name}</h3>
                      <p className="text-sm text-gray-600">Klik untuk informasi lebih lanjut tentang destinasi ini.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

