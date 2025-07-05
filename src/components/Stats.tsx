import React from 'react';
import { Users, BookOpen, Trophy } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '6453+',
      label: "O'quvchilar soni",
      color: 'bg-red-500'
    },
    {
      icon: BookOpen,
      number: '245+',
      label: 'Yozilgan darslar',
      color: 'bg-blue-500'
    },
    {
      icon: Trophy,
      number: '5+',
      label: 'Yillik tajriba',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-16 bg-background dark:bg-background relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg opacity-30 animate-bounce" style={{ animationDuration: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-background dark:bg-background rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-2 hover:scale-105">
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow`}>
                <stat.icon className="h-8 w-8 text-foreground dark:text-foreground" />
              </div>
              <div className="text-4xl font-bold text-foreground dark:text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground dark:text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;