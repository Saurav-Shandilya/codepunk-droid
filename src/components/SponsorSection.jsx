import { motion } from "framer-motion"

const sponsorLogos = {
  mastra: new URL("../assets/sponsers/Mastra.png", import.meta.url).href,
  n8n: new URL("../assets/sponsers/n8n.png", import.meta.url).href,
  codeCrafters: new URL(
    "../assets/sponsers/CodeCrafters.io full logo (Dark text).png",
    import.meta.url
  ).href,
  featherless: new URL(
    "../assets/sponsers/featherlessai-transparent.png",
    import.meta.url
  ).href,
  interviewCakes: new URL(
    "../assets/sponsers/InterviewCakes.png",
    import.meta.url
  ).href,
  stockEdge: new URL("../assets/sponsers/StockEdge.png", import.meta.url).href,
  osen: new URL("../assets/sponsers/OSEN.jpg", import.meta.url).href,
  xyz: new URL("../assets/sponsers/xyz.png", import.meta.url).href,

  // ✅ Added correctly
  sandwich: new URL(
    "../assets/sponsers/what-a-sandwich.png",
    import.meta.url
  ).href,
  buddy: new URL(
    "../assets/sponsers/interviewbuddy.png",
    import.meta.url
  ).href,
}

const sponsors = [
  { name: "Mastra", logo: sponsorLogos.mastra },
  { name: "n8n", logo: sponsorLogos.n8n },
  { name: "CodeCrafters", logo: sponsorLogos.codeCrafters },
  { name: "StockEdge", logo: sponsorLogos.stockEdge },
  { name: "Featherless AI", logo: sponsorLogos.featherless },
  { name: "Interview Cakes", logo: sponsorLogos.interviewCakes },
  { name: "OSEN", logo: sponsorLogos.osen },
  { name: "XYZ", logo: sponsorLogos.xyz },

  // ✅ Added in list
  { name: "What A Sandwich", logo: sponsorLogos.sandwich },
  { name: "Interview Buddy", logo: sponsorLogos.buddy },
]

const carouselLogos = [...sponsors, ...sponsors, ...sponsors]

const float = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const SponsorSection = () => {
  return (
    <section className="relative bg-black py-24 md:py-32 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,51,102,0.09),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(120,0,32,0.14),transparent_55%)]" />

      <div className="relative w-full mx-auto px-0">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            style={{
              textShadow: `3px 3px 0px #FF3366, 6px 6px 0px #FF5E3A, 9px 9px 0px #FFB347`,
              WebkitTextStroke: "1px black",
            }}
          >
            Our Sponsors
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Partners who power this event and help us build for the future.
          </p>

          <div className="w-16 h-[3px] bg-red-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-black via-black/70 to-transparent" />

          <motion.div
            className="flex w-max gap-6 sm:gap-8 md:gap-10 py-6"
            animate={{ x: ["0%", "-66.666%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {carouselLogos.map((sponsor, index) => (
              <motion.div
                key={`${sponsor.name}-${index}`}
                variants={float}
                animate="animate"
                transition={{ delay: (index % sponsors.length) * 0.08 }}
                className="group relative flex min-w-[200px] sm:min-w-[220px] max-w-[260px] flex-none items-center justify-center transition hover:-translate-y-1 bg-white rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg shadow-red-500/10"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  loading="lazy"
                  className="relative mx-auto h-12 sm:h-14 md:h-16 w-full object-contain rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SponsorSection
