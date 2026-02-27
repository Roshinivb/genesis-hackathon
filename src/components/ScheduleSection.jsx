import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Flower } from 'lucide-react'; // Flower as the lotus icon at bottom

const scheduleDataDay1 = [
  {
    time: "09:00",
    title: "Inaugural Function",
    description: "Problem understanding, Solution concept"
  },
  {
    time: "10:00",
    title: "PPT Submission for Round 1",
    description: "Submit presentations until 1 PM"
  },
  {
    time: "02:00",
    title: "Elimination Shortlist Announced",
    description: "Results announced after review"
  }
];

const scheduleDataDay2 = [
  {
    time: "09:00 AM",
    title: "Round 2 Submission",
    description: "Prototype presentation"
  },
  {
    time: "11:00 AM",
    title: "Round 3 Presentation",
    description: "Live pitch and Q&A in front of judges."
  }
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-24 relative overflow-hidden bg-[#050505] text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Grid background similar to image */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.4) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(2.5)',
        transformOrigin: 'bottom center'
      }} />

      <div className="max-w-5xl mx-auto px-4 relative z-10 w-full flex flex-col items-center">
        
        {/* Title */}
        <div className="flex items-center gap-4 mb-20 w-full justify-center">
          <div className="h-px bg-gradient-to-l from-brand-gold to-transparent w-32 md:w-48 shadow-[0_0_10px_#d4af37]" />
          <h2 className="text-4xl md:text-5xl font-black text-brand-gold uppercase tracking-wider drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">
            Event Timeline
          </h2>
          <div className="h-px bg-gradient-to-r from-brand-gold to-transparent w-32 md:w-48 shadow-[0_0_10px_#d4af37]" />
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-4xl pt-8 pb-16">
          {/* Main Vertical Line */}
          <div className="absolute left-[39px] md:left-[55px] top-6 bottom-0 w-1 bg-gradient-to-b from-brand-gold via-brand-gold/70 to-brand-gold shadow-[0_0_10px_#d4af37]" />

          {/* Clock Node & Top Horizontal layout */}
          <div className="relative flex flex-col items-start mb-16">
            
            <div className="flex items-center absolute -top-12 left-0 w-full">
              {/* Clock Circle */}
              <div className="relative z-10 w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-brand-gold flex items-center justify-center bg-[#111] shadow-[0_0_25px_rgba(212,175,55,0.6)] shrink-0">
                <Clock className="text-brand-gold w-10 h-10 md:w-12 md:h-12" />
                
                {/* Dial marks */}
                {[...Array(12)].map((_, i) => (
                   <div key={i} className="absolute w-[2px] h-2 bg-brand-gold/60 origin-bottom" style={{ transform: `rotate(${i * 30}deg) translateY(-28px)` }}></div>
                ))}
                
                {/* Glowing sparkles around clock */}
                <div className="absolute -top-2 left-0 w-3 h-3 bg-brand-gold rounded-full blur-[2px] animate-pulse"></div>
                <div className="absolute top-10 -right-2 w-2 h-2 bg-brand-gold rounded-full blur-[2px] animate-pulse delay-75"></div>
              </div>

              {/* Day 1 Pill inside Top Line */}
              <div className="relative ml-[-10px] md:ml-[-20px] top-1 flex-1 max-w-2xl h-16 md:h-20 border-2 border-brand-gold rounded-r-full flex items-center shadow-[0_0_15px_rgba(212,175,55,0.4)] backdrop-blur-sm pl-16 md:pl-24 bg-gradient-to-r from-black via-black/50 to-transparent">
                 <h3 className="text-xl md:text-2xl font-bold text-brand-gold mb-1">Day 1 - April 10, 2026</h3>
                 
                 {/* Internal Horizontal line */}
                 <div className="absolute right-6 top-1/2 -translate-y-1/2 left-[300px] h-1 bg-brand-gold/80 rounded-full flex items-center shadow-[0_0_10px_#d4af37]">
                    <div className="absolute left-1/4 w-5 h-5 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-yellow-300 to-brand-gold shadow-[0_0_15px_#d4af37] -translate-x-1/2"></div>
                    <div className="absolute left-3/4 w-5 h-5 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-yellow-300 to-brand-gold shadow-[0_0_15px_#d4af37] -translate-x-1/2"></div>
                 </div>
              </div>
            </div>

            {/* Empty space for the top header */}
            <div className="h-16"></div>

            {/* Day 1 Items */}
            <div className="flex flex-col gap-10 mt-12 w-full">
              {scheduleDataDay1.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  key={index} 
                  className="relative flex items-center pl-24 md:pl-32"
                >
                  {/* Glow Node */}
                  <div className="absolute left-[32px] md:left-[47px] w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-yellow-200 to-brand-gold shadow-[0_0_15px_#d4af37] z-10 border border-yellow-200"></div>
                  
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-1">
                      <span className="text-brand-gold mr-3">{item.time}</span>
                      <span className="text-yellow-100">{item.title}</span>
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 text-base md:text-lg marker:text-gray-500">
                      <li>{item.description}</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Day 2 Separator */}
          <div className="relative flex items-center mt-10 mb-10 pl-24 md:pl-32">
             <div className="absolute left-[36px] md:left-[52px] w-3 h-3 rounded-full bg-brand-gold shadow-[0_0_10px_#d4af37] z-10"></div>
             
             <div className="flex items-center gap-4 w-full">
               <h3 className="text-xl md:text-2xl font-bold text-brand-gold shrink-0">Day 2 - April 11, 2026</h3>
               <div className="h-px border-t-2 border-dashed border-brand-gold/50 flex-1"></div>
             </div>
          </div>

          {/* Day 2 Items */}
          <div className="relative flex flex-col md:flex-row gap-10 md:gap-16 pl-24 md:pl-32">
            {scheduleDataDay2.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                key={index} 
                className="relative flex-1"
              >
                {/* Node for first item, second item sits to the right so node is only relevant if aligned vertically or manually designed */}
                {index === 0 && (
                   <div className="absolute -left-[64px] md:-left-[85px] top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-yellow-200 to-brand-gold shadow-[0_0_15px_#d4af37] z-10 border border-yellow-200"></div>
                )}
                
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-1">
                    <span className="text-brand-gold mr-2">{item.time}</span>
                    <span className="text-yellow-100">{item.title}</span>
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 text-base md:text-lg marker:text-gray-500 mt-2">
                    <li>{item.description}</li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal Box at the bottom of the line */}
          <div className="absolute left-[29px] md:left-[45px] -bottom-4 w-6 h-6 md:w-8 md:h-8 rounded overflow-hidden border-2 border-brand-gold bg-[#111] z-10 flex items-center justify-center shadow-[0_0_15px_#d4af37]">
            <Flower className="text-brand-gold w-4 h-4 md:w-5 md:h-5" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ScheduleSection;
