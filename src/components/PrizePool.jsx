import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import pig from "../assets/pig.svg";
import light from "../assets/light.avif";
import prizepoolImage from "../assets/prizepool.svg";

const PrizePool = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  const particles = useMemo(() =>
    Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 2 + Math.random() * 2,
    }))
  , []);

  const unifiedDesc = "Breakdown reveals on event day. Prizes align with the $21,000+ pool.";

  const prizes = [
    {
      id: 1,
      label: "1st Prize",
      amount: "TBA",
      desc: unifiedDesc,
      color: "#FFD700",
    },
    {
      id: 2,
      label: "2nd Prize",
      amount: "TBA",
      desc: unifiedDesc,
      color: "#C0C0C0",
    },
    {
      id: 3,
      label: "3rd Prize",
      amount: "TBA",
      desc: unifiedDesc,
      color: "#CD7F32",
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-black overflow-hidden" id="prizepool">
      
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-16">
        <motion.div 
          className="text-center mb-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8"
            style={{
              textShadow: `
                4px 4px 0px #FF3366,
                8px 8px 0px #00D9FF,
                12px 12px 0px #9D4EDD
              `,
              WebkitTextStroke: '2px #000'
            }}
          >
            PRIZE POOL
          </h2>

          {/* HIGHLIGHTED PRIZE POOL AMOUNT */}
          <motion.div 
            className="relative inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            {/* Glow Effect Behind */}
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Main Container */}
            <div className="relative bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 border-4 border-black p-2 rounded-2xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-black border-2 border-dashed border-yellow-400 rounded-xl px-8 py-4 md:px-12 md:py-6 relative overflow-hidden">
                
                {/* Animated Shine Effect */}
                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-shine" />
                
                <div className="flex flex-col items-center">
                  <span className="text-yellow-400 font-black text-sm md:text-base uppercase tracking-[0.2em] mb-1">
                    Total Pool
                  </span>
                  <span className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter glitch-text">
                    $21,000+
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-red-500 text-white font-bold text-xs md:text-sm py-1 px-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-12"
            >
              HUGE!
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 bg-blue-500 text-white font-bold text-xs md:text-sm py-1 px-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-6"
            >
              PRIZE
            </motion.div>
          </motion.div>

          <p className="text-base sm:text-lg text-white/80 font-semibold mt-8 max-w-2xl mx-auto">
            Individual prizes TBA — final breakdown unveiled at the event.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10 mb-10 justify-items-center">
            {prizes.map((prize, index) => (
              <PrizeCard key={prize.id} prize={prize} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <img
          src={prizepoolImage}
          alt="Prize Pool Bottom"
          className="w-full max-w-none object-cover block"
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0); 
            opacity: 0; 
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { 
            transform: translateY(-100vh); 
            opacity: 0; 
          }
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #fff 0%, transparent 70%);
          box-shadow: 0 0 6px #fff;
          animation: float linear infinite;
        }
        
        /* Glitch Text Effect */
        .glitch-text {
          position: relative;
          text-shadow: 
            0.05em 0 0 rgba(255,0,0,0.75),
            -0.025em -0.05em 0 rgba(0,255,0,0.75),
            0.025em 0.05em 0 rgba(0,0,255,0.75);
          animation: glitch 500ms infinite;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: '$21,000+';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
        }
        
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(12px, 9999px, 32px, 0); }
          20% { clip: rect(64px, 9999px, 12px, 0); }
          40% { clip: rect(29px, 9999px, 82px, 0); }
          60% { clip: rect(89px, 9999px, 12px, 0); }
          80% { clip: rect(2px, 9999px, 62px, 0); }
          100% { clip: rect(45px, 9999px, 22px, 0); }
        }
        
        @keyframes glitch-anim2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          20% { clip: rect(2px, 9999px, 32px, 0); }
          40% { clip: rect(92px, 9999px, 12px, 0); }
          60% { clip: rect(12px, 9999px, 52px, 0); }
          80% { clip: rect(42px, 9999px, 92px, 0); }
          100% { clip: rect(15px, 9999px, 62px, 0); }
        }

        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  );
};

const PrizeCard = ({ prize, index, isInView }) => {
  return (
    <motion.div 
      className="relative w-full max-w-[380px] sm:max-w-[420px]"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div 
        className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-5 py-2 text-black font-bold text-sm border-2 border-white"
        style={{
          backgroundColor: prize.color,
          boxShadow: "4px 4px 0px #000",
        }}
      >
        {prize.label}
      </div>

      <div 
        className="relative rounded-2xl overflow-hidden border-4 border-white flex flex-col h-full"
        style={{
          background: "linear-gradient(to bottom, #dc2626 0%, #991b1b 50%, #7f1d1d 100%)",
          boxShadow: "8px 8px 0px rgba(0,0,0,0.5)",
        }}
      >
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.2) 60%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.2) 60%, transparent 60%)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        <div className="relative z-10">
          <div
            className="text-center text-4xl sm:text-5xl font-extrabold mt-8 mb-6 text-white"
            style={{
              WebkitTextStroke: "2px #000",
              textShadow: "4px 4px 0px #000",
            }}
          >
            {prize.amount}
          </div>

          <div className="relative flex justify-center items-center h-40 mb-6">
            <img
              src={light}
              alt="Light"
              className="absolute w-40 sm:w-48 animate-spin-slow opacity-90"
            />
            <img
              src={pig}
              alt="Prize"
              className="relative w-24 sm:w-28 z-10 drop-shadow-lg"
            />
          </div>

          <div
            className="py-5 px-5 text-center text-white font-bold text-sm border-t-4 border-white min-h-[120px] sm:min-h-[132px] flex items-center justify-center"
            style={{
              background: "linear-gradient(to bottom, #4B1C86, #2B0F54)",
            }}
          >
            <span>{prize.desc}</span>
          </div>
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default PrizePool;
