import React from 'react';
import { Rocket, Play } from 'lucide-react';

const Hero = () => {
  const handleRegistration = () => {
    alert('Ro\'yxatdan o\'tish formasi ochilmoqda...');
    // Bu yerda ro'yxatdan o'tish logikasi bo'ladi
  };

  const scrollToVideo = () => {
    const videoElement = document.getElementById('video');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-background dark:bg-background py-20 relative overflow-hidden">
      {/* 3D Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-200 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-red-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating 3D shapes */}
      <div className="absolute top-16 left-1/2 w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-lg opacity-70 animate-spin" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-16 left-1/3 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-70 animate-ping" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground dark:text-foreground mb-6">
          Biz bilan zamonaviy{' '}
          <span className="text-primary dark:text-primary relative">
            IT
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          </span>
          <br />
          sari!
        </h1>
        
        <p className="text-xl text-muted-foreground dark:text-muted-foreground mb-10 max-w-3xl mx-auto">
          Professional IT ta'lim va amaliy tajriba orqali kelajakni yarating
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleRegistration}
            className="flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Rocket className="h-5 w-5" />
            <span className="font-semibold">Ro'yxatdan o'tish</span>
          </button>
          
          <button 
            onClick={scrollToVideo}
            className="flex items-center space-x-2 border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-all transform hover:scale-105"
          >
            <Play className="h-5 w-5" />
            <span className="font-semibold">Video ko'rish</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;