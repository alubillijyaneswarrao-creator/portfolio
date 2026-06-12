import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Award, Globe, FileText, Download, Sun, Moon, Info, ShieldCheck, ChevronRight } from 'lucide-react';

interface SparDetailsProps {
  setView: (view: 'home' | 'spar') => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const SparDetails: React.FC<SparDetailsProps> = ({ setView, darkMode, toggleDarkMode }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 transition-colors duration-300 pb-24">
      {/* Premium Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-nav py-3 shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 bg-white/75 dark:bg-[#0F172A]/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Arrow button */}
            <button
              onClick={() => setView('home')}
              className="flex items-center space-x-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </button>

            {/* Logo Accent */}
            <div className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white hidden md:block">
              SpAR Conclave <span className="text-blue-600">2026</span>
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
            <Globe className="w-4 h-4 animate-spin-slow" />
            <span>IIT Roorkee & ISRO Academic Summit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
            Spatial Analytics & Remote Sensing (SpAR) Conclave 2026
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-4xl">
            A premium academic collaborative conclave exploring geospatial AI, remote sensing workflows, deep learning applications on satellite imagery, and aerospace logging standards.
          </p>

          {/* Quick info list */}
          <div className="flex flex-wrap gap-y-3 gap-x-8 mt-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center space-x-2">
              <Calendar className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
              <span className="font-medium">May 1 - 2, 2026</span>
            </span>
            <span className="flex items-center space-x-2">
              <MapPin className="w-4.5 h-4.5 text-rose-600 dark:text-rose-400" />
              <span className="font-medium">IIT Roorkee, Uttarakhand, India</span>
            </span>
            <span className="flex items-center space-x-2">
              <Award className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
              <span className="font-medium">Certificate of Participation Awarded</span>
            </span>
          </div>
        </motion.div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview & Collaborative Org */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Conclave Overview</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                <p>
                  The SpAR Conclave 2026 was organized by the Department of Architecture & Planning, IIT Roorkee, in collaboration with the Indian Space Research Organisation (ISRO), Aryabhatta Research Institute of Observational Sciences (ARIES), and TIDES (Technology Incubation and Entrepreneurship Development Society) IIT Roorkee.
                </p>
                <p>
                  The summit served as an intersection point for academic researchers, GIS scientists, and developers to share advancements in satellite remote sensing datasets, spatial telemetry parsing, and deep learning modeling for spatial information.
                </p>
              </div>
            </motion.div>

            {/* My Contributions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>My Role & Contributions</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                <p>
                  As an AI/ML developer interested in geospatial analytics, my involvement focused on the analytical and architectural dimensions of spatial data:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span><strong>GIS & Remote Sensing:</strong> Studied deep learning classification models on satellite imaging datasets, focusing on territorial mapping.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span><strong>Telemetry Data Parsing:</strong> Investigated telemetry standards and log extraction formats to interface raw geospatial sensors with predictive models.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span><strong>Academic Sessions:</strong> Engaged in workshops hosted by ISRO scientists covering spatial telemetry APIs and geospatial data libraries.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Design Slide / Project Graphic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Geospatial Interface Slide</span>
              </h2>
              <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-lg">
                <img
                  src="/certificates/spar_design.png"
                  alt="Geospatial Telemetry Interface Slide"
                  className="w-full object-cover hover:scale-101 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 italic text-center">
                Figure 1: Digital slide from the geospatial information analysis dashboard analyzed during the conclave sessions.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Certificate Scan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
          >
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-md">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                <span>Digitalized Certificate</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Verified Scan
                </span>
              </h2>

              {/* High-res Certificate Display */}
              <div className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-inner cursor-pointer">
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="px-4 py-2 rounded-lg bg-white/90 text-slate-900 text-xs font-semibold shadow-md flex items-center space-x-1.5">
                    <span>View Fullscreen</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <img
                  src="/certificates/spar_conclave.png"
                  alt="SPAR Conclave 2026 Certificate of Participation"
                  className="w-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => window.open('/certificates/spar_conclave.png', '_blank')}
                />
              </div>

              {/* Download and Issuer Meta */}
              <div className="mt-6 space-y-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-xl space-y-2">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Signing Authorities</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-350">
                    • <strong>Prof. Mahua Mukherjee</strong> (IIT Roorkee)<br />
                    • <strong>Dr. Tirtha Pratim Das</strong> (Space Science Program, ISRO)<br />
                    • <strong>Dr. Azam Ali Khan</strong> (CEO TIDES, IIT Roorkee)
                  </p>
                </div>

                <a
                  href="/certificates/spar_conclave.png"
                  download="SPAR_Conclave_2026_Certificate.png"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm transition-colors shadow-lg shadow-blue-500/25 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Certificate Image</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};
