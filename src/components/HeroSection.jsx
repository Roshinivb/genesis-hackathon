import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-20">

            {/* Dynamic Backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-brand-gold-dark/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),rgba(255,255,255,0))] pointer-events-none" />

            {/* V2 Central Glowing Orbits */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square pointer-events-none flex items-center justify-center">
                {/* Outer Orbit */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[80%] h-[80%] rounded-full border border-brand-gold/10 border-t-brand-gold/40 border-l-brand-gold/20"
                />
                {/* Middle Orbit */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[60%] h-[60%] rounded-full border border-brand-gold/20 border-b-brand-gold/50 border-r-brand-gold/30"
                />
                {/* Inner Orbit */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[40%] h-[40%] rounded-full border border-brand-gold-light/20 border-t-brand-gold-light/60 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full">

                {/* V2 Top Centered Logo Idea */}
                <div className="mb-6 md:mb-10 w-16 h-16 md:w-20 md:h-20 rounded-full border border-brand-gold/30 bg-brand-black/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <span className="text-brand-gold-light font-display font-bold text-2xl md:text-3xl">R</span>
                </div>

                {/* V2 Massive Display Typography */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Background Glow Text */}
                    <h1 className="absolute inset-0 text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-gold-light to-brand-gold-dark blur-[15px] md:blur-[30px] opacity-60 pointer-events-none tracking-tighter uppercase leading-none">
                        GENESIS
                    </h1>
                    {/* Main Foreground Text */}
                    <h1 className="relative text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-display font-black text-white tracking-tighter uppercase leading-none drop-shadow-2xl">
                        GENESIS
                    </h1>
                </motion.div>

                {/* V2 Glassmorphic Tagline Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-8 md:mt-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 py-4 md:px-10 md:py-6 max-w-2xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col items-center"
                >
                    <p className="text-sm md:text-base font-medium text-brand-gold-light tracking-[0.2em] uppercase mb-2">
                        Presents
                    </p>
                    <p className="text-xl md:text-3xl font-bold text-white tracking-wider uppercase">
                        A National-Level Hackathon
                    </p>
                    <div className="w-12 h-px bg-brand-gold/50 my-4"></div>
                    <div className="flex items-center gap-3 text-sm md:text-lg text-gray-300 font-medium">
                        <span>24 Hours</span>
                        <span className="text-brand-gold">•</span>
                        <span className="text-brand-gold-light text-glow">April 4–5</span>
                        <span className="text-brand-gold">•</span>
                        <span>SRM EEC</span>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-12 group"
                >
                    <a href="#register" className="relative inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black font-display font-bold uppercase tracking-[0.1em] text-sm overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                        <span className="relative z-10 flex items-center gap-2">
                            Explore The Event
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold-light to-brand-gold-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
