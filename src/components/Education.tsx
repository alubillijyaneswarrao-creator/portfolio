import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface AcademicRecord {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  gradeLabel: string;
  description: string;
}

export const Education: React.FC = () => {
  const educationData: AcademicRecord[] = [
    {
      institution: 'Parul University',
      degree: 'B.Tech Computer Science (AI & ML)',
      duration: '2023 – 2027',
      grade: '8.03 CGPA',
      gradeLabel: 'Current CGPA',
      description: 'Acquiring deep foundations in Artificial Intelligence algorithms, Deep Neural Networks, Natural Language Processing, computer architectures, and software engineering practices.'
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate (MPC)',
      duration: '2021 – 2023',
      grade: '957 / 1000 Marks',
      gradeLabel: 'Total Marks',
      description: 'Completed board curriculum specializing in Mathematics, Physics, and Chemistry (MPC) with stellar state board performance.'
    },
    {
      institution: 'Mother Theresa High School',
      degree: 'Secondary School Certificate (SSC)',
      duration: '2020 – 2021',
      grade: '10.0 CGPA',
      gradeLabel: 'GPA Score',
      description: 'Acquired core foundational schooling with a perfect GPA record across all courses.'
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50/50 dark:bg-[#0b0f19] border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Academic Background</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Education Timeline
          </p>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connector line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.institution + edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex items-start pl-12 md:pl-20 group"
              >
                
                {/* Timeline node icon */}
                <div className="absolute left-0 md:left-4 w-8 h-8 rounded-full bg-slate-50 dark:bg-[#0b0f19] border-2 border-blue-600 flex items-center justify-center shadow-sm z-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <GraduationCap className="w-4 h-4 text-blue-600 group-hover:text-white" />
                </div>

                {/* Content Panel */}
                <div className="w-full glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-850 hover:shadow-md transition-all duration-300 text-left grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left part: Course Info */}
                  <div className="md:col-span-8 space-y-2">
                    <span className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
                      {edu.description}
                    </p>
                  </div>

                  {/* Right part: Grade Callout */}
                  <div className="md:col-span-4 w-full h-full flex items-center md:justify-end">
                    <div className="w-full md:w-auto px-5 py-4 rounded-xl bg-blue-500/5 dark:bg-blue-500/[0.03] border border-blue-500/10 dark:border-blue-500/5 text-left md:text-center space-y-1">
                      <div className="flex items-center md:justify-center space-x-1 text-blue-600 dark:text-blue-400">
                        <Award className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">{edu.gradeLabel}</span>
                      </div>
                      <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {edu.grade}
                      </p>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
