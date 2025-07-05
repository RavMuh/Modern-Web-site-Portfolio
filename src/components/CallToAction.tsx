import React from 'react';
import { Rocket } from 'lucide-react';

const CallToAction = () => {
  const handleRegistration = () => {
    alert('Ro\'yxatdan o\'tish formasi ochilmoqda...');
    // Bu yerda ro'yxatdan o'tish logikasi bo'ladi
  };

  return (
    <section className="bg-red-600 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"></div>
      
      {/* 3D Background elements */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-16 right-16 w-16 h-16 bg-white bg-opacity-10 rounded-lg animate-spin" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white bg-opacity-10 rounded-full animate-ping"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          IT HOUSE - KELAJAK SHU YERDA
        </h2>
        
        <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
          Kurslar haqida to'liq ma'lumotga ega bo'lishni istasangiz ro'yxatdan o'ting
        </p>
        
        <button 
          onClick={handleRegistration}
          className="inline-flex items-center space-x-3 bg-white text-red-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg font-semibold hover:shadow-xl"
        >
          <Rocket className="h-6 w-6" />
          <span>Hoziroq Ro'yxatdan O'ting</span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;