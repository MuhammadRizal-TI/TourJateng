'use client'
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useActionState } from 'react'; // Updated import statement
import { useFormStatus } from "react-dom";
import { registerUser } from '../auth';

const images = [
  "https://images.unsplash.com/photo-1634991599303-59f2bdc3eaad?q=80&w=1475",
  "https://images.unsplash.com/photo-1620549146267-8e1dd7725f2e?q=80&w=1471",
  "https://images.unsplash.com/photo-1580109731155-e6d609984211?q=80&w=1374"
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full bg-[#16A34A]  hover:bg-[#16A34A] py-6" disabled={pending}>
      {pending ? 'Membuat akun...' : 'Buat akun'}
    </Button>
  );
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction] = useActionState(registerUser, null); // Updated useState hook

  return (
    <div className="flex h-screen">
      {/* Left Section with Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-12 text-white">
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Logo */}
        <div className="absolute top-8 left-8 text-2xl font-bold z-20">
          WISATA JATENG
        </div>
        
        {/* Text Overlay */}
        <div className="relative z-20 mb-20">
          <h1 className="text-5xl font-bold mb-4">
            Mengabadikan Momen,<br />
            Menciptakan Kenangan
          </h1>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="w-full lg:w-1/2 bg-[#F4F4F4] p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-black">Buat Akun</h2>
            <a href="/" className="text-[#16A34A] hover:text-white bg-transparent py-2 px-1 border border-green-600 rounded-md flex items-center justify-center transition-colors hover:bg-green-600">
            Kembali ke website →
            </a>
          </div>

          <p className="text-gray-400 mb-8">
            Sudah punya akun?{' '} 
            <a href="/login" className="text-[#16A34A] hover:text-[#16A34A] transition-colors">
              Masuk
            </a>
          </p>

          <form className="space-y-4" action={formAction}>
            <div className="grid grid-cols-2 gap-4">
              <Input 
              className='h-12 py-6 border-black'
              type="text" placeholder="Nama depan" name='firstName'/>
              <Input 
              className='h-12 py-6 border-black'
              type="text" placeholder="Nama belakang" name='lastName'/>
            </div>
            
            <Input 
            className='h-12 py-6 border-black'
            type="email" placeholder="Email" name='email' />
            <div className="relative">
              <Input 
              className='h-12 py-6 border-black'
                type={showPassword ? "text" : "password"} 
                placeholder="Masukkan password" name='password'/>
              <Button 
                type="button" 
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 p-0 border-0 bg-transparent shadow-none hover:bg-transparent" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-[#16A34A]" />
                ) : (
                  <Eye className="h-5 w-5 text-[#16A34A]" />
                )}

              </Button>
            </div>
            <SubmitButton />
            
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-[30%] border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-sm text-gray-400 ">Atau lanjutkan dengan</span>
              </div>
              <div className="absolute inset-0 flex items-center">
                <div className="ml-auto w-[30%] border-t border-gray-700"></div>
              </div>
            </div>

              <Button variant="outline"className="gap-2 py-6 w-full bg-transparent text-black border-gray-700 hover:bg-black hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
          </form>
        </div>
      </div>
    </div>
  );
}