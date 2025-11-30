import { Waves } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
    { label: 'Contact', href: '#contact' },
    { label: 'Partners', href: '#partners' },
  ]

  return (
    <footer className="bg-slate-900/50 border-t border-white/10 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Waves className="w-8 h-8 text-cyan-primary" />
            <span className="text-xl font-display font-bold">
              Water <span className="gradient-text">Guardians</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 hover:text-cyan-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-400 text-center lg:text-right">
            © 2024 Water Guardians. Protecting our water bodies together.
          </div>
        </div>
      </div>
    </footer>
  )
}
