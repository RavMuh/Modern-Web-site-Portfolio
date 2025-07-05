import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from './jaloliddin.jpg'
import img2 from './abror.jpg'
import img3 from './jonibek.jpg'
import img4 from './mahmud.jpg'
import img5 from './nodirbek.png'
import img6 from './temurbek.png'
import img7 from './xikmattilo.jpg'
import img8 from './xumoyun.jpg'
import img9 from './sevara.jpg'
import img10 from './zuxra.jpg'
import img11 from './nigina.jpg'
import img12 from './laylo.jpg'



const Teachers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teachers = [
    {
      name: "Jaloliddin Abdurahmonov",
      specialty: "Web Dasturlash",
      experience: "4+ yillik tajriba",
      img: <img src={img1} alt="" />
    },
    {
      name: "Jonibek Turapov",
      specialty: "Web Dasturlash",
      experience: "5+ yillik tajriba",
      img: <img src={img3} alt="" />
    },
    {
      name: "Xumoyun",
      specialty: "Python",
      experience: "4+ yillik tajriba",
      img: <img src={img8} alt="" />
    },
    {
      name: "Hikmattilo Bobomurodov",
      specialty: "Matematika",
      experience: "4+ yillik tajriba",
      img: <img src={img7} alt="" />
    },
    {
      name: "Abror Narziqulov",
      specialty: "Grafik Dizayn",
      experience: "6+ yillik tajriba",
      img: <img src={img2} alt="" />
    },
    {
      name: "Nodirbek Kuchkarov",
      specialty: "AI, Foundation",
      experience: "5+ yillik tajriba",
      img: <img src={img5} alt="" />
    },
    {
      name: "Temurbek Aliyev",
      specialty: "Kiberxavfsizlik",
      experience: "7+ yillik tajriba",
      img: <img src={img6} alt="" />
    },
    {
      name: "Mahmudjon Naimjonov",
      specialty: "Foundation",
      experience: "3+ yillik tajriba",
      img: <img src={img4} alt="" />
    },
    {
      name: "Sevara Jo'rayeva",
      specialty: "Ingliz tili",
      experience: "3+ yillik tajriba",
      img: <img src={img9} alt="" />
    },
    {
      name: "Zuxra",
      specialty: "Rus tili",
      experience: "4+ yillik tajriba",
      img: <img src={img10} alt="" />
    },
    {
      name: "Laylo",
      specialty: "Call Center",
      experience: "5+ yillik tajriba",
      img: <img src={img11} alt="" />
    },
    {
      name: "Nigina",
      specialty: "Call Center",
      experience: "4+ yillik tajriba",
      img: <img src={img12} alt="" />
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teachers.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teachers.length / 4)) % Math.ceil(teachers.length / 4));
  };


  const visibleTeachers = teachers.slice(currentSlide * 4, (currentSlide + 1) * 4);

  return (
    <section id="teachers" className="py-20 bg-background dark:bg-background relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-lg opacity-20 animate-spin" style={{ animationDuration: '6s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Bizning Jamoa</h2>
          <p className="text-xl text-gray-600">Professional va tajribali ustozlarimiz bilan tanishing</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleTeachers.map((teacher, index) => (
              <div 
                key={index} 
                className="bg-background dark:bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br  flex items-center justify-center relative overflow-hidden`}>
                  {teacher.img}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white bg-opacity-20 rounded-full animate-ping"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-2">{teacher.name}</h3>
                  <p className="text-red-600 font-semibold mb-2">{teacher.specialty}</p>
                  <p className="text-muted-foreground dark:text-muted-foreground text-sm">{teacher.experience}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all transform hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all transform hover:scale-110 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;