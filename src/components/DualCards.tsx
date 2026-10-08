import React, { useState } from 'react';
import { Zap, Play, CheckCircle, Sparkles, Terminal, ArrowRight, RefreshCw, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DualCardsProps {
  onOpenWorkflowModal?: () => void;
  onOpenDemoModal?: () => void;
}

export function DualCards({ onOpenWorkflowModal, onOpenDemoModal }: DualCardsProps) {
  const [activeCard, setActiveCard] = useState<'card1' | 'card2' | null>(null);
  const [runningWorkflow, setRunningWorkflow] = useState(false);
  const [workflowStep, setWorkflowStep] = useState(0);
  const [demoActive, setDemoActive] = useState(false);
  const [demoStep, setDemoStep] = useState(0);

  const runWorkflowSimulation = () => {
    setActiveCard('card1');
    setRunningWorkflow(true);
    setWorkflowStep(1);

    setTimeout(() => setWorkflowStep(2), 700);
    setTimeout(() => setWorkflowStep(3), 1500);
    setTimeout(() => {
      setWorkflowStep(4);
      setRunningWorkflow(false);
    }, 2300);
  };

  const runDemoSimulation = () => {
    setActiveCard('card2');
    setDemoActive(true);
    setDemoStep(1);

    setTimeout(() => setDemoStep(2), 800);
    setTimeout(() => setDemoStep(3), 1600);
    setTimeout(() => {
      setDemoStep(4);
      setDemoActive(false);
    }, 2400);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center my-2">
      {/* Outer Showcase Container */}
      <div className="relative w-full max-w-2xl mx-auto rounded-2xl border border-white/20 bg-neutral-950/80 p-4 sm:p-5 flex flex-col items-center justify-center min-h-[190px] overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-30" />

        {/* Dual Cards Container - Reduced Width & Compact Spacing */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          
          {/* Card 1: Run your first workflow (Reduced Width: max-w-[270px]) */}
          <motion.div
            whileHover={{ y: -2 }}
            className={`w-full max-w-[270px] rounded-xl border p-3.5 flex flex-col items-center text-center transition-all duration-200 ${
              activeCard === 'card1'
                ? 'border-white bg-white/10'
                : 'border-white/20 bg-black/60 hover:border-white/40'
            }`}
          >
            <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-2">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>

            <span className="text-xs font-normal text-white/80 mb-2.5">
              Live AI Workflow Engine
            </span>

            {/* Reduced size button with icon */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={runWorkflowSimulation}
              className="flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-full text-xs font-medium bg-white text-black hover:bg-neutral-200 transition-all shadow-sm"
            >
              {runningWorkflow ? (
                <RefreshCw className="w-3 h-3 text-black animate-spin" />
              ) : (
                <Zap className="w-3 h-3 text-black fill-black" />
              )}
              <span>{runningWorkflow ? 'Synthesizing...' : 'Run your first workflow'}</span>
            </motion.button>
          </motion.div>

          {/* Card 2: See how it works (Reduced Width: max-w-[270px] + Matching Icon) */}
          <motion.div
            whileHover={{ y: -2 }}
            className={`w-full max-w-[270px] rounded-xl border p-3.5 flex flex-col items-center text-center transition-all duration-200 ${
              activeCard === 'card2'
                ? 'border-white bg-white/10'
                : 'border-white/20 bg-black/60 hover:border-white/40'
            }`}
          >
            <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-2">
              <Play className="w-3.5 h-3.5 text-white fill-white" />
            </div>

            <span className="text-xs font-normal text-white/80 mb-2.5">
              Expert Feedback Learning Loop
            </span>

            {/* Reduced size button with icon */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={runDemoSimulation}
              className="flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-full text-xs font-medium bg-neutral-900 border border-white/30 text-white hover:bg-neutral-800 hover:border-white/60 transition-all shadow-sm"
            >
              {demoActive ? (
                <Sparkles className="w-3 h-3 text-white animate-pulse" />
              ) : (
                <Play className="w-3 h-3 text-white fill-white" />
              )}
              <span>{demoActive ? 'Analyzing loop...' : 'See how it works'}</span>
            </motion.button>
          </motion.div>

        </div>

        {/* Live Interactive Status Feed (Compact, height-contained) */}
        <AnimatePresence>
          {(activeCard === 'card1' && workflowStep > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="relative z-10 mt-3 w-full max-w-[560px] p-2.5 rounded-lg bg-black border border-white/15 text-left text-xs font-mono"
            >
              <div className="flex items-center justify-between text-white/90 pb-1 border-b border-white/10 mb-1.5">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  Workflow Execution
                </span>
                <span className="text-[10px] text-white/60">AirPrompter v2.4</span>
              </div>
              <div className="text-[11px] text-white/80 space-y-0.5">
                {workflowStep >= 1 && <p className="text-white/90">✓ Ingesting human expert reasoning examples...</p>}
                {workflowStep >= 2 && <p className="text-white/90">✓ Extracting tacit principles & stylistic constraints...</p>}
                {workflowStep >= 3 && <p className="text-white">⚡ AirPrompter calibrated: 99.4% alignment verified.</p>}
                {workflowStep >= 4 && <p className="text-emerald-400 font-semibold">★ Ready. AI outputs now think like your top experts.</p>}
              </div>
            </motion.div>
          )}

          {(activeCard === 'card2' && demoStep > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="relative z-10 mt-3 w-full max-w-[560px] p-2.5 rounded-lg bg-black border border-white/15 text-left text-xs"
            >
              <div className="flex items-center justify-between text-white/90 pb-1 border-b border-white/10 mb-1.5">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-white">
                  <Sparkles className="w-3 h-3 text-white" />
                  How AirPrompter Learns
                </span>
                <span className="text-[10px] font-mono text-white/60">Step {demoStep} of 3</span>
              </div>
              <div className="text-[11px] text-white/80 space-y-0.5">
                {demoStep >= 1 && <p className="text-white/90"><span className="text-white font-medium">1. Capture:</span> Collect natural expert reviews & corrections.</p>}
                {demoStep >= 2 && <p className="text-white/90"><span className="text-white font-medium">2. Synthesize:</span> Automatically update system-level AI prompts.</p>}
                {demoStep >= 3 && <p className="text-white"><span className="text-white font-medium">3. Scale:</span> Deliver identical expert-grade results on every run.</p>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
