import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import timelineSvg from "../assets/timeline.svg";

const timelineData = [
  {
    id: 1,
    date: "2025-03-01",
    displayDate: "1 March - 20 March",
    time: "All Day",
    title: "ONLINE REGISTRATION",
    description: "Secure your spot! Register online through our portal to confirm your participation in the hackathon.",
    color: "#00F5D4"
  },
  {
    id: 2,
    date: "2025-03-20",
    displayDate: "20 March",
    time: "All Day",
    title: "SHORTLISTING",
    description: "Teams will be shortlisted based on their profiles and project ideas. Selected participants will receive confirmation emails.",
    color: "#FF6B00"
  },
  {
    id: 3,
    date: "2025-03-24T10:30:00",
    displayDate: "24 March",
    time: "10:30 AM - 11:00 AM",
    title: "REGISTRATION",
    description: "On-site check-in. Verify your credentials, collect your swag bags, and get ready for the event.",
    color: "#FF3366"
  },
  {
    id: 4,
    date: "2025-03-24T11:00:00",
    displayDate: "24 March",
    time: "11:00 AM - 11:30 AM",
    title: "INAUGURATION",
    description: "Opening ceremony. Welcome address by dignitaries and introduction to the hackathon theme.",
    color: "#FFE600"
  },
  {
    id: 5,
    date: "2025-03-24T11:30:00",
    displayDate: "24 March",
    time: "11:30 AM - 12:00 PM",
    title: "INTRODUCTION AND RULES DESCRIPTION",
    description: "Detailed briefing on evaluation criteria, code of conduct, and resource allocation.",
    color: "#9D4EDD"
  },
  {
    id: 6,
    date: "2025-03-24T12:00:00",
    displayDate: "24 March",
    time: "12:00 NOON",
    title: "EVENT START",
    description: "Hackathon begins! The clock starts ticking. Start brainstorming and coding your solutions.",
    color: "#00D9FF"
  },
  {
    id: 7,
    date: "2025-03-24T16:00:00",
    displayDate: "24 March",
    time: "4:00 PM - 5:00 PM",
    title: "JUDGING 1 (MENTORING ROUND)",
    description: "First round of evaluation with mentoring feedback. Get guidance from industry experts.",
    color: "#FF6B00"
  },
  {
    id: 8,
    date: "2025-03-24T20:00:00",
    displayDate: "24 March",
    time: "8:00 PM - 9:00 PM",
    title: "DINNER BREAK",
    description: "Take a break, recharge with dinner, and network with fellow participants.",
    color: "#ffffff"
  },
  {
    id: 9,
    date: "2025-03-24T21:30:00",
    displayDate: "24 March",
    time: "9:30 PM - 10:00 PM",
    title: "HACK CONTINUES",
    description: "Back to hacking! Continue building your project with renewed energy.",
    color: "#00F5D4"
  },
  {
    id: 10,
    date: "2025-03-25T00:00:00",
    displayDate: "25 March",
    time: "12:00 AM - 5:00 AM",
    title: "NO SLEEP CHALLENGE",
    description: "The ultimate test of endurance. Keep hacking through the night!",
    color: "#FF3366"
  },
  {
    id: 11,
    date: "2025-03-25T09:30:00",
    displayDate: "25 March",
    time: "9:30 AM - 10:30 AM",
    title: "JUDGING (ROUND 2)",
    description: "Second round of evaluation. Present your progress to the judges.",
    color: "#9D4EDD"
  },
  {
    id: 12,
    date: "2025-03-25T10:30:00",
    displayDate: "25 March",
    time: "10:30 AM - 11:00 AM",
    title: "BREAK AND PPT PREPARATION",
    description: "Short break and time for final PPT preparation for the finalists.",
    color: "#FFE600"
  },
  {
    id: 13,
    date: "2025-03-25T11:00:00",
    displayDate: "25 March",
    time: "11:00 AM - 12:00 PM",
    title: "FINAL JUDGING",
    description: "Final presentations. Showcase your complete solution to the panel of expert judges.",
    color: "#FF3366"
  },
  {
    id: 14,
    date: "2025-03-25T13:00:00",
    displayDate: "25 March",
    time: "1:00 PM",
    title: "PRIZE DISTRIBUTION",
    description: "Winners announcement and prize distribution ceremony. Celebrate the victory!",
    color: "#FFD700"
  }
];

// Live Badge - Top Left Corner with blinking red dot
const LiveBadge = () => (
  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
    {/* Blinking Red Dot */}
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 border border-white"></span>
    </span>
    {/* LIVE Text */}
    <span className="text-[10px] font-black text-red-500 uppercase tracking-wider">
      LIVE
    </span>
  </div>
);

