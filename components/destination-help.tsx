import Image from "next/image"

export default function DestinationHelp() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <Image
              src="/images/Wisatawan.jpg"
              alt="People looking at phone"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Bingung Memilih tempat wisata?</h2>
            <p className="text-gray-600 mb-6">
            TourJateng menawarkan begitu banyak keindahan dan pengalaman unik. Dari Candi Borobudur yang megah hingga pesona alam karimunjajwa, pilihan destinasi wisata seolah tak ada habisnya.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">Namun, dengan begitu banyak pilihan, tindakan kamu merasa:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Kesulitan menemukan destinasi yang sesuai dengan minat Anda?</li>
                <li>Bingung memutuskan rute perjalanan yang efisien?</li>
                <li>Kurang informasi tentang pengalaman nyata dari pengunjung sebelumnya?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

