import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Position {
  role: string;
  company: string;
  duration: string;
  location?: string;
  points: string[];
  skillsBadge: string[];
  status: 'Ongoing' | 'Completed';
}

export const Experience: React.FC = () => {
  const experiences: Position[] = [
    {
      role: 'AI/ML Apprentice',
      company: 'ByteXL',
      duration: '3 Months (Project Sprint)',
      location: 'Remote, India',
      points: [
        'Participated in an intensive AI/ML project-based learning sprint to develop "Growmart", an online grocery marketplace.',
        'Collaborated in Team Sankalp to design the user interface, perform initial concept explorations, and assess model readiness.',
        'Structured component integration logs and studied AI maturity frameworks, including ethical impact considerations.',
        'Engaged in model integration, validation tests, and technical structure optimization under mentor supervision.'
      ],
      skillsBadge: ['AI/ML Development', 'Python', 'Model Integration', 'System Architecture', 'Growmart Project'],
      status: 'Completed'
    },
    {
      role: 'Machine Learning Intern',
      company: 'Edufy',
      duration: 'Internship Completed',
      location: 'Remote, India',
      points: [
        'Built end-to-end machine learning pipelines involving preprocessing, model training, and performance metrics tracking.',
        'Performed robust feature engineering and model evaluation using Scikit-learn to improve classification accuracy.',
        'Implemented and structured model serving and deployment scripts using lightweight web serving layers.',
        'Contributed to backend integrations and designed clean REST API contracts supporting ML inference systems.'
      ],
      skillsBadge: ['Python', 'Scikit-learn', 'ML Pipelines', 'REST APIs', 'Model Deployment'],
      status: 'Completed'
    },
    {
      role: 'AI/ML & Full Stack Trainee',
      company: 'NxtWave CCBP 4.0',
      duration: 'Ongoing',
      location: 'Hyderabad, India',
      points: [
        'Developing full-stack MERN (MongoDB, Express.js, React, Node.js) web applications.',
        'Building backend APIs with Node.js and Express, implementing clean route architecture and JWT authentication.',
        'Solving complex Data Structures & Algorithms (DSA) problems to strengthen technical core foundations.',
        'Strengthening software engineering fundamentals including version control (Git), clean code paradigms, and database designs.'
      ],
      skillsBadge: ['MERN Stack', 'Node.js', 'React', 'DSA', 'SQL', 'Git'],
      status: 'Ongoing'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0F172A] border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Timeline</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Professional Experience
          </p>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
 
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={exp.company + exp.role} className={`relative flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-start md:items-center`}>
                  
                  {/* Timeline bullet marker */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#0F172A] border-4 border-blue-600 flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  </div>
 
                  {/* Left spacer for desktop */}
                  <div className="hidden md:block w-1/2 px-8" />
 
                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-850 hover:shadow-lg transition-all duration-300 relative">
                      
                      {/* Active Status Ribbon */}
                      <span className={`absolute top-4 right-4 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border ${
                        exp.status === 'Ongoing'
                          ? 'bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                          : 'bg-slate-500/10 dark:bg-slate-500/5 text-slate-600 dark:text-slate-400 border-slate-500/20'
                      }`}>
                        {exp.status}
                      </span>

                      {/* Header details */}
                      <div className="space-y-1.5 text-left">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                          <span>{exp.company}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-1">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{exp.duration}</span>
                          </span>
                          {exp.location && (
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              <span>{exp.location}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Responsibilities bullets */}
                      <ul className="mt-5 space-y-2.5 text-left text-sm text-slate-600 dark:text-slate-400">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills badges */}
                      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                        {exp.skillsBadge.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
