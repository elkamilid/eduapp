import React from 'react';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  X, 
  Instagram, 
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    layanan: [
      'Manajemen Siswa',
      'Sistem Akademik',
      'Keuangan Sekolah',
      'E-Learning',
      'Mobile App',
      'Custom Development'
    ],
    dukungan: [
      'Dokumentasi',
      'Video Tutorial',
      'FAQ',
      'Support Ticket',
      'Community Forum',
      'Training Online'
    ],
    perusahaan: [
      'Tentang Kami',
      'Tim Developer',
      'Karir',
      'Blog',
      'Press Release',
      'Partnership'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Elkamil Digital</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Solusi terdepan untuk sistem manajemen sekolah digital. 
              Membantu institusi pendidikan mengoptimalkan operasional 
              dengan teknologi modern.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@elkamildigital.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Jakarta Pusat, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Dukungan</h3>
            <ul className="space-y-3">
              {footerLinks.dukungan.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Perusahaan</h3>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Newsletter Elkamil Digital
              </h3>
              <p className="text-gray-300">
                Dapatkan update terbaru tentang fitur, tips, dan tren teknologi pendidikan.
              </p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300">
              © 2024 Elkamil Digital. All rights reserved. | 
              <button className="mx-2 hover:text-white transition-colors">Privacy Policy</button> | 
              <button className="mx-2 hover:text-white transition-colors">Terms of Service</button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <X className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
              
              <button
                onClick={scrollToTop}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;