import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#2A7862] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beranda-wjxXPqNG0gmqERpy50fSiEFo4uRpnI.png`}
              alt="WISATA DJATENG Logo"
              width={120}
              height={32}
              className="mb-4"
            />
            <p className="text-sm">
              Jl. Raya Wisata Alam No. 45,<br />
              Semarang
            </p>
            <p className="text-sm mt-2">024-7890123</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li><Link href="#">Tentang Kami</Link></li>
              <li><Link href="#">Kontak</Link></li>
              <li><Link href="#">Artikel</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solusi</h3>
            <ul className="space-y-2">
              <li><Link href="#">Pengunjung</Link></li>
              <li><Link href="#">Semua Orang</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Lainnya</h3>
            <ul className="space-y-2">
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Artikel</Link></li>
              <li><Link href="#">Syarat dan Ketentuan</Link></li>
              <li><Link href="#">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>Hak cipta © 2024 WISATA DJATENG. Seluruh hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  )
}

