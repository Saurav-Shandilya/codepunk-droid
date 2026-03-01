import { Github, Instagram, Linkedin, Globe } from "lucide-react"

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/droid-glau/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/droid_glau/" },
  { icon: Globe, label: "Website", href: "https://droidclub.in" },
]

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Left Content */}
          <div className="text-center md:text-left space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-red-400">
              CodePunk 2.0
            </p>
            <p className="text-slate-200 text-sm sm:text-base">
              Friendly Neighborhood Hackathon • Swing, Ship, Save the city.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {socials.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full 
                  border border-white/10 px-4 py-2 text-sm text-slate-100 
                  transition-all duration-300 
                  hover:border-red-500 hover:text-red-400 
                  hover:shadow-lg hover:shadow-red-500/20"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

                  {/* Hide label on very small screens */}
                  <span className="hidden sm:inline">
                    {item.label}
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            "No matter how buried it gets, or how lost you feel, you must promise me that you will hold on to hope."
          </p>
          <p className="mt-2 text-red-400 text-xs tracking-wide">
            – Peter Parker
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
