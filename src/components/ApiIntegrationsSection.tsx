import React from 'react';
import { motion } from 'motion/react';
import { Radio } from 'lucide-react';

interface IntegrationCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const integrationsList: IntegrationCard[] = [
  {
    id: 'analytics',
    tag: '{Analytics}',
    title: 'Stream events to Segment',
    description: 'Track conversations, drop-offs, and send custom telemetry to downstream tools.',
    icon: (
      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
        <Radio className="w-4 h-4 text-emerald-400" />
      </div>
    ),
  },
  {
    id: 'zendesk',
    tag: '{CRM}',
    title: 'Dynamic Carousel using Zendesk Help Center Articles',
    description: 'Ship a dynamic carousel with Zendesk Help Center articles and resolution flows.',
    icon: (
      <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-400">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
        </svg>
      </div>
    ),
  },
  {
    id: 'twilio',
    tag: '{SMS}',
    title: 'Send a SMS message via Twilio',
    description: "Send a SMS message to a specified phone number using Twilio's messaging service.",
    icon: (
      <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center">
        <div className="w-3.5 h-3.5 rounded-full border-2 border-red-500 flex items-center justify-center">
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    id: 'webchat',
    tag: '{Webchat UI Kit}',
    title: 'Customize Webchat UI',
    description: "Use our web chat UI Kit to customize the web chat widget interface for your agent.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
        <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
        </svg>
      </div>
    ),
  },
  {
    id: 'salesforce',
    tag: '{CRM}',
    title: 'Connect with Salesforce',
    description: 'Connect your Salesforce to power your agent responses, logic, records, and analytics.',
    icon: (
      <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
        <span className="text-[10px] font-bold text-sky-400 tracking-tighter italic">sf</span>
      </div>
    ),
  },
  {
    id: 'shopify',
    tag: '{E-commerce}',
    title: 'Integrate with Shopify Plus',
    description: 'Connect your Shopify store to enable product catalog lookups, tracking, and customer orders.',
    icon: (
      <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
        <span className="text-[10px] font-bold text-emerald-400 font-mono">shop</span>
      </div>
    ),
  },
];

const asciiArtLines = [
  "            ....",
  "        -++#%%##+=:.",
  "     -+@@@@@@@@%%%##+=:.",
  "   :#@@@@@@@@@@@@@%%%#++=:",
  "  +@@@@@@@@@@@@@@@@%%%##==::.",
  " +@@@@@@@@@@@@@@@@@@@%%%#++++-:",
  "=@@@@@@%%#%#%%#@@@@@@%%%##+===:.",
  "%@@@%%#*==========*%%%###+===",
  "-@@@%%#***-:     :*%%%%%%%%#**+===:.",
  "-+@@%%%%#***-==++#%%%%%*#%%%%%%%%#*+=:       -:.",
  "+@@%%%%#***%%%%%%%#*+*#%%%%%%%%#**+=-.    =+=--:.",
  "+@@%%%%%#%#%%%%%%#*+*#%%%%%%%%%#***+-.  -#%%%%+=-.",
  "-@@@%%@@%%%%%#*+===+*#%%%%%%%%%#****=:-###*+==:",
  ":@@@@@@%%%%%#*+===--*%%%%%%%%#*+=-: :#####*+=-:.",
  " #@@@@%#%%%%%*+==-::   :%@%%%%#*+=-: :#####*+=-:.",
  " :#@@%%%%%%#**+=--:.     +@%%%%%#*+=-::*#####*+=-:.",
  " -@@@@%%####*+=-:         *%%%%%###+=-: -=+#####*+=-:.",
  " -@@@@%%%#*++=-:          +#%%%%%##*+=-: -==+####*+=-:.",
  " :@@@@%%%##*++==-:       .-+#%%####*+=-: -==++###**+=-:.",
  " #@@@%%@%##*+=-:-*#+=---:   ==+#####*+=-: -==++##%#**+=-:.",
  " :@@@@%%%#*++=-: :###*+==--::..:=*#####*+==+*%@@@@%#**+=-:.",
  " -@@@%%%%#*+=-:  +#####***+==-::..: -==+*#%@@@@@@%%%#**+=-:.",
  " -@@%%%%#*+=-:   =+#*++==--=+###%%@@@@@@@@%%%%%#*+=-:.",
  " :%%%%##*+=-:    :+#*********%@@@@@@@@@@%%%%%#**+=-:.",
  " %%%###*+=-:..    :=+########%@@@@@@@@@@%%%###*+=-:.",
];

export function ApiIntegrationsSection() {
  return (
    <section className="w-full bg-[#050507] text-white font-['DM_Sans'] pt-20 sm:pt-28 pb-20 sm:pb-28 border-t border-neutral-800/80 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Top Split Section: Narrative & ASCII Code Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 sm:pb-24">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                P
              </div>
              <span className="text-sm font-medium text-blue-400 tracking-tight">
                Integrations
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white leading-[1.2] max-w-xl">
              Browse 1,320 Reusable Prompts Shared by Creators
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-lg">
              Explore community-built prompt systems, execution templates, and reusable workflows designed for real-world AI tasks across every domain.
            </p>
          </div>

          {/* Right Column: ASCII Art Cloud / Globe Matrix */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden group">
              
              {/* Subtle blue accent glow inside ASCII box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-[50px] pointer-events-none" />

              <pre className="font-mono text-[10px] sm:text-[11px] leading-[1.15] text-blue-400/85 select-none tracking-tighter opacity-90 transition-opacity group-hover:text-blue-300">
                {asciiArtLines.join('\n')}
              </pre>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Full-Width Horizontal Grid Divider */}
      <div className="w-full border-t border-dashed border-neutral-800/90 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          
          {/* Integration Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-neutral-800/80 border-b border-dashed border-neutral-800/90">
            {integrationsList.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-5 flex flex-col justify-between group hover:bg-neutral-900/30 transition-colors duration-200"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    {item.icon}
                    <span className="text-[11px] font-mono text-neutral-400 bg-neutral-900/80 border border-neutral-800 px-2 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-neutral-100 group-hover:text-white leading-snug mb-2">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
