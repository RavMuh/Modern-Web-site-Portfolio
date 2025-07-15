'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = t('hero.title');

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-4xl font-bold text-foreground/80 mb-3 md:mb-4"
            >
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 font-black leading-none"
            >
              <span className="block bg-gradient-to-r from-blue-400 via-blue-400 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">{t('hero.name')}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-4 md:mb-6"
            >
              <h2 className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 h-8 md:h-10 lg:h-12">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-sm sm:text-base lg:text-lg text-foreground/70 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg rounded-full hover-3d w-full sm:w-auto"
              >
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {t('hero.hire')}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg dark:bg-black/30 rounded-full hover-3d w-full sm:w-auto"
                asChild
              >
                <a
                  href="/cv.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4 md:h-5 md:w-5 " />
                  {t('hero.download')}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl floating-animation"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center">
                  <Image
                    src="/20366517-1.png"
                    alt="Muhammadamin"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center cursor-pointer group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <div className="mb-3">
                <span className="text-xs md:text-sm text-foreground/60 group-hover:text-blue-500 transition-colors font-medium">
                  {t('hero.scrollDown')}
                </span>
              </div>
              <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-blue-500/30 rounded-full flex justify-center group-hover:border-blue-500 transition-colors">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-3 bg-blue-500 rounded-full mt-2"
                />
              </div>
              <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mt-1 group-hover:text-blue-600 transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;