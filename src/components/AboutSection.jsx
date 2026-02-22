import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Rocket } from 'lucide-react';

const AboutSection = () => {
    const columns = [
        {
            icon: <Rocket className="w-8 h-8 text-brand-gold-light group-hover:text-brand-black transition-colors" />,
            title: "Innovation Focus",
            description: "Push the boundaries of technology. We are looking for out-of-the-box solutions to real-world problems. (Content to be added later)"
        },
        {
            icon: <Globe2 className="w-8 h-8 text-brand-gold-light group-hover:text-brand-black transition-colors" />,
            title: "National Scale",
            description: "Compete with top minds from across the country. GENESIS brings together the brightest developers and creators. (Content to be added later)"
        },
        {
            icon: <Code2 className="w-8 h-8 text-brand-gold-light group-hover:text-brand-black transition-colors" />,
            title: "24-Hour Sprint",
            description: "A grueling but rewarding 24-hour coding marathon. Test your endurance, teamwork, and technical skills. (Content to be added later)"
        },
        {
            icon: <Cpu className="w-8 h-8 text-brand-gold-light group-hover:text-brand-black transition-colors" />,
            title: "Next-Gen Tech",
            description: "From AI/ML to Web3 and IoT, build projects using cutting-edge technologies that shape our future. (Content to be added later)"
        }
    ];

    return (
        <section id="about" className="relative py-32 bg-[#050505] min-h-screen flex items-center justify-center overflow-hidden">

            {/* V2 Subtle Grid Background Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50" />

            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold-dark/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-sm font-display font-bold tracking-[0.3em] text-brand-gold-light uppercase mb-6">Discover</h2>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tighter">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark">GENESIS</span>
                    </h3>
                    <div className="mt-8 w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
                </motion.div>

                {/* V2 4-Column Glassmorphic Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
                    {columns.map((col, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group h-full"
                        >
                            <div className="h-full relative p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl transition-all duration-500 hover:border-brand-gold/40 hover:-translate-y-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_0_rgba(212,175,55,0.15)] overflow-hidden">

                                {/* Intense Glow effect on hover simulating V2 active state */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold-light to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                                <div className="relative z-10">
                                    <div className="mb-8 inline-flex p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-brand-black/20 group-hover:border-transparent transition-all duration-500 shadow-inner">
                                        {col.icon}
                                    </div>
                                    <h4 className="text-2xl font-display font-bold text-white group-hover:text-brand-black mb-5 transition-colors duration-500">
                                        {col.title}
                                    </h4>
                                    <p className="text-gray-400 group-hover:text-brand-black/80 font-mono text-sm leading-relaxed transition-colors duration-500">
                                        {col.description}
                                    </p>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-gold/10 to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300 rounded-tr-3xl"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
