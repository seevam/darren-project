'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Check } from 'lucide-react'

export default function LearningJourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const levels = [
    {
      level: 'LEVEL 1',
      title: 'BUILD - Water Literacy',
      duration: '2-3 hours',
      description: 'Complete a 45-question quiz covering pollution types, sources, and ecosystem impacts. Pass with 80% to earn your first certificate.',
      features: [
        '15 questions on pollution types',
        '15 questions on sources & pathways',
        '15 questions on ecosystem impacts',
        'Instant feedback & explanations',
      ],
      certificate: 'Water Pollution Awareness Certificate',
      badgeColor: 'from-cyan-400 to-blue-500',
      titleColor: 'text-cyan-400',
    },
    {
      level: 'LEVEL 2',
      title: 'MOTIVATE - Practical Skills',
      duration: '4-6 hours',
      description: 'Complete three modules with hands-on activities: water testing, community awareness, and solution design.',
      features: [
        'Module A: Water Testing & Monitoring',
        'Module B: Community Awareness Sessions',
        'Module C: Solution Design & Planning',
      ],
      certificate: 'Water Guardian Action Leader Certificate',
      badgeColor: 'from-blue-500 to-blue-600',
      titleColor: 'text-blue-500',
    },
    {
      level: 'LEVEL 3',
      title: 'ACHIEVE - Community Action',
      duration: '8-12 weeks',
      description: 'Lead a real-world project: organize cleanups, build treatment systems, conduct monitoring, or advocate for policy change.',
      features: [
        'Cleanup campaigns (50kg+ waste)',
        'Treatment systems (STP, filters)',
        'Water monitoring programs',
        'Policy advocacy initiatives',
      ],
      certificate: 'Water Guardian Project Leader Certificate',
      badgeColor: 'from-sky-400 to-cyan-500',
      titleColor: 'text-sky-400',
    },
    {
      level: 'LEVEL 4',
      title: 'DEMONSTRATE - Leadership',
      duration: 'Ongoing',
      description: 'Become an ambassador by mentoring others, replicating projects, and creating content to inspire the next generation of water guardians.',
      features: [
        'Mentor 2+ new participants',
        'Replicate your project',
        'Present at events',
        'Create educational content',
      ],
      certificate: 'Water Guardian Ambassador Certificate',
      badgeColor: 'from-purple-500 to-pink-500',
      titleColor: 'text-purple-500',
    },
  ]

  return (
    <section id="activities" ref={ref} className="relative py-24 px-6 lg:px-12 ocean-gradient">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-black font-display mb-6">
            Your Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-slate-300">
            Progress through four levels, from awareness to leadership
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-cyan-primary/30 hidden lg:block" />

          {/* Level Cards */}
          <div className="space-y-12">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 top-8 w-5 h-5 rounded-full border-4 border-cyan-primary bg-slate-900 transform -translate-x-1/2 hidden lg:block" />

                {/* Card */}
                <div className="lg:ml-24 bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-cyan-primary/50 transition-all duration-300">
                  {/* Badge */}
                  <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${level.badgeColor} text-white text-sm font-bold mb-4`}>
                    {level.level}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black font-display mb-3">
                    <span className={level.titleColor}>
                      {level.title.split(' - ')[0]}
                    </span>
                    {' '}- {level.title.split(' - ')[1]}
                  </h3>

                  {/* Duration */}
                  <p className="text-sm text-slate-400 mb-4">
                    Duration: {level.duration}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {level.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-slate-300">
                        <Check className="w-5 h-5 text-cyan-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Certificate Badge */}
                  <div className="flex items-center gap-3 bg-cyan-primary/20 border border-cyan-primary rounded-xl p-4">
                    <Award className="w-6 h-6 text-cyan-primary flex-shrink-0" />
                    <span className="text-sm font-semibold">{level.certificate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
