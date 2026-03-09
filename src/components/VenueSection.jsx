import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Zap, Coffee, Battery, Bed } from 'lucide-react';

const VenueSection = () => {
    const mapUrl = "https://www.google.com/maps/place/SRM+Easwari+Engineering+College/@13.0319997,80.1768469,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5260d62bc6942b:0x8cd23707b2ddfb87!8m2!3d13.0319997!4d80.1794218!16s%2Fm%2F0h3snc4?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D";

    const features = [
        {
            title: "TECH-ENABLED HALLS",
            description: "High-speed connectivity, projection-ready venues, and collaboration-ready.",
            icon: <Globe className="w-6 h-6" />
        },
        {
            title: "FOOD & REFRESHMENTS",
            description: "Continuous snacks, water stations, and meal support for all participants.",
            icon: <Coffee className="w-6 h-6" />
        },
        {
            title: "POWER & CHARGING",
            description: "Multi-point charging, extension zones, and backup power for teams.",
            icon: <Battery className="w-6 h-6" />
        },
        {
            title: "REST ZONES",
            description: "Quiet areas for short breaks, stretches, and recovery between sprints.",
            icon: <Bed className="w-6 h-6" />
        }
    ];

    return (
        <section
            id="venue"
            className="relative py-24 px-6 overflow-hidden bg-brand-black"
            style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
            {/* Background Pattern - Glowing dots and plus signs */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(var(--color-brand-gold) 1px, transparent 1px), linear-gradient(90deg, transparent 49%, var(--color-brand-gold) 50%, transparent 51%) 0 0 / 100px 100px, linear-gradient(transparent 49%, var(--color-brand-gold) 50%, transparent 51%) 0 0 / 100px 100px',
                backgroundSize: '40px 40px, 100px 100px, 100px 100px',
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }} />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* Floating Decoration */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none"
                />

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-7xl font-display font-black text-white italic tracking-tighter uppercase">
                        VENUE & LOCATION
                    </h2>
                </motion.div>

                {/* Main Venue Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group relative mb-20"
                >
                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-20 overflow-hidden transition-all duration-500 hover:border-brand-gold/50 hover:shadow-[0_0_80px_rgba(212,175,55,0.15)]"
                    >
                        {/* Status Bar */}
                        <div className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                                <MapPin className="w-8 h-8" />
                            </div>
                        </div>

                        <div className="absolute top-8 right-8 md:top-12 md:right-12 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                            <span className="text-xs font-bold tracking-widest text-white uppercase">LIVE</span>
                        </div>

                        {/* Venue Text */}
                        <div className="text-center mt-8 md:mt-0">
                            <h3 className="text-3xl md:text-7xl font-display font-black text-white italic tracking-tighter uppercase leading-tight">
                                SRM EASWARI <br className="hidden md:block" /> ENGINEERING COLLEGE
                            </h3>
                            <p className="mt-6 text-brand-gold/80 font-display font-bold tracking-[0.2em] text-lg uppercase">
                                RAMAPURAM, CHENNAI
                            </p>
                        </div>

                        {/* Hover Decoration */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] group-hover:bg-brand-gold/20 transition-colors duration-500" />
                    </a>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group h-full"
                        >
                            <div className="h-full bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-gold/30 hover:bg-white/[0.04] flex flex-col items-start gap-6 overflow-hidden">
                                {/* Dot Pattern Background */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                                    backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
                                    backgroundSize: '16px 16px'
                                }} />

                                <div className="relative z-10 p-3 rounded-2xl bg-brand-gold/10 text-brand-gold border border-brand-gold/20 group-hover:scale-110 transition-transform duration-500">
                                    {feature.icon}
                                </div>

                                <div className="relative z-10">
                                    <h4 className="text-lg font-display font-black text-white italic tracking-wider mb-4 uppercase">
                                        {feature.title}
                                    </h4>
                                    <p className="text-white/40 text-sm font-sans leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VenueSection;
