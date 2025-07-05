import React from 'react';
import { Wifi, GraduationCap, Trophy } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Wifi,
      title: "Bepul Kovorking",
      description: "24/7 formatida tun-u kun ishlaydigan bepul kovorking va wifi",
      color: "bg-red-500"
    },
    {
      icon: GraduationCap,
      title: "Sifatli Ta'lim",
      description: "Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar",
      color: "bg-blue-500"
    },
    {
      icon: Trophy,
      title: "Doimiy Musobaqalar",
      description: "Zakovat, Futbol va boshqa o'yinlar bo'yicha haftalik sovrinli musobaqalar",
      color: "bg-green-500"
    }
  ];

  const handleAdvantageClick = (title: string) => {
    alert(`${title} haqida batafsil ma'lumot olish uchun bog'laning!`);
  };

  return (
    <section className="py-20 bg-background dark:bg-background relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-12 left-12 w-18 h-18 bg-gradient-to-br from-red-300 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-12 right-12 w-14 h-14 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-lg opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Bizning Afzalliklar</h2>
          <p className="text-xl text-gray-600">Nima uchun IT House Edu da o'qish kerak?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              onClick={() => handleAdvantageClick(advantage.title)}
              className="bg-background dark:bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              <div className={`${advantage.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-shadow`}>
                <advantage.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-2">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;