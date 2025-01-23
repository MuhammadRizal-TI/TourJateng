'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold gradient-text">WISATA DJATENG </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="nav-link text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="#" className="nav-link text-gray-700 hover:text-green-600 transition-colors">Destinasi Wisata</Link>
              <Link href="#" className="nav-link text-gray-700 hover:text-green-600 transition-colors">Forum Diskusi</Link>
              <Link href="/about" className="nav-link text-gray-700 hover:text-green-600 transition-colors">Artikel</Link>
              <Link href="#" className="nav-link text-gray-700 hover:text-green-600 transition-colors">Tentang Kami</Link>
              <Link href="#" className="nav-link text-gray-700 hover:text-green-600 transition-colors">ChatBot AI</Link>
              <Link href="/login" className="bg-white text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">Masuk</Link>
              <Link href="/register" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105">Daftar</Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

