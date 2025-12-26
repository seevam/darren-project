'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, User, MapPin, GraduationCap, Phone } from 'lucide-react'

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

export default function RegistrationModal({
  isOpen,
  onClose,
  title = 'Join Water Guardians',
  description = 'Register to become part of the youth movement protecting our waters',
}: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    school: '',
    interest: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        school: '',
        interest: '',
      })
      onClose()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-slate-300" />
              </button>

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-black font-display mb-3">
                  {title}
                </h2>
                <p className="text-slate-300">{description}</p>
              </div>

              {submitSuccess ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-primary to-blue-500 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Registration Successful!
                  </h3>
                  <p className="text-slate-300">
                    Welcome to Water Guardians. We&apos;ll be in touch soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-primary transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-primary transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-primary transition-colors"
                        placeholder="+62 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Location (City, Country) *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-primary transition-colors"
                        placeholder="e.g., Jakarta, Indonesia"
                      />
                    </div>
                  </div>

                  {/* School/Institution */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      School/Institution *
                    </label>
                    <div className="relative">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-primary transition-colors"
                        placeholder="Your school or institution"
                      />
                    </div>
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Area of Interest *
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-primary transition-colors"
                    >
                      <option value="">Select your area of interest</option>
                      <option value="water-testing">Water Quality Testing</option>
                      <option value="river-cleaning">River Cleaning Projects</option>
                      <option value="sewage-treatment">Sewage Treatment Solutions</option>
                      <option value="awareness">Awareness & Education</option>
                      <option value="policy">Policy & Advocacy</option>
                      <option value="tech-solutions">Tech Solutions for Water</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-cyan-blue px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-cyan-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Complete Registration'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
