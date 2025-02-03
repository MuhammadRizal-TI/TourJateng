import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function Travelbot() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-6">Travelbot - Asisten virtual Kamu Nih!</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Bingung mencari informasi spesifik, seperti rute perjalanan, cuaca, atau rekomendasi aktivitas? Asisten
          virtual siap membantumu. Tanyakan apa saja, kapan saja, dan dapatkan jawaban instan yang akurat seputar wisata
          Jawa Tengah
        </p>
        <Button className="bg-green-500 hover:bg-green-600 text-white gap-2 py-5 px-5">
          <MessageSquare className="w-5 h-5" />
          Mulai Chat
        </Button>
      </div>
    </section>
  )
}

