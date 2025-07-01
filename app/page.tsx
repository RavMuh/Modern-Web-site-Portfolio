'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      
      <div className="space-y-0">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </div>
      
      <Footer />
      <Toaster />
    </main>
  );
}