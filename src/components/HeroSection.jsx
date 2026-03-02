import { useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, Download } from "lucide-react"
import spiderman from "../assets/spidy.png"
import codepunkLogo from "../assets/codepunk.png"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const registrationUrl = "https://forms.gle/LjuVyHDqrCkzhMYB6 "

const HeroSection = ({ onNav }) => {
  const spiderRef = useRef(null)

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-black overflow-hidden text-white flex items-center justify-center py-20 lg:py-0"
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,0,0,0.25), transparent 40%)",
        }}
      />

      {/* MAIN GRID - Responsive: Stack on mobile, 3-col on desktop */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center"
      >
        {/* LEFT CONTENT - Order 2 on mobile, Order 1 on desktop */}
        <motion.div
          variants={fadeRight}
          className="z-20 space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left w-full"
        >
          <motion.h3
            variants={fadeUp}
            className="text-red-500 tracking-[0.3em] uppercase text-xs sm:text-sm"
          >
            Ultimate Experience
          </motion.h3>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.9]"
          >
            CodePunk
            <span className="block text-red-600">2.0</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 max-w-sm mx-auto lg:mx-0 text-sm sm:text-base px-4 lg:px-0"
          >
            Where deep thinking meets bold innovation.
            Break the algorithm. Bend reality.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full"
          >
            {/* Register Button - Full width on mobile, auto on desktop */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-red-600/40 text-sm sm:text-base w-full sm:w-auto"
            >
              <Sparkles size={18} />
              Register
            </motion.a>

            {/* Brochure Button - Full width on mobile, auto on desktop */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1auZYVkSF_BAH-pyx7nKeFZuhKTDMg8cM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-500 px-6 py-3 rounded-full hover:bg-red-600/20 transition flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
            >
              <Download size={18} />
              Brochure
            </motion.a>
          </motion.div>
        </motion.div>

        {/* CENTER LOGO + SPIDER STACK - Order 1 on mobile, Order 2 on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="relative flex items-center justify-center z-10 order-1 lg:order-2 py-8 lg:py-0 w-full"
        >
          <div className="relative flex items-center justify-center w-full">
            {/* Logo - Responsive sizing */}
            <img
              src={codepunkLogo}
              alt="CodePunk 2.0"
              className="absolute -top-8 sm:-top-12 md:-top-16 lg:-top-20 w-[280px] sm:w-[380px] md:w-[450px] lg:w-[520px] xl:w-[600px] max-w-[85vw] drop-shadow-[0_12px_35px_rgba(255,0,0,0.35)] pointer-events-none select-none z-0"
            />

            {/* Spider-Man - Responsive sizing */}
            <img
              ref={spiderRef}
              src={spiderman}
              alt="Spider-Man"
              className="relative h-[300px] w-[220px] sm:h-[380px] sm:w-[280px] md:h-[450px] md:w-[320px] lg:h-[500px] lg:w-[360px] xl:h-[560px] xl:w-[400px] max-w-full pointer-events-none select-none z-10"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT - Order 3 on all devices */}
        <motion.div
          variants={fadeLeft}
          className="z-20 space-y-4 sm:space-y-6 order-3 text-center lg:text-right w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-gray-400 uppercase tracking-widest text-xs sm:text-sm"
          >
            Protocol: CodePunk_2.0
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 max-w-sm mx-auto lg:ml-auto lg:mr-0 text-sm sm:text-base px-4 lg:px-0"
          >
            Enter the Spider-Tech era.
            A cinematic hackathon experience powered by bold ideas.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="inline-block bg-red-600/20 border border-red-500/50 px-4 py-2 rounded-lg"
          >
            <p className="text-red-500 font-bold text-sm sm:text-base">
              24H • On-Campus + Hybrid
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden"
      >
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-red-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection