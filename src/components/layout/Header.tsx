'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <div className="logo-icon"></div>
            GutCheck
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#get-started" className="cta-header">Get Started</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
