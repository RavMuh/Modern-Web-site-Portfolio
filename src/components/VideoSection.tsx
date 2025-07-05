import React from 'react';

const VideoSection = () => {


  return (
    <section id="video" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-red-300 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-blue-300 to-purple-400 rounded-lg opacity-20 animate-spin" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Bizning Muvaffaqiyatlar</h2>
          <p className="text-xl text-gray-600">IT House bitiruvchilarining bitiruv marosimi</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-105 transition-all">
            <video className='h-60' src="blob:https://www.youtube.com/265ce12d-a924-4b0c-9419-ca05231a0340"></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;