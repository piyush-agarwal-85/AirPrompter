import React from 'react';
import { motion } from 'motion/react';

interface Platform {
  name: string;
  src: string;
}

interface PlatformMarqueeProps {
  platforms: Platform[];
}

export function PlatformMarquee({ platforms }: PlatformMarqueeProps) {
  // Triple the array to create a seamless infinite loop
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms, ...platforms];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Left and Right Edge Fade Masks matching the reference image */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Right-to-Left Continuous Moving Track */}
      <motion.div
        className="flex items-center w-max"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 25,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedPlatforms.map((platform, index) => (
          <React.Fragment key={`${platform.name}-${index}`}>
            {/* Platform Item */}
            <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 shrink-0 group">
              <img
                src={platform.src}
                alt={platform.name}
                className="h-6 sm:h-7 md:h-8 w-auto max-w-[140px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Subtle Slanted Divider between items matching the reference image */}
            <div className="h-5 sm:h-6 w-[1px] bg-neutral-200/80 -rotate-12 shrink-0 opacity-60" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
