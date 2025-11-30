'use client'

import { useState } from 'react'
import { Waves, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Stories', href: '#stories' },
    { label: 'Join Us', href: '#join' },
    { label: 'Activities', href: '#activities' },
  ]

  return (
    <nav className="fixed top-0 w-full z-[1000] bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Waves className="w-10 h-10 text-cyan-primary" />
            <span className="text-2xl font-display font-bold">
              Water <span className="gradient-text">Guardians</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-white hover:text-cyan-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <button className="gradient-cyan-blue px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-cyan-glow transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-slate-900/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-cyan-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="gradient-cyan-blue px-8 py-3 rounded-full font-semibold mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
