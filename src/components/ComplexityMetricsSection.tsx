import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface MetricCardProps {
  stat: string;
  subtextBold: string;
  subtextNormal: string;
  arrowPosition?: 'bottom-right' | 'top-right' | 'bottom-left';
  backgroundStyle: string;
  artElement: React.ReactNode;
  textColor?: string;
  descColor?: string;
  delay?: number;
}

function MetricCard({
  stat,
  subtextBold,
  subtextNormal,
  arrowPosition = 'bottom-right',
  backgroundStyle,
  artElement,
  textColor = 'text-white',
  descColor = 'text-white/85',
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`relative h-[360px] sm:h-[390px] md:h-[420px] rounded-[24px] overflow-hidden p-6 sm:p-7 flex flex-col justify-between shadow-lg group select-none transition-shadow hover:shadow-2xl ${backgroundStyle}`}
    >
      {/* Background artistic illustration rendering */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {artElement}
      </div>

      {/* Top Section */}
      <div className="relative z-10">
        {arrowPosition === 'top-right' && (
          <div className="flex justify-end mb-auto">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12 cursor-pointer">
              <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>
        )}
        
        {stat && arrowPosition !== 'top-right' && (
          <div>
            <div className={`text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight ${textColor} font-['DM_Sans'] leading-none`}>
              {stat}
            </div>
            {arrowPosition !== 'bottom-left' && (
              <div className={`mt-2.5 sm:mt-3 text-xs sm:text-[13px] leading-relaxed max-w-[240px] ${descColor} font-['DM_Sans']`}>
                <span className="font-bold text-white block">{subtextBold}</span>
                <span className="font-normal block mt-0.5">{subtextNormal}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex items-end justify-between">
        {arrowPosition === 'top-right' ? (
          <div>
            <div className={`text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight ${textColor} font-['DM_Sans'] leading-none`}>
              {stat}
            </div>
            <div className={`mt-2.5 sm:mt-3 text-xs sm:text-[13px] leading-relaxed max-w-[240px] ${descColor} font-['DM_Sans']`}>
              <span className="font-bold text-white block">{subtextBold}</span>
              <span className="font-normal block mt-0.5">{subtextNormal}</span>
            </div>
          </div>
        ) : (
          <>
            {arrowPosition === 'bottom-left' ? (
              <div className="flex items-end justify-between w-full">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12 cursor-pointer shrink-0 mr-3">
                  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className={`text-[11px] sm:text-xs leading-snug max-w-[170px] ${descColor} font-['DM_Sans'] text-right`}>
                  <span className="font-bold text-white block">{subtextBold}</span>
                  <span className="font-normal block mt-0.5">{subtextNormal}</span>
                </div>
              </div>
            ) : (
              <div className="flex justify-end w-full">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12 cursor-pointer">
                  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

export function ComplexityMetricsSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 pb-6 max-w-5xl mx-auto font-['DM_Sans'] text-left">
      {/* 3 Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Card 1: 10x with Pastel Peach / Orange Planet and Rings */}
        <MetricCard
          stat="10x"
          subtextBold="Reuse of Prompts"
          subtextNormal="Create once. Reuse across work."
          arrowPosition="bottom-right"
          backgroundStyle="bg-gradient-to-b from-[#ffb48f] via-[#ffa57a] to-[#f48c66]"
          textColor="text-white"
          descColor="text-white/90"
          delay={0.1}
          artElement={
            <div className="absolute inset-0 flex items-center justify-center translate-y-16 sm:translate-y-20 scale-110">
              {/* Soft luminous planet glow */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#9d72ff] via-[#f78e69] to-[#ffcaa7] opacity-85 blur-xs shadow-inner">
                {/* Internal spherical shading */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 via-transparent to-black/25" />
                
                {/* Saturn-like planetary ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-24 sm:h-28 border-[6px] sm:border-[8px] border-violet-300/60 rounded-[100%] rotate-[-22deg] shadow-[0_0_20px_rgba(255,255,255,0.4)] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-84 sm:w-100 h-28 sm:h-32 border-2 border-white/40 rounded-[100%] rotate-[-22deg] pointer-events-none" />
              </div>
            </div>
          }
        />

        {/* Card 2: 90%+ with Peach-to-Periwinkle gradient & translucent Butterfly */}
        <MetricCard
          stat="90%+"
          subtextBold="Output Consistency"
          subtextNormal="Structured systems reduce variation."
          arrowPosition="top-right"
          backgroundStyle="bg-gradient-to-tr from-[#ff9f7a] via-[#f79d84] to-[#8da6d8]"
          textColor="text-white"
          descColor="text-white/90"
          delay={0.2}
          artElement={
            <div className="absolute inset-0 flex items-center justify-center translate-y-[-10px]">
              {/* Soft ethereal glowing butterfly */}
              <div className="relative w-64 h-64 opacity-75">
                <svg viewBox="0 0 200 200" className="w-full h-full text-white/70 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
                  {/* Left Wing Top */}
                  <path
                    d="M100,100 C70,40 10,60 30,110 C45,140 85,120 100,100 Z"
                    fill="url(#butterflyGrad)"
                    opacity="0.8"
                  />
                  {/* Left Wing Bottom */}
                  <path
                    d="M100,100 C75,130 40,165 60,180 C80,190 95,140 100,100 Z"
                    fill="url(#butterflyGrad)"
                    opacity="0.6"
                  />
                  {/* Right Wing Top */}
                  <path
                    d="M100,100 C130,40 190,60 170,110 C155,140 115,120 100,100 Z"
                    fill="url(#butterflyGrad)"
                    opacity="0.8"
                  />
                  {/* Right Wing Bottom */}
                  <path
                    d="M100,100 C125,130 160,165 140,180 C120,190 105,140 100,100 Z"
                    fill="url(#butterflyGrad)"
                    opacity="0.6"
                  />
                  {/* Butterfly Antennae & Body */}
                  <ellipse cx="100" cy="105" rx="2" ry="24" fill="white" opacity="0.9" />
                  <path d="M100,85 Q92,70 80,68" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <path d="M100,85 Q108,70 120,68" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" />
                  
                  <defs>
                    <linearGradient id="butterflyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#ffd8c9" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#c5d5f6" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          }
        />

        {/* Card 3: 80%+ on Dark Background with Coral / Crystal Sculpture */}
        <MetricCard
          stat="80%+"
          subtextBold="Workflow Reuse Rate"
          subtextNormal="Teams build once and scale."
          arrowPosition="bottom-left"
          backgroundStyle="bg-[#111315] text-white border border-neutral-800"
          textColor="text-white"
          descColor="text-white/70"
          delay={0.3}
          artElement={
            <div className="absolute right-[-10px] sm:right-[-20px] bottom-[-20px] sm:bottom-[-30px] w-56 sm:w-64 h-80 sm:h-96 pointer-events-none">
              {/* Detailed Organic Coral / Crystal Branch Graphic */}
              <svg viewBox="0 0 200 300" className="w-full h-full">
                <defs>
                  <linearGradient id="coralGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f7906d" />
                    <stop offset="40%" stopColor="#e89886" />
                    <stop offset="70%" stopColor="#b49bcf" />
                    <stop offset="100%" stopColor="#cfc0e8" />
                  </linearGradient>
                  <filter id="coralGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#f7906d" floodOpacity="0.25" />
                  </filter>
                </defs>
                
                {/* Main Coral Trunk and Texture */}
                <g filter="url(#coralGlow)">
                  {/* Base trunk */}
                  <path
                    d="M100,300 C90,260 70,220 85,180 C95,150 110,120 100,90 C90,60 120,30 135,40 C145,50 130,80 145,110 C160,140 180,180 165,220 C150,260 140,290 130,300 Z"
                    fill="url(#coralGrad)"
                    opacity="0.9"
                  />
                  {/* Left branch */}
                  <path
                    d="M85,180 C60,165 40,140 45,120 C50,105 70,115 80,130 C90,145 95,165 85,180 Z"
                    fill="url(#coralGrad)"
                    opacity="0.95"
                  />
                  {/* Left upper sprout */}
                  <path
                    d="M75,120 C55,100 50,80 60,70 C70,60 80,75 82,95 Z"
                    fill="url(#coralGrad)"
                    opacity="0.9"
                  />
                  {/* Right branch */}
                  <path
                    d="M145,110 C165,95 185,80 180,60 C175,45 155,55 145,70 C135,85 135,100 145,110 Z"
                    fill="url(#coralGrad)"
                    opacity="0.95"
                  />
                  {/* Top branches */}
                  <path
                    d="M100,90 C105,70 115,40 125,30 C135,20 145,35 135,55 Z"
                    fill="url(#coralGrad)"
                    opacity="1"
                  />
                  <path
                    d="M125,50 C140,30 160,25 165,40 C170,55 150,65 140,75 Z"
                    fill="url(#coralGrad)"
                    opacity="0.85"
                  />
                  {/* Fine textural stipples */}
                  <circle cx="95" cy="190" r="3" fill="#ffffff" opacity="0.4" />
                  <circle cx="110" cy="160" r="2.5" fill="#ffffff" opacity="0.5" />
                  <circle cx="130" cy="130" r="3" fill="#ffffff" opacity="0.6" />
                  <circle cx="75" cy="140" r="2" fill="#ffffff" opacity="0.5" />
                  <circle cx="150" cy="90" r="2.5" fill="#ffffff" opacity="0.6" />
                  <circle cx="120" cy="60" r="2" fill="#ffffff" opacity="0.7" />
                  <circle cx="105" cy="100" r="3" fill="#ffffff" opacity="0.5" />
                  <circle cx="135" cy="200" r="4" fill="#ffffff" opacity="0.3" />
                  <circle cx="115" cy="240" r="3.5" fill="#ffffff" opacity="0.3" />
                </g>
              </svg>
            </div>
          }
        />

      </div>
    </section>
  );
}
