import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ChevronRight, Globe, Server, Code } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  tags: string[];
  link: string;
}

export const Certifications: React.FC = () => {
  const certifications: Certificate[] = [
    {
      title: 'Computer Networks',
      issuer: 'NPTEL Certification',
      date: 'Verified Credential',
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      tags: ['TCP/IP', 'Routing Protocols', 'Network Security'],
      link: 'https://drive.google.com/file/d/1NSoY9ohEShkqGlQ-W5PZLpTUIjOWvMji/view?usp=sharing'
    },
    {
      title: 'Java Programming',
      issuer: 'Beginner Level Certification',
      date: 'Verified Credential',
      icon: <Code className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      tags: ['OOPs', 'Data Structures', 'Java SE'],
      link: 'https://drive.google.com/file/d/1C56iVhKT8f70TWqw7FIt1cFSrSGRhd-H/view?usp=sharing'
    },
    {
      title: 'SPAR Conclave 2026',
      issuer: 'IIT Roorkee (ISRO)',
      date: 'Summit Certificate',
      icon: <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      tags: ['Spatial Analytics', 'ISRO Summit', 'AI Applications'],
      link: 'https://drive.google.com/file/d/1AHwkQCJH07CXc693g2ftQdW1oW7iIsbr/view?usp=sharing'
    },
    {
      title: 'AIML Sprint by ByteXL',
      issuer: 'ByteXL AIML sprint',
      date: '2 Month Project',
      icon: <Award className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      tags: ['Real-world Project', 'Machine Learning', 'AI Models'],
      link: 'https://drive.google.com/file/d/17CZS76TDDm4dW5pGBQxEg5gvVH1yE4oC/view?usp=sharing'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#0F172A] border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Credentials</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Licenses & Certifications
          </p>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-2xl border border-slate-200/70 dark:border-slate-850 flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Badge Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl group-hover:bg-blue-600/10 group-hover:text-blue-600 transition-colors">
                    {cert.icon}
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-500 opacity-60" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {cert.date}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1">
                  {cert.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Micro Action Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-xs font-bold text-blue-600 dark:text-blue-400 pt-2 border-t border-slate-100 dark:border-slate-800 opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <span>View Certificate</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
