import React from 'react';
import img1 from './ai 3.png'
import img2 from './grafik 3.png'
import img3 from './cybersecurity 3.png'
import img4 from './pythonlogo.png'
import img5 from './front 3.jpg'
import img6 from './back 3.png'
import { MousePointer } from 'lucide-react';



const PopularCourses = () => {
  const courses = [
    {
      title: "Sun'iy Intellekt",
      description: "Machine Learning, Deep Learning va AI algoritmlarini o'rganing",
      price: "3,500,000 so'm",
      instructor: "Ustoz: Nodirbek",
      href: "https://ai.ithouseedu.uz/",
      img: <img src={img1} alt="" />,
      days: "10 oy"
    },
    {
      title: "Grafik Dizayn",
      description: "Photoshop, Illustrator va dizayn asoslarini o'rganing",
      price: "2,000,000 so'm",
      instructor: "Ustoz: Abror",
      href: "https://grafik-dizayn.ithouseedu.uz/",
      img: <img src={img2} alt="" />,
      days: "6 oy"
    },
    {
      title: "Kiberxavfsizlik",
      description: "Kompyuter tizimlari va tarmoqlarni himoya qilishni o'rganing",
      price: "3,000,000 so'm",
      instructor: "Ustoz: Temurbek",
      href: "https://kiberxavfsizlik.ithouseedu.uz/",
      img: <img src={img3} alt="" />,
      days: "11 oy"
    },
    {
      title: "Python Dasturlash",
      description: "Python tili orqali dasturlashni o'rganing va loyihalar yarating",
      price: "1,800,000 so'm",
      instructor: "Ustoz: Xumoyun",
      href: "https://python.ithouseedu.uz/",
      img: <img src={img4} alt="" />,
      days: "3 oy"
    },
    {
      title: "Frontend Dasturlash",
      description: "HTML, CSS, JavaScript va React.js bilan zamonaviy veb-saytlar yarating",
      price: "2,500,000 so'm",
      instructor: "Ustoz: Jaloliddin",
      href: "https://frontend.ithouseedu.uz/",
      img: <img src={img5} alt="" />,
      days: "7 oy"
    },
    {
      title: "Backend Dasturlash",
      description: "Node.js, Python, Ma'lumotlar bazasi bilan server tomonini o'rganing",
      price: "2,200,000 so'm",
      instructor: "Ustoz: Jonibek",
      href: "https://backend.ithouseedu.uz/",
      img: <img src={img6} alt="" />,
      days: "6 oy"
    }
  ];



  return (
    <section id="courses" className="py-20 bg-background dark:bg-background relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-16 right-16 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 animate-spin" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-16 left-16 w-14 h-14 bg-gradient-to-br from-green-300 to-teal-400 rounded-lg opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Mashhur Kurslar</h2>
          <p className="text-xl text-gray-600">Eng so'ralgan va samarali kurslarimiz bilan tanishing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-background dark:bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            ><a href={course.href}>
                <div className={`h-80 bg-gradient-to-br flex items-center justify-center relative overflow-hidden`}>
                  {course.img}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-1 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-ping"><MousePointer /></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-2">{course.title}</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground mb-2">{course.description}</p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-red-600">{course.price}</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {course.instructor.split(': ')[1]}
                    </span>
                    <span className="text-2xl font-bold text-red-600">{course.days}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;