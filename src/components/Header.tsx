import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Elkamil Digital Global</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beranda')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('layanan')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('fitur')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Fitur
            </button>
            <button 
              onClick={() => scrollToSection('portofolio')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Portofolio
            </button>
            <button 
              onClick={() => scrollToSection('kontak')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kontak Kami
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('beranda')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('layanan')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('fitur')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Fitur
              </button>
              <button 
                onClick={() => scrollToSection('portofolio')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Portofolio
              </button>
              <button 
                onClick={() => scrollToSection('kontak')}
                className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mx-4"
              >
                Kontak Kami
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;