'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Search, 
  Zap,
  Palette,
  Database,
  Cloud,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      icon: Code,
      title: t('services.webDev'),
      description: t('services.webDevDesc'),
      features: ['React & Next.js', 'Modern JavaScript', 'Responsive Design', 'Performance Optimization'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: Smartphone,
      title: t('services.responsive'),
      description: t('services.responsiveDesc'),
      features: ['Mobile-First Design', 'Cross-Browser Support', 'Touch-Friendly UI', 'Progressive Web Apps'],
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 3,
      icon: Search,
      title: t('services.seo'),
      description: t('services.seoDesc'),
      features: ['Technical SEO', 'Core Web Vitals', 'Schema Markup', 'Performance Audit'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 4,
      icon: Zap,
      title: t('services.api'),
      description: t('services.apiDesc'),
      features: ['RESTful APIs', 'GraphQL', 'Third-party Integration', 'Real-time Updates'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 5,
      icon: Palette,
      title: t('services.uiux'),
      description: t('services.uiuxDesc'),
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 6,
      icon: Database,
      title: t('services.backend'),
      description: t('services.backendDesc'),
      features: ['Database Design', 'API Development', 'Authentication', 'Data Management'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 7,
      icon: Cloud,
      title: t('services.cloud'),
      description: t('services.cloudDesc'),
      features: ['Vercel & Netlify', 'AWS Services', 'Docker Containers', 'CI/CD Setup'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 8,
      icon: Shield,
      title: t('services.security'),
      description: t('services.securityDesc'),
      features: ['Security Audits', 'Unit Testing', 'E2E Testing', 'Code Quality'],
      color: 'from-blue-600 to-blue-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-16 md:py-20 relative overflow-hidden">
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
              <span className="gradient-text">{t('services.title')}</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-4 md:p-6 rounded-2xl card-3d group cursor-pointer relative"
                >
                  {/* Icon with Gradient Background */}
                  <div className="relative mb-4 md:mb-6">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${service.color} p-0.5 mb-4`}>
                      <div className="w-full h-full dark:bg-black/50 bg-background rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                        <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-foreground group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/70 text-xs md:text-sm leading-relaxed mb-4 relative z-10">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1 md:space-y-2 relative z-10">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs md:text-sm text-foreground/60">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12 md:mt-16"
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl max-w-2xl mx-auto card-3d">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">{t('services.cta')}</h3>
              <p className="text-foreground/70 mb-6 text-sm md:text-base">
                {t('services.ctaDesc')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                {t('services.ctaButton')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;