import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Award, Code, Globe, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const highlights = [
    {
      title: 'AI/ML Development',
      description: 'Building deep learning and NLP architectures for intelligent automated solutions.',
      icon: <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Full Stack Engineering',
      description: 'Designing end-to-end applications using MongoDB, Express, React, and Node.js.',
      icon: <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
    },
    {
      title: 'Backend Systems',
      description: 'Creating robust services, job workers, and database architectures.',
      icon: <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
      title: 'Problem Solving',
      description: 'Applying DSA fundamentals to write optimized and bug-free code.',
      icon: <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: 'API Development',
      description: 'Building RESTful microservices and secure HTTP gateways.',
      icon: <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
    },
    {
      title: 'Scalable Architecture',
      description: 'Deploying robust pipelines that scale efficiently on demand.',
      icon: <Award className="w-6 h-6 text-rose-600 dark:text-rose-400" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0F172A] border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">About Me</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Driven Aspiring Engineer & Developer
          </p>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Column 1: Image / Academic Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative group">
              {/* Outer decorative borders */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 dark:opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Profile Card / Illustration */}
              <div className="relative glass-panel rounded-2xl p-8 flex flex-col items-center text-center border border-slate-200 dark:border-slate-800">
                
                {/* Custom Avatar Placeholder Frame */}
                <div className="relative w-36 h-36 rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-900 flex items-center justify-center overflow-hidden shadow-lg mb-6">
                  {!imageError ? (
                    <img
                      src="/profile.jpg"
                      alt="Alubilli Jyaneswar Rao"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Clean SVG Headshot Avatar */
                    <svg className="w-24 h-24 text-slate-400 dark:text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                  {/* Status Overlay */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Alubilli Jyaneswar Rao</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">AI/ML Engineer & MERN Stack Developer</p>
                
                <div className="w-full border-t border-slate-200 dark:border-slate-800 my-6" />

                {/* Academic highlights */}
                <div className="w-full space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Degree</h4>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">B.Tech Computer Science (AI & ML)</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Parul University, 2023 - 2027</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Academic Merit</h4>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">CGPA: 7.84 / 10.0</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Column 2: Bio and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Bridging the gap between intelligent data models and scalable web architectures
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Passionate software developer specializing in AI, Machine Learning, Backend Development, and Full-Stack Engineering. I enjoy building scalable systems that solve real-world problems through intelligent automation and modern software architecture.
            </p>

            <div className="border-l-4 border-blue-600 pl-4 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-r-lg">
              <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                "My core focus lies in engineering clean, modular backend infrastructures, developing state-of-the-art predictive models, and connecting them via responsive frontends to deliver full-cycle product experiences."
              </p>
            </div>
          </motion.div>

        </div>

        {/* Highlight Cards Grid */}
        <div>
          <h4 className="text-slate-400 dark:text-slate-500 font-semibold text-sm tracking-wider uppercase text-left mb-8">
            Core Areas of Competence
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-panel p-6 rounded-xl text-left border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 tech-glow hover:border-blue-500/30 dark:hover:border-cyan-500/30"
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg inline-block mb-4">
                  {item.icon}
                </div>
                <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
