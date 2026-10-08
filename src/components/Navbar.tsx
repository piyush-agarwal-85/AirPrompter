import React, { useState } from 'react';
import { AirPrompterLogo } from './Logos';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onSignIn?: () => void;
  onGetStarted?: () => void;
}

export function Navbar({ onSignIn, onGetStarted }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <header className="w-full max-w-5xl mx-auto px-4 pt-4 pb-2 z-30">
      {/* Translucent floating navigation pill matching reference image */}
      <div className="relative w-full rounded-2xl md:rounded-[20px] bg-neutral-800/60 backdrop-blur-md border border-white/15 px-4 md:px-6 py-2.5 flex items-center justify-between shadow-2xl transition-all">
        
        {/* Left: Logo */}
        <a href="#" className="flex items-center" aria-label="AirPrompter Home">
          <AirPrompterLogo className="h-5" />
        </a>

        {/* Center / Middle: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-[13px] font-normal text-white/80 hover:text-white transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onSignIn}
            className="px-4 py-1.5 rounded-full text-xs font-normal text-white bg-black/60 hover:bg-black/90 border border-white/10 transition-all duration-150 shadow-sm"
          >
            Sign in
          </button>
          <button
            onClick={onGetStarted}
            className="px-4 py-1.5 rounded-full text-xs font-medium text-black bg-white hover:bg-neutral-200 transition-all duration-150 shadow-sm"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-white hover:text-white/70 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 p-3.5 rounded-2xl bg-neutral-900/95 backdrop-blur-lg border border-white/15 flex flex-col gap-2.5 relative z-50 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-normal text-white/90 hover:text-white py-1 px-2 rounded-lg hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignIn?.();
              }}
              className="text-center py-2 text-xs font-normal text-white bg-black/70 border border-white/10 rounded-full"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetStarted?.();
              }}
              className="text-center py-2 text-xs font-medium text-black bg-white rounded-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
