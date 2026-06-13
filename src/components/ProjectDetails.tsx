import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sun, Moon, Info, Sparkles, ExternalLink, HelpCircle } from 'lucide-react';
import type { Project } from '../data/projectsData';

interface ProjectDetailsProps {
  project: Project;
  setView: (view: 'home' | 'spar' | 'project-details') => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, setView, darkMode, toggleDarkMode }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 transition-colors duration-300 pb-24">
      {/* Sticky Case Study Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-nav py-3 shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 bg-white/75 dark:bg-[#0F172A]/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Button */}
            <button
              onClick={() => setView('home')}
              className="flex items-center space-x-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </button>

            {/* Logo Accent */}
            <div className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white hidden md:block">
              Project <span className="text-blue-600">Case Study</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Project Header Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <div className="flex items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>{project.category === 'aiml' ? 'AI / ML & Data Science Showcase' : 'Full Stack (MERN) Engineering Showcase'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-slate-650 dark:text-slate-400 mt-4 max-w-4xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* 2 Column Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Purpose & Engineering details */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Purpose */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Project Purpose & Objectives</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                {project.purpose}
              </p>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 space-y-6"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Engineering Challenges & Solutions</span>
              </h2>

              <div className="space-y-6">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 space-y-3">
                    <div className="flex items-start space-x-2.5">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-450 text-xs font-bold mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-950 dark:text-slate-250 uppercase tracking-wide">Challenge</h4>
                        <p className="text-sm text-slate-650 dark:text-slate-400 mt-1 leading-relaxed">{challenge}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-slate-200/60 dark:border-slate-800/60 pt-3 flex items-start space-x-2.5">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 text-xs font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-950 dark:text-slate-250 uppercase tracking-wide">Solution</h4>
                        <p className="text-sm text-slate-650 dark:text-slate-400 mt-1 leading-relaxed">{project.solutions[idx]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subcategories (specifically for Disease predictions or AI mini GPTs) */}
            {project.subCategories && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80"
              >
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Sub-Models & Repositories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.subCategories.map((sub, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/80 flex flex-col justify-between h-full">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                        {sub.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-xs font-bold mt-2">
                        {sub.liveUrl && (
                          <a
                            href={sub.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-1"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        <a
                          href={sub.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 dark:text-slate-450 hover:text-slate-900 dark:hover:text-slate-200 flex items-center space-x-1"
                        >
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>Repository</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Tech stack lists & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 text-left"
          >
            {/* Tech Stack */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-md space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
                Technologies Utilized
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-450"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-md space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
                Project Resources
              </h3>
              
              {/* Graphic Code Display */}
              <div className={`h-32 rounded-xl bg-gradient-to-br ${project.thumbnailGradients} flex items-center justify-center p-4 relative overflow-hidden shadow-inner`}>
                <div className="w-full h-full max-w-[100px] opacity-65">
                  {project.graphicCode}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm transition-colors shadow-lg shadow-blue-500/25 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Application</span>
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 font-semibold text-sm transition-all shadow-md cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Browse Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          
        </div>
      </main>
    </div>
  );
};
