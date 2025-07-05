import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PopularCourses from './components/PopularCourses';
import Teachers from './components/Teachers';
import Advantages from './components/Advantages';
import AdditionalServices from './components/AdditionalServices';
import VideoSection from './components/VideoSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground">
      <Header />
      <Hero />
      <Stats />
      <PopularCourses />
      <Teachers />
      <Advantages />
      <AdditionalServices />
      <VideoSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;