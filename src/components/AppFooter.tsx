import React from 'react';
import { motion } from 'motion/react';

interface FooterLinkGroup {
  category: string;
  categoryColor: string;
  links: { label: string; href?: string }[];
}

const footerNavigation: FooterLinkGroup[] = [
  {
    category: 'PRODUCT',
    categoryColor: 'border-l-purple-500',
    links: [
      { label: 'Analytics' },
      { label: 'CRM' },
      { label: 'Events' },
      { label: 'Community Application' },
      { label: 'Community Page' },
    ],
  },
  {
    category: 'RESOURCES',
    categoryColor: 'border-l-blue-500',
    links: [
      { label: 'Slack Community' },
      { label: 'Blog' },
      { label: 'Events' },
    ],
  },
  {
    category: 'HELP',
    categoryColor: 'border-l-cyan-500',
    links: [
      { label: 'Help Center' },
      { label: 'Changelog' },
      { label: 'Request a feature' },
    ],
  },
  {
    category: 'COMPANY',
    categoryColor: 'border-l-orange-400',
    links: [
      { label: 'Pricing' },
      { label: 'Privacy Policy' },
    ],
  },
];

export function AppFooter({ onGetStarted, onBookDemo }: { onGetStarted?: () => void; onBookDemo?: () => void }) {
  return (
    <footer className="w-full bg-white text-neutral-900 font-['DM_Sans'] overflow-hidden">
      {/* Top CTA Banner: Deep Black Curved Arch Hero Container */}
      <div className="relative w-full bg-[#050507] text-white pt-20 sm:pt-28 pb-32 sm:pb-40 px-4 sm:px-6 md:px-8 overflow-hidden">
        
        {/* Subtle Ambient Background Wireframes / Grid Card Outlines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute left-1/2 -translate-x-1/2 top-8 w-[600px] h-[340px] border border-white/10 rounded-2xl" />
          <div className="absolute left-[15%] top-16 w-[360px] h-[260px] border border-white/10 rounded-2xl" />
          <div className="absolute right-[15%] top-16 w-[360px] h-[260px] border border-white/10 rounded-2xl" />
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[100px]" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Main Headline with Hero Typography & Properties */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[28px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-medium tracking-tight text-white max-w-3xl mx-auto leading-[1.14]"
          >
            While others experiment, build the machine.
          </motion.h2>

          {/* Action Button: Single 'Start building' CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-6 sm:mt-8 flex items-center justify-center"
          >
            <button
              type="button"
              onClick={onGetStarted}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] active:scale-95 cursor-pointer"
            >
              Start building
            </button>
          </motion.div>

        </div>

        {/* Crisp Curved Bottom Arch Mask Cutout */}
        <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-16 md:h-20 bg-white [clip-path:ellipse(65%_100%_at_50%_100%)] pointer-events-none" />
      </div>

      {/* Navigation Footer Links Section */}
      <div className="w-full bg-white pt-10 sm:pt-14 pb-12 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start pb-16">
            
            {/* Logo Column */}
            <div className="md:col-span-3 flex flex-col items-start">
              <div className="flex items-center gap-2.5">
                {/* Modern Brand Logo */}
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 p-[1.5px] flex items-center justify-center shadow-xs">
                  <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                    <span className="font-bold text-sm bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      T
                    </span>
                  </div>
                </div>
                <span className="text-lg font-bold tracking-tight text-neutral-950">
                  talkbase
                </span>
              </div>
            </div>

            {/* Navigation Link Columns */}
            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
              
              {/* Column 1: PRODUCT */}
              <div>
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-purple-500 inline-block" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                    PRODUCT
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {footerNavigation[0].links.map((link) => (
                    <li key={link.label}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-xs sm:text-[13px] text-neutral-600 hover:text-neutral-950 font-normal transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: RESOURCES */}
              <div>
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-blue-500 inline-block" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                    RESOURCES
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {footerNavigation[1].links.map((link) => (
                    <li key={link.label}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-xs sm:text-[13px] text-neutral-600 hover:text-neutral-950 font-normal transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: HELP */}
              <div>
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-cyan-500 inline-block" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                    HELP
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {footerNavigation[2].links.map((link) => (
                    <li key={link.label}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-xs sm:text-[13px] text-neutral-600 hover:text-neutral-950 font-normal transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: COMPANY */}
              <div>
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-orange-400 inline-block" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                    COMPANY
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {footerNavigation[3].links.map((link) => (
                    <li key={link.label}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-xs sm:text-[13px] text-neutral-600 hover:text-neutral-950 font-normal transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom Copyright and Social Icons Bar */}
          <div className="pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-normal">
            <div>
              &copy; {new Date().getFullYear()} Talkbase. All rights reserved.
            </div>

            {/* Social Links (LinkedIn, Twitter/X) */}
            <div className="flex items-center gap-4 text-neutral-400">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-neutral-700 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
                </svg>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-neutral-700 transition-colors p-1"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
