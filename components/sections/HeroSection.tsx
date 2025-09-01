'use client'

import { useEffect } from 'react'

export function HeroSection() {
  useEffect(() => {
    // Create particles
    const particlesContainer = document.getElementById('particles')
    if (particlesContainer) {
      const particleCount = 50

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 15 + 's'
        particle.style.animationDuration = (15 + Math.random() * 10) + 's'
        particlesContainer.appendChild(particle)
      }
    }

    // Smooth scroll for anchor links
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')
        const element = document.querySelector(targetId!) as HTMLElement
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleLinkClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleLinkClick)
      })
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>
      <div className="particles" id="particles"></div>
      
      <div className="hero-content">
        <div className="badge">New • Next-Generation Business Platform</div>
        <h1>Intelligent Solutions for<br/>Modern Enterprises</h1>
        <p className="hero-description">
          Refrane transforms your business with AI-powered automation, 
          streamlining operations and accelerating growth through cutting-edge technology.
        </p>
        <div className="hero-buttons">
          <a href="#" className="cta-button">Start Free Trial</a>
          <a href="#services" className="secondary-button">Explore Services</a>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="floating-badge floating-badge-1">
        <div style={{fontWeight: 600, marginBottom: '0.5rem'}}>Workflow Automation</div>
        <div style={{color: 'var(--gray-light)', fontSize: '0.875rem'}}>500+ Tasks Automated</div>
      </div>
      
      <div className="floating-badge floating-badge-2">
        <div style={{fontWeight: 600, marginBottom: '0.5rem'}}>AI Analytics</div>
        <div style={{color: 'var(--gray-light)', fontSize: '0.875rem'}}>Real-time Insights</div>
      </div>
    </section>
  )
}