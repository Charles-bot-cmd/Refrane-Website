'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-lg border-b border-border/50" 
            : "bg-background/80 backdrop-blur-md"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">R</span>
              </div>
              <span className="text-xl md:text-2xl font-bold">REFRANE</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button 
                  className="hidden sm:inline-flex"
                  onClick={() => handleLinkClick('#contact')}
                >
                  Get Started
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container-padding py-6">
                <div className="flex flex-col space-y-6">
                  {NAVIGATION_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="pt-4"
                  >
                    <Button 
                      className="w-full"
                      onClick={() => handleLinkClick('#contact')}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}