import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0012] pt-20 perspective-[1000px]">

            {/* Dynamic Backgrounds (V3 Vibrant Gold Wireframe Globe) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 md:opacity-40">
                <div className="wireframe-grid" />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(255,215,0,0.15),rgba(5,5,5,0.9))] pointer-events-none" />
            {/* Intense center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-gold-light/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full">

                {/* V3 Centered Logo */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                    className="mb-8 w-20 h-20 md:w-28 md:h-28 rounded-full border-[3px] border-brand-gold-light bg-black/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(255,215,0,0.7)] overflow-hidden relative"
                >
                    <img src="/rotaract_logo.png" alt="Rotaract Club Logo" className="w-[85%] h-[85%] object-contain drop-shadow-[0_0_15px_rgba(255,215,0,1)]" />
                </motion.div>

                {/* V3 Massive Display Typography mimicking NXTGEN */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: -4 }} /* Slight tilt */
                    transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 }}
                    className="relative px-4"
                >
                    {/* Main Foreground Text with 3D Heavy Stroke */}
                    <h1 className="relative text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-display text-white uppercase leading-none text-3d-nxtgen -skew-x-[12deg] tracking-wider z-10">
                        GENESIS
                    </h1>
                    {/* Add a crazy bright flare streak behind words */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[30%] bg-gradient-to-r from-transparent via-brand-gold-light to-transparent blur-[40px] opacity-70 rotate-[4deg] z-0 pointer-events-none" />
                </motion.div>

                {/* V3 Glassmorphic Tagline Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-10 md:mt-16 bg-white/[0.03] backdrop-blur-2xl border-t border-b border-brand-gold/30 px-6 py-4 md:px-12 md:py-6 max-w-3xl mx-auto shadow-[0_0_60px_rgba(255,215,0,0.15)] flex flex-col items-center slant-container -skew-x-[10deg]"
                >
                    <p className="text-xl md:text-3xl font-display font-bold text-white tracking-widest uppercase text-glow skew-x-[10deg]">
                        International Hackathon
                    </p>
                    <div className="w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand-gold-light to-transparent my-5 skew-x-[10deg]"></div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm md:text-xl text-brand-gold-light font-medium font-sans px-4 skew-x-[10deg]">
                        <span className="tracking-widest relative px-4 text-glow">
                            4th & 5th April 2026
                        </span>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-12 group z-20"
                >
                    <a href="#register" className="relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-brand-gold-dark via-brand-gold-light to-brand-gold-dark bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] text-brand-black font-display font-bold uppercase tracking-[0.2em] text-lg overflow-hidden transition-transform hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(255,215,0,0.6)] -skew-x-[10deg]">
                        <span className="relative z-10 flex items-center gap-3 skew-x-[10deg]">
                            Explore
                            <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
