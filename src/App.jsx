import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-gold/30 selection:text-brand-gold-light">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />

        {/* Placeholder sections for navigation links */}
        <section id="prizes" className="min-h-[50vh] flex items-center justify-center border-t border-brand-gold/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-2xl md:text-4xl text-brand-gold/30 font-bold uppercase tracking-widest relative z-10 text-center px-4">Prizes Section</h2>
        </section>

        <section id="schedule" className="min-h-[50vh] flex items-center justify-center border-t border-brand-gold/10 bg-brand-gray/20 relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl text-brand-gold/30 font-bold uppercase tracking-widest relative z-10 text-center px-4">Schedule Section</h2>
        </section>

        <section id="register" className="py-32 flex items-center justify-center border-t border-brand-gold/10 relative overflow-hidden">
          <div className="text-center relative z-10 max-w-2xl px-4">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold-dark">Innovate?</span></h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Join hundreds of developers for 24 hours of non-stop creativity and coding.</p>
            <button className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-black font-black uppercase tracking-widest rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] w-full sm:w-auto">
              Register Now
            </button>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/10 blur-[120px] pointer-events-none rounded-t-full" />
        </section>

        <section id="problems" className="min-h-[50vh] flex items-center justify-center border-t border-brand-gold/10 bg-brand-gray/20">
          <h2 className="text-2xl md:text-4xl text-brand-gold/30 font-bold uppercase tracking-widest text-center px-4">Problem Statements</h2>
        </section>

        <section id="faq" className="min-h-[50vh] flex items-center justify-center border-t border-brand-gold/10">
          <h2 className="text-2xl md:text-4xl text-brand-gold/30 font-bold uppercase tracking-widest text-center px-4">FAQ Section</h2>
        </section>
      </main>

      <footer className="border-t border-brand-gold/20 py-12 bg-brand-black text-center text-sm text-gray-400 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold mb-6 hover:bg-brand-gold/10 transition-colors">
            R
          </div>
          <p className="mb-2">&copy; {new Date().getFullYear()} Rotaract Club of SRM Easwari Engineering College.</p>
          <p className="mb-6">All rights reserved.</p>
          <p className="flex items-center gap-2 justify-center">
            Made with <span className="text-brand-gold">⚡</span> for GENESIS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