const TimelineItem = ({ item, isLeft, index, isLive }) => {
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
          className={`relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border-2 transition-all duration-300 ${isLive ? 'border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]' : 'border-white/10 hover:border-white/30'}`}
        >
          {/* LIVE Badge - Top Left Corner */}
          {isLive && <LiveBadge />}
          
          {/* Date Badge - Top Right when live, normal when not */}
          <div className={`inline-block px-3 py-1 mb-3 text-xs font-bold text-black rounded-sm ${isLeft ? 'md:ml-auto' : ''} ${isLive ? 'bg-white/90' : ''}`}
               style={{ backgroundColor: isLive ? undefined : item.color }}>
            {item.displayDate} • {item.time}
          </div>
          
          <h2 className={`text-2xl md:text-3xl font-black mb-2 tracking-wide uppercase ${isLive ? 'text-white' : 'text-white'}`} 
              style={{ textShadow: `2px 2px 0px ${isLive ? '#ef4444' : item.color}` }}>
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
            className={`w-8 h-8 rounded-full border-4 border-black flex items-center justify-center shadow-lg transition-all duration-300 ${isLive ? 'scale-125 shadow-[0_0_20px_rgba(239,68,68,0.6)]' : ''}`}
            style={{ backgroundColor: isLive ? '#ef4444' : item.color }}
          >
            {isLive ? (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-3 h-3 bg-white rounded-full"
              />
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="w-2 h-2 bg-black rounded-full"
              />
            )}
          </div>
          
          {/* Pulse ring for live */}
          {isLive && (
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full border-2 border-red-500"
            />
          )}
        </motion.div>
      </div>

      {/* Empty Side */}
      <div className={`w-5/12 ${isLeft ? 'pl-6 md:pl-12' : 'pr-6 md:pr-12'}`}>
         <div className={`hidden md:block h-32 ${isLeft ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-white/5 to-transparent rounded-xl`} />
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false });
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  // For testing: manually set which event is live (0-13), or -1 for none
  const getLiveEventIndex = () => {
    const now = currentTime;
    
    for (let i = 0; i < timelineData.length; i++) {
      const event = timelineData[i];
      const eventDate = new Date(event.date);
      const nextEvent = timelineData[i + 1] ? new Date(timelineData[i + 1].date) : new Date(eventDate.getTime() + 24 * 60 * 60 * 1000);
      
      if (now >= eventDate && now < nextEvent) {
        return i;
      }
    }
    
    // Manual test: return 5; // Shows Event Start as live
    return -1;
  };

  const liveIndex = getLiveEventIndex();

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a]" id='roadmap'>
      
      <div className="w-full h-2 bg-gradient-to-r from-red-600 via-purple-500 to-cyan-500" />

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32">
        
        {/* Header */}
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
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-black/50 rounded-full border border-white/10"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-400 font-mono">
              {currentTime.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} {currentTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </motion.div>
        </div>

        <div ref={containerRef} className="relative">
          
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 h-full">
            <div className="absolute inset-0 bg-white/10 rounded-full" />
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FF3366] via-[#00D9FF] to-[#FFE600] rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

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
                {/* Desktop */}
                <div className="hidden md:block">
                  <TimelineItem 
                    item={item} 
                    isLeft={index % 2 === 0} 
                    index={index}
                    isLive={index === liveIndex}
                  />
                </div>
                
                {/* Mobile */}
                <motion.div 
                  className="md:hidden flex items-start mb-12 pl-16 relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute left-8 top-1 flex items-center justify-center">
                    <div 
                      className={`w-4 h-4 rounded-full border-2 border-black transform -translate-x-1.5 ${index === liveIndex ? 'scale-125' : ''}`}
                      style={{ backgroundColor: index === liveIndex ? '#ef4444' : item.color }}
                    >
                      {index === liveIndex && (
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="w-full h-full bg-white rounded-full"
                        />
                      )}
                    </div>
                    {index === liveIndex && (
                      <motion.div
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute w-6 h-6 rounded-full border-2 border-red-500 -translate-x-1.5"
                      />
                    )}
                  </div>
                  
                  <div className={`relative bg-black/40 p-4 rounded-lg border w-full ${index === liveIndex ? 'border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'border-white/10'}`}>
                    {/* Mobile Live Badge - Top Left */}
                    {index === liveIndex && (
                      <div className="absolute top-2 left-2 z-20 flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 border border-white"></span>
                        </span>
                        <span className="text-[9px] font-black text-red-500 uppercase">LIVE</span>
                      </div>
                    )}
                    
                    <div className={`text-xs font-bold mb-1 ${index === liveIndex ? 'mt-4' : ''}`} style={{ color: index === liveIndex ? '#ef4444' : item.color }}>
                      {item.displayDate} • {item.time}
                    </div>
                    
                    <h3 className={`text-lg font-black mb-1 uppercase ${index === liveIndex ? 'text-white' : 'text-white'}`} style={{ textShadow: index === liveIndex ? '1px 1px 0px #ef4444' : 'none' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full mt-10">
        <img
          src={timelineSvg}
          alt="Timeline Decoration"
          className="w-full max-w-none object-cover block"
        />
      </div>
      
      <div className="w-full h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-600" />

    </div>
  );
};

export default Timeline;