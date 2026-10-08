import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import bgImage from '../assets/images/sunset_lake_bg_1788167709456.jpg';

const STATEMENT_TEXT =
  "AI becomes exponentially more valuable when workflows are reusable, structured, and shared across teams – not trapped inside temporary chats. AirPrompter helps teams and individuals operationalize their best AI processes, creating a more reliable way to execute recurring work across research, content, strategy, analysis, and beyond.";

interface WordProps {
  word: string;
  range: [number, number, number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, range, progress }) => {
  // Smoothly interpolate from dim warm white (0.28) to crisp illuminated white (1.0) and stay 1.0 until scroll ends
  const opacity = useTransform(progress, range, [0.28, 0.28, 1, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.28em] text-white font-medium select-none will-change-[opacity]"
    >
      {word}
    </motion.span>
  );
};

export function ScrollHighlightStatement() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this tall section (start start to end end)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const words = STATEMENT_TEXT.split(' ');
  const totalWords = words.length;

  // Active portion of scroll allocated for word highlighting (e.g. 0% to 85%),
  // allowing the remaining 15% for all text to stay 100% illuminated in white.
  const activePortion = 0.85;

  const progressPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[280vh] sm:h-[320vh] bg-neutral-950 rounded-b-none sm:rounded-b-2xl overflow-clip"
    >
      {/* Fixed Sticky Stage that stays locked in viewport while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10">
        
        {/* Cinematic Fixed Dusk Mountain Lake Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={bgImage}
            alt="Scenic mountain lake at twilight"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1] saturate-[1.2]"
          />
          {/* Deep atmospheric gradient vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Geometric Wireframe Polyline Facet Overlay matching reference image */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-25 sm:opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="5%" y1="15%" x2="40%" y2="35%" stroke="#ffcbb0" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="40%" y1="35%" x2="65%" y2="20%" stroke="#ffcbb0" strokeWidth="0.8" />
            <line x1="65%" y1="20%" x2="95%" y2="30%" stroke="#ffcbb0" strokeWidth="0.8" strokeDasharray="4 4" />
            <line x1="40%" y1="35%" x2="55%" y2="75%" stroke="#ffcbb0" strokeWidth="0.8" />
            <line x1="10%" y1="80%" x2="55%" y2="75%" stroke="#ffcbb0" strokeWidth="0.8" />
            <line x1="55%" y1="75%" x2="90%" y2="85%" stroke="#ffcbb0" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="40%" cy="35%" r="2.5" fill="#ffcbb0" opacity="0.6" />
            <circle cx="55%" cy="75%" r="2.5" fill="#ffcbb0" opacity="0.6" />
            <circle cx="65%" cy="20%" r="2.5" fill="#ffcbb0" opacity="0.6" />
          </svg>
        </div>

        {/* Highlighted Statement Text Container */}
        <div className="relative z-10 w-full max-w-4xl sm:max-w-5xl px-6 sm:px-10 md:px-14 text-left">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[36px] font-medium leading-[1.38] sm:leading-[1.44] tracking-tight font-['DM_Sans'] filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            {words.map((word, i) => {
              // Word start and end calculation
              const start = (i / totalWords) * activePortion;
              const end = Math.min(activePortion, ((i + 1.25) / totalWords) * activePortion);
              return (
                <Word
                  key={`${word}-${i}`}
                  word={word}
                  range={[0, start, end, 1]}
                  progress={scrollYProgress}
                />
              );
            })}
          </p>
        </div>

        {/* Scroll Progress Indicator & Guidance Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none opacity-80">
          <div className="w-24 sm:w-32 h-[2px] bg-white/20 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressPercent }}
              className="h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
          </div>
          <span className="text-[10px] sm:text-[11px] font-normal tracking-wider uppercase text-white/50 font-['DM_Sans']">
            Scroll to read
          </span>
        </div>

      </div>
    </section>
  );
}
