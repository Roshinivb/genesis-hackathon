import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const [stage, setStage] = useState('logo'); // 'logo' -> 'transition' -> 'text'

    useEffect(() => {
        // Sequence the animation
        const timer1 = setTimeout(() => setStage('transition'), 2000);
        const timer2 = setTimeout(() => setStage('text'), 3200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-20">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-brand-gold/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--color-brand-gray)_0%,_var(--color-brand-black)_80%)] opacity-60" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">

                {/* Logo to Text Morph Area */}
                <div className="h-48 md:h-64 flex items-center justify-center relative w-full mb-8">

                    {/* Stage 1: Initial Logo */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -180 }}
                        animate={{
                            scale: stage === 'logo' ? 1 : (stage === 'transition' ? 1.5 : 0),
                            opacity: stage === 'logo' ? 1 : 0,
                            rotate: stage === 'logo' ? 0 : 180,
                        }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute flex items-center justify-center"
                    >
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dark flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                            {/* Inner details to make it look like a gear or Rotaract logo placeholder */}
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-brand-black flex items-center justify-center overflow-hidden relative">
                                <span className="text-brand-black font-black text-6xl md:text-8xl relative z-10">R</span>
                                {/* Decorative rotating accent */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                    className="absolute inset-0 border-[8px] border-dashed border-brand-black/20 rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Stage 2: Transition Particles */}
                    {stage === 'transition' && (
                        <motion.div
                            className="absolute w-full h-full flex items-center justify-center"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            {[...Array(24)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 md:w-2 md:h-2 bg-brand-gold rounded-full shadow-[0_0_10px_#D4AF37]"
                                    initial={{ x: 0, y: 0, scale: 1 }}
                                    animate={{
                                        x: (Math.random() - 0.5) * 600,
                                        y: (Math.random() - 0.5) * 600,
                                        scale: 0,
                                        opacity: 0
                                    }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                />
                            ))}
                        </motion.div>
                    )}

                    {/* Stage 3: GENESIS Text with glow */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
                        animate={{
                            scale: stage === 'text' ? 1 : 0.8,
                            opacity: stage === 'text' ? 1 : 0,
                            filter: stage === 'text' ? "blur(0px)" : "blur(20px)"
                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute"
                    >
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                            GENESIS
                        </h1>
                    </motion.div>

                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: stage === 'text' ? 1 : 0, y: stage === 'text' ? 0 : 30 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-col items-center"
                >
                    <p className="text-lg sm:text-xl md:text-3xl font-medium text-gray-300 tracking-wide uppercase mb-6 md:mb-8 text-center px-4">
                        A National-Level <span className="text-brand-gold font-bold text-glow">24-Hour Hackathon</span>
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-lg text-brand-gold-light border border-brand-gold/30 rounded-full px-6 py-3 bg-brand-black/50 backdrop-blur-md">
                        <span className="font-semibold tracking-wider">APRIL 4–5</span>
                        <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-brand-gold text-glow"></span>
                        <span className="tracking-wide">SRM Easwari Engineering College</span>
                    </div>
                </motion.div>

                {/* Call to Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: stage === 'text' ? 1 : 0, y: stage === 'text' ? 0 : 30 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6"
                >
                    <a href="#register" className="group relative px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95 box-glow text-center w-full sm:w-auto">
                        <span className="relative z-10">Register Now</span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-brand-gold-light to-brand-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a href="#about" className="px-8 py-4 border border-brand-gold text-brand-gold font-bold uppercase tracking-widest rounded-md transition-all hover:bg-brand-gold/10 hover:text-brand-gold-light text-center w-full sm:w-auto">
                        Learn More
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator down arrow */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: stage === 'text' ? 1 : 0 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <svg className="w-8 h-8 md:w-10 md:h-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
