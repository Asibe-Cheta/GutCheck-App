'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
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
          <Link href="/" className="logo">
            <Image 
              src="/gc-dark.png" 
              alt="GutCheck Logo" 
              width={48} 
              height={48} 
              className="logo-icon"
            />
            GutCheck
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/#features">Features</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <a 
            href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-header"
          >
            GET STARTED
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
