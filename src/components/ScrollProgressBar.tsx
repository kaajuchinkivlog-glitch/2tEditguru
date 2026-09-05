import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for fluid cinematic progression
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 z-[60] pointer-events-none"
      role="progressbar"
      aria-label="Page reading and scroll progress"
    >
      {/* Background Track - Subtle translucent guide */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-white/[0.04] backdrop-blur-[2px]" />

      {/* Main Animated Progress Bar */}
      <motion.div
        id="scroll-progress-bar"
        className="relative h-[2.5px] origin-left bg-gradient-to-r from-white/40 via-white/90 to-white shadow-[0_0_10px_rgba(255,255,255,0.7),0_0_20px_rgba(255,255,255,0.3)]"
        style={{ scaleX }}
      >
        {/* Subtle luminous flare at the leading edge */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-white/60 rounded-full blur-[3px] pointer-events-none opacity-80" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full pointer-events-none" />
      </motion.div>
    </div>
  );
};
