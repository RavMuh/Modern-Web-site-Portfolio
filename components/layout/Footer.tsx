'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/RavMuh',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammadamin-ravshanov-37b659363/',
    },
    {
      icon: MessageSquare,
      label: 'Telegram',
      href: 'https://t.me/Muhammadamin_Ravshanov',
    }
  ];

  return (
    <footer className="relative py-12 md:py-16 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              MuhamMadaminDev
            </div>
            <p className="text-foreground/70 text-sm md:text-base mb-4 max-w-md">
              {t('hero.description')}
            </p>
            <p className="text-foreground/60 text-xs md:text-sm">
              {t('contact.availability')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-foreground/70 hover:text-blue-500 transition-colors text-sm md:text-base"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('footer.social')}</h3>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/60 text-xs md:text-sm flex items-center mb-4 md:mb-0">
              © 2025 Muhammadamin. {t('footer.rights')}
              <Heart className="h-4 w-4 ml-1 text-red-500 animate-pulse" />
            </p>
            
            <div className="flex items-center space-x-4">
              <p className="text-foreground/50 text-xs">
                {t('footer.built')}
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-blue-500/10 hover:text-blue-500"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                {t('footer.backToTop')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-50 flex items-center justify-center"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;