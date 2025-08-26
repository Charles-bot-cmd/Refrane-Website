'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleScroll = (targetId: string) => {
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
        {/* Sparkle Icon */}
        <motion.div
          ref={ref}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
        >
          <Sparkles className="w-8 h-8 text-primary" />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ready to Transform
          <br />
          <span className="text-gradient">Your Business?</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Join thousands of companies using Refrane to automate operations 
          and accelerate growth with intelligent solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button 
            size="xl"
            className="group w-full sm:w-auto"
            onClick={() => handleScroll('#home')}
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            variant="outline" 
            size="xl"
            className="w-full sm:w-auto border-2 hover:bg-background/10"
          >
            Schedule a Demo
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Free 14-day trial</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Setup in 5 minutes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}