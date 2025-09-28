'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingCardProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  delay = 0,
  duration = 6,
  className
}) => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

interface FloatingCardsProps {
  children: React.ReactNode
  className?: string
}

const FloatingCards: React.FC<FloatingCardsProps> = ({ children, className }) => {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  )
}

export { FloatingCard, FloatingCards }
