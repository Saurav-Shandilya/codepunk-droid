import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
// import hang from "../assets/hang.png"

const faqs = [
  {
    question: "Who can participate in CodePunk 2.0?",
    answer:
      "CodePunk 2.0 is open to all university students passionate about innovation, coding, and creative problem solving.",
  },
  {
    question: "Is it an online or offline event?",
    answer:
      "The final round of the hackathon will be conducted in campus - offline mode.",
  },
  {
    question: "What is the duration of the hackathon?",
    answer:
      "The event runs for 24 hours straight, filled with coding, mentoring, and networking.",
  },
  {
    question: "Do I need a team to participate?",
    answer:
      "You can register 2-4 members as a team.",
  },
]

const FAQSection = () => {
  const [active, setActive] = useState([])

  const toggleFAQ = (index) => {
    if (active.includes(index)) {
      setActive(active.filter((item) => item !== index))
    } else {
      setActive([...active, index])
    }
  }

  return (
    <section className= "text-white py-32 relative bg-black overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-[2px] bg-red-600 mx-auto mt-5" />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = active.includes(index)

            return (
              <motion.div
                key={index}
                layout
                transition={{
                  layout: {
                    duration: 0.8, // Slower layout shift
                    type: "spring",
                    stiffness: 60,
                    damping: 18,
                  },
                }}
                className={`rounded-2xl bg-[#0d0d0d] border transition-all duration-500 ${
                  isOpen
                    ? "border-red-600 shadow-lg shadow-red-600/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-7 py-6 text-left group"
                >
                  <span className="text-lg font-medium tracking-wide group-hover:text-white/90 transition-colors">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                      duration: 0.6, // Slower rotation
                      ease: "easeInOut",
                    }}
                    className="text-white/60"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.6, // Slower open/close
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 text-gray-400 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
