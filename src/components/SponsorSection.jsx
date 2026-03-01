import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const SponsorSection = () => {
  return (
    <section
      id="sponsors"
      className="relative bg-black py-28 text-white overflow-hidden mt-16"
    >
      {/* Red Radial Glow Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,0,0,0.15), transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-[64px] font-bold tracking-wide" style={{
              textShadow: `
                4px 4px 0px #FF3366,
                8px 8px 0px #00D9FF,
                12px 12px 0px #FFE600
              `,
              WebkitTextStroke: '2px #000'
            }} >
            Become a Sponsor
          </h2>
          <div className="w-20 h-[3px] bg-red-600 mx-auto mt-4" />
        </motion.div>

        {/* Spider-Man Themed Sponsor Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-black via-[#0a0a0a] to-red-950 
                     border border-red-600/40 
                     rounded-2xl 
                     p-10 md:p-14 
                     shadow-[0_0_40px_rgba(255,0,0,0.25)] 
                     hover:shadow-[0_0_60px_rgba(255,0,0,0.4)]
                     transition duration-500"
        >
          {/* Web Style Top Border */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />

          <div className="text-center space-y-8">
            
            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide text-red-500">
              Want to Sponsor Us?
            </h3>

            <p className="text-gray-300 max-w-xl mx-auto">
              Join hands with us and become part of an innovative, high-impact
              event. Let’s build something amazing together.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-6">

              <a
                href="mailto:droidclub@gla.ac.in"
                className="flex items-center gap-3 bg-black/60 px-6 py-3 rounded-xl border border-red-600/30 hover:border-red-600 transition"
              >
                <Mail className="text-red-500" size={20} />
                <span className="text-gray-200">
                  droidclub@gla.ac.in
                </span>
              </a>

              <a
                href="tel:+917454916178"
                className="flex items-center gap-3 bg-black/60 px-6 py-3 rounded-xl border border-red-600/30 hover:border-red-600 transition"
              >
                <Phone className="text-red-500" size={20} />
                <span className="text-gray-200">
                  +91 7454916178
                </span>
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default SponsorSection
