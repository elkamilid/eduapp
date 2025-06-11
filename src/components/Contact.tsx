import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    students: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        school: '',
        students: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 21 1234 5678',
      subtitle: 'Senin - Jumat, 08:00 - 17:00'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@elkamildigitalglobal.com',
      subtitle: 'Respon dalam 24 jam'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jl. Sudirman No. 123, Jakarta Pusat',
      subtitle: 'DKI Jakarta 10220'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 08:00 - 17:00',
      subtitle: 'Sabtu: 09:00 - 15:00'
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu Anda mengembangkan sistem manajemen sekolah yang sempurna. 
            Konsultasi gratis untuk kebutuhan spesifik institusi Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-700 font-medium">{info.content}</p>
              <p className="text-sm text-gray-500 mt-1">{info.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Konsultasi Gratis
              </h3>
              <p className="text-gray-600">
                Ceritakan kebutuhan sekolah Anda, dan kami akan memberikan solusi terbaik.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Terima Kasih!
                </h4>
                <p className="text-gray-600">
                  Pesan Anda telah terkirim. Tim kami akan menghubungi Anda dalam 24 jam.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Sekolah/Institusi *
                    </label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      required
                      value={formData.school}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Nama sekolah/institusi"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="students" className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Siswa
                  </label>
                  <select
                    id="students"
                    name="students"
                    value={formData.students}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Pilih jumlah siswa</option>
                    <option value="< 100">Kurang dari 100 siswa</option>
                    <option value="100-500">100 - 500 siswa</option>
                    <option value="500-1000">500 - 1000 siswa</option>
                    <option value="1000-2500">1000 - 2500 siswa</option>
                    <option value="> 2500">Lebih dari 2500 siswa</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan/Kebutuhan Spesifik
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Ceritakan kebutuhan khusus atau pertanyaan Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <MessageCircle className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Konsultasi Gratis 30 Menit
              </h3>
              <p className="text-blue-100 mb-6">
                Diskusikan kebutuhan sekolah Anda dengan ahli kami. Dapatkan insight 
                dan rekomendasi solusi yang tepat tanpa biaya.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Analisis kebutuhan mendalam</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Demo sistem secara live</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Estimasi biaya transparan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Roadmap implementasi</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Mengapa Memilih Elkamil Digital Global?
              </h4>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>5+ tahun pengalaman khusus di bidang pendidikan</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>500+ sekolah telah mempercayai solusi kami</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Support teknis 24/7 dari tim berpengalaman</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Garansi dan maintenance berkelanjutan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;