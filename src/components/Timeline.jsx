import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import timelineSvg from "../assets/timeline.svg";
import pig from "../assets/pig.svg";

const timelineData = [
  {
    id: 1,
    title: "1. ORIGINS",
    description: "Where it all began. The spark of an idea that would eventually grow into something extraordinary. Our journey started with a simple vision.",
    image: pig
  },
  {
    id: 2,
    title: "2. EXPANSION",
    description: "Growth and exploration. We pushed boundaries, reached new horizons, and expanded our capabilities beyond what we thought possible.",
    image: pig
  },
  {
    id: 3,
    title: "3. INNOVATION",
    description: "Breaking new ground. Through creativity and determination, we developed solutions that changed the way people think about technology.",
    image: pig
  },
  {
    id: 4,
    title: "4. RECOGNITION",
    description: "Acknowledgment of excellence. Our hard work didn't go unnoticed as we received accolades from industry leaders and peers alike.",
    image: pig
  },
  {
    id: 5,
    title: "5. GLOBAL IMPACT",
    description: "Making a difference worldwide. Today, our solutions touch millions of lives across the globe, creating positive change every day.",
    image: pig
  }
];

const TimelineItem = ({ item, isLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -80 : 80 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex items-center w-full mb-20 md:mb-32 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`w-5/12 ${isLeft ? 'text-right pr-6 md:pr-12' : 'text-left pl-6 md:pl-12'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-wide">
            {item.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>

      <div className="w-2/12 flex justify-center relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 200 }}
          className="relative z-10"
        >
          <div className="w-5 h-5 md:w-6 md:h-6 bg-red-600 rounded-full shadow-lg flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      <div className={`w-5/12 ${isLeft ? 'pl-6 md:pl-12' : 'pr-6 md:pr-12'}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <img 
            src={item.image} 
            alt={item.title}
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#1635b7" }} id='roadmap'>
      
      <div className="w-full h-1 bg-gradient-to-r from-red-600 via-purple-500 to-cyan-500" />

      {/* Fireflies unchanged */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* fireflies span elements unchanged */}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex justify-center pt-20 pb-16 px-4"
      >
        <h1 className="w-1/2 text-center text-5xl md:text-7xl font-bold text-white border-b-4 border-red-600 pb-4">
          TIMELINE
        </h1>
      </motion.div>

      <div ref={containerRef} className="relative max-w-6xl mx-auto px-4">
        
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 h-full">
          <div className="absolute inset-0 bg-white/10 rounded-full" />
          <motion.div 
            className="absolute top-0 left-0 w-full bg-red-600 rounded-full origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-white/10">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-red-600 origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="relative pb-20">
          {timelineData.map((item, index) => (
            <div key={item.id}>
              <div className="hidden md:block">
                <TimelineItem 
                  item={item} 
                  isLeft={index % 2 === 0} 
                />
              </div>
              
              <motion.div 
                className="md:hidden flex items-start mb-16 pl-16 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute left-8 top-2 w-4 h-4 bg-red-600 rounded-full transform -translate-x-1.5" />
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-24 h-24 object-contain mb-3"
                  />
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>


      {/* ✅ ADDED timeline.svg at bottom */}
      <div className="relative w-full">
        <img
          src={timelineSvg}
          alt="Timeline Decoration"
          className="w-screen max-w-none object-cover block"
        />
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-600" />


    </div>
    
  );
};

export default Timeline;
