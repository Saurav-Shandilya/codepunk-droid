import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Sparkles, X } from 'lucide-react'
import logo from '../assets/spiderman-logo.jpeg'

const navLinks = [
  { label: 'Prize Pool', href: '#prizepool' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#cta' },
]

const registrationUrl = 'https://forms.gle/LjuVyHDqrCkzhMYB6'

const NavBar = ({ onNav }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-4 z-50 mb-10"
    >
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-900/70 px-5 py-3 backdrop-blur-md shadow-lg shadow-red-500/10 max-w-[380px] md:max-w-[1280px] mx-auto transition-colors duration-300 hover:border-red-500">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            onNav && onNav('#hero')
          }}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-500 text-white shadow-inner shadow-red-800/50">
            <img src={logo} alt="Spider-Man Logo" className="h-8 w-8 rounded-full" />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.25em] text-red-200">CodePunk 2.0</p>
            <p className="font-semibold text-slate-50">Spider-Verse</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-100 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                onNav && onNav(link.href)
              }}
              className="group relative px-2 py-1 transition hover:text-red-200"
            >
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-red-500 via-red-300 to-blue-400 transition-transform duration-300 group-hover:scale-x-100" />
              {link.label}
            </a>
          ))}
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-red-400 hover:border-blue-400 transition-all "
          >
            <Sparkles className="h-4 w-4" />
            Register Me
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/10 p-2 text-slate-100 transition hover:border-red-500 hover:text-red-200 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-24 z-50 rounded-2xl border border-white/10 bg-slate-900/95 p-4 backdrop-blur-xl shadow-2xl shadow-red-500/20 md:hidden max-h-[70vh] max-w-[360px] mx-auto overflow-y-auto"
          >
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    onNav && onNav(link.href)
                    setOpen(false)
                  }}
                  className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-red-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl "
              >
                <Sparkles className="h-4 w-4" />
                Register Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default NavBar
