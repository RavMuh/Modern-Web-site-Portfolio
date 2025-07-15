'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ravshanovmuhammadamin0@gmail.com',
      href: 'ravshanovmuhammadamin0@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+998 93 500 93 83',
      href: 'tel:+998935009383'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tashkent, Uzbekistan',
      href: 'https://maps.google.com/?q=Tashkent,Uzbekistan'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/RavMuh',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/muhammadamin',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageSquare,
      label: 'Telegram',
      href: 'https://t.me/Muhammadamin_Ravshanov',
      color: 'hover:text-blue-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: 'Success!',
          description: t('contact.success'),
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: 'Error',
          description: t('contact.error'),
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: t('contact.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{t('contact.title')}</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="glass-card p-6 md:p-8 rounded-3xl">
                <h3 className="text-xl md:text-2xl font-semibold mb-6">{t('contact.connect')}</h3>
                
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-4 p-3 md:p-4 rounded-xl hover:bg-blue-500/5 transition-colors group"
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                          <IconComponent className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground/90 text-sm md:text-base">{item.label}</p>
                          <p className="text-foreground/70 text-xs md:text-sm">{item.value}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border">
                  <h4 className="font-medium mb-4 text-sm md:text-base">{t('contact.follow')}</h4>
                  <div className="flex space-x-3 md:space-x-4">
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
                          className={`w-10 h-10 md:w-12 md:h-12 bg-blue-500/10 rounded-xl flex items-center justify-center transition-colors ${link.color}`}
                        >
                          <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability Note */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border">
                  <p className="text-sm md:text-base text-foreground/70 italic">
                    {t('contact.availability')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="glass-card p-6 md:p-8 rounded-3xl">
                <h3 className="text-xl md:text-2xl font-semibold mb-6">{t('contact.sendMessage')}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('contact.name')} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50/90 dark:bg-black/30 backdrop-blur-sm border-blue-200 dark:border-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contact.email')} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50/90 dark:bg-black/30 backdrop-blur-sm border-blue-200 dark:border-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('contact.message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full resize-none bg-gray-50/90 dark:bg-black/30 backdrop-blur-sm border-blue-200 dark:border-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 md:py-6 text-sm md:text-lg rounded-full hover-3d"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        {t('contact.sending')}
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        {t('contact.send')}
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;