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
    ];

    return (
        <nav className="fixed w-full z-50 top-4 sm:top-8 pointer-events-none flex justify-center px-4">
            <div className="relative pointer-events-auto bg-brand-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_0_rgba(212,175,55,0.05)]">
                <div className="flex justify-between items-center gap-8 md:gap-16">

                    {/* Logo Section */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full border border-brand-gold/30 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300 overflow-hidden relative">
                            <img src="/rotaract_logo.png" alt="Rotaract Logo" className="w-[85%] h-[85%] object-contain absolute opacity-90 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white/70 hover:text-brand-gold-light transition-all text-sm font-medium tracking-wide relative hover:-translate-y-0.5"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Extra CTA - Desktop */}
                    <div className="hidden md:block">
                        <a href="#register" className="px-5 py-2 rounded-full border border-brand-gold/30 text-brand-gold-light text-sm font-semibold hover:bg-brand-gold/10 transition-colors">
                            Register
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-gold-light focus:outline-none hover:scale-110 transition-transform"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 right-4 w-64 pointer-events-auto"
                    >
                        <div className="bg-brand-black/80 backdrop-blur-3xl border border-brand-gold/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                            <div className="flex flex-col py-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="px-6 py-4 text-sm font-medium text-white/80 hover:text-brand-gold-light hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="px-6 pt-4 pb-2">
                                    <a
                                        href="#register"
                                        onClick={() => setIsOpen(false)}
                                        className="block text-center px-4 py-3 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-black font-bold uppercase text-sm tracking-wider w-full shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
