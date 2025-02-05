import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex items-center">
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl font-bold leading-tight mb-6 text-gray-800">
            Ciptakan Kenangan Tak Terlupakan di Jawa Tengah dengan Eksplorasi Memikat
          </h1>
          <p className="text-gray-600 mb-8">
            Temukan destinasi wisata, dapatkan teman seperjalanan wisata, dan wujudkan liburan impian yang tak
            terlupakan dengan fitur unggulan kami.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 py-5 px-5">Mulai Eksplorasi
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/traveller.png"
            alt="Traveler with backpack"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

