import React from 'react';
import { ExternalLink, Star, Users, Calendar } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'SMA Negeri 1 Jakarta',
      description: 'Sistem manajemen terintegrasi untuk 2,500+ siswa dengan fitur e-learning dan pembayaran digital.',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=500',
      students: '2,500+',
      implementation: '2023',
      rating: 4.9,
      features: ['E-Learning', 'Payment Gateway', 'Mobile App', 'Analytics Dashboard']
    },
    {
      title: 'Universitas Bina Nusantara',
      description: 'Platform akademik komprehensif dengan sistem penjadwalan otomatis dan manajemen keuangan.',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=500',
      students: '15,000+',
      implementation: '2023',
      rating: 4.8,
      features: ['Auto Scheduling', 'Financial Management', 'Student Portal', 'Faculty Dashboard']
    },
    {
      title: 'SD Islam Al-Azhar',
      description: 'Sistem manajemen sekolah dasar dengan fokus pada komunikasi orang tua dan tracking perkembangan siswa.',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=500',
      students: '800+',
      implementation: '2024',
      rating: 5.0,
      features: ['Parent Communication', 'Student Progress', 'Digital Library', 'Event Management']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Siti Nurhaliza',
      position: 'Kepala Sekolah SMA Negeri 1 Jakarta',
      content: 'Elkamil Digital sangat membantu kami dalam mengelola administrasi sekolah. Sistem yang user-friendly dan support yang responsif.',
      rating: 5
    },
    {
      name: 'Prof. Ahmad Wijaya',
      position: 'Rektor Universitas Bina Nusantara',
      content: 'Platform yang sangat comprehensive dan dapat diandalkan. ROI yang didapat sangat memuaskan dalam jangka pendek.',
      rating: 5
    },
    {
      name: 'Hj. Fatimah, S.Pd',
      position: 'Kepala Sekolah SD Islam Al-Azhar',
      content: 'Fitur komunikasi dengan orang tua sangat membantu. Transparansi informasi meningkat drastis sejak menggunakan sistem ini.',
      rating: 5
    }
  ];

  return (
    <section id="portofolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portofolio & <span className="text-blue-600">Testimoni</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepercayaan dari 500+ institusi pendidikan di seluruh Indonesia
          </p>
        </div>

        {/* Portfolio Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{project.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{project.students} siswa</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.implementation}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <span>Lihat Detail</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Apa Kata Klien Kami
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;