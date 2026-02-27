import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Prizes', href: '#prizes' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Problems', href: '#problems' },
        { name: 'Contact', href: '#contact' },
        { name: 'Register', href: '#register' },
    ];

    return (
        <>
            {/* Top Navigation Bar Component */}
            <nav className="fixed w-full z-50 top-0 left-0 pointer-events-none flex justify-between items-start p-4 sm:p-6 md:p-8">

                {/* Logo Section - Top Left */}
                <a href="#home" className="pointer-events-auto flex items-center gap-3 sm:gap-4 group max-w-[75%] md:max-w-[60%]">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full border border-brand-gold/30 bg-black/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300 relative overflow-hidden p-1.5">
                        <img src="/rotaract_logo.png" alt="Rotaract Logo" className="w-[85%] h-[85%] object-contain relative z-10 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                    </div>
                    <div className="flex flex-col bg-brand-black/60 backdrop-blur-md py-2 px-4 sm:px-5 rounded-2xl border border-white/5 shadow-[0_4px_20px_0_rgba(212,175,55,0.05)]">
                        <span className="text-white/95 font-bold leading-snug text-sm sm:text-base md:text-lg uppercase tracking-wider drop-shadow-md">
                            Rotaract club
                        </span>
                        <span className="text-white/70 font-medium leading-tight text-[11px] sm:text-xs md:text-sm drop-shadow-md">
                            of SRM easwari engineering college
                        </span>
                    </div>
                </a>

                {/* Menu Button - Top Right */}
                <div className="pointer-events-auto">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-brand-black/70 backdrop-blur-xl border border-brand-gold/30 text-brand-gold-light p-3 sm:p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)] focus:outline-none hover:scale-105 hover:bg-brand-gold/10 transition-all font-bold tracking-widest flex items-center gap-2"
                    >
                        <span className="hidden sm:inline uppercase text-sm mr-1">Menu</span>
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Sidebar Drawer Container */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        />

                        {/* Left Side menu drawer */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[80vw] sm:w-[350px] bg-[#0a0a0a] border-r border-brand-gold/20 z-[70] shadow-[30px_0_50px_rgba(0,0,0,0.8)] flex flex-col"
                        >
                            {/* Drawer Header */}
                            <div className="flex justify-between items-center p-6 border-b border-white/5">
                                <span className="text-brand-gold font-bold uppercase tracking-widest text-lg">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/50 hover:text-brand-gold hover:rotate-90 transition-all p-2 bg-white/5 rounded-full"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex flex-col py-6 px-4 space-y-2 overflow-y-auto">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 + 0.1 }}
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`group relative flex items-center px-6 py-4 rounded-xl hover:bg-white/5 transition-all text-left ${link.name === 'Register' ? 'mt-8 border border-brand-gold/30 bg-gradient-to-r from-brand-gold/10 to-transparent' : ''}`}
                                    >
                                        <span className={`text-xl font-bold tracking-wide transition-colors ${link.name === 'Register' ? 'text-brand-gold uppercase' : 'text-white/80 group-hover:text-brand-gold-light'}`}>
                                            {link.name}
                                        </span>
                                        {/* Golden indicator on hover */}
                                        {link.name !== 'Register' && (
                                            <div className="absolute left-0 w-1 h-0 bg-brand-gold rounded-r-md transition-all group-hover:h-3/4 duration-300 top-1/2 -translate-y-1/2" />
                                        )}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-auto p-6 border-t border-white/5 flex flex-col items-center opacity-50">
                                <div className="text-xs text-center text-white/40 mb-2">Powered by Antigravity AI</div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
