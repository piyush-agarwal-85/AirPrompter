import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TabItem {
  id: string;
  label: string;
  title: string;
  description: string;
  titleAlign: 'left' | 'center' | 'right';
  meshElements: React.ReactNode;
}

const tabsData: TabItem[] = [
  {
    id: 'pixel-streaming',
    label: 'Pixel Streaming',
    title: 'Pixel\nStreaming',
    description:
      'Deliver services to users 40 times faster a reduced cost, eliminating need for extensive resource and infrastructure overhead.',
    titleAlign: 'left',
    meshElements: (
      <>
        {/* Deep Crimson / Coral organic swirl */}
        <div className="absolute -left-[15%] top-[-10%] w-[70%] h-[120%] rounded-full bg-gradient-to-br from-[#ff3b30] via-[#c9182b] to-[#7f0a1c] blur-[60px] opacity-95 transform -rotate-12" />
        {/* Soft Red-Violet Mid Curve */}
        <div className="absolute left-[30%] top-[10%] w-[50%] h-[100%] rounded-full bg-gradient-to-tr from-[#9d174d] via-[#6d1334] to-[#1e40af] blur-[70px] opacity-90" />
        {/* Vibrant Cyan / Electric Blue Right Wing */}
        <div className="absolute -right-[10%] -top-[15%] w-[65%] h-[130%] rounded-full bg-gradient-to-bl from-[#00d2ff] via-[#0ea5e9] to-[#2563eb] blur-[65px] opacity-95" />
        {/* Soft Magenta Highlight */}
        <div className="absolute right-[5%] bottom-[-10%] w-[45%] h-[60%] rounded-full bg-[#c084fc] blur-[80px] opacity-60 mix-blend-screen" />
      </>
    ),
  },
  {
    id: 'machine-learning',
    label: 'Machine Learning & AI',
    title: 'Machine\nLearning & AI',
    description:
      'Weaverly Cloud enables you to train, fineune and deploy models up 40 times faster offering the scalability and costiveness you need.',
    titleAlign: 'center',
    meshElements: (
      <>
        {/* Left deep blue node */}
        <div className="absolute -left-[10%] top-[10%] w-[55%] h-[100%] rounded-full bg-gradient-to-r from-[#0f172a] via-[#1e40af] to-[#0284c7] blur-[65px] opacity-95" />
        {/* Center blue-indigo bridge */}
        <div className="absolute left-[25%] top-[15%] w-[45%] h-[80%] rounded-full bg-[#0369a1] blur-[70px] opacity-85" />
        {/* Right giant warm amber/orange luminous sphere */}
        <div className="absolute right-[-10%] -top-[10%] w-[65%] h-[120%] rounded-full bg-gradient-to-bl from-[#ff7a00] via-[#ea580c] to-[#c2410c] blur-[60px] opacity-95" />
        {/* Warm golden caramel rim */}
        <div className="absolute right-[15%] top-[-5%] w-[40%] h-[70%] rounded-full bg-[#fbbf24] blur-[80px] opacity-70 mix-blend-screen" />
      </>
    ),
  },
  {
    id: 'inference-service',
    label: 'Inference Service',
    title: 'Inference\nService',
    description:
      'Provide superior inference seamlessly scale across thousands of to to changing demands, you can handle user without being overwhelmed.',
    titleAlign: 'right',
    meshElements: (
      <>
        {/* Royal Blue left core */}
        <div className="absolute -left-[12%] -top-[10%] w-[60%] h-[120%] rounded-full bg-gradient-to-br from-[#1e1b4b] via-[#2563eb] to-[#1d4ed8] blur-[65px] opacity-95" />
        {/* Center violet transition node */}
        <div className="absolute left-[30%] top-[20%] w-[45%] h-[80%] rounded-full bg-[#4338ca] blur-[70px] opacity-80" />
        {/* Neon Emerald Green right sphere */}
        <div className="absolute right-[-10%] -top-[15%] w-[65%] h-[130%] rounded-full bg-gradient-to-bl from-[#00ff66] via-[#10b981] to-[#047857] blur-[55px] opacity-95" />
        {/* Lime green luminous accent */}
        <div className="absolute right-[10%] top-[10%] w-[40%] h-[60%] rounded-full bg-[#86efac] blur-[75px] opacity-60 mix-blend-screen" />
      </>
    ),
  },
  {
    id: 'vfx-rendering',
    label: 'VFX & Rendering',
    title: 'VFX\n& Rendering',
    description:
      'Conductor on Weaverly delivers the performance flexibility to render more shots reduce runtimes, lower costs.',
    titleAlign: 'right',
    meshElements: (
      <>
        {/* Warm Golden sand/caramel left swirl */}
        <div className="absolute -left-[10%] -top-[15%] w-[60%] h-[130%] rounded-full bg-gradient-to-br from-[#fef08a] via-[#f59e0b] to-[#b45309] blur-[60px] opacity-95" />
        {/* Amber transition bridge */}
        <div className="absolute left-[25%] top-[15%] w-[45%] h-[80%] rounded-full bg-[#d97706] blur-[70px] opacity-85" />
        {/* Royal electric blue right canvas */}
        <div className="absolute right-[-10%] -top-[10%] w-[65%] h-[120%] rounded-full bg-gradient-to-bl from-[#0099ff] via-[#2563eb] to-[#1e3a8a] blur-[60px] opacity-95" />
        {/* Sky blue luminous flare */}
        <div className="absolute right-[15%] top-[-5%] w-[40%] h-[65%] rounded-full bg-[#7dd3fc] blur-[80px] opacity-75 mix-blend-screen" />
      </>
    ),
  },
];

