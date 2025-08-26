'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FLOATING_BADGES } from '@/lib/constants'

// Particle component for background animation
const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-primary/60 rounded-full"
    style={{
      left: `${Math.random() * 100}%`,
    }}
    initial={{ 
      y: '100vh',
      scale: 0,
      opacity: 0
    }}
    animate={{
      y: '-100vh',
      scale: [0, 1, 1.5],
      opacity: [0, 0.8, 0]
    }}
    transition={{
      duration: 15 + Math.random() * 10,
      delay,
      repeat: Infinity,
      ease: 'linear'
    }}
  />
)

// Floating badge component
const FloatingBadge = ({ badge, index }: { badge: typeof FLOATING_BADGES[0], index: number }) => (
  <motion.div
    className={`absolute hidden lg:block ${badge.position}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 1, 
      y: 0,
    }}
    transition={{
      duration: 0.6,
      delay: 1.5 + index * 0.3
    }}
  >
    <motion.div
      className="glass-card p-4 rounded-2xl"
      animate={{
        y: [-10, 10, -10]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 2
      }}
    >
      <div className="font-semibold text-sm mb-1">{badge.title}</div>
      <div className="text-xs text-muted-foreground">{badge.subtitle}</div>
    </motion.div>
  </motion.div>
)

export function HeroSection() {
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    setParticles(Array.from({ length: 50 }, (_, i) => i))
  }, [])

  const handleScroll = (targetId: string) => {
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 gradient-bg"
        style={{
          background: `
            radial-gradient(ellipse at top, hsla(var(--primary), 0.3) 0%, transparent 70%),
            radial-gradient(ellipse at bottom right, hsla(var(--accent), 0.2) 0%, transparent 50%)
          `
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((index) => (
          <Particle key={index} delay={Math.random() * 15} />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center container-padding max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Badge variant="glow" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
            <motion.div
              className="w-2 h-2 bg-primary rounded-full pulse-dot"
            />
            New • Next-Generation Business Platform
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-gradient">Intelligent Solutions</span>
          <br />
          for Modern Enterprises
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Refrane transforms your business with AI-powered automation, 
          streamlining operations and accelerating growth through cutting-edge technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="xl"
            className="w-full sm:w-auto"
            onClick={() => handleScroll('#contact')}
          >
            Start Free Trial
          </Button>
          <Button
            variant="outline" 
            size="xl"
            className="w-full sm:w-auto border-2 hover:bg-background/10"
            onClick={() => handleScroll('#services')}
          >
            Explore Services
          </Button>
        </motion.div>
      </div>

      {/* Floating Badges */}
      {FLOATING_BADGES.map((badge, index) => (
        <FloatingBadge key={badge.id} badge={badge} index={index} />
      ))}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-muted-foreground rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}