'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
import Background3D from '@/components/Background3D';
import { ThemeProvider } from 'next-themes';


export default function Home() {

  return (
    <main className="relative">
      <Header />
      <div className="space-y-0">
        <Background3D />
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