'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">

      {/* about Section */}
      <div className="about-section flex items-center justify-center pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl max-w-2xl mx-auto">Jelajahi dunia bersama Voyanize - Partner perjalanan terpercaya Anda</p>
        </motion.div>
      </div>

      {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="stats-grid">
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-4xl font-bold text-green-600 mb-2">20K+</h3>
              <p className="text-gray-600">Pengguna Aktif</p>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-4xl font-bold text-green-600 mb-2">1000+</h3>
              <p className="text-gray-600">Destinasi Wisata</p>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-4xl font-bold text-green-600 mb-2">98%</h3>
              <p className="text-gray-600">Kepuasan Pengguna</p>
            </motion.div>
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-12 mb-16"
        >
          <div className="relative">
            <Image
              src="/images/Gedsong.png"
              alt="Gedong Songo"
              width={500}
              height={500}
              className="rounded-[40px] object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold">Temukan Keajaiban Indonesia</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold gradient-text mb-6">Tentang Kami</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Voyanize adalah platform perjalanan yang dirancang untuk memudahkan Anda dalam menemukan dan merencanakan perjalanan ke berbagai destinasi wisata di seluruh dunia. Dengan informasi yang lengkap dan mendalam, kami menghadirkan destinasi populer maupun tempat-tempat tersembunyi yang menarik untuk dieksplorasi.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Kami berkomitmen untuk membuat setiap perjalanan menjadi lebih mudah, menyenangkan, dan terorganisir. Dengan Voyanize, Anda dapat merencanakan liburan impian Anda dengan cepat dan efisien.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold gradient-text mb-6">Mengapa Voyanize Berbeda</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Voyanize merupakan platform responsif yang menyediakan informasi rinci mengenai berbagai destinasi wisata, lengkap dengan asisten AI pintar yang siap membantu Anda dalam merencanakan perjalanan. Dengan Voyanize, Anda akan mendapatkan rekomendasi yang disesuaikan dengan preferensi Anda, memastikan pengalaman perjalanan yang lebih menyenangkan dan efisien.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Mulai Petualangan
            </motion.button>
          </div>
          <div className="flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-green-100 rounded-3xl p-8 w-[400px] h-[400px] flex items-center justify-center shadow-xl"
            >
              <Image
                src="/images/TurisFoto.png"
                alt="Traveler"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">Fitur Yang Dimiliki Pada Voyanize</h2>
          <div className="grid grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="feature-card text-center p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Image
                  src="/images/chatbot.png"
                  alt="Chatbot AI"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-600">Chatbot AI</h3>
              <p className="text-gray-600">
                Fitur chatbot AI akan membantu menjawab pertanyaan Anda secara cepat dan akurat serta memberikan bantuan perencanaan perjalanan secara real-time.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="feature-card text-center p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Image
                  src="/images/Map.png"
                  alt="Artikel"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-600">Artikel Wisata</h3>
              <p className="text-gray-600">
              Temukan tips, panduan, dan inspirasi liburan dari para ahli dan pelancong berpengalaman untuk merencanakan perjalanan tak terlupakan.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="feature-card text-center p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Image
                  src="/images/help.png"
                  alt="Forum Diskusi"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-600">Forum Diskusi</h3>
              <p className="text-gray-600">
                Berbagi pengalaman, tips, dan inspirasi perjalanan dengan komunitas pelancong untuk membantu merencanakan liburan Anda.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Voyanize</h3>
              <p className="mb-4">Jl. Naga Wisata Alam No. 45, Semarang</p>
              <p>024-7789456</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-green-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="hover:text-green-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="hover:text-green-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-200 transition-colors">Tentang kami</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Artikel</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Solusi</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-200 transition-colors">Perusahaan</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Semua Orang</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Lainnya</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-200 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Syarat dan Ketentuan</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Kebijakan Privasi</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-500">
            <p className="text-center">Hak cipta © 2024 Voyanize Indonesia. Seluruh hak cipta dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}