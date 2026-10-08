import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Volume2,
  Utensils,
  Palette,
  Ticket,
  ArrowUp,
  Bot,
  Signal,
  CheckCircle2,
} from 'lucide-react';

interface Subsection {
  id: 'define' | 'plan' | 'collaborate';
  label: string;
  title: string;
  p1: string;
  p2: string;
}

const subsections: Subsection[] = [
  {
    id: 'define',
    label: 'Define',
    title: 'Define',
    p1: 'What used to be agreed upon in Zooms and emails can now be visually configured.',
    p2: 'Outline the key event properties and scope to create a single source of truth from day one.',
  },
  {
    id: 'plan',
    label: 'Plan',
    title: 'Plan',
    p1: 'Google docs and Notions get lost and outdated quickly.',
    p2: 'Generate live timelines with phases, tasks, assignees, and a clear view of task priority.',
  },
  {
    id: 'collaborate',
    label: 'Collaborate',
    title: 'Collaborate',
    p1: 'Wasted time and double work comes from disparate, disconnected communications.',
    p2: 'Maintain a clear view of statuses and work alongside your teammates and agents to move the event forward.',
  },
];

export function ExecutionSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll listener to update active tab smoothly
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const viewportCenter = window.innerHeight * 0.45;
      let currentIdx = 0;

      sectionRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter) {
          currentIdx = idx;
        }
      });

      setActiveTab(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-white text-neutral-900 font-['DM_Sans'] pt-14 sm:pt-20 pb-24 sm:pb-32 px-4 sm:px-6 md:px-10 border-t border-neutral-200/80 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-neutral-950">
            One place to execute, together.
          </h2>
          <button
            type="button"
            className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-neutral-950 text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors shadow-xs"
          >
            Get early access
          </button>
        </div>

        {/* Main Content Layout: Left Scrollable Narrative & Right Sticky Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* Left Column: 3 Progressive Subsections */}
          <div className="lg:col-span-4 flex flex-col space-y-36 sm:space-y-48 py-6">
            {subsections.map((sub, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={sub.id}
                  ref={(el) => { sectionRefs.current[index] = el; }}
                  className="min-h-[220px] flex flex-col justify-center transition-all duration-300"
                >
                  {/* Subtle navigation indicator for inactive items */}
                  <div className="space-y-4">
                    {subsections.map((item, i) => {
                      if (i === index) {
                        return (
                          <div key={item.id} className="pt-2">
                            <h3 className="text-2xl sm:text-[26px] font-medium text-neutral-950 tracking-tight mb-4">
                              {item.title}
                            </h3>
                            <p className="text-sm sm:text-[15px] text-neutral-600 font-normal leading-relaxed mb-4 max-w-sm">
                              {item.p1}
                            </p>
                            <p className="text-sm sm:text-[15px] text-neutral-600 font-normal leading-relaxed max-w-sm">
                              {item.p2}
                            </p>
                          </div>
                        );
                      }
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => scrollToStep(i)}
                          className="block text-left text-xl sm:text-[22px] font-medium text-neutral-300 hover:text-neutral-500 transition-colors cursor-pointer py-1"
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Luminous Canvas */}
          <div className="lg:col-span-8 sticky top-20 sm:top-24 w-full">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/70 shadow-[0_16px_50px_rgba(0,0,0,0.06)] min-h-[480px] sm:min-h-[580px] flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-[#cbe7f7] via-[#d6ecfa] to-[#d8f2eb]">
              
              {/* Soft atmospheric noise / light clouds background */}
              <div
                className="absolute inset-0 opacity-65 mix-blend-soft-light pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 40%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 60%, transparent 100%), radial-gradient(circle at 10% 20%, rgba(214,240,200,0.5) 0%, transparent 50%)`,
                }}
              />

              <AnimatePresence mode="wait">
                {/* 1. DEFINE MOCKUP: Mind Map Graph */}
                {activeTab === 0 && (
                  <motion.div
                    key="define-canvas"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative z-10 w-full max-w-2xl py-4"
                  >
                    <div className="flex items-center justify-center gap-4 sm:gap-6">
                      
                      {/* Root Node */}
                      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.07)] flex items-center gap-3.5 shrink-0">
                        <div className="w-9 h-9 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-base">
                          🎟️
                        </div>
                        <div>
                          <div className="text-xs sm:text-[13px] font-bold text-neutral-950">
                            V2 Launch
                          </div>
                          <div className="text-[10.5px] text-neutral-400 font-normal">
                            NYC Tech Week • Jun 8–12
                          </div>
                        </div>
                      </div>

                      {/* SVG Branch Connecting Lines */}
                      <div className="relative flex items-center">
                        <svg
                          className="w-8 sm:w-12 h-64 text-neutral-300/80 stroke-current fill-none"
                          viewBox="0 0 48 240"
                        >
                          {/* Branch curves from center left to 4 destinations */}
                          <path d="M 0 120 C 24 120, 24 30, 48 30" strokeWidth="1.5" />
                          <path d="M 0 120 C 24 120, 24 90, 48 90" strokeWidth="1.5" />
                          <path d="M 0 120 C 24 120, 24 150, 48 150" strokeWidth="1.5" />
                          <path d="M 0 120 C 24 120, 24 210, 48 210" strokeWidth="1.5" />
                        </svg>
                      </div>

                      {/* Category Nodes Column */}
                      <div className="flex flex-col gap-3 sm:gap-3.5 shrink-0">
                        
                        {/* 1. Venue with sub-items */}
                        <div className="flex items-center gap-3">
                          <div className="bg-white rounded-xl px-4 py-2.5 border border-neutral-100 shadow-xs flex items-center gap-2 text-xs font-semibold text-neutral-800 min-w-[125px]">
                            <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                            <span>Venue</span>
                          </div>

                          <svg className="w-5 h-12 text-neutral-300/80 stroke-current fill-none" viewBox="0 0 20 48">
                            <path d="M 0 24 C 10 24, 10 10, 20 10" strokeWidth="1.2" />
                            <path d="M 0 24 C 10 24, 10 38, 20 38" strokeWidth="1.2" />
                          </svg>

                          <div className="flex flex-col gap-1.5">
                            <div className="bg-white/95 rounded-lg px-3 py-1.5 border border-neutral-100 shadow-2xs text-[11px] text-neutral-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full border border-neutral-400"></span>
                              The Glasshouse
                            </div>
                            <div className="bg-white/95 rounded-lg px-3 py-1.5 border border-neutral-100 shadow-2xs text-[11px] text-neutral-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full border border-neutral-400"></span>
                              AV &amp; production
                            </div>
                          </div>
                        </div>

                        {/* 2. Speakers with sub-items */}
                        <div className="flex items-center gap-3">
                          <div className="bg-white rounded-xl px-4 py-2.5 border border-neutral-100 shadow-xs flex items-center gap-2 text-xs font-semibold text-neutral-800 min-w-[125px]">
                            <Volume2 className="w-3.5 h-3.5 text-neutral-600" />
                            <span>Speakers</span>
                          </div>

                          <svg className="w-5 h-12 text-neutral-300/80 stroke-current fill-none" viewBox="0 0 20 48">
                            <path d="M 0 24 C 10 24, 10 10, 20 10" strokeWidth="1.2" />
                            <path d="M 0 24 C 10 24, 10 38, 20 38" strokeWidth="1.2" />
                          </svg>

                          <div className="flex flex-col gap-1.5">
                            <div className="bg-white/95 rounded-lg px-3 py-1.5 border border-neutral-100 shadow-2xs text-[11px] text-neutral-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full border border-neutral-400"></span>
                              Keynote: Ana Wu
                            </div>
                            <div className="bg-white/95 rounded-lg px-3 py-1.5 border border-neutral-100 shadow-2xs text-[11px] text-neutral-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full border border-neutral-400"></span>
                              Panel lineup
                            </div>
                          </div>
                        </div>

                        {/* 3. Catering with sub-items */}
                        <div className="flex items-center gap-3">
                          <div className="bg-white rounded-xl px-4 py-2.5 border border-neutral-100 shadow-xs flex items-center gap-2 text-xs font-semibold text-neutral-800 min-w-[125px]">
                            <Utensils className="w-3.5 h-3.5 text-neutral-600" />
                            <span>Catering</span>
                          </div>

                          <svg className="w-5 h-6 text-neutral-300/80 stroke-current fill-none" viewBox="0 0 20 24">
                            <path d="M 0 12 L 20 12" strokeWidth="1.2" />
                          </svg>

                          <div className="bg-white/95 rounded-lg px-3 py-1.5 border border-neutral-100 shadow-2xs text-[11px] text-neutral-700 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full border border-neutral-400"></span>
                            Vendor quotes
                          </div>
                        </div>

                        {/* 4. Design assets with sub-items */}
                        <div className="flex items-center gap-3">
                          <div className="bg-white rounded-xl px-4 py-2.5 border border-neutral-100 shadow-xs flex items-center gap-2 text-xs font-semibold text-neutral-800 min-w-[125px]">
                            <Palette className="w-3.5 h-3.5 text-neutral-600" />
                            <span>Design assets</span>
                          </div>

                          <svg className="w-5 h-12 text-neutral-300/80 stroke-current fill-none" viewBox="0 0 20 48">
                            <path d="M 0 24 C 10 24, 10 10, 20 10" strokeWidth="1.2" />
                            <path d="M 0 24 C 10 24, 10 38, 20 38" strokeWidth="1.2" />
                          </svg>

                          <div className="flex flex-col gap-1.5">
                            <div className="bg-white/95 rounded-lg px-3 py-1.5 border border-neutral-100 shadow-2xs text-[11px] text-neutral-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full border border-neutral-400"></span>
                              Stage screens
                            </div>
                            <div className="bg-white/95 rounded-lg px-3 py-1.5 border border-neutral-100 shadow-2xs text-[11px] text-neutral-700 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full border border-neutral-400"></span>
                              Social kit
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                )}

                {/* 2. PLAN MOCKUP: Live Timeline with Priority & Assignees */}
                {activeTab === 1 && (
                  <motion.div
                    key="plan-canvas"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative z-10 w-full max-w-xl"
                  >
                    {/* Header Timeline Range Bar */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[11px] font-semibold text-neutral-500 shrink-0">
                        Jun 1
                      </span>
                      <div className="h-4 w-px bg-neutral-300/80"></div>
                      
                      <div className="flex-1 bg-white rounded-2xl p-3.5 sm:p-4 border border-neutral-100 shadow-[0_6px_24px_rgba(0,0,0,0.06)] flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-dashed border-sky-500"></div>
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-900">
                          Logistics Planning
                        </span>
                      </div>

                      <div className="h-4 w-px bg-neutral-300/80"></div>
                      <span className="text-[11px] font-semibold text-neutral-500 shrink-0">
                        Jul 1
                      </span>
                    </div>

                    {/* Timeline Task Rows */}
                    <div className="space-y-3.5 pl-6 sm:pl-10">
                      
                      {/* Task 1 */}
                      <div className="flex items-center justify-between text-xs sm:text-[13px]">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-2 border-amber-500"></div>
                          {/* Priority Signal */}
                          <div className="flex items-end gap-0.5 h-3">
                            <span className="w-0.5 h-1 bg-neutral-800 rounded-full"></span>
                            <span className="w-0.5 h-2 bg-neutral-800 rounded-full"></span>
                            <span className="w-0.5 h-3 bg-neutral-800 rounded-full"></span>
                          </div>
                          <span className="font-medium text-neutral-800">Find hotel</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 bg-white/90 rounded-full px-2.5 py-1 border border-neutral-100 shadow-2xs">
                            <img
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80"
                              alt="Ash"
                              className="w-4 h-4 rounded-full object-cover"
                            />
                            <span className="text-[11px] font-medium text-neutral-700">Ash</span>
                          </div>
                          <span className="text-[11px] text-neutral-600 font-medium w-12 text-right">
                            Jun 9
                          </span>
                        </div>
                      </div>

                      {/* Task 2 */}
                      <div className="flex items-center justify-between text-xs sm:text-[13px]">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-2 border-dashed border-sky-500"></div>
                          {/* Priority Signal */}
                          <div className="flex items-end gap-0.5 h-3">
                            <span className="w-0.5 h-1 bg-neutral-800 rounded-full"></span>
                            <span className="w-0.5 h-2 bg-neutral-800 rounded-full"></span>
                            <span className="w-0.5 h-1.5 bg-neutral-300 rounded-full"></span>
                          </div>
                          <span className="font-medium text-neutral-800">Book venue walkthrough</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 bg-white/90 rounded-full px-2.5 py-1 border border-neutral-100 shadow-2xs">
                            <img
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80"
                              alt="Scott"
                              className="w-4 h-4 rounded-full object-cover"
                            />
                            <span className="text-[11px] font-medium text-neutral-700">Scott</span>
                          </div>
                          <span className="text-[11px] text-neutral-600 font-medium w-12 text-right">
                            Jun 12
                          </span>
                        </div>
                      </div>

                      {/* Task 3 */}
                      <div className="flex items-center justify-between text-xs sm:text-[13px]">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-2 border-dashed border-sky-500"></div>
                          {/* Priority Signal */}
                          <div className="flex items-end gap-0.5 h-3">
                            <span className="w-0.5 h-1 bg-neutral-800 rounded-full"></span>
                            <span className="w-0.5 h-2 bg-neutral-800 rounded-full"></span>
                            <span className="w-0.5 h-3 bg-neutral-800 rounded-full"></span>
                          </div>
                          <span className="font-medium text-neutral-800">Confirm catering order</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 bg-white/90 rounded-full px-2.5 py-1 border border-neutral-100 shadow-2xs">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80"
                              alt="Tessa"
                              className="w-4 h-4 rounded-full object-cover"
                            />
                            <span className="text-[11px] font-medium text-neutral-700">Tessa</span>
                          </div>
                          <span className="text-[11px] text-neutral-600 font-medium w-12 text-right">
                            Jun 16
                          </span>
                        </div>
                      </div>

                      {/* Task 4 */}
                      <div className="flex items-center justify-between text-xs sm:text-[13px]">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-2 border-dotted border-neutral-400"></div>
                          {/* Priority Signal */}
                          <div className="flex items-end gap-0.5 h-3">
                            <span className="w-0.5 h-1 bg-neutral-800 rounded-full"></span>
                            <span className="w-0.5 h-2 bg-neutral-800 rounded-full"></span>
                            <span className="w-0.5 h-1.5 bg-neutral-300 rounded-full"></span>
                          </div>
                          <span className="font-medium text-neutral-800">Reserve AV equipment</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1.5 bg-white/90 rounded-full px-2.5 py-1 border border-neutral-100 shadow-2xs">
                            <img
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80"
                              alt="Scott"
                              className="w-4 h-4 rounded-full object-cover"
                            />
                            <span className="text-[11px] font-medium text-neutral-700">Scott</span>
                          </div>
                          <span className="text-[11px] text-neutral-600 font-medium w-12 text-right">
                            Jun 19
                          </span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* 3. COLLABORATE MOCKUP: Agent Chat Stream with Book Actions */}
                {activeTab === 2 && (
                  <motion.div
                    key="collaborate-canvas"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative z-10 w-full max-w-lg bg-white rounded-3xl p-5 sm:p-6 border border-neutral-100 shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Prompt Snippet */}
                      <div className="mb-4 opacity-50 text-[11px] text-neutral-500 font-medium flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded text-[10px] font-semibold">
                          @agent
                        </span>
                        <span>Can you find similar options?</span>
                      </div>

                      {/* Agent Response Header */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">
                          👾
                        </div>
                        <span className="text-xs font-bold text-neutral-900">
                          Agent
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          • Seconds ago
                        </span>
                      </div>

                      <p className="text-xs text-neutral-800 mb-4 font-normal">
                        Sure! Here are some similar options and their contact info...
                      </p>

                      {/* Hotel / Venue Cards List */}
                      <div className="space-y-3.5 pl-2 text-xs text-neutral-700">
                        {/* Hotel 1 */}
                        <div>
                          <div className="flex items-center gap-1.5 font-semibold text-neutral-900">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                            Cultural Center Hotel
                          </div>
                          <div className="pl-3 text-neutral-500 text-[11.5px] mt-0.5 space-y-0.5">
                            <div>• 18901 Huxton Road</div>
                            <div className="text-sky-600 underline font-medium">
                              • +353 87 109 8442
                            </div>
                            <button
                              type="button"
                              className="mt-1 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-[11px] font-medium transition-colors"
                            >
                              Book it
                            </button>
                          </div>
                        </div>

                        {/* Hotel 2 */}
                        <div>
                          <div className="flex items-center gap-1.5 font-semibold text-neutral-900">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                            Catalonia Portal de l&apos;Angel
                          </div>
                          <div className="pl-3 text-neutral-500 text-[11.5px] mt-0.5 space-y-0.5">
                            <div>• Portal de l&apos;Àngel, 17</div>
                            <div className="text-sky-600 underline font-medium">
                              • +34 93 318 41 41
                            </div>
                            <button
                              type="button"
                              className="mt-1 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-[11px] font-medium transition-colors"
                            >
                              Book it
                            </button>
                          </div>
                        </div>

                        {/* Hotel 3 */}
                        <div>
                          <div className="flex items-center gap-1.5 font-semibold text-neutral-900">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                            W Barcelona
                          </div>
                          <div className="pl-3 text-neutral-500 text-[11.5px] mt-0.5 space-y-0.5">
                            <div>• Plaça Rosa dels Vents, Ciutat Vellat</div>
                            <div className="text-sky-600 underline font-medium">
                              • +34 932 95 28 00
                            </div>
                            <button
                              type="button"
                              className="mt-1 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-[11px] font-medium transition-colors"
                            >
                              Book it
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Chat Input */}
                    <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs text-neutral-400 font-normal">
                        Leave a reply...
                      </span>
                      <div className="w-6 h-6 rounded-full bg-neutral-200/80 flex items-center justify-center text-neutral-500">
                        <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
