import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Users, UserCheck } from "lucide-react"

export default function Solutions() {
  const solutions = [
    {
      icon: <UserCheck className="w-8 h-8 text-green-600" />,
      title: "Rekomendasi Personalisasi",
      description: "Dapatkan rekomendasi yang sesuai dengan minat dan preferensi Anda",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Komunitas Traveler",
      description: "Berbagi pengalaman dan temukan tips dari sesama pencinta wisata Jawa Tengah",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: "Chatbot AI",
      description: "Dapatkan panduan perjalanan dengan bantuan Asistant virtual kami",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-800">Kami Hadir dengan Solusi</h2>
        <div className="grid grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent>
                <div className="flex justify-center mb-4">{solution.icon}</div>
                <h3 className="font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

