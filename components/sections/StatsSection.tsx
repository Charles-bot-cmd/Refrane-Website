'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { STATS } from '@/lib/constants'

const StatItem = ({ stat, index }: { stat: typeof STATS[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const [displayNumber, setDisplayNumber] = useState('0')

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      
      // Animate the numbers
      const numericPart = stat.number.match(/\d+/)?.[0]
      if (numericPart) {
        const target = parseInt(numericPart)
        const increment = target / 50
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setDisplayNumber(stat.number)
            clearInterval(timer)
          } else {
            const suffix = stat.number.replace(/\d+/, '')
            setDisplayNumber(Math.floor(current) + suffix)
          }
        }, 30)
        
        return () => clearInterval(timer)
      } else {
        setDisplayNumber(stat.number)
      }
    }
  }, [isInView, controls, stat.number])

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="relative inline-block"
        whileHover={{ rotateY: 10 }}
        style={{ perspective: 1000 }}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2 font-mono">
          {displayNumber}
        </div>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      <motion.div
        className="text-muted-foreground font-medium text-lg"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: (index * 0.1) + 0.3 }}
      >
        {stat.label}
      </motion.div>
    </motion.div>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl"
        animate={{
          x: [50, -50, 50],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Numbers that speak for themselves
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}