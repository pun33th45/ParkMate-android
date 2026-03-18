import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import AppPreview from './components/AppPreview';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import Footer from './components/Footer';
import Logo from './components/Logo';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel !rounded-none !border-t-0 !border-l-0 !border-r-0 py-3' : 'bg-transparent py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Logo className="w-10 h-10" />
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">ParkMate</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">How it Works</a>
            <a href="#preview" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Preview</a>
          </div>
          <a
            href="https://pun33th45.itch.io/parkmate-prototype"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5 text-sm"
          >
            Get App
          </a>
        </div>
      </motion.nav>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AppPreview />
        <Download />
      </main>

      <Footer />
    </div>
  );
}

export default App;
