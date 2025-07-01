'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('projects.portfolio20'),
      description: t('projects.portfolio20Desc'),
      image: '/portfolio.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      demoUrl: 'https://ravmuhammad.netlify.app/',
      githubUrl: 'https://github.com/RavMuh/My-syte'
    },
    {
      id: 2,
      title: t('projects.figmaGroup'),
      description: t('projects.figmaGroupDesc'),
      image: '/finswet.png',
      technologies: ['React', 'Node.js', 'AWS', 'Docker'],
      demoUrl: 'https://figma-git-hub.vercel.app/',
      githubUrl: 'https://github.com/RavMuh/Figma-gitHub'
    },
    {
      id: 3,
      title: t('projects.bookHome'),
      description: t('projects.bookHomeDesc'),
      image: '/book.png',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
      demoUrl: 'https://book-home-blond.vercel.app/',
      githubUrl: 'https://github.com/RavMuh/Book-home-Figma'
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
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
              <span className="gradient-text">{t('projects.title')}</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
              {t('projects.description')}
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden card-3d group relative"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-2 md:space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-black shadow-lg text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        {t('projects.viewDemo')}
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-black shadow-lg text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                        {t('projects.viewCode')}
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6 relative z-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-xs md:text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-8 md:mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg rounded-full hover-3d"
            >
              <Github className="mr-2 h-4 w-4 md:h-5 md:w-5"  />
              <a href="https://github.com/RavMuh">{t('projects.github')}</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;