import React from 'react';
import { motion } from 'motion/react';

interface CinematicSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  isHero?: boolean;
  duration?: number;
  yOffset?: number;
}

export const CinematicSection: React.FC<CinematicSectionProps> = ({
  children,
  delay = 0,
  className = '',
  id,
  isHero = false,
  duration = 0.85,
  yOffset = 24,
}) => {
  // Cinematic transition curve: prompt start with an elegant, gentle deceleration
  const cinematicEase = [0.16, 1, 0.3, 1] as const;

  if (isHero) {
    return (
      <motion.div
        id={id}
        initial={{ opacity: 0, y: yOffset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration,
          delay,
          ease: cinematicEase,
        }}
        className={`w-full flex flex-col items-center ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -40px 0px' }}
      transition={{
        duration,
        delay,
        ease: cinematicEase,
      }}
      className={`w-full flex flex-col items-center ${className}`}
    >
      {children}
    </motion.div>
  );
};
