import React from 'react';
import { Code, MapPin, Phone,  Clock, MessageCircle, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const handleSocialClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-16 left-16 w-16 h-16 bg-red-500 bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-12 h-12 bg-blue-500 bg-opacity-10 rounded-lg animate-bounce" style={{ animationDuration: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">IT House Edu</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Zamonaviy IT ta'lim markazi. Professional dasturlash va dizayn kurslarini o'rganing.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <button
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-110"
              >
                  <a href="https://twitter.com/ithouse"><MessageCircle className="h-5 w-5"/></a>
              </button>
              <button
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-110"
              >
                <a href="https://www.instagram.com/ithouse_edu/"><Instagram className="h-5 w-5"/></a>

              </button>
              <button
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-110"
              >
                <a href="https://www.youtube.com/@ithouse_edu"><Youtube className="h-5 w-5"/></a>
              </button>
              <button
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-110"
              >
                <a href="https://www.facebook.com/ithouse.uz/"><Facebook className="h-5 w-5"/></a>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-4">Tezkor Havolalar</h3>
            <ul className="space-y-3">
              <li><button onClick={() => handleSocialClick('hero')} className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="text-red-500 mr-2">›</span> Bosh sahifa</button></li>
              <li><button onClick={() => handleSocialClick('courses')} className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="text-red-500 mr-2">›</span> Kurslar</button></li>
              <li><button onClick={() => handleSocialClick('teachers')} className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="text-red-500 mr-2">›</span> Ustozlar</button></li>
              <li><button onClick={() => handleSocialClick('video ')} className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="text-red-500 mr-2">›</span> Video</button></li>
              <li><button onClick={() => handleSocialClick('Bog\'lanish')} className="text-gray-400 hover:text-white transition-colors flex items-center"><span className="text-red-500 mr-2">›</span> Bog'lanish</button></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-4">Mashhur Kurslar</h3>
            <ul className="space-y-3">
              <li className="flex items-center cursor-pointer hover:text-red-400 transition-colors" ><div className="h-4 w-4 bg-blue-400 rounded mr-2" ></div> <a href="https://frontend.ithouseedu.uz/">Frontend</a></li>
              <li className="flex items-center cursor-pointer hover:text-red-400 transition-colors" ><div className="w-4 h-4 bg-green-500 rounded mr-2"></div> <a href="https://backend.ithouseedu.uz/">Backend</a></li>
              <li className="flex items-center cursor-pointer hover:text-red-400 transition-colors" ><div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div><a href="https://python.ithouseedu.uz/">Python</a> </li>
              <li className="flex items-center cursor-pointer hover:text-red-400 transition-colors" ><div className="w-4 h-4 bg-purple-500 rounded mr-2"></div><a href="https://ai.ithouseedu.uz/">AI</a></li>
              <li className="flex items-center cursor-pointer hover:text-red-400 transition-colors" ><div className="w-4 h-4 bg-pink-500 rounded mr-2"></div><a href="https://grafik-dizayn.ithouseedu.uz/">Grafik Dizayn</a> </li>
              <li className="flex items-center cursor-pointer hover:text-red-400 transition-colors" ><div className="w-4 h-4 bg-gray-500 rounded mr-2"></div><a href="https://kiberxavfsizlik.ithouseedu.uz/">Kiberxavfsizlik</a> </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-4">Bog'lanish</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400"> Farhod bozori, 100123, Tashkent</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-white transition-colors" >
                <Phone className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400"> +998 78 113-78-01</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-white transition-colors" >
                <Phone className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400">+998 90 035-27-27</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400">Dush-Shan: 09:00-21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="text-3xl font-bold text-red-500">6453+</div>
              <div className="text-gray-400">O'quvchilar</div>
            </div>
            <div className="hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="text-3xl font-bold text-blue-500">245+</div>
              <div className="text-gray-400">Darslar</div>
            </div>
            <div className="hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="text-3xl font-bold text-green-500">15+</div>
              <div className="text-gray-400">Kurslar</div>
            </div>
            <div className="hover:transform hover:scale-105 transition-all cursor-pointer">
              <div className="text-3xl font-bold text-yellow-500">98%</div>
              <div className="text-gray-400">Mamnunlik</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">© 2025 IT House Edu. Barcha huquqlar himoyalangan.</p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">Maxfiylik siyosati</button>
              <button  className="text-gray-400 hover:text-white transition-colors">Foydalanish shartlari</button>
              <button className="text-gray-400 hover:text-white transition-colors">Qaytarish siyosati</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;