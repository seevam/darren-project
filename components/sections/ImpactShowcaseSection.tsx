'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function ImpactShowcaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      badge: 'Local Initiative',
      badgeColor: '#FF6B35',
      title: 'Community STP Project',
      description: 'Started with a youth-led sewage treatment plant initiative, this project demonstrates how young people can create real solutions to water pollution in their communities.',
      impact: 'Pilot project',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    },
    {
      badge: 'River Cleanup',
      badgeColor: '#4ECDC4',
      title: 'Testing & Monitoring',
      description: 'Youth groups conduct water quality tests in local rivers and streams, documenting pollution levels and working with authorities to address industrial waste.',
      impact: '50+ sites tested',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    },
    {
      badge: 'School Initiative',
      badgeColor: '#95E1D3',
      title: 'Storm Drain Awareness',
      description: 'Students mark storm drains with "No Dumping - Drains to Ocean" messages and educate neighbors about preventing chemical runoff into water bodies.',
      impact: '200+ drains marked',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop',
    },
    {
      badge: 'Coastal Action',
      badgeColor: '#F38181',
      title: 'Beach & Marine Protection',
      description: 'Young activists organize regular beach cleanups while addressing the root causes of marine pollution including plastics, sewage, and oil contamination.',
      impact: '5 tons removed',
      image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=600&fit=crop',
    },
    {
      badge: 'Urban Waters',
      badgeColor: '#AA96DA',
      title: 'Lake Restoration',
      description: 'Youth teams work on restoring urban lakes by removing algae blooms caused by fertilizer runoff and educating communities about responsible water use.',
      impact: '3 lakes restored',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop',
    },
    {
      badge: 'Policy Advocacy',
      badgeColor: '#FCBAD3',
      title: 'Youth Voice in Action',
      description: 'Young advocates present research on water pollution to local government, successfully pushing for stricter regulations on industrial discharge into rivers.',
      impact: '2 policies changed',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
    },
  ]

  return (
    <section id="stories" ref={ref} className="relative py-24 px-6 lg:px-12 ocean-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-black font-display mb-6">
            Stories of <span className="gradient-text">Change</span>
          </h2>
          <p className="text-xl text-slate-300">
            Discover how young people are protecting water bodies and creating real solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Badge */}
                <div
                  className="inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-3 border"
                  style={{
                    backgroundColor: `${project.badgeColor}20`,
                    borderColor: project.badgeColor,
                    color: project.badgeColor,
                  }}
                >
                  {project.badge}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-bold"
                    style={{ color: project.badgeColor }}
                  >
                    {project.impact}
                  </span>
                  <ChevronRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: project.badgeColor }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
