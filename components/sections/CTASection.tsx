'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import RegistrationModal from '../modals/RegistrationModal'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalConfig, setModalConfig] = useState({
    title: 'Join Water Guardians',
    description: 'Register to become part of the youth movement protecting our waters',
  })

  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="ocean-gradient bg-cyan-primary/10 border border-white/10 rounded-3xl p-12 lg:p-16 backdrop-blur-custom text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black font-display mb-6">
            Ready to Make a <span className="gradient-text">Difference?</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join young leaders worldwide in protecting our water bodies from all forms of pollution. Your action creates ripples of change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setModalConfig({
                  title: 'Register Now',
                  description: 'Join the movement and start making a difference today',
                })
                setIsModalOpen(true)
              }}
              className="gradient-cyan-blue px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-cyan-glow transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Register Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <button
              onClick={() => {
                setModalConfig({
                  title: 'Explore Our Projects',
                  description: 'Get involved with ongoing water conservation initiatives',
                })
                setIsModalOpen(true)
              }}
              className="border-2 border-white/30 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300"
            >
              Explore Projects
            </button>
          </div>
        </motion.div>
      </div>

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
