import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const Tracks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });
  const [activeTrack, setActiveTrack] = useState("software");

  return (
    <section
      id="tracks"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#0a0a0a] py-24 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-blue-500 to-yellow-400" />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter"
            style={{
              textShadow: `
                4px 4px 0px #FF3366,
                8px 8px 0px #00D9FF,
                12px 12px 0px #FFE600
              `,
              WebkitTextStroke: "2px #000",
            }}
          >
            TRACKS
          </h2>
          <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Participants can choose between two primary tracks, both operating under an Open Innovation framework.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex bg-[#1a1a1a] p-2 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16"
        >
          {/* Sliding Background Pill */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`absolute top-2 bottom-2 w-[calc(50%-8px)] rounded-lg border-2 border-black ${
              activeTrack === "software" ? "bg-[#00D9FF] left-2" : "bg-[#FF3366] left-[calc(50%+4px)]"
            }`}
          />

          {/* Buttons */}
          <button
            onClick={() => setActiveTrack("software")}
            className={`relative z-10 w-40 md:w-56 py-3 text-lg md:text-xl font-black uppercase tracking-wide transition-colors duration-200 ${
              activeTrack === "software" ? "text-black" : "text-gray-500"
            }`}
          >
            Software
          </button>
          <button
            onClick={() => setActiveTrack("hardware")}
            className={`relative z-10 w-40 md:w-56 py-3 text-lg md:text-xl font-black uppercase tracking-wide transition-colors duration-200 ${
              activeTrack === "hardware" ? "text-black" : "text-gray-500"
            }`}
          >
            Hardware
          </button>
        </motion.div>

        {/* Content Display Area */}
        <div className="w-full max-w-4xl min-h-[300px] relative">
          <AnimatePresence mode="wait">
            {activeTrack === "software" ? (
              <TrackContent
                key="software"
                color="#00D9FF"
                title="Software Track"
                description="Focus on intelligent agents, scalable backends, system utilities, or complex web/mobile architectures."
                icon={
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                }
              />
            ) : (
              <TrackContent
                key="hardware"
                color="#FF3366"
                title="Hardware Track"
                description="Focus on robotics, IoT, embedded systems, or custom automation rigs."
                icon={
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                }
              />
            )}
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-6 bg-[#FFE600] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-3xl w-full transform rotate-1 hover:rotate-0 transition-transform duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="bg-black text-[#FFE600] font-black px-3 py-1 text-sm uppercase shrink-0">
              Note
            </div>
            <p className="text-black font-bold text-lg leading-tight">
              Cross-track projects (Hardware + Software) are welcome and should be registered under the track that represents the core of the innovation.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Sub-component for the animated content cards
const TrackContent = ({ color, title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, rotate: -2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      exit={{ opacity: 0, x: 20, rotate: 2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-[#111] border-4 border-white p-8 md:p-12 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
      style={{ borderColor: color }}
    >
      {/* Decorative Background Icon */}
      <div className="absolute -right-10 -bottom-10 text-white opacity-5 transform rotate-12 scale-150 pointer-events-none">
        {icon}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Icon Circle */}
        <div 
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          style={{ backgroundColor: color }}
        >
          <div className="text-black">
            {icon}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3 
            className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight"
            style={{ color: color }}
          >
            {title}
          </h3>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-8 bg-white transform rotate-45 translate-x-8 -translate-y-4" style={{ backgroundColor: color }}></div>
      </div>
    </motion.div>
  );
};

export default Tracks;