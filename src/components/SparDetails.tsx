import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Award, Globe, Download, Sun, Moon, Info, ShieldCheck, ChevronRight, Sparkles, Presentation, CheckCircle } from 'lucide-react';

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

  const conclaveTopics = [
    'Space science and exploration',
    'Space architecture and habitat design',
    'Satellite technologies and future space missions',
    'Research opportunities in the space sector',
    'Innovation, entrepreneurship, and interdisciplinary applications of space technology'
  ];

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
            Space Architecture (SpAR) Conclave 2026
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-4xl">
            A premium academic collaborative summit exploring interdisciplinary applications of technology in space science, habitat design, and aerospace telemetry modeling.
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
              <Award className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
              <span className="font-medium">Certificate of Participation Awarded</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400" />
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Qualified Finalist</span>
            </span>
          </div>
        </motion.div>

        {/* National Finalist Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 p-5 rounded-2xl border border-emerald-500/20 dark:border-emerald-500/10 bg-emerald-500/5 dark:bg-emerald-500/5 backdrop-blur-sm flex items-start space-x-4 shadow-sm text-left"
        >
          <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400 flex-shrink-0">
            <CheckCircle className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
              National Finalist Distinction
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Our team was successfully shortlisted as <strong>one of only 65 teams from all over India</strong> to attend the summit at IIT Roorkee, advancing to the <strong>National Final Stage</strong> of the SpAR Conclave 2026 challenge.
            </p>
          </div>
        </motion.div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Details, Design, and Role */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Section 1: What was SpAR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>What was SpAR?</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>SpAR (Space Architecture) Conclave 2026</strong> is a collaborative academic summit hosted at IIT Roorkee, bringing together experts from the <strong>Indian Space Research Organisation (ISRO)</strong>, <strong>IIT Roorkee</strong>, ARIES, and TIDES to address interdisciplinary space topics:
                </p>
                <ul className="grid grid-cols-1 gap-2.5 mt-4">
                  {conclaveTopics.map((topic, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-sm sm:text-base">
                      <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Section 2: Our Design - Lunar Habitat Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Our Design: The Anahata Core</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>The Anahata Core</strong> (SPAR26-HCBD-02) is a conceptual, human-centered lunar habitat design engineered to sustain lunar research crews.
                  </p>
                  <p>
                    The structural concept features a modular geodesic regolith shield covering a pressurized communal and social core. The design includes detailed blueprints for:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm pl-2">
                    <li className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>Geodesic regolith shielding models</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>Exploded axonometric structural projection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>Hydrogen-rich water protection layers</span>
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-5 relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-md">
                  <img
                    src="/certificates/spar_design_1.jpg"
                    alt="The Anahata Core Lunar Habitat Blueprint"
                    className="w-full object-contain max-h-[300px] group-hover:scale-102 transition-transform duration-300 cursor-pointer"
                    onClick={() => window.open('/certificates/spar_design_1.jpg', '_blank')}
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-2.5 py-1.5 rounded bg-white/95 text-slate-900 text-[10px] font-bold shadow-md">View Blueprint</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3: My Role & What We Did */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>My Role & Technical Scope</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                <p>
                  As the software engineer and technical collaborator, my work focused on planning the digital control systems, environment sensors, and telemetry monitoring framework for the habitat design:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span><strong>Sensor Telemetry Processing:</strong> Modeled diagnostic sensor nodes simulating environment parameters like oxygen levels, internal temperature, and atmospheric pressure inside the communal dome.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span><strong>Habitat Logging Systems:</strong> Architected simulated backend logging databases and event triggers to monitor system stability and highlight critical threshold anomalies.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span><strong>Space Tech Integration:</strong> Contributed to workshops exploring how MERN-stack and AI diagnostic models can support habitat automation and predictive system repairs.</span>
                  </li>
                </ul>

                {/* Dashboard image display */}
                <div className="relative rounded-xl overflow-hidden border border-slate-250 dark:border-slate-800/80 bg-slate-950 mt-6 shadow-inner">
                  <img
                    src="/certificates/spar_design.png"
                    alt="Geospatial Telemetry Control Dashboard"
                    className="w-full object-cover max-h-[200px] hover:scale-101 transition-transform duration-300 cursor-pointer"
                    onClick={() => window.open('/certificates/spar_design.png', '_blank')}
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-slate-900/80 backdrop-blur rounded text-[10px] font-bold text-slate-300">
                    Telemetry Analysis slide
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4: Event Highlights Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/80"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                <Presentation className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Event Highlights & Presentation</span>
              </h2>
              <p className="text-sm text-slate-550 dark:text-slate-400 mb-6">
                Photographs capturing our presentations, academic panel feedback sessions, and campus moments at IIT Roorkee.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Presentation photo */}
                <div className="space-y-2">
                  <div 
                    className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-md aspect-[3/2] cursor-pointer"
                    onClick={() => window.open('/certificates/spar_presentation.jpg', '_blank')}
                  >
                    <img
                      src="/certificates/spar_presentation.jpg"
                      alt="Presenting The Anahata Core at SpAR Conclave 2026"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-2 py-1 rounded bg-slate-900/90 text-white text-[10px] font-semibold">View Full</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    Presenting the communal area architectural layouts of "The Anahata Core" to ISRO scientists and academic panels.
                  </p>
                </div>

                {/* Outdoor photo holding certificate */}
                <div className="space-y-2">
                  <div 
                    className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-md aspect-[3/4] cursor-pointer"
                    onClick={() => window.open('/certificates/spar_holding_certificate.jpg', '_blank')}
                  >
                    <img
                      src="/certificates/spar_holding_certificate.jpg"
                      alt="Alubilli Jyaneswar Rao at IIT Roorkee SpAR Conclave"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-2 py-1 rounded bg-slate-900/90 text-white text-[10px] font-semibold">View Full</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    Alubilli Jyaneswar Rao holding the certificate at the Department of Architecture & Planning, IIT Roorkee.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Certificate Panel (Sticky) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
          >
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-md">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                <span>Conclave Certificate</span>
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
                  <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
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
