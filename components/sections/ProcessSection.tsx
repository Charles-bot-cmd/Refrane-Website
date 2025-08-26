'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { PROCESS_STEPS } from '@/lib/constants'

const ProcessStep = ({ step, index }: { step: typeof PROCESS_STEPS[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="text-center relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Connection Line (for desktop) */}
      {index < PROCESS_STEPS.length - 1 && (
        <motion.div
          className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: (index * 0.2) + 0.5 }}
          style={{ transformOrigin: 'left' }}
        />
      )}

      {/* Step Number Circle */}
      <motion.div
        className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15, 
          delay: (index * 0.2) + 0.3 
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)"
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: (index * 0.2) + 0.5 }}
        >
          {step.number}
        </motion.span>
      </motion.div>

      {/* Step Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: (index * 0.2) + 0.4 }}
      >
        <h3 className="text-xl font-bold mb-3">
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-32 relative bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Our Process
            </Badge>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Our Simple, Smart,
            <br />
            <span className="text-gradient">and Scalable Process</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We follow a proven methodology to deliver exceptional results for your business.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-muted-foreground mb-4">
            Every step is designed to maximize your business impact
          </p>
          <motion.div
            className="flex justify-center items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
            <span className="text-sm font-medium text-primary">
              Proven Results
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-primary to-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}