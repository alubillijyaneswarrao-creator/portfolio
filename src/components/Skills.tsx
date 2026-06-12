import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Code, Database, Library, Cpu, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      id: 'aiml',
      name: 'AI/ML Development',
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: 'Machine Learning', level: 90 },
        { name: 'Deep Learning', level: 85 },
        { name: 'Natural Language Processing (NLP)', level: 80 },
        { name: 'Computer Vision', level: 80 }
      ]
    },
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      id: 'fullstack',
      name: 'Full Stack & Databases',
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 90 }
      ]
    },
    {
      id: 'frameworks',
      name: 'Libraries & Frameworks',
      icon: <Library className="w-5 h-5" />,
      skills: [
        { name: 'TensorFlow', level: 80 },
        { name: 'PyTorch', level: 75 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'FastAPI / Flask', level: 85 },
        { name: 'OpenCV', level: 80 },
        { name: 'NLTK', level: 85 }
      ]
    },
    {
      id: 'corecs',
      name: 'Core Computer Science',
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 90 },
        { name: 'Database Management Systems (DBMS)', level: 85 },
        { name: 'Operating Systems', level: 80 },
        { name: 'Computer Networks', level: 85 }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Cloud',
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code & Postman', level: 95 },
        { name: 'Streamlit', level: 85 },
        { name: 'AWS (Basics)', level: 70 }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>('aiml');

  const activeCategoryData = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-[#0b0f19] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Skills</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Technical Arsenal & Expertise
          </p>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Layout: Sidebar and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Category Tabs (Sidebar) */}
          <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-28">
            <h3 className="text-left text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 mb-4">
              Categories
            </h3>
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-2 no-scrollbar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center space-x-3 px-4 py-3.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/15'
                        : 'bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className={isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'}>
                      {cat.icon}
                    </span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Skill Progress Indicators */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-850">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="flex items-center space-x-3 border-b border-slate-200/60 dark:border-slate-800 pb-4">
                    <span className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                      {activeCategoryData.icon}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {activeCategoryData.name}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeCategoryData.skills.map((skill, idx) => (
                      <div key={skill.name} className="space-y-2 text-left">
                        <div className="flex justify-between items-center text-sm font-semibold">
                          <span className="text-slate-800 dark:text-slate-200">{skill.name}</span>
                          <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar Container */}
                        <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          {/* Animated Fill */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.05, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Skills Overview */}
            <div className="mt-8 text-left">
              <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-4">
                Global Competency Summary
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.flatMap(c => c.skills.map(s => s.name)).slice(0, 15).map((name) => (
                  <span
                    key={name}
                    className="px-3 py-1.5 rounded-md text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-500/40 transition-colors"
                  >
                    {name}
                  </span>
                ))}
                <span className="px-3 py-1.5 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/30 text-blue-600 dark:text-blue-400">
                  + more
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
