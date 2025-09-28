'use client'

import { useEffect } from 'react'

export default function ClientScript() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetElement = document.querySelector(target.getAttribute('href')!)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, index * 100)
        }
      })
    }, observerOptions)

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el)
    })

    // CTA button tracking
    document.querySelectorAll('.btn-primary, .btn-secondary, .cta-header').forEach(button => {
      button.addEventListener('click', (e) => {
        // Analytics tracking
        console.log('CTA clicked:', (button as HTMLElement).textContent?.trim())
        
        // Add GTM or analytics code here
        if (typeof (window as any).gtag !== 'undefined') {
          (window as any).gtag('event', 'click', {
            event_category: 'CTA',
            event_label: (button as HTMLElement).textContent?.trim()
          })
        }
      })
    })

    // Parallax effect for floating cards
    const handleParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.floating-card')
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05)
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    // Dynamic gradient animation
    let gradientAngle = 135
    const gradientInterval = setInterval(() => {
      gradientAngle += 0.5
      if (gradientAngle >= 360) gradientAngle = 0
      
      const heroIcon = document.querySelector('.hero-icon') as HTMLElement
      if (heroIcon) {
        heroIcon.style.background = `linear-gradient(${gradientAngle}deg, var(--accent-teal), var(--accent-green))`
      }
    }, 100)

    // Mobile menu toggle (basic implementation)
    const createMobileMenu = () => {
      if (window.innerWidth <= 1024) {
        const nav = document.querySelector('.nav')
        const navLinks = document.querySelector('.nav-links')
        
        if (!document.querySelector('.mobile-menu-toggle')) {
          const mobileToggle = document.createElement('button')
          mobileToggle.className = 'mobile-menu-toggle'
          mobileToggle.innerHTML = '☰'
          mobileToggle.style.cssText = `
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 24px;
            cursor: pointer;
            display: block;
          `
          
          nav?.insertBefore(mobileToggle, nav.lastElementChild)
          
          mobileToggle.addEventListener('click', () => {
            const navLinksElement = navLinks as HTMLElement
            navLinksElement.style.display = navLinksElement.style.display === 'flex' ? 'none' : 'flex'
          })
        }
      }
    }

    // Performance optimization - lazy load background animations
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      document.querySelectorAll('[class*="animation"], [class*="float"]').forEach(el => {
        ;(el as HTMLElement).style.animation = 'none'
      })
    }

    // Add event listeners
    document.addEventListener('click', handleSmoothScroll)
    window.addEventListener('scroll', handleParallax)
    window.addEventListener('resize', createMobileMenu)

    // Initialize mobile menu
    createMobileMenu()

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll)
      window.removeEventListener('scroll', handleParallax)
      window.removeEventListener('resize', createMobileMenu)
      clearInterval(gradientInterval)
      observer.disconnect()
    }
  }, [])

  return null
}
