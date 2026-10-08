import React, { useState } from 'react';
import { Search, BarChart2, Edit3, Sliders, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

// Brand icons for ChatGPT, Claude, Gemini
function ChatGPTIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`rounded-lg bg-[#10a37f] text-white flex items-center justify-center p-1 shadow-sm ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.1354a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1402-1.6564zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1636a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    </div>
  );
}

function ClaudeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`rounded-lg bg-[#d97706] text-white flex items-center justify-center p-1 shadow-sm ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2L13.5 8.5L20 10L14.5 13.5L16 20L11 15.5L6 19L7.5 13L2 10.5L8.5 9L12 2Z" />
      </svg>
    </div>
  );
}

function GeminiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 text-white flex items-center justify-center p-1 shadow-sm ${className}`}>
      <Sparkles className="w-full h-full text-white" />
    </div>
  );
}

export function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [selectedModel, setSelectedModel] = useState<string>('ChatGPT');

  const steps = [
    { id: 1, title: 'Step 1', subtitle: 'Research', icon: Search },
    { id: 2, title: 'Step 2', subtitle: 'Analyze', icon: BarChart2 },
    { id: 3, title: 'Step 3', subtitle: 'Create', icon: Edit3 },
    { id: 4, title: 'Step 4', subtitle: 'Refine', icon: Sliders },
  ];

  const models = [
    { name: 'ChatGPT', icon: ChatGPTIcon },
    { name: 'Claude', icon: ClaudeIcon },
    { name: 'Gemini', icon: GeminiIcon },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-2">
      {/* Outer Enclosing Container with Frosted Glass Surface */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl border border-neutral-200/80 bg-white/70 backdrop-blur-xl p-4 sm:p-5 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
      >
        
        {/* Subtle glass reflection gradient highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

        {/* 4-Column Responsive Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-4 items-center">
          
          {/* ============================================================ */}
          {/* COLUMN 1: MESSY PROMPTS (Scattered Glass Hovering Nodes) */}
          {/* ============================================================ */}
          <div className="md:col-span-3 flex flex-col justify-between h-full min-h-[210px]">
            {/* Header with corner bracket indicator */}
            <div className="text-left mb-2">
              <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-neutral-900">
                MESSY PROMPTS
              </div>
              <div className="text-[11px] text-neutral-500 font-normal">
                Scattered. Unstructured.
              </div>
              <div className="w-2.5 h-2.5 border-t border-l border-neutral-400 mt-1.5 opacity-60" />
            </div>

            {/* Scattered Floating Glass Nodes Cluster */}
            <div className="relative flex-1 min-h-[135px] flex items-center justify-center p-2">
              <div className="relative w-full h-32">
                {[
                  { top: '12%', left: '18%', size: 'w-3 h-3', floatY: [-3, 3, -3], duration: 4, delay: 0 },
                  { top: '22%', left: '52%', size: 'w-4 h-4', floatY: [-4, 4, -4], duration: 4.5, delay: 0.3 },
                  { top: '42%', left: '12%', size: 'w-3.5 h-3.5', floatY: [-3, 5, -3], duration: 5, delay: 0.6 },
                  { top: '48%', left: '46%', size: 'w-4.5 h-4.5', floatY: [-5, 3, -5], duration: 3.8, delay: 0.2 },
                  { top: '72%', left: '22%', size: 'w-2.5 h-2.5', floatY: [-3, 3, -3], duration: 4.2, delay: 0.8 },
                  { top: '78%', left: '58%', size: 'w-3.5 h-3.5', floatY: [-4, 4, -4], duration: 4.8, delay: 0.5 },
                  { top: '32%', left: '76%', size: 'w-3.5 h-3.5', floatY: [-3, 4, -3], duration: 3.6, delay: 0.4 },
                  { top: '62%', left: '78%', size: 'w-3 h-3', floatY: [-4, 3, -4], duration: 4.4, delay: 0.7 },
                  { top: '8%', left: '42%', size: 'w-2.5 h-2.5', floatY: [-2, 3, -2], duration: 5.2, delay: 0.1 },
                  { top: '88%', left: '38%', size: 'w-2.5 h-2.5', floatY: [-3, 3, -3], duration: 4.6, delay: 0.9 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: node.floatY,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: node.duration,
                      ease: 'easeInOut',
                      delay: node.delay,
                    }}
                    style={{ top: node.top, left: node.left }}
                    className={`absolute ${node.size} rounded-full bg-white/70 backdrop-blur-md border border-neutral-300/80 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:scale-125 hover:border-neutral-500 transition-transform cursor-pointer`}
                  />
                ))}

                {/* Convergence point pins leading towards Step Formation */}
                <div className="absolute right-0 top-1/4 w-2 h-2 rounded-full bg-neutral-600 ring-2 ring-white/90 shadow-xs" />
                <div className="absolute right-0 top-1/2 w-2.5 h-2.5 rounded-full bg-neutral-800 ring-2 ring-white/90 shadow-xs" />
                <div className="absolute right-0 top-3/4 w-2 h-2 rounded-full bg-neutral-600 ring-2 ring-white/90 shadow-xs" />
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: SYSTEM FORMATION (Glass Hovering Step Cards) */}
          {/* ============================================================ */}
          <div className="md:col-span-3 flex flex-col justify-between h-full">
            {/* Header */}
            <div className="text-left mb-2">
              <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-neutral-900">
                SYSTEM FORMATION
              </div>
              <div className="text-[11px] text-neutral-500 font-normal">
                Prompts organized into steps.
              </div>
              <div className="w-2.5 h-2.5 border-t border-l border-neutral-400 mt-1.5 opacity-60" />
            </div>

            {/* 4 Stacked Floating Glass Step Cards */}
            <div className="flex flex-col gap-2">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isSelected = activeStep === step.id;
                return (
                  <motion.div
                    key={step.id}
                    animate={{
                      y: [0, index % 2 === 0 ? -2.5 : 2.5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + index * 0.5,
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.025,
                      transition: { duration: 0.2 },
                    }}
                    onClick={() => setActiveStep(step.id)}
                    className={`relative rounded-xl border p-2.5 flex items-center gap-3 cursor-pointer transition-all duration-300 backdrop-blur-md ${
                      isSelected
                        ? 'border-neutral-900 bg-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.1)] ring-2 ring-neutral-200'
                        : 'border-neutral-200/80 bg-white/60 hover:bg-white/90 hover:border-neutral-300 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]'
                    }`}
                  >
                    {/* Glass Specular Top Highlight */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

                    {/* Left node anchor */}
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-neutral-300 border-2 border-white shadow-xs" />

                    {/* Icon Glass Badge */}
                    <div className="w-8 h-8 rounded-full bg-neutral-100/90 backdrop-blur-sm border border-neutral-200/80 flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent className="w-4 h-4 text-neutral-800" />
                    </div>

                    {/* Step Title & Action */}
                    <div className="text-left">
                      <div className="text-xs font-semibold text-neutral-900 leading-tight">
                        {step.title}
                      </div>
                      <div className="text-[11px] text-neutral-500 font-normal">
                        {step.subtitle}
                      </div>
                    </div>

                    {/* Right node anchor */}
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 3: EXECUTION LAYER (Glass Hovering Model Enclosure) */}
          {/* ============================================================ */}
          <div className="md:col-span-3 flex flex-col justify-between h-full">
            {/* Header */}
            <div className="text-left mb-2">
              <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-neutral-900">
                EXECUTION LAYER
              </div>
              <div className="text-[11px] text-neutral-500 font-normal">
                Run inside your AI chats.
              </div>
              <div className="w-2.5 h-2.5 border-t border-l border-neutral-400 mt-1.5 opacity-60" />
            </div>

            {/* Container Enclosing Chat Models with Glass Hover effect */}
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="relative rounded-2xl border border-neutral-200/90 bg-white/60 backdrop-blur-lg p-3 flex flex-col gap-2 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.09)] transition-all duration-300"
            >
              {/* Glass Top Rim Highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

              {/* Left connector nodes */}
              <div className="absolute -left-1.5 top-1/4 w-2.5 h-2.5 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />
              <div className="absolute -left-1.5 top-1/2 w-2.5 h-2.5 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />
              <div className="absolute -left-1.5 top-3/4 w-2.5 h-2.5 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />

              {/* Models List */}
              {models.map((model) => {
                const IconComponent = model.icon;
                const isSelected = selectedModel === model.name;
                return (
                  <motion.button
                    key={model.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedModel(model.name)}
                    className={`w-full rounded-xl border p-2.5 flex items-center gap-2.5 text-left transition-all duration-200 backdrop-blur-sm cursor-pointer ${
                      isSelected
                        ? 'border-neutral-900 bg-white/95 shadow-sm'
                        : 'border-neutral-200/70 bg-white/70 hover:bg-white hover:border-neutral-300 hover:shadow-xs'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-semibold text-neutral-900">
                      {model.name}
                    </span>
                  </motion.button>
                );
              })}

              {/* "+ more" Glass Pill */}
              <div className="pt-0.5 flex justify-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-medium text-neutral-600 bg-white/80 backdrop-blur-sm border border-neutral-200/80 hover:bg-white hover:border-neutral-300 hover:text-neutral-900 shadow-xs transition-all cursor-pointer">
                  + more
                </span>
              </div>

              {/* Right connector nodes */}
              <div className="absolute -right-1.5 top-1/4 w-2.5 h-2.5 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />
              <div className="absolute -right-1.5 top-1/2 w-2.5 h-2.5 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />
              <div className="absolute -right-1.5 top-3/4 w-2.5 h-2.5 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 4: CONSISTENT OUTPUTS (Glass Hovering Document Card) */}
          {/* ============================================================ */}
          <div className="md:col-span-3 flex flex-col justify-between h-full">
            {/* Header */}
            <div className="text-left mb-2">
              <div className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-neutral-900">
                CONSISTENT OUTPUTS
              </div>
              <div className="text-[11px] text-neutral-500 font-normal">
                Structured. Reliable. Every time.
              </div>
              <div className="w-2.5 h-2.5 border-t border-l border-neutral-400 mt-1.5 opacity-60" />
            </div>

            {/* Structured Document Preview Card with Glass Hovering */}
            <motion.div
              animate={{
                y: [0, 3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4.8,
                ease: 'easeInOut',
                delay: 0.4,
              }}
              whileHover={{
                y: -5,
                scale: 1.025,
                transition: { duration: 0.2 },
              }}
              className="relative rounded-2xl border border-neutral-200/90 bg-white/70 backdrop-blur-lg p-5 flex flex-col items-center justify-center min-h-[190px] shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.09)] transition-all duration-300 cursor-pointer"
            >
              {/* Glass Top Rim Highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

              {/* Left input connector nodes matching reference */}
              <div className="absolute -left-1.5 top-1/5 w-2 h-2 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />
              <div className="absolute -left-1.5 top-2/5 w-2 h-2 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />
              <div className="absolute -left-1.5 top-3/5 w-2 h-2 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />
              <div className="absolute -left-1.5 top-4/5 w-2 h-2 rounded-full bg-neutral-400 border-2 border-white shadow-xs" />

              {/* Verified Checkmark Badge in Glass Circle */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-12 h-12 rounded-full bg-rose-50/90 backdrop-blur-md border border-rose-200/90 flex items-center justify-center mb-3 shadow-[0_4px_12px_rgba(244,63,94,0.12)]"
              >
                <Check className="w-6 h-6 text-rose-500 stroke-[3]" />
              </motion.div>

              {/* Output Content Skeleton Bars */}
              <div className="w-full max-w-[130px] flex flex-col gap-1.5 items-center">
                <div className="w-full h-1.5 rounded-full bg-neutral-300/90" />
                <div className="w-3/4 h-1.5 rounded-full bg-neutral-200/90" />
                <div className="w-4/5 h-1.5 rounded-full bg-neutral-200/90" />
              </div>

              {/* Status Glass Pill */}
              <div className="mt-3 text-[10px] font-medium text-emerald-700 bg-emerald-50/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-emerald-200/80 shadow-xs">
                100% Calibrated Format
              </div>
            </motion.div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
