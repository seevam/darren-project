'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const steps = [
    {
      number: '01',
      title: 'Learn & Register',
      description: 'Register on the platform, complete interactive quizzes about water pollution types, and learn about different sources of contamination',
    },
    {
      number: '02',
      title: 'Survey & Document',
      description: 'Conduct water quality surveys in your community, document pollution sources, and raise awareness through presentations',
    },
    {
      number: '03',
      title: 'Take Action',
      description: 'Identify water pollution problems and implement solutions - from organizing cleanups to creating innovative treatment systems',
    },
    {
      number: '04',
      title: 'Share & Inspire',
      description: 'Document your activities, earn certificates, and share your impact to inspire other youth to join the movement',
    },
  ]

  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-black font-display mb-6">
            How to <span className="gradient-text">Participate</span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Connecting Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2 text-cyan-primary/30">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="4 4"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Step Card */}
              <div className="text-center">
                {/* Number Circle */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-cyan-blue flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-black font-display text-white">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
