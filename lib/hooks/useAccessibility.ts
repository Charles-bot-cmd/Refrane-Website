'use client'

import { useEffect, useState } from 'react'

export function useAccessibility() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Check for high contrast preference
    const contrastQuery = window.matchMedia('(prefers-contrast: high)')
    setHighContrast(contrastQuery.matches)

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setHighContrast(e.matches)
    }

    contrastQuery.addEventListener('change', handleContrastChange)
    return () => contrastQuery.removeEventListener('change', handleContrastChange)
  }, [])

  // Focus management
  const trapFocus = (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }

      if (e.key === 'Escape') {
        element.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }

  // Announce to screen readers
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.createElement('div')
    announcer.setAttribute('aria-live', priority)
    announcer.setAttribute('aria-atomic', 'true')
    announcer.className = 'sr-only'
    announcer.textContent = message

    document.body.appendChild(announcer)
    setTimeout(() => document.body.removeChild(announcer), 1000)
  }

  return {
    prefersReducedMotion,
    highContrast,
    trapFocus,
    announce
  }
}