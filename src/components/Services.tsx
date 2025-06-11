import React from 'react';
import { 
  Users, 
  BookOpen, 
  Calculator, 
  Calendar, 
  FileText, 
  BarChart3,
  Shield,
  Smartphone
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Manajemen Data Siswa',
      description: 'Kelola data pribadi, akademik, dan riwayat siswa secara komprehensif dengan sistem pencarian dan filter yang canggih.',
      features: ['Profil siswa lengkap', 'Tracking kehadiran', 'Riwayat akademik']
    },
    {
      icon: BookOpen,
      title: 'Sistem Akademik',
      description: 'Platform pembelajaran terintegrasi dengan fitur pengelolaan kurikulum, jadwal, dan evaluasi pembelajaran.',
      features: ['Manajemen kurikulum', 'Jadwal otomatis', 'E-learning integrated']
    },
    {
      icon: Calculator,
      title: 'Manajemen Keuangan',
      description: 'Sistem pembayaran SPP, biaya sekolah, dan laporan keuangan yang akurat dan real-time.',
      features: ['Payment gateway', 'Laporan keuangan', 'Notifikasi pembayaran']
    },
    {
      icon: Calendar,
      title: 'Penjadwalan Otomatis',
      description: 'Sistem penjadwalan cerdas untuk mengoptimalkan penggunaan ruang kelas dan waktu mengajar.',
      features: ['Auto scheduling', 'Conflict detection', 'Resource optimization']
    },
    {
      icon: FileText,
      title: 'Pelaporan & Analitik',
      description: 'Generate laporan comprehensive dan analytics untuk mendukung pengambilan keputusan strategis.',
      features: ['Custom reports', 'Data visualization', 'Export multiple format']
    },
    {
      icon: Shield,
      title: 'Keamanan Data',
      description: 'Proteksi data tingkat enterprise dengan enkripsi, backup otomatis, dan kontrol akses berlapis.',
      features: ['Data encryption', 'Auto backup', 'Role-based access']
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-blue-600">Komprehensif</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk semua kebutuhan manajemen sekolah modern dengan teknologi terdepan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <Smartphone className="h-12 w-12 text-white mr-4" />
            <BarChart3 className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Akses Dimana Saja, Kapan Saja
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Platform responsif yang dapat diakses melalui desktop, tablet, dan smartphone. 
            Kelola sekolah Anda dengan mudah dari perangkat apapun.
          </p>
          <button 
            onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Mulai Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;