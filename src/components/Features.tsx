import React from 'react';
import { 
  Zap, 
  Lock, 
  Globe, 
  Headphones, 
  Palette, 
  Database,
  CheckCircle2
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Performa Tinggi',
      description: 'Sistem yang dioptimalkan untuk menangani ribuan pengguna bersamaan',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Lock,
      title: 'Keamanan Terjamin',
      description: 'Enkripsi tingkat bank dan backup data otomatis',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Globe,
      title: 'Multi-Platform',
      description: 'Dapat diakses dari berbagai perangkat dan browser',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Headphones,
      title: 'Support 24/7',
      description: 'Tim support yang siap membantu kapan saja',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Palette,
      title: 'Kustomisasi Penuh',
      description: 'Sesuaikan tampilan dan fitur sesuai kebutuhan sekolah',
      color: 'text-pink-600 bg-pink-100'
    },
    {
      icon: Database,
      title: 'Backup Otomatis',
      description: 'Data selalu aman dengan sistem backup terjadwal',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  const benefits = [
    'Hemat waktu administrasi hingga 70%',
    'Peningkatan akurasi data dan laporan',
    'Komunikasi yang lebih efektif antar stakeholder',
    'Akses real-time ke informasi penting',
    'Pengurangan penggunaan kertas hingga 90%',
    'ROI positif dalam 6 bulan pertama'
  ];

  return (
    <section id="fitur" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="text-blue-600">Elkamil Digital</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform yang dirancang khusus untuk memenuhi kebutuhan unik setiap institusi pendidikan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Manfaat yang Akan Anda Rasakan
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Konsultasi Gratis
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">99.9%</div>
                <div className="text-xl mb-2">Uptime Guarantee</div>
                <div className="text-blue-200">Sistem selalu online dan dapat diandalkan</div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-blue-200">Sekolah</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">50k+</div>
                    <div className="text-blue-200">User Aktif</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;