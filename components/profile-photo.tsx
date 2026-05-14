'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProfilePhotoProps {
  src: string
  alt?: string
  size?: 'small' | 'medium' | 'large'
}

const sizeClasses = {
  small: 'w-32 h-32',
  medium: 'w-48 h-48',
  large: 'w-80 h-80',
}

const glowClasses = {
  small: 'w-40 h-40',
  medium: 'w-56 h-56',
  large: 'w-96 h-96',
}

export function ProfilePhoto({ src, alt = 'Profile Photo', size = 'large' }: ProfilePhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative flex items-center justify-center"
    >
      {/* Glow background - animated gradient ring */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(76, 175, 80, 0.3)',
            '0 0 40px rgba(76, 175, 80, 0.5)',
            '0 0 20px rgba(76, 175, 80, 0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`absolute ${glowClasses[size]} rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl`}
      />

      {/* Rotating border ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className={`absolute ${glowClasses[size]} rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-primary/20 to-transparent bg-clip-border opacity-30`}
      />

      {/* Image container */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`${sizeClasses[size]} relative overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes={size === 'small' ? '128px' : size === 'medium' ? '192px' : '320px'}
        />
      </motion.div>

      {/* Subtle floating animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute ${sizeClasses[size]} rounded-full`}
      />
    </motion.div>
  )
}
