'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Globe, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'uz', name: 'UZ', flag: '🇺🇿' },
    { code: 'ru', name: 'RU', flag: '🇷🇺' },
  ];

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Header balandligi
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'glass-card shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer z-[110] relative"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 p-0.5">
              <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                <span className="text-blue-500 font-bold text-sm md:text-lg">M</span>
              </div>
            </div>
            <span className="text-lg md:text-xl font-bold text-blue-500 relative z-[111]">
              MuhamMadaminDev
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 z-[105]">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors z-[106] ${
                  activeSection === item.id
                    ? 'text-blue-500'
                    : 'text-foreground/80 hover:text-blue-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center space-x-3 z-[105]">
            {/* Theme Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-blue-500/10 z-[106] w-9 h-9">
                  {resolvedTheme === 'dark' ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-card z-[120]">
                {themes.map((themeOption) => {
                  const Icon = themeOption.icon;
                  return (
                    <DropdownMenuItem
                      key={themeOption.value}
                      onClick={() => setTheme(themeOption.value as any)}
                      className={`cursor-pointer ${
                        theme === themeOption.value ? 'bg-blue-500/10' : ''
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {themeOption.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-blue-500/10 z-[106] w-9 h-9">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-card z-[120]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`cursor-pointer ${
                      language === lang.code ? 'bg-blue-500/10' : ''
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-2 z-[105]">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="hover:bg-blue-500/10 z-[106] w-8 h-8"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="h-3 w-3" />
              ) : (
                <Moon className="h-3 w-3" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-blue-500/10 z-[106] w-8 h-8"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/20 z-[100] lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mobile-menu absolute top-full left-4 right-4 mt-2 glass-card rounded-xl p-4 z-[110] lg:hidden shadow-2xl border border-white/10"

              >
                <div className="space-y-2">
                  {/* Navigation Links */}
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                        activeSection === item.id
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'text-foreground/80 hover:bg-blue-500/10 hover:text-blue-500'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  
                  {/* Theme Selector */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    className="border-t border-border pt-3 mt-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-foreground/60 font-medium">Theme</span>
                      {resolvedTheme === 'dark' ? (
                        <Moon className="h-3 w-3 text-foreground/60" />
                      ) : (
                        <Sun className="h-3 w-3 text-foreground/60" />
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {themes.map((themeOption) => {
                        const Icon = themeOption.icon;
                        return (
                          <button
                            key={themeOption.value}
                            onClick={() => setTheme(themeOption.value as any)}
                            className={`p-2 rounded-md text-xs font-medium transition-colors ${
                              theme === themeOption.value 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-blue-500/10 text-foreground/70 hover:bg-blue-500/20'
                            }`}
                          >
                            <div className="flex flex-col items-center space-y-0.5">
                              <Icon className="h-3 w-3" />
                              <span className="text-xs">{themeOption.label}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Language Selector */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + 1) * 0.05 }}
                    className="border-t border-border pt-3 mt-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-foreground/60 font-medium">{t('nav.language')}</span>
                      <Globe className="h-3 w-3 text-foreground/60" />
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => setLanguage(lang.code as any)}
                          className={`p-2 rounded-md text-xs font-medium transition-colors ${
                            language === lang.code 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-blue-500/10 text-foreground/70 hover:bg-blue-500/20'
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-0.5">
                            <span className="text-xs">{lang.flag}</span>
                            <span className="text-xs">{lang.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;