import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase, ChevronDown } from 'lucide-react';
import { TechIllustration } from './TechIllustration';

export const Hero: React.FC = () => {
  const roles = [
    'AI/ML Engineer',
    'Software Engineer',
    'Full Stack Developer',
    'Backend Developer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullRole = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullRole) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  // Generate particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10
  }));

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Alubilli_Jyaneswar_Rao_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50/50 dark:bg-[#0b0f19] transition-colors duration-300">
      {/* Background grid illustration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          />
        ))}
      </div>

      {/* Glowing background highlights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/10 dark:bg-blue-500/[0.04] blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/[0.04] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20 dark:border-blue-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Available for Opportunities
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Alubilli Jyaneswar Rao</span>
              <div className="h-[1.2em] mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800 dark:text-slate-200">
                <span className="typewriter-cursor text-blue-600 dark:text-blue-400">{currentText}</span>
              </div>
            </h1>

            {/* Headline */}
            <h2 className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-2xl border-l-4 border-blue-600 pl-4">
              Building Intelligent Software Systems with AI and Scalable Full-Stack Technologies
            </h2>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Aspiring AI/ML Engineer and MERN Stack Developer pursuing B.Tech in Computer Science (AI & ML) at Parul University. Experienced in building AI systems, scalable backend architectures, REST APIs, and full-stack applications.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold transition-all duration-200"
              >
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <TechIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" className="flex flex-col items-center space-y-1">
          <span className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};
