import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
            <Image 
            src="/images/logoWH.png"
            alt="Logo-Footer"
            width={150}
            height={150}
            quality={100}/>
            </div>
            <p className="text-sm leading-relaxed">
              Adalah platform terdepan untuk menemukan dan merencanakan perjalanan wisata di Jawa Tengah
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:underline">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/destinasi" className="hover:underline">
                  Destinasi
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="hover:underline">
                  Chatbot AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2">
              <li>Email: TourJateng@gmail.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Youtube className="w-6 h-6" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm">© 2025 TourJateng. Semua Hak Dilindungi</p>
        </div>
      </div>
    </footer>
  )
}

