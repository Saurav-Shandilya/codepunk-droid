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

  const prizes = [
    {
      id: 1,
      label: "1st Prize",
      amount: "TBA",
      desc: "Grand champion award with premium goodies, cash prize and internship opportunities.",
      color: "#FFD700",
    },
    {
      id: 2,
      label: "2nd Prize",
      amount: "TBA",
      desc: "Outstanding innovation award with sponsor rewards and industry mentorship.",
      color: "#C0C0C0",
    },
    {
      id: 3,
      label: "3rd Prize",
      amount: "TBA",
      desc: "Creative excellence prize with project funding and exclusive merchandise.",
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
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white"
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
          <p 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4"
            style={{
              textShadow: '3px 3px 0px #000',
              WebkitTextStroke: '1px #000'
            }}
          >
            TO BE ANNOUNCED
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
