import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Rocket } from 'lucide-react';

const AboutSection = () => {
    const columns = [
        {
            icon: <Rocket className="w-8 h-8 text-brand-gold group-hover:text-brand-black transition-colors" />,
            title: "Innovation Focus",
            description: "Push the boundaries of technology. We are looking for out-of-the-box solutions to real-world problems. (Content to be added later)"
        },
        {
            icon: <Globe2 className="w-8 h-8 text-brand-gold group-hover:text-brand-black transition-colors" />,
            title: "National Scale",
            description: "Compete with top minds from across the country. GENESIS brings together the brightest developers and creators. (Content to be added later)"
        },
        {
            icon: <Code2 className="w-8 h-8 text-brand-gold group-hover:text-brand-black transition-colors" />,
            title: "24-Hour Sprint",
            description: "A grueling but rewarding 24-hour coding marathon. Test your endurance, teamwork, and technical skills. (Content to be added later)"
        },
        {
            icon: <Cpu className="w-8 h-8 text-brand-gold group-hover:text-brand-black transition-colors" />,
            title: "Next-Gen Tech",
            description: "From AI/ML to Web3 and IoT, build projects using cutting-edge technologies that shape our future. (Content to be added later)"
        }
    ];

    return (
        <section id="about" className="relative py-24 bg-brand-black min-h-screen flex items-center justify-center border-t border-brand-gold/10">

            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold-dark/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-4">Discover</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold-dark">GENESIS</span>
                    </h3>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
                </motion.div>

                {/* 4-Column Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {columns.map((col, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group h-full"
                        >
                            <div className="h-full relative p-8 rounded-2xl bg-brand-gray/50 border border-brand-gold/10 backdrop-blur-sm transition-all duration-300 hover:border-brand-gold/50 hover:bg-brand-gold hover:-translate-y-2 box-glow cursor-default overflow-hidden">

                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold-light to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                                <div className="relative z-10">
                                    <div className="mb-6 inline-flex p-4 rounded-xl bg-brand-black/50 border border-brand-gold/20 group-hover:bg-brand-black/10 group-hover:border-brand-black/20 transition-all duration-300">
                                        {col.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-brand-black mb-4 transition-colors">
                                        {col.title}
                                    </h4>
                                    <p className="text-gray-400 group-hover:text-brand-black/80 leading-relaxed transition-colors text-sm">
                                        {col.description}
                                    </p>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-gold/20 to-transparent opacity-50 group-hover:opacity-0 transition-opacity rounded-tr-2xl"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
