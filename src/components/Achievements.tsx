import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, BookOpen, ShieldAlert, Award, FileSpreadsheet } from 'lucide-react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  description: string;
}

const AnimatedCounter: React.FC<{ value: number; duration?: number; suffix: string }> = ({ value, duration = 1.5, suffix }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = Math.ceil(end / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={countRef} className="font-mono text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  const stats: Stat[] = [
    {
      label: 'Projects Built',
      value: 12,
      suffix: '+',
      icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      description: 'End-to-end full-stack systems and machine learning pipelines.'
    },
    {
      label: 'Internships',
      value: 2,
      suffix: '',
      icon: <BookOpen className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      description: 'Practical industry experience in AI/ML & backend systems.'
    },
    {
      label: 'Certifications',
      value: 8,
      suffix: '+',
      icon: <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      description: 'Professional credentials from NPTEL, IIT Roorkee (ISRO), and others.'
    },
    {
      label: 'Technical Skills',
      value: 25,
      suffix: '+',
      icon: <FileSpreadsheet className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      description: 'Languages, backend libraries, ML frameworks, and cloud utilities.'
    },
    {
      label: 'Coding Practice',
      value: 300,
      suffix: '+',
      icon: <ShieldAlert className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      description: 'Algorithms and data structure problems solved on LeetCode & HackerRank.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white dark:bg-[#090d16] transition-colors duration-300 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] opacity-75" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-md"
            >
              {/* Icon */}
              <div className="p-3 bg-white/10 rounded-xl mb-4">
                {stat.icon}
              </div>

              {/* Counter */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />

              {/* Labels */}
              <h3 className="text-sm font-bold tracking-wide uppercase text-slate-300 mt-2">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
