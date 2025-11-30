import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Water Guardians - Youth-Led Water Pollution Action',
  description: 'Join a global movement of young people tackling water pollution through education, community action, and innovative solutions. Complete quizzes, lead projects, earn certificates.',
  keywords: 'water pollution, youth environmental action, sewage treatment, water quality testing, environmental education, sustainability, community projects, water conservation, youth leadership',
  openGraph: {
    title: 'Water Guardians - Empowering Youth to Protect Our Waters',
    description: 'A gamified platform where young people learn about water pollution, take community action, and earn certificates for making real impact.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Guardians - Empowering Youth to Protect Our Waters',
    description: '🌊 Join Water Guardians: Learn about water pollution → Take action in your community → Earn certificates → Lead change. Youth ages 11-35 welcome!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
