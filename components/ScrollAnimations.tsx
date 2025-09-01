'use client'

import { useEffect } from 'react'

export function ScrollAnimations() {
  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe service cards and process steps
    const elementsToObserve = document.querySelectorAll('.service-card, .process-step, .stat')
    elementsToObserve.forEach(el => {
      const element = el as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(30px)'
      element.style.transition = 'all 0.6s ease-out'
      observer.observe(element)
    })

    return () => {
      elementsToObserve.forEach(el => observer.unobserve(el))
    }
  }, [])

  return null
}