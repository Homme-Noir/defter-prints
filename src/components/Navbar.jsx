import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../content/copy'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 py-4 shadow-lg backdrop-blur-md' : 'bg-transparent py-6'
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-heading text-2xl tracking-wide text-white">
          {brand.name}
          <span className="text-gold">.</span>
        </a>

        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-amber-500"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className="text-white transition-colors hover:text-gold md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full w-full border-t border-slate-800 bg-navy shadow-xl md:hidden"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 transition-colors hover:text-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 rounded-sm bg-gold px-5 py-3 text-center font-semibold text-navy"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request a Quote
              </a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
