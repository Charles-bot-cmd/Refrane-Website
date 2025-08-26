'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SERVICES } from '@/lib/constants'
import { Check } from 'lucide-react'

const ServiceCard = ({ service, index }: { service: typeof SERVICES[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group h-full"
    >
      <Card 
        variant="glass" 
        className="h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
      >
        {/* Hover gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        <div className="absolute inset-[1px] bg-background/95 rounded-2xl" />
        
        <CardHeader className="relative z-10 pb-4">
          {/* Service Icon */}
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-3xl">{service.icon}</span>
          </motion.div>

          <CardTitle className="text-xl font-bold mb-2">
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 pt-0">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-3">
            {service.features.map((feature, featureIndex) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ 
                  duration: 0.4, 
                  delay: (index * 0.2) + (featureIndex * 0.1) + 0.3 
                }}
                className="flex items-center gap-3 text-sm"
              >
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
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
              Our Services
            </Badge>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-gradient">AI Solutions That Transform</span>
            <br />
            Your Business Operations
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We design, develop, and implement intelligent tools that help you work 
            smarter, not harder. Unlock the full potential of your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">
            Ready to transform your business operations?
          </p>
          <motion.button
            className="text-primary font-medium hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a custom solution →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}