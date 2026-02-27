import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Baby, Trees, Search, Brain, Zap, HardHat } from 'lucide-react';

const ProblemSection = () => {
    const problems = [
        {
            id: 1,
            title: "Affordable Smart Helmet for Two-Wheeler Riders",
            description: "Helmets today compromise comfort and usability, resulting in low adoption despite safety risks. Teams must design a safer, affordable, and user-friendly helmet solution.",
            icon: <HardHat className="w-8 h-8 text-brand-gold" />
        },
        {
            id: 2,
            title: "AI-Enabled Child Safety Wearable with Predictive Risk Alerts",
            description: "Parents lack proactive alerts about potential risks to children beyond school premises. The challenge is to design a wearable that uses location data, motion patterns, and environmental signals to predict unsafe situations.",
            icon: <Brain className="w-8 h-8 text-brand-gold" />
        },
        {
            id: 3,
            title: "Smart Wildlife Intrusion & Protection System for Farmlands",
            description: "Farmers face crop loss and human-wildlife conflict due to unexpected animal intrusion. Teams must build a low-power IoT + AI solution that detects wildlife movement, alerts farmers, and safely deters animals.",
            icon: <Shield className="w-8 h-8 text-brand-gold" />
        },
        {
            id: 4,
            title: "AI-Based Urban Tree Health Monitoring System",
            description: "Cities lack real-time data on the health and survival of urban trees. Design a system using sensors, satellite imagery, or computer vision to monitor tree health, predict disease or drying, and support urban planning.",
            icon: <Trees className="w-8 h-8 text-brand-gold" />
        },
        {
            id: 5,
            title: "Affordable Child Safety Wearable for Schools",
            description: "Parents lack real-time awareness of child safety beyond school premises. The task is to design a wearable solution balancing safety, privacy, and cost.",
            icon: <Baby className="w-8 h-8 text-brand-gold" />
        },
        {
            id: 6,
            title: "AI-Enabled Child Safety Wearable with Predictive Risk Alerts",
            description: "Parents lack proactive alerts about potential risks to children beyond school premises. The challenge is to design a wearable that uses data to predict unsafe situations while ensuring data privacy.",
            icon: <Zap className="w-8 h-8 text-brand-gold" />
        },
        {
            id: 7,
            title: "Open Innovation Track",
            description: "Participants may propose their own original startup idea addressing any real-world problem, provided it demonstrates clear customer need, a viable business model, scalability, and a supporting technical approach.",
            icon: <Search className="w-8 h-8 text-brand-gold" />
        }
    ];

    return (
        <section id="problems" className="py-32 bg-brand-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-display font-bold tracking-[0.3em] text-brand-gold-light uppercase mb-4">The Challenge</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
                        Problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark">Statements</span>
                    </h3>
                    <div className="mt-6 w-24 h-1 bg-brand-gold mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.slice(0, 6).map((problem, index) => (
                        <motion.div
                            key={problem.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl hover:border-brand-gold/50 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                {problem.icon}
                            </div>

                            <div className="mb-6 inline-block p-3 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-brand-gold">
                                {problem.icon}
                            </div>

                            <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                                {problem.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {problem.description}
                            </p>

                            <div className="mt-8 h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-500 rounded-full" />
                        </motion.div>
                    ))}
                </div>

                {/* 7th item alone, centered in the last row */}
                <div className="mt-8 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className="w-full md:w-1/2 lg:w-1/3 bg-white/[0.03] border border-brand-gold/30 p-8 rounded-2xl hover:border-brand-gold/50 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            {problems[6].icon}
                        </div>

                        <div className="mb-6 inline-block p-3 rounded-lg bg-brand-gold/10 border border-brand-gold/20 text-brand-gold animate-pulse">
                            {problems[6].icon}
                        </div>

                        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                            {problems[6].title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {problems[6].description}
                        </p>

                        <div className="mt-8 h-1 w-full bg-brand-gold/20 group-hover:bg-brand-gold transition-all duration-500 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
