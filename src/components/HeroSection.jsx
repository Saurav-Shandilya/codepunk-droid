import { useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, Rocket } from "lucide-react"
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

const registrationUrl = "https://forms.gle/LjuVyHDqrCkzhMYB6"

const HeroSection = ({ onNav }) => {
  const spiderRef = useRef(null)

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black overflow-hidden text-white flex items-center justify-center"
    >

      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,0,0,0.25), transparent 40%)",
        }}
      />

      {/* MAIN GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-7xl mx-auto px-8 grid lg:grid-cols-3 items-center"
      >

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeRight}
          className="z-20 space-y-6"
        >
          <motion.h3
            variants={fadeUp}
            className="text-red-500 tracking-[0.3em] uppercase text-sm"
          >
            Ultimate Experience
          </motion.h3>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-black uppercase leading-[0.9]"
          >
            CodePunk
            <span className="block text-red-600">2.0</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 max-w-sm"
          >
            Where deep thinking meets bold innovation.
            Break the algorithm. Bend reality.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-red-600/40"
            >
              <Sparkles size={18} />
              Register
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => onNav && onNav("#roadmap")}
              className="border border-red-500 px-6 py-3 rounded-full hover:bg-red-600/20 transition flex items-center gap-2"
            >
              <Rocket size={18} />
              Timeline
            </motion.button>
          </motion.div>
        </motion.div>

        {/* CENTER LOGO + SPIDER STACK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="relative flex items-center justify-center z-10 md:z-20"
        >
          <div className="relative flex items-center justify-center ">
            <img
              src={codepunkLogo}
              alt="CodePunk 2.0"
              className="absolute -top-5 sm:-top-14 md:-top-[136px] w-[320px] sm:w-[420px] md:w-[560px] lg:w-[720px] max-w-[88vw] drop-shadow-[0_12px_35px_rgba(255,0,0,0.35)] pointer-events-none select-none z-0"
            />

            <img
              ref={spiderRef}
              src={spiderman}
              alt="Spider-Man"
              className="relative h-[380px] w-[270px] sm:h-[470px] sm:w-[350px] md:h-[560px] md:w-[400px] max-w-full pointer-events-none select-none z-10"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={fadeLeft}
          className="z-20 text-right space-y-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-gray-400 uppercase tracking-widest text-sm"
          >
            Protocol: CodePunk_2.0
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 max-w-sm ml-auto"
          >
            Enter the Spider-Tech era.
            A cinematic hackathon experience powered by bold ideas.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-red-500 font-semibold"
          >
            24H • On-Campus + Hybrid
          </motion.p>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default HeroSection
