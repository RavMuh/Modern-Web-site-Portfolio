import React from 'react';
import { Database, BarChart3, Award } from 'lucide-react';

const AdditionalServices = () => {
  const services = [
    {
      icon: Database,
      title: "Coin Tizimi",
      description: "IT House barcha o'quvchilari uchun coin tizimi mavjud",
      color: "bg-yellow-500"
    },
    {
      icon: BarChart3,
      title: "Amaliyot Kafolati",
      description: "Intensiv kurslarni muvaffaqiyatli bitirgan o'quvchilarga amaliyot taklif qilish",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "Sertifikat",
      description: "Kursni muvaffaqiyatli tamomlagan o'quvchilar IT House diplomi va sertifikatiga ega bo'ladi",
      color: "bg-blue-500"
    }
  ];

  const handleServiceClick = (title: string) => {
    alert(`${title} haqida batafsil ma'lumot olish uchun bog'laning!`);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 animate-spin" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-16 left-16 w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-400 rounded-lg opacity-20 animate-bounce" style={{ animationDuration: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Bizning Muvaffaqiyatlar</h2>
          <p className="text-xl text-gray-600">IT House bitiruvchilarining bitiruv marosimi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              onClick={() => handleServiceClick(service.title)}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-shadow`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;