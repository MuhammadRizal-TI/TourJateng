export default function DestinationGallery() {
  const destinations = [
    {
      id: 1,
      name: "Goa Jomblang",
      description: "Goa vertikal dengan fenomena cahaya surga yang menakjubkan",
      location: "Gunungkidul, Yogyakarta",
      image: "https://nagantour.com/wp-content/uploads/2023/10/Goa-Jomblang-1.webp",
    },
    {
      id: 2,
      name: "Curug Lawe",
      description: "Air terjun ini dikelilingi hutan lebat dengan suasana yang sangat sejuk, cocok untuk trekking ringan.",
      location: "Kecamatan Ungaran Barat, Kabupaten Semarang",
      image: "https://awsimages.detik.net.id/community/media/visual/2024/10/07/ilustrasi-curug-lawe-benowo-kalisidi-semarang_169.jpeg?w=1200",
    },
    {
      id: 3,
      name: "Hutan Pinus Kragilan",
      description: "Dikenal sebagai tempat yang Instagrammable dengan hamparan pohon pinus yang indah, sangat cocok untuk foto-foto dan bersantai.",
      location: "Kecamatan Pakis, Kabupaten Magelang,",
      image:
        "https://atourin.obs.ap-southeast-3.myhuaweicloud.com/images/destination/magelang/hutan-pinus-kragilan-profile1640540234.png?x-image-process=image/resize,p_100,limit_1/imageslim",
    },
    {
      id: 4,
      name: "Dataran Tinggi Dieng",
      description: "Wisata alam dengan kawah vulkanik, Telaga Warna, kompleks candi, dan pemandangan sunrise dari Bukit Sikunir.",
      location: "Kabupaten Wonosobo dan Kabupaten Banjarnegara,",
      image:
        "https://images.unsplash.com/photo-1624731798627-6cea0017de7c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Pantai Menganti",
      description: "Pantai berpasir putih dengan tebing hijau yang megah, dikenal sebagai (Raja Ampat) nya Jawa Tengah.",
      location: "Kecamatan Ayah, Kabupaten Kebumen, ",
      image:
        "https://images.unsplash.com/photo-1566055109574-df17c9a33772?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Lawang Sewu",
      description: "Bangunan bersejarah peninggalan Belanda dengan arsitektur megah, sering dianggap mistis, namun menarik secara historis dan arsitektural.",
      location: "Kota Semarang",
      image: "https://pariwisata.semarangkota.go.id/backend/web/upload/wisata/1702998255_kotalama.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-4">Nikmati Pesona Keindahan Jawa Tengah</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        TourJateng menyajikan keindahan dan pesona destinasi lokal melalui koleksi foto terbaik. Temukan inspirasi
        liburanmu dan rasakan keajaiban dari setiap sudut destinasi melalui tampilan visual yang memikat hati.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div key={destination.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-2">{destination.name}</h3>
              <p className="text-white text-sm mb-2">{destination.description}</p>
              <p className="text-white text-sm opacity-75">📍 {destination.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
