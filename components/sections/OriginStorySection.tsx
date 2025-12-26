'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OriginStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const focusAreas = [
    'Industrial waste & chemical pollution',
    'Sewage & untreated wastewater',
    'Plastic & solid waste in water bodies',
    'Agricultural runoff & fertilizers',
    'Oil spills & marine contamination',
  ]

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 lg:px-12">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="ocean-gradient bg-cyan-primary/10 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-black font-display mb-6">
                How It <span className="gradient-text">Started</span>
              </h2>

              <motion.p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Water Guardians began with a simple but powerful idea: what if youth could create real solutions to water pollution in their communities?
              </motion.p>

              <motion.p
                className="text-lg text-slate-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                It started with a sewage treatment plant project led by passionate young people who saw the direct impact of untreated water on their local environment. Rather than just raising awareness, they decided to build something tangible.
              </motion.p>

              <motion.p
                className="text-lg text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Today, we&apos;re scaling that vision - empowering youth worldwide to not only understand water pollution but to take concrete action against it, from testing water quality to implementing innovative treatment solutions.
              </motion.p>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Focus Areas Card */}
              <motion.div
                className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-cyan-primary mb-4">
                  Our Focus Areas
                </h3>
                <ul className="space-y-3">
                  {focusAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <span className="w-2 h-2 mt-2 rounded-full bg-cyan-primary flex-shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Why Youth Card */}
              <motion.div
                className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-blue-500 mb-4">
                  Why Youth?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Young people bring fresh perspectives, technological skills, and the determination to create lasting change. The water crisis affects our generation most - we&apos;re the ones who will inherit these water bodies.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Photo Gallery Section */}
          <motion.div
            className="mt-12 pt-12 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-3xl lg:text-4xl font-black font-display mb-3 text-center">
              Youth <span className="gradient-text">in Action</span>
            </h3>
            <p className="text-center text-slate-300 mb-8 max-w-2xl mx-auto">
              Indonesian high school students leading the charge in river cleaning initiatives
            </p>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl aspect-square bg-slate-800/60 border border-white/10 hover:border-cyan-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <img
                    src={`/images/students/river-cleaning-${index}.jpg`}
                    alt={`Indonesian students cleaning river - Photo ${index}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold text-white">Community Action</p>
                    <p className="text-xs text-slate-300">Making rivers clean again</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-slate-400 text-sm italic">
                Join these passionate youth leaders in protecting our water resources
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
