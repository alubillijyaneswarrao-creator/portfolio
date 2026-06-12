import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preferences
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Apply initial class
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolled = (window.scrollY / totalScroll) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Top Scroll Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Global Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content Layout */}
      <main>
        
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Technical Skills */}
        <Skills />

        {/* Section 4: Work Experience */}
        <Experience />

        {/* Section 5: Projects Showcase */}
        <Projects />

        {/* Section 6: Certifications */}
        <Certifications />

        {/* Section 7: Education */}
        <Education />

        {/* Section 8: Achievements / Counters */}
        <Achievements />

        {/* Section 9: Contact Center */}
        <Contact />

      </main>

      {/* Section 10: Footer */}
      <Footer />

    </div>
  );
}

export default App;
