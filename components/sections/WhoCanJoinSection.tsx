'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Target, Heart } from 'lucide-react'

export default function WhoCanJoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const cards = [
    {
      Icon: Users,
      title: 'All Youth',
      description: 'Girls, boys, gender diverse youth from urban and rural areas',
    },
    {
      Icon: Target,
      title: 'Differently-Abled',
      description: 'Youth with disabilities are welcomed and empowered',
    },
    {
      Icon: Heart,
      title: 'Marginalized Groups',
      description: 'Indigenous and marginalized communities encouraged to participate',
    },
  ]

  return (
    <section id="join" ref={ref} className="relative py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-black font-display mb-6">
            Who Can <span className="gradient-text">Join?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Any youth between 11 to 35 years can join this movement to protect our water bodies. All backgrounds welcome.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="ocean-gradient bg-cyan-primary/10 border border-white/10 rounded-3xl p-8 backdrop-blur-custom hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <card.Icon className="w-16 h-16 text-cyan-primary mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">
                {card.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
