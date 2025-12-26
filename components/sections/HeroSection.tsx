'use client'

import { ChevronRight, Droplets, Globe, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import RegistrationModal from '../modals/RegistrationModal'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalConfig, setModalConfig] = useState({
    title: 'Join Water Guardians',
    description: 'Register to become part of the youth movement protecting our waters',
  })
  const stats = [
    { number: '100+', label: 'Youth Engaged', color: '#06B6D4' },
    { number: '5+', label: 'Communities', color: '#3B82F6' },
    { number: '15+', label: 'Active Projects', color: '#0EA5E9' },
    { number: '50+', label: 'Water Sites Tested', color: '#14B8A6' },
  ]

  const floatingIcons = [
    { Icon: Droplets, delay: 0 },
    { Icon: Globe, delay: 0.2 },
    { Icon: Heart, delay: 0.4 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 lg:px-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/river-cleaning-poster.jpg"
        >
          <source src="/videos/river-cleaning.mp4" type="video/mp4" />
          <source src="/videos/river-cleaning.webm" type="video/webm" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/85" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-primary opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-sky-500 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black font-display leading-tight mb-6">
              A Youth Movement to{' '}
              <span className="gradient-text">Protect Our Waters</span>
            </h1>

            <motion.p
              className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering young people to tackle water pollution through awareness, community action, and innovative solutions like sewage treatment initiatives.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button
                onClick={() => {
                  setModalConfig({
                    title: 'Join the Challenge',
                    description: 'Take the first step in your water guardianship journey',
                  })
                  setIsModalOpen(true)
                }}
                className="gradient-cyan-blue px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-cyan-glow transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Join the Challenge
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <button
                onClick={() => {
                  setModalConfig({
                    title: 'Learn More About Water Guardians',
                    description: 'Discover how you can make a difference in protecting our waters',
                  })
                  setIsModalOpen(true)
                }}
                className="border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </button>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {floatingIcons.map(({ Icon, delay }, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: delay,
                  }}
                >
                  <Icon className="w-12 h-12 text-cyan-primary opacity-60" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:scale-105 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div
                  className="text-4xl font-black font-display mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Pattern Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none" />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalConfig.title}
        description={modalConfig.description}
      />
    </section>
  )
}
