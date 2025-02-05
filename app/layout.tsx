'use client'
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { usePathname } from 'next/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
      {pathname !== '/register' && pathname !== '/login' && <Navbar />}
        {children}
        {pathname !== '/register' && pathname !== '/login' && <Footer />}
      </body>
    </html>
  );
}
