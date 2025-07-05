import React from 'react';
import { Code, Calendar,Award, Monitor } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-red-600 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">IT House Edu</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              Bosh sahifa
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-gray-600 hover:text-red-500 font-medium transition-colors"
            >
              Kurslar
            </button>
            <button 
              onClick={() => scrollToSection('teachers')}
              className="text-gray-600 hover:text-red-500 font-medium transition-colors"
            >
              Ustozlar
            </button>
            <button 
              onClick={() => scrollToSection('video')}
              className="text-gray-600 hover:text-red-500 font-medium transition-colors"
            >
              Video
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button 
              className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-all transform hover:scale-105"
            >
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium"><a href="https://bilgi.uz/uz/educational-centers/it/it-house-edu/">Muddat to'lovi</a></span>
            </button>
            <button 
              className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-all transform hover:scale-105"
            >
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium"><a href="https://ithouseid.uz/">Sertifikat</a></span>
            </button>
            <button 
              className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-all transform hover:scale-105"
            >
              <Monitor className="h-4 w-4" />
              <span className="text-sm font-medium"><a href="https://ithouseonline.uz/uz">Online</a></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;