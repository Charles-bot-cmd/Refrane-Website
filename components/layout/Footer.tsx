'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const footerLinks = [
  { href: '#privacy', label: 'Privacy Policy' },
  { href: '#terms', label: 'Terms of Service' },
  { href: '#contact', label: 'Contact' }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto container-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold">REFRANE</span>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Built with Next.js, TypeScript, and Tailwind CSS. 
            Powered by AI-driven innovation.
          </p>
          
          <div className="flex items-center gap-4">
            <span>Made with</span>
            <motion.span
              className="text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              ❤️
            </motion.span>
            <span>for the future</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}