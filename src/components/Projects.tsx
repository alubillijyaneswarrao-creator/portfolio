import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ChevronDown, ChevronUp } from 'lucide-react';

interface SubCategory {
  title: string;
  githubUrl: string;
  liveUrl?: string;
}

interface Project {
  title: string;
  category: 'aiml' | 'fullstack';
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  thumbnailGradients: string;
  graphicCode: React.ReactNode;
  subCategories?: SubCategory[];
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'InternSeed',
      category: 'fullstack',
      description: 'Startup platform connecting students with internships. Features scalable backend REST APIs, advanced application routing, user roles, and dashboard management tools.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveUrl: 'https://internpulse-fullstack.vercel.app/',
      githubUrl: 'https://github.com/alubillijyaneswarrao-creator/internpulse-fullstack',
      thumbnailGradients: 'from-blue-600 to-indigo-700',
      graphicCode: (
        <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
          <rect x="5" y="5" width="90" height="50" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="5" y1="15" x2="95" y2="15" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="10" r="1.5" />
          <circle cx="17" cy="10" r="1.5" />
          <circle cx="22" cy="10" r="1.5" />
          <rect x="15" y="22" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="15" y="34" width="70" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="75" cy="26" r="3" />
        </svg>
      )
    },
    {
      title: 'Cipher-Trace',
      category: 'aiml',
      description: 'AI-powered harassment detection system using Natural Language Processing (NLP) models for content moderation, toxic language classification, and real-time risk alerts.',
      tech: ['Python', 'NLP', 'Streamlit', 'Scikit-learn'],
      liveUrl: 'https://cipher-trace-harassment.streamlit.app/',
      githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Cipher-trace',
      thumbnailGradients: 'from-cyan-600 to-blue-700',
      graphicCode: (
        <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
          <circle cx="50" cy="30" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-pulse" />
          <path d="M38 30L46 38L62 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="10" y1="10" x2="30" y2="20" stroke="currentColor" strokeWidth="1" />
          <line x1="90" y1="10" x2="70" y2="20" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="50" x2="30" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="90" y1="50" x2="70" y2="40" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: 'InfraWatchX',
      category: 'aiml',
      description: 'Computer Vision surveillance and threat detection platform powered by YOLO. Processes live feeds to identify unauthorized intrusion and generate automated response logs.',
      tech: ['YOLO', 'OpenCV', 'Python'],
      githubUrl: 'https://github.com/alubillijyaneswarrao-creator/IXai-smart-classroom-monitoring',
      thumbnailGradients: 'from-emerald-600 to-cyan-700',
      graphicCode: (
        <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
          <rect x="25" y="10" width="50" height="40" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="30" r="3" />
          <path d="M15 15L25 15M15 15V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M85 15L75 15M85 15V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 45L25 45M15 45V35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M85 45L75 45M85 45V35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'RAW Fitness Platform',
      category: 'fullstack',
      description: 'Fully responsive fitness management platform featuring JWT secure authentication, personalized workout tracking, exercise challenges, and progression analytics.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveUrl: 'https://rawchallenges.netlify.app/?fbclid=PAVERFWASZNRNleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadRQZIBDuVG0SI_tGgVwYHo3hJIBHB08CsYpJ2ebq6c9j8aVTFNNra_L9FWew_aem_4C_fUVs6_v_MqXXgiekYaw',
      githubUrl: 'https://github.com/alubillijyaneswarrao-creator/RAW2',
      thumbnailGradients: 'from-amber-600 to-red-700',
      graphicCode: (
        <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
          <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <rect x="12" y="20" width="8" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="80" y="20" width="8" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="18" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M42 45C45 42 55 42 58 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      )
    },
    {
      title: 'Traveloop',
      category: 'fullstack',
      description: 'Dynamic travel planner platform built for Odoo Hackathon 2026. Custom layouts and algorithms optimizing travel loops, routing structures, and itinerary schedules.',
      tech: ['Python', 'Odoo', 'JavaScript', 'SQL'],
      githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Traveloop-odoo-Hackathon-2026-',
      thumbnailGradients: 'from-indigo-600 to-purple-700',
      graphicCode: (
        <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
          <path d="M15 30C25 15 45 45 60 20C75 35 85 15 85 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
          <circle cx="15" cy="30" r="3" />
          <circle cx="85" cy="15" r="3" />
          <circle cx="60" cy="20" r="3" />
          <circle cx="45" cy="45" r="3" />
        </svg>
      )
    },
    {
      title: 'AI Mini GPTs',
      category: 'aiml',
      description: 'Multi-agent AI suite featuring three custom mini evaluators: Coding Interview Agent (live sandbox analysis), Research Agent (document survey and retrieval), and Startup Validator (product metrics assessment).',
      tech: ['Python', 'LLMs', 'Prompt Engineering', 'Gemini / OpenAI API'],
      githubUrl: 'https://github.com/alubillijyaneswarrao-creator',
      thumbnailGradients: 'from-rose-600 to-pink-700',
      graphicCode: (
        <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
          <rect x="10" y="10" width="22" height="40" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="39" y="10" width="22" height="40" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="68" y="10" width="22" height="40" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="21" cy="20" r="2" />
          <circle cx="50" cy="20" r="2" />
          <circle cx="79" cy="20" r="2" />
        </svg>
      )
    },
    {
      title: 'Disease Predictions using Machine Learning',
      category: 'aiml',
      description: 'Comprehensive suite of Machine Learning algorithms classifying and predicting biometric outcomes, housing values, diabetic diagnostics, linear sales regressions, and Titanic survivability models.',
      tech: ['Python', 'Scikit-learn', 'Streamlit', 'Unsupervised Learning', 'Linear Regression'],
      thumbnailGradients: 'from-violet-600 to-indigo-800',
      graphicCode: (
        <svg viewBox="0 0 100 60" className="w-full h-full text-white/20 fill-current">
          <path d="M10 50 L30 30 L50 40 L70 15 L90 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="30" cy="30" r="3" />
          <circle cx="70" cy="15" r="3" />
        </svg>
      ),
      subCategories: [
        {
          title: '1. Heart Disease Detection',
          githubUrl: 'https://github.com/alubillijyaneswarrao-creator/HeartDiseaseDetection',
          liveUrl: 'https://heartdiseasedetectionbyjyanesh.streamlit.app/'
        },
        {
          title: '2. House Price Prediction',
          githubUrl: 'https://github.com/alubillijyaneswarrao-creator/house-price-prediction-ml'
        },
        {
          title: '3. Diabetic Prediction',
          githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Diabetes-Prediction-Project'
        },
        {
          title: '4. Sales Prediction (Linear Regression)',
          githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Sales-Prediction-Using-Linear-Regression'
        },
        {
          title: '5.1 Titanic Unsupervised Learning',
          githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Titanic-Unsupervised-Learning-Project'
        },
        {
          title: '5.2 Titanic Survival Prediction',
          githubUrl: 'https://github.com/alubillijyaneswarrao-creator/Titanic-Survival-Predict'
        }
      ]
    }
  ];

  const [filter, setFilter] = useState<'all' | 'aiml' | 'fullstack'>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(proj => {
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
                className="group flex flex-col h-full bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200/60 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                
                {/* Thumbnail / High-Tech Graphic */}
                <div className={`relative h-48 bg-gradient-to-br ${project.thumbnailGradients} flex items-center justify-center overflow-hidden p-6`}>
                  <div className="w-full h-full max-w-[160px] opacity-75 group-hover:scale-105 transition-transform duration-500">
                    {project.graphicCode}
                  </div>
                  <div className="absolute inset-0 bg-slate-950/20 mix-blend-overlay" />
                  
                  {/* Hover action overlay (for non-expandable projects) */}
                  {!project.subCategories && (
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300 backdrop-blur-sm">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white hover:bg-blue-600 text-slate-900 hover:text-white rounded-full shadow-md transition-all duration-200"
                          title="Live Demo"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white hover:bg-slate-900 text-slate-900 hover:text-white rounded-full shadow-md transition-all duration-200"
                          title="GitHub Repository"
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="flex-grow p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                      {project.category === 'aiml' ? 'Artificial Intelligence' : 'Full Stack Engineering'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech List */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded text-xs font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Sub-categories accordion */}
                    {project.subCategories && (
                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-left">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setExpandedProject(expandedProject === project.title ? null : project.title);
                          }}
                          className="flex items-center justify-between w-full text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 cursor-pointer"
                        >
                          <span>{expandedProject === project.title ? 'Hide Models' : 'Click to View Sub-Categories'}</span>
                          {expandedProject === project.title ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        <AnimatePresence>
                          {expandedProject === project.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-3 space-y-2.5 overflow-hidden"
                            >
                              {project.subCategories.map((sub) => (
                                <div
                                  key={sub.title}
                                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                                >
                                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                                    {sub.title}
                                  </span>
                                  <div className="flex items-center space-x-3 text-xs font-semibold">
                                    {sub.liveUrl && (
                                      <a
                                        href={sub.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
                                      >
                                        <span>Demo</span>
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    )}
                                    <a
                                      href={sub.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 flex items-center space-x-1"
                                    >
                                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                      </svg>
                                      <span>Code</span>
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Footer Actions (For single links projects) */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex items-center space-x-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-sm font-semibold">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>
                    )}
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
