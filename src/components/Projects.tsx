import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';

interface ProjectsProps {
  onViewProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onViewProject }) => {
  const [filter, setFilter] = useState<'all' | 'aiml' | 'fullstack'>('all');

  const filteredProjects = projectsData.filter(proj => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50/50 dark:bg-[#0b0f19] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Portfolio</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Featured Case Studies
          </p>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-2 mb-12">
          {(['all', 'aiml', 'fullstack'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all duration-250 cursor-pointer ${
                filter === cat
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'aiml' ? 'AI/ML Systems' : cat === 'fullstack' ? 'Full Stack (MERN)' : 'All Projects'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => onViewProject(project)}
                className="group flex flex-col h-full bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200/60 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
              >
                
                {/* Thumbnail / High-Tech Graphic */}
                <div className={`relative h-48 bg-gradient-to-br ${project.thumbnailGradients} flex items-center justify-center overflow-hidden p-6`}>
                  <div className="w-full h-full max-w-[160px] opacity-75 group-hover:scale-105 transition-transform duration-500">
                    {project.graphicCode}
                  </div>
                  <div className="absolute inset-0 bg-slate-950/20 mix-blend-overlay" />
                  
                  {/* Hover action overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300 backdrop-blur-sm">
                    <span className="px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-colors flex items-center space-x-1.5">
                      <span>View Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-grow p-6 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{project.category === 'aiml' ? 'Artificial Intelligence' : 'Full Stack Engineering'}</span>
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech List */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded text-xs font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 rounded text-xs font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-400">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Footer Explore Action */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-850 text-sm font-semibold w-full text-blue-600 dark:text-blue-400">
                      <span className="flex items-center space-x-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        <span>Explore Case Study</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
