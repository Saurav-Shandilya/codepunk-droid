import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import timelineSvg from "../assets/timeline.svg";

// Updated Schedule Data
const timelineData = [
  {
    id: 1,
    date: "1 March - 20 March",
    time: "All Day",
    title: "ONLINE REGISTRATION",
    description: "Secure your spot! Register online through our portal to confirm your participation in the hackathon.",
    color: "#00F5D4" // Teal
  },
  {
    id: 2,
    date: "24 March",
    time: "10:30 AM - 11:00 AM",
    title: "REGISTRATION",
    description: "On-site check-in. Verify your credentials, collect your swag bags, and get ready for the event.",
    color: "#FF3366" // Pink
  },
  {
    id: 3,
    date: "24 March",
    time: "11:00 AM - 11:30 AM",
    title: "INAUGURATION",
    description: "Opening ceremony. Welcome address by dignitaries and introduction to the hackathon theme.",
    color: "#FFE600" // Yellow
  },
  {
    id: 4,
    date: "24 March",
    time: "11:30 AM - 12:00 PM",
    title: "RULES & GUIDELINES",
    description: "Detailed briefing on evaluation criteria, code of conduct, and resource allocation.",
    color: "#9D4EDD" // Purple
  },
  {
    id: 5,
    date: "24 March",
    time: "12:00 NOON",
    title: "EVENT START",
    description: "Hackathon begins! The clock starts ticking. Start brainstorming and coding your solutions.",
    color: "#00D9FF" // Cyan
  },
  {
    id: 6,
    date: "25 March",
    time: "09:30 AM - 09:50 AM",
    title: "JUDGING (ROUND 1)",
    description: "Initial evaluation. Present your progress and basic prototype to the preliminary judges.",
    color: "#FF6B00" // Orange
  },
  {
    id: 7,
    date: "25 March",
    time: "09:55 AM - 10:15 AM",
    title: "BREAK & PREP",
    description: "Short break and time for final PPT preparation for the finalists moving to the next round.",
    color: "#ffffff" // White
  },
  {
    id: 8,
    date: "25 March",
    time: "10:20 AM - 11:00 AM",
    title: "FINAL JUDGING",
    description: "Final presentations. Showcase your complete solution to the panel of expert judges.",
    color: "#FF3366" // Pink
  },
  {
    id: 9,
    date: "25 March",
    time: "11:15 AM",
    title: "PRIZE DISTRIBUTION",
    description: "Winners announcement and prize distribution ceremony. Celebrate the victory!",
    color: "#FFD700" // Gold
  }
];

const TimelineItem = ({ item, isLeft, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -80 : 80 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex items-center w-full mb-12 md:mb-24 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Side */}
      <div className={`w-5/12 ${isLeft ? 'text-right pr-6 md:pr-12' : 'text-left pl-6 md:pl-12'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border-2 border-white/10 hover:border-white/30 transition-colors"
        >
          {/* Date Badge */}
          <div className={`inline-block px-3 py-1 mb-2 text-xs font-bold text-black rounded-sm ${isLeft ? 'md:ml-auto' : ''}`}
               style={{ backgroundColor: item.color }}>
            {item.date} • {item.time}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-wide uppercase" 
              style={{ textShadow: `2px 2px 0px ${item.color}` }}>
            {item.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Center Node */}
      <div className="w-2/12 flex justify-center relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 200 }}
          className="relative z-10"
        >
          <div 
            className="w-8 h-8 rounded-full border-4 border-black flex items-center justify-center shadow-lg"
            style={{ backgroundColor: item.color }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="w-2 h-2 bg-black rounded-full"
            />
          </div>
          {/* Connector Line Animation */}
          <motion.div 
            initial={{ height: 0 }}
            animate={isInView ? { height: 100 } : { height: 0 }}
            className="absolute top-8 left-1/2 w-0.5 bg-white/20 -translate-x-1/2 hidden md:block"
            style={{ height: '6rem' }}
          />
        </motion.div>
      </div>

      {/* Empty Side for Desktop / Image for Mobile */}
      <div className={`w-5/12 ${isLeft ? 'pl-6 md:pl-12' : 'pr-6 md:pr-12'}`}>
         {/* Decorative element or empty */}
         <div className={`hidden md:block h-32 ${isLeft ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-white/5 to-transparent rounded-xl`} />
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a]" id='roadmap'>
      
      {/* Top Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-red-600 via-purple-500 to-cyan-500" />

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32">
        
        {/* Header Section - Styled like Tracks */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6"
            style={{
              textShadow: `
                4px 4px 0px #FF3366,
                8px 8px 0px #00D9FF,
                12px 12px 0px #FFE600
              `,
              WebkitTextStroke: '2px #000'
            }}
          >
            TIMELINE
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto"
          >
            Mark your calendars. The journey from registration to victory.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          
          {/* Progress Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 h-full">
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FF3366] via-[#00D9FF] to-[#FFE600] rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Progress Line - Mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-white/10">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-red-600 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {timelineData.map((item, index) => (
              <div key={item.id}>
                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <TimelineItem 
                    item={item} 
                    isLeft={index % 2 === 0} 
                    index={index}
                  />
                </div>
                
                {/* Mobile Layout */}
                <motion.div 
                  className="md:hidden flex items-start mb-12 pl-16 relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div 
                    className="absolute left-8 top-1 w-4 h-4 rounded-full border-2 border-black transform -translate-x-1.5"
                    style={{ backgroundColor: item.color }}
                  />
                  
                  <div className="bg-black/40 p-4 rounded-lg border border-white/10 w-full">
                    <div className="text-xs font-bold mb-1 opacity-80" style={{ color: item.color }}>
                      {item.date} • {item.time}
                    </div>
                    <h3 className="text-lg font-black text-white mb-1 uppercase">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom SVG Decoration */}
      <div className="relative w-full mt-10">
        <img
          src={timelineSvg}
          alt="Timeline Decoration"
          className="w-full max-w-none object-cover block"
        />
      </div>
      
      {/* Bottom Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-600" />

    </div>
  );
};

export default Timeline;