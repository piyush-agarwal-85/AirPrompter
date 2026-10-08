import React from 'react';
import { motion } from 'motion/react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="relative flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 text-center group min-h-[260px] sm:min-h-[290px] overflow-hidden"
    >
      {/* Clean, understated icon badge */}
      <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-neutral-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(139,92,246,0.12)]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-base sm:text-[17px] font-semibold text-neutral-950 font-['DM_Sans'] tracking-tight mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-xs sm:text-[13.5px] text-neutral-500 font-normal font-['DM_Sans'] leading-relaxed max-w-[280px]">
        {description}
      </p>
    </motion.div>
  );
}

export function EngineFeaturesSection() {
  return (
    <section className="w-full bg-white text-neutral-900 font-['DM_Sans'] pt-10 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 border-t border-neutral-200/80">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center mb-2.5 sm:mb-3">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#8A63D2]">
              THE PROBLEM
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-950 leading-[1.2] max-w-2xl mx-auto">
            AI work stays fragmented across chats
          </h2>

          {/* Subtitle */}
          <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Teams constantly rebuild prompts, rewrite context, and repeat the same workflows across ChatGPT, Claude, Gemini, and other AI tools. Valuable processes disappear the moment the conversation ends.
          </p>
        </motion.div>

        {/* 2x2 Feature Grid with Crossed Dividing Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-100 border border-neutral-100/90 rounded-2xl sm:rounded-3xl bg-white shadow-xs overflow-hidden">
          
          {/* Left Column */}
          <div className="divide-y divide-neutral-100">
            {/* Top Left Card: Scattered Prompting */}
            <FeatureCard
              icon={
                <div className="relative flex items-center justify-center text-[#8A63D2]">
                  {/* Line-art icon representing scattered screenshots, documents, bookmarks, and chat histories */}
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {/* Background angled card/doc */}
                    <path d="M4 7V4a1 1 0 0 1 1-1h9l4 4v3" opacity="0.4" />
                    {/* Chat bubble overlay */}
                    <rect x="7" y="8" width="13" height="11" rx="2.5" />
                    {/* Bookmark indicator inside doc */}
                    <path d="M15 3v4l-2-1.2L11 7V3" strokeWidth="1.5" opacity="0.6" />
                    {/* Chat bubble lines */}
                    <line x1="10" y1="12" x2="16" y2="12" strokeWidth="1.6" />
                    <line x1="10" y1="15" x2="14" y2="15" strokeWidth="1.6" />
                  </svg>
                </div>
              }
              title="Scattered Prompting"
              description="Important prompts live across screenshots, docs, bookmarks, and chat histories."
              delay={0.1}
            />

            {/* Bottom Left Card: Inconsistent Outputs */}
            <FeatureCard
              icon={
                <div className="relative flex items-center justify-center text-[#8A63D2]">
                  {/* Minimal waveform/variation icon representing inconsistent/shifting outputs */}
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h2.5l2-6 3.5 12 3-8 2.5 4.5 2-2.5H21" />
                    <circle cx="11" cy="18" r="1.5" fill="#8A63D2" fillOpacity="0.4" />
                    <circle cx="7.5" cy="6" r="1.5" fill="#8A63D2" fillOpacity="0.4" />
                  </svg>
                </div>
              }
              title="Inconsistent Outputs"
              description="Small context changes create different tone, structure, quality, and review effort."
              delay={0.25}
            />
          </div>

          {/* Right Column */}
          <div className="divide-y divide-neutral-100">
            {/* Top Right Card: Repeated Manual Work */}
            <FeatureCard
              icon={
                <div className="relative text-[#8A63D2] flex items-center justify-center">
                  {/* Minimal line-art user/workflow repetitive cycle icon */}
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {/* User profile silhouette */}
                    <circle cx="12" cy="9" r="3.2" />
                    <path d="M7 17.5c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" />
                    {/* Circular repeating workflow arrows */}
                    <path d="M19 12a7.5 7.5 0 0 0-1.8-4.8" strokeDasharray="2.5 2" opacity="0.6" />
                    <path d="M5 12a7.5 7.5 0 0 0 1.8 4.8" strokeDasharray="2.5 2" opacity="0.6" />
                    <path d="M19 6.5v2.5h-2.5" strokeWidth="1.7" />
                    <path d="M5 17.5v-2.5h2.5" strokeWidth="1.7" />
                  </svg>
                </div>
              }
              title="Repeated Manual Work"
              description="Teams rewrite the same inputs, variables, examples, and context every time work repeats."
              delay={0.15}
            />

            {/* Bottom Right Card: Disconnected Workflows */}
            <FeatureCard
              icon={
                <div className="relative text-[#8A63D2] flex items-center justify-center">
                  {/* Subtle abstract scattered-node / disconnected-points visual */}
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {/* Scattered disconnected node clusters */}
                    <circle cx="6" cy="6" r="2.2" fill="#8A63D2" fillOpacity="0.2" />
                    <circle cx="18" cy="7" r="2.2" fill="#8A63D2" fillOpacity="0.2" />
                    <circle cx="8" cy="18" r="2.2" fill="#8A63D2" fillOpacity="0.2" />
                    <circle cx="17" cy="16" r="2.2" fill="#8A63D2" fillOpacity="0.2" />
                    
                    {/* Broken / dashed disconnection vectors */}
                    <path d="M8.2 6.2l7.6.6" strokeDasharray="2 2.5" opacity="0.5" />
                    <path d="M6.5 8.2l1.2 7.6" strokeDasharray="2 2.5" opacity="0.5" />
                    <path d="M10.2 17.5l4.6-.9" strokeDasharray="2 2.5" opacity="0.5" />
                    <path d="M17.7 9.2l-.5 4.6" strokeDasharray="2 2.5" opacity="0.5" />

                    {/* Unlinked center break indicator */}
                    <path d="M11 11l2 2" strokeWidth="1.5" stroke="#ef4444" opacity="0.7" />
                  </svg>
                </div>
              }
              title="Disconnected Workflows"
              description="Prompts, context, and outputs become scattered making valuable processes difficult to scale."
              delay={0.3}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