export function HowItWorksSection() {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const currentTab = tabsData[activeTabIdx];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % tabsData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white text-neutral-900 font-['DM_Sans'] pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 md:px-8 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-14">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-3 sm:mb-4"
          >
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">
              HOW IT WORKS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-950 leading-[1.2] max-w-2xl mx-auto"
          >
            How it works under 3 minutes
          </motion.h2>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-2 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            See how a repeatable AI workflow goes from setup to execution in under 3 minutes – without rebuilding prompts, rewriting context, or switching between tools.
          </motion.p>
        </div>

        {/* Fluid Showcase Box Canvas */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[560px] md:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 md:p-14 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.18)] select-none">
          
          {/* Animated Background Mesh Gradients */}
          <div className="absolute inset-0 bg-[#0a0a0c] overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 pointer-events-none"
              >
                {currentTab.meshElements}
              </motion.div>
            </AnimatePresence>

            {/* Subtle photographic film grain / texture overlay */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                backgroundSize: '16px 16px',
              }}
            />
          </div>

          {/* Top Constant Tagline */}
          <div className="relative z-20 max-w-xs sm:max-w-sm">
            <p className="text-xs sm:text-sm md:text-[15px] font-normal text-white/90 leading-snug tracking-tight">
              Weaverly enables the creation and delivery of intelligence that fuels innovation.
            </p>
          </div>

          {/* Dynamic Center/Main Headline & Description Block */}
          <div
            className={`relative z-20 my-auto py-8 sm:py-12 flex flex-col ${
              currentTab.titleAlign === 'left'
                ? 'items-start text-left max-w-xl'
                : currentTab.titleAlign === 'center'
                ? 'items-center text-center mx-auto max-w-2xl'
                : 'items-end text-right ml-auto max-w-xl'
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className={`flex flex-col ${
                  currentTab.titleAlign === 'left'
                    ? 'items-start'
                    : currentTab.titleAlign === 'center'
                    ? 'items-center'
                    : 'items-end'
                }`}
              >
                {/* Large Title */}
                <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-[86px] font-normal tracking-tight text-white leading-[1.04] whitespace-pre-line drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
                  {currentTab.title}
                </h3>

                {/* Subtitle Description */}
                <p
                  className={`mt-4 sm:mt-6 text-xs sm:text-sm md:text-[14.5px] text-white/85 font-normal leading-relaxed max-w-md ${
                    currentTab.titleAlign === 'left'
                      ? 'text-left'
                      : currentTab.titleAlign === 'center'
                      ? 'text-center'
                      : 'text-right'
                  }`}
                >
                  {currentTab.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Glass Navigation Bar with Floating White Box Transition */}
          <div className="relative z-30 w-full mt-4">
            <div className="w-full bg-black/25 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2">
              {tabsData.map((tab, idx) => {
                const isActive = activeTabIdx === idx;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabIdx(idx)}
                    className="relative py-2.5 sm:py-3.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl text-xs sm:text-[13.5px] font-medium transition-colors duration-200 cursor-pointer flex items-center justify-center text-center z-10"
                  >
                    {/* Sliding White Active Pill Box */}
                    {isActive && (
                      <motion.div
                        layoutId="activeShowcaseTabPill"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 35,
                        }}
                        className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.25)] z-0"
                      />
                    )}

                    {/* Label */}
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive
                          ? 'text-neutral-950 font-semibold'
                          : 'text-white/80 hover:text-white font-medium'
                      }`}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
