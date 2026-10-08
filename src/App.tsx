import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { WorkflowDiagram } from './components/WorkflowDiagram';
import { ComplexityMetricsSection } from './components/ComplexityMetricsSection';
import { PlatformMarquee } from './components/PlatformMarquee';
import { ScrollHighlightStatement } from './components/ScrollHighlightStatement';
import { EngineFeaturesSection } from './components/EngineFeaturesSection';
import { ExecutionSection } from './components/ExecutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ApiIntegrationsSection } from './components/ApiIntegrationsSection';
import { AppFooter } from './components/AppFooter';
import { X, Check, Zap, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [modalType, setModalType] = useState<'workflow' | 'demo' | 'signup' | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setModalType(null);
        setEmail('');
      }, 1500);
    }
  };

  const platforms = [
    { name: 'ChatGPT', src: 'https://airprompter.com/landing/platforms/strip/chatgpt.svg' },
    { name: 'DeepSeek', src: 'https://airprompter.com/landing/platforms/strip/deepseek.svg' },
    { name: 'Grok', src: 'https://airprompter.com/landing/platforms/strip/grok.svg' },
    { name: 'Claude', src: 'https://airprompter.com/landing/platforms/strip/claude.svg' },
    { name: 'Gemini', src: 'https://airprompter.com/landing/platforms/strip/gemini.svg' },
    { name: 'Perplexity', src: 'https://airprompter.com/landing/platforms/strip/perplexity.svg' },
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-100 flex flex-col items-center justify-start p-0 sm:p-4 selection:bg-neutral-900 selection:text-white">
      {/* Container on Crisp White Canvas */}
      <div className="w-full max-w-[1280px] bg-white text-neutral-900 font-['DM_Sans'] flex flex-col justify-between border border-neutral-200/80 shadow-2xl relative rounded-none sm:rounded-2xl">
        
        {/* Top Navigation */}
        <Navbar
          onSignIn={() => setModalType('signup')}
          onGetStarted={() => setModalType('workflow')}
        />

        {/* Hero Content Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-3 sm:px-6 max-w-5xl mx-auto w-full text-center pt-2 sm:pt-4">
          
          {/* Eyebrow Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/90 text-neutral-800 text-xs font-normal tracking-wide shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse" />
              <span className="text-neutral-900 font-medium text-[11px] sm:text-xs tracking-wider uppercase">
                ONE-OFF PROMPTING IS DEAD
              </span>
            </div>
          </motion.div>

          {/* Headline Text: Wrapped cleanly into 2 lines */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-2.5 sm:mt-3 text-[28px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-medium tracking-tight text-neutral-950 max-w-3xl mx-auto leading-[1.14]"
          >
            Train AI To Think More Like You,
            <br className="hidden sm:inline" /> Every Time
          </motion.h1>

          {/* Supporting Subtext: Regular font weight */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-[15px] font-normal text-neutral-600 max-w-2xl mx-auto leading-normal"
          >
            Humans are the experts. AirPrompter helps AI learn from them.
          </motion.p>

          {/* Primary Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={() => setModalType('workflow')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-neutral-950 text-white hover:bg-neutral-800 transition-all duration-150 shadow-sm active:scale-95 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
              <span>Run your first workflow</span>
            </button>

            <button
              onClick={() => setModalType('demo')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-150 shadow-xs active:scale-95 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 text-neutral-900 fill-neutral-900" />
              <span>See how it works</span>
            </button>
          </motion.div>

          {/* Workflow System Architecture Diagram with Dedicated Top & Bottom Padding/Margin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="w-full mt-6 sm:mt-8 mb-4 sm:mb-6 px-1"
          >
            <WorkflowDiagram />
          </motion.div>

        </main>

        {/* Section 2: 3 Metric Cards */}
        <ComplexityMetricsSection />

        {/* Section 3 Before Social Proof Bar: Headline & Subtext */}
        <section className="w-full text-center px-4 pt-6 sm:pt-10 pb-2">
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-950"
          >
            One system. Every AI tool.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-1.5 text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto font-normal"
          >
            Turn one-off prompts into structured systems that scale across teams and tools.
          </motion.p>
        </section>

        {/* Social Proof Platform Strip Bar - Continuous Right-to-Left Line */}
        <footer className="w-full pt-2 sm:pt-4 pb-8 sm:pb-12 text-center z-10">
          <div className="max-w-5xl mx-auto">
            <PlatformMarquee platforms={platforms} />
          </div>
        </footer>

        {/* Section 4: Cinematic Scroll-Linked Highlight Statement */}
        <div className="w-full">
          <ScrollHighlightStatement />
        </div>

        {/* Section 5: The Engine - Everything you need to run outbound */}
        <EngineFeaturesSection />

        {/* Section 6: One place to execute, together. (Interactive sticky-scroll) */}
        <ExecutionSection />

        {/* Section 7: How it works under 3 minutes (Merged with Showcase Canvas) */}
        <HowItWorksSection />

        {/* Section 8: Integrate with every external or internal API (Dark Theme) */}
        <ApiIntegrationsSection />

        {/* Section 9: Footer with Black Hero Arch & Directory Navigation */}
        <AppFooter
          onGetStarted={() => setModalType('signup')}
          onBookDemo={() => setModalType('demo')}
        />

        {/* Interactive Modal Dialog for Light Theme */}
        <AnimatePresence>
          {modalType && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-sm bg-white border border-neutral-200 rounded-2xl p-6 text-neutral-900 shadow-2xl"
              >
                <button
                  onClick={() => setModalType(null)}
                  className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 p-1 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {modalType === 'workflow' && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-neutral-950 text-white flex items-center justify-center">
                        <Zap className="w-3.5 h-3.5 fill-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-950">Run Your First Workflow</h3>
                    </div>
                    <p className="text-xs text-neutral-600 mb-4">
                      Connect your expert knowledge and generate aligned AI models in minutes.
                    </p>
                    {submitted ? (
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                        <Check className="w-6 h-6 mx-auto text-emerald-600 mb-1" />
                        <p className="text-xs font-semibold text-emerald-950">Workflow Initialized!</p>
                        <p className="text-[11px] text-emerald-700 mt-0.5">Check your inbox for workspace credentials.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-3">
                        <div>
                          <label className="block text-[10px] uppercase font-medium tracking-wider text-neutral-700 mb-1">
                            Developer / Work Email
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="engineer@company.com"
                            className="w-full px-3 py-2 text-xs rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-950"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2 rounded-full text-xs font-medium bg-neutral-950 text-white hover:bg-neutral-800 transition-colors mt-1 cursor-pointer"
                        >
                          Start Workflow Trial
                        </button>
                      </form>
                    )}
                  </div>
                )}

                {(modalType === 'demo' || modalType === 'signup') && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 text-neutral-900 fill-neutral-900" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-950">
                        {modalType === 'signup' ? 'Get Started with AirPrompter' : 'See How It Works'}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-600 mb-4">
                      {modalType === 'signup'
                        ? 'Create your free developer account to start organizing prompts into steps.'
                        : 'Watch an interactive breakdown of human-in-the-loop prompt calibration.'}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80 text-xs">
                        <span className="text-neutral-900 font-medium">1. Capture Nuance:</span>
                        <p className="text-neutral-600 text-[11px] mt-0.5">Experts review sample outputs directly inside AirPrompter.</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80 text-xs">
                        <span className="text-neutral-900 font-medium">2. Continuous Tuning:</span>
                        <p className="text-neutral-600 text-[11px] mt-0.5">The engine distills feedback into robust prompt architectures.</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setModalType(null)}
                      className="w-full py-2 rounded-full text-xs font-medium bg-neutral-950 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Close Demo
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
