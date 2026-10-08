import React from 'react';

// AirPrompter Radial Spark Icon
export function AirPrompterLogo({ className = "h-6", theme = "dark" }: { className?: string; theme?: "dark" | "light" }) {
  const textColor = theme === "light" ? "text-neutral-950" : "text-white";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${textColor}`}
      >
        <line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="2" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="17" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="4.93" y1="4.93" x2="8.46" y2="8.46" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="15.54" y1="15.54" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="4.93" y1="19.07" x2="8.46" y2="15.54" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="15.54" y1="8.46" x2="19.07" y2="4.93" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className={`text-xl font-bold tracking-tight ${textColor} font-['DM_Sans']`}>
        AirPrompter
      </span>
    </div>
  );
}

// Partner Brand Logos (Optimized for light background)
export function VeedLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center text-neutral-800 ${className}`}>
      <span className="text-lg md:text-xl font-black tracking-wider uppercase font-['DM_Sans']">
        VEED
      </span>
    </div>
  );
}

export function AlanLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 text-neutral-800 ${className}`}>
      <div className="relative w-4 h-4 flex items-center justify-center">
        <span className="absolute -top-0.5 left-0 w-1 h-1 rounded-full bg-neutral-800"></span>
        <span className="absolute top-1 right-0.5 w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
        <span className="absolute bottom-0 left-1 w-1 h-1 rounded-full bg-neutral-800"></span>
      </div>
      <span className="text-lg md:text-xl font-bold tracking-tight lowercase font-['DM_Sans']">
        alan
      </span>
    </div>
  );
}

export function AttentionLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 text-neutral-800 ${className}`}>
      <div className="w-5 h-5 rounded bg-neutral-900 text-white flex items-center justify-center font-bold">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3 h-3 text-white"
        >
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
        </svg>
      </div>
      <span className="text-base md:text-lg font-semibold tracking-tight font-['DM_Sans']">
        Attention
      </span>
    </div>
  );
}

export function JellysmackLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 text-neutral-800 ${className}`}>
      <span className="text-sm md:text-base font-black tracking-widest uppercase font-['DM_Sans']">
        JELLYSMACK
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3 h-3 text-neutral-800"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </div>
  );
}

export function AircallLogo({ className = "h-5" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 text-neutral-800 ${className}`}>
      <div className="w-5 h-5 rounded-lg bg-neutral-200 border border-neutral-300 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3 h-3 text-neutral-800"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </div>
      <span className="text-base md:text-lg font-medium tracking-tight lowercase font-['DM_Sans']">
        aircall
      </span>
    </div>
  );
}

