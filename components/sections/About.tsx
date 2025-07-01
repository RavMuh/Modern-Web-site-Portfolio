'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '1+', label: t('about.experience') },
    { number: '15+', label: t('about.projects') },
    { number: '10+', label: t('about.clients') },
  ];

  // Frontend Skills
  const frontendSkills = [
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'TypeScript', level: 70, icon: '📘' },
    { name: 'TailwindCSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 75, icon: '🧡' }
  ];

  // Backend Skills
  const backendSkills = [
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Python', level: 75, icon: '🐍' }
  ];

  const experience = [
    {
      year: '2025 - Present',
      title: t('about.webDev'),
      company: t('about.company1'),
      description: t('about.desc1'),
      type: 'work'
    },
    {
      year: '2024 - 2025',
      title: t('about.itHouse'),
      company: t('about.company3'),
      description: t('about.desc3'),
      type: 'education'
    },
    {
      year: '2018 - 2025',
      title: t('about.student'),
      company: t('about.company2'),
      description: t('about.desc2'),
      type: 'education'
    }
  ];

  // Personal Information
  const personalInfo = [
    { label: t('about.age'), value: t('about.ageValue'), icon: '🎂' },
    { label: t('about.location'), value: t('about.locationValue'), icon: '📍' },
    { label: t('about.education'), value: t('about.educationValue'), icon: '🎓' },
    { label: t('about.languages'), value: t('about.languagesValue'), icon: '🌐' },
  ];

  // Interests
  const interests = [
    t('about.interest1'),
    t('about.interest2'),
    t('about.interest3'),
    t('about.interest4'),
    t('about.interest5'),
    t('about.interest6'),
  ];

  // Core Values
  const values = [
    { title: t('about.value1'), description: t('about.value1Desc') },
    { title: t('about.value2'), description: t('about.value2Desc') },
    { title: t('about.value3'), description: t('about.value3Desc') },
    { title: t('about.value4'), description: t('about.value4Desc') },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">{t('about.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6 order-2 lg:order-1">
              <p className="text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed">
                {t('about.description')}
              </p>
              
              <p className="text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed">
                {t('about.additional')}
              </p>

              <p className="text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed">
                {t('about.passion')}
              </p>

              <p className="text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed">
                {t('about.approach')}
              </p>

              <p className="text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed">
                {t('about.future')}
              </p>

              {/* Skills Section */}
              <div className="space-y-6">
                {/* Frontend Skills */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center">
                    <span className="mr-2">💻</span>
                    {t('skills.frontend')}
                  </h3>
                  <div className="space-y-3">
                    {frontendSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-base md:text-lg">{skill.icon}</span>
                            <span className="font-medium text-xs md:text-sm">{skill.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
                        </div>
                        <Progress value={skill.level} className="h-1.5" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center">
                    <span className="mr-2">⚙️</span>
                    {t('skills.backend')}
                  </h3>
                  <div className="space-y-3">
                    {backendSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-base md:text-lg">{skill.icon}</span>
                            <span className="font-medium text-xs md:text-sm">{skill.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
                        </div>
                        <Progress value={skill.level} className="h-1.5" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Image and Stats */}
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 md:p-8 rounded-3xl"
                >
                  <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
                    <img
                      src="/20366517-1 copy.jpg"
                      alt="About Muhammadamin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 md:gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-3 md:p-4 rounded-xl bg-blue-500/5 hover:bg-blue-500/10 transition-colors"
                      >
                        <div className="text-xl md:text-2xl font-bold text-blue-500 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-xs md:text-sm text-foreground/70">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Additional Information Sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Personal Information */}
            <motion.div variants={itemVariants} className="glass-card p-6 md:p-8 rounded-3xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">{t('about.personalInfo')}</h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-500/5 transition-colors"
                  >
                    <span className="text-xl">{info.icon}</span>
                    <div>
                      <p className="font-medium text-sm md:text-base">{info.label}</p>
                      <p className="text-foreground/70 text-xs md:text-sm">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests & Hobbies */}
            <motion.div variants={itemVariants} className="glass-card p-6 md:p-8 rounded-3xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">{t('about.interests')}</h3>
              <div className="space-y-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded-xl bg-blue-500/5 hover:bg-blue-500/10 transition-colors text-center"
                  >
                    <span className="text-xs md:text-sm font-medium">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={itemVariants} className="glass-card p-6 md:p-8 rounded-3xl md:col-span-2 lg:col-span-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">{t('about.values')}</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl hover:bg-blue-500/5 transition-colors"
                  >
                    <h4 className="font-semibold text-sm md:text-base mb-2">{value.title}</h4>
                    <p className="text-foreground/70 text-xs md:text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="glass-card p-6 md:p-8 rounded-3xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">{t('about.timeline')}</h3>
            <div className="space-y-4 md:space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-3 md:p-4 rounded-xl hover:bg-blue-500/5 transition-colors"
                >
                  <div className="flex-shrink-0 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold text-base md:text-lg flex items-center">
                        {item.type === 'education' ? '🏫' : '💼'} {item.title}
                      </h4>
                      <Badge variant="outline" className="text-xs mt-1 md:mt-0 self-start md:self-auto">{item.year}</Badge>
                    </div>
                    <p className="text-blue-500 font-medium mb-2 text-sm md:text-base">{item.company}</p>
                    <p className="text-foreground/70 text-sm md:text-base">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;