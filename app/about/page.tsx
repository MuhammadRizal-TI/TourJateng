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
    </div>
  );
}