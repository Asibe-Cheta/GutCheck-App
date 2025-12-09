'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className
}) => {
  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  }

  const animateVariants = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 }
  }

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={animateVariants[direction]}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
