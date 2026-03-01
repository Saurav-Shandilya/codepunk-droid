import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import timelineImage from "../assets/counter-image.svg";

const TimeCounter = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  /* Minimal particles */
  const particles = useMemo(() =>
    Array.from({ length: 10 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 2 + Math.random() * 2,
    }))
  , []);

  /* ✅ UPDATED COUNTDOWN LOGIC */
  const calculateTimeLeft = () => {
    const now = new Date();

    // March = month index 2 (0-based index)
    let targetDate = new Date(
      now.getFullYear(),
      2,
      24,
      10,
      30,
      0
    );

    // If this year's March 24 has already passed, use next year
    if (now > targetDate) {
      targetDate = new Date(
        now.getFullYear() + 1,
        2,
        24,
        10,
        30,
        0
      );
    }

    const diff = targetDate - now;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft?.days || 0 },
    { label: "HOURS", value: timeLeft?.hours || 0 },
    { label: "MINUTES", value: timeLeft?.minutes || 0 },
    { label: "SECONDS", value: timeLeft?.seconds || 0 },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-black text-white overflow-hidden z-10"
    >
      <div className="w-full h-1 bg-gradient-to-r from-red-600 via-purple-500 to-cyan-500" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={timelineImage}
          alt="Time Counter Banner"
          className="w-full h-auto min-h-[200px] max-h-[300px] sm:min-h-[250px] sm:max-h-[400px] md:min-h-[300px] md:max-h-[500px] lg:max-h-[600px] object-cover object-center block"
          style={{ 
            border: 'none',
            outline: 'none',
            display: 'block'
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white"
            style={{
              textShadow: `
                3px 3px 0px #FF3366,
                6px 6px 0px #00D9FF
              `,
              WebkitTextStroke: '2px #000'
            }}
          >
            HACK STARTS IN
          </h2>
        </motion.div>

        <motion.div
          className="relative w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className="py-6 sm:py-8 md:py-10 px-4 rounded-xl border-4 border-black"
            style={{
              backgroundColor: "#dc2626",
              backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
              boxShadow: "6px 6px 0px #000",
            }}
          >
            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6">
              {timeUnits.map((unit, index) => (
                <React.Fragment key={unit.label}>
                  <div className="flex flex-col items-center min-w-[50px] sm:min-w-[70px] md:min-w-[90px]">
                    <div 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white"
                      style={{
                        textShadow: "3px 3px 0px #000",
                        WebkitTextStroke: '2px #000'
                      }}
                    >
                      {String(unit.value).padStart(2, "0")}
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white mt-2 tracking-widest uppercase">
                      {unit.label}
                    </span>
                  </div>
                  
                  {index < 3 && (
                    <span 
                      className="text-2xl sm:text-3xl md:text-4xl font-black text-white"
                      style={{ textShadow: '2px 2px 0px #000' }}
                    >
                      :
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0); 
            opacity: 0; 
          }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { 
            transform: translateY(-100vh); 
            opacity: 0; 
          }
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #fff 0%, transparent 70%);
          box-shadow: 0 0 4px #fff;
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TimeCounter;