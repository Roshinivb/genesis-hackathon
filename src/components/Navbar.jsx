import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Prizes', href: '#prizes' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Register', href: '#register' },
        { name: 'Problem Statements', href: '#problems' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-brand-black/90 backdrop-blur-md border-b border-brand-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        {/* Placeholder for Rotaract Logo */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dark flex items-center justify-center text-brand-black font-bold text-xl">
                            R
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-brand-gold font-bold tracking-wider text-sm md:text-base">ROTARACT CLUB</span>
                            <p className="text-xs text-gray-400">SRM Easwari Engineering College</p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-brand-gold transition-colors text-xs lg:text-sm uppercase tracking-wide font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-gold hover:text-brand-gold-light focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-black/95 backdrop-blur-lg border-b border-brand-gold/20 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg shadow-brand-gold/5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-brand-gold hover:bg-white/5 rounded-md border-b border-white/5 last:border-0"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
