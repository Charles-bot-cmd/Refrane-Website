'use client'

import { useEffect } from 'react'

export function Navigation() {
  useEffect(() => {
    // Nav background on scroll
    const handleScroll = () => {
      const nav = document.querySelector('nav')
      if (nav) {
        if (window.scrollY > 50) {
          nav.style.background = 'rgba(0, 0, 0, 0.95)'
        } else {
          nav.style.background = 'rgba(0, 0, 0, 0.8)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <div className="nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">R</div>
          REFRANE
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#" className="cta-button">Get Started</a>
      </div>
    </nav>
  )
}