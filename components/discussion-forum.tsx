"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MessageSquare, ThumbsUp } from "lucide-react"
import AutoPlay from "embla-carousel-autoplay"

export default function DiscussionForum() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay()])
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const posts = [
    {
      author: "Muhammad Rizal",
      time: "8 jam",
      title: "Tips Hemat Wisata ke Dieng",
      content:
        "Sedikit tips dari saya kalau mau ke Dieng, pastikan kalian mempersiapkan diri dengan baik, karena suhu di sana bisa sangat dingin, terutama pada malam hari. Jangan Lu....",
      likes: 31,
      comments: 1442,
    },
    {
      author: "Rina Nurhaliza",
      time: "1 hari yang lalu",
      title: "Rute Terbaik Keliling di Borobudur",
      content:
        "Rute terbaik keliling Candi Borobudur adalah mulai dengan mengunjungi area utama candi terlebih dahulu. Masuklah melalui pintu utama dan nikmati keind....",
      likes: 20,
      comments: 700,
    },
    {
      author: "Rizka F",
      time: "1 Minggu yang lalu",
      title: "Pengalaman Seru di Merbabu",
      content:
        "Aku mau share pengalaman seruku di Merbabu, salah satu gunung yang menyuguhkan petualangan luar biasa! Pendakian dimulai dari basecamp, dan....",
      likes: 60,
      comments: 2300,
    },
    {
      author: "Dian Sastro",
      time: "2 Minggu yang lalu",
      title: "Kuliner Khas Solo yang Wajib Dicoba",
      content:
        "Berbagi pengalaman kuliner di Solo nih! Mulai dari Nasi Liwet, Timlo Solo, sampai Serabi Notosuman. Semua makanan ini punya cita rasa yang...",
      likes: 45,
      comments: 890,
    },
    {
      author: "Ahmad Fahri",
      time: "3 Minggu yang lalu",
      title: "Review Penginapan di Kawasan Borobudur",
      content:
        "Baru aja staycation di salah satu hotel dekat Candi Borobudur. Pemandangan pagi hari langsung menghadap candi, fasilitas lengkap dan...",
      likes: 38,
      comments: 567,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">Forum Diskusi Traveler</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Bergabunglah dengan komunitas traveler kami! Berbagi pengalaman, dapatkan tips perjalanan, dan temukan
          inspirasi untuk petualanganmu berikutnya di Jawa Tengah.
        </p>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {posts.map((post, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%]">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar>
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{post.author}</p>
                          <p className="text-sm text-gray-500">{post.time}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-500">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                        <Button
                          variant="ghost"
                          className="ml-auto text-green-500 hover:text-green-600 p-0 flex items-center gap-2"
                        >
                          Bergabung Sekarang
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-600 shadow-lg rounded-full"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 shadow-lg rounded-full"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

