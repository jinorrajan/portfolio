import { useState } from 'react';
import { NavTab } from '../types';
import { ASSETS } from '../data/portfolioData';
import { Menu, X, Smile } from 'lucide-react';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export default function Header({ currentTab, onSelectTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'experience', label: 'Experience' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#fffdfa]/95 backdrop-blur-md border-b-2 border-black">
      <div className="h-20 max-w-[1240px] mx-auto px-4 lg:px-10 flex items-center justify-between gap-2">
        {/* Brand Identity & Status */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 p-1 bg-white border-2 border-black shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000000] transition-all cursor-pointer text-left"
          >
            <span className="font-headline-sm text-[18px] font-bold text-black tracking-tight px-2 whitespace-nowrap">
              JINO R
            </span>
          </button>


        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap px-3 py-1 text-[14px] font-headline-sm cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#fae100] text-[#201c00] border-2 border-black shadow-[2px_2px_0px_#000000] font-bold'
                    : 'border border-transparent text-[#444748] hover:border-black hover:bg-white hover:text-[#1b1c19]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA & Profile Avatar */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1.5 bg-[#fae100] text-[#201c00] font-headline-sm font-bold text-[14px] px-4 py-2 border-2 border-black shadow-[3px_3px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <span className="font-bold text-[16px]">→</span>
          </button>

          {/* Profile Photo with Washi Tape */}
          <div
            onClick={() => handleNavClick('about')}
            title="View Jino's profile"
            className="relative p-0.5 bg-white border-2 border-black rotate-[-2deg] shadow-[2px_2px_0px_#000000] cursor-pointer hover:rotate-0 transition-transform hidden sm:block"
          >
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-[#e3e3de]/80 border-l border-r border-[#c4c7c7] -rotate-2 pointer-events-none"></div>
            <div className="w-8 h-8 flex items-center justify-center bg-[#fae100]">
              <Smile size={20} className="text-black" />
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-white border-2 border-black shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="w-full bg-[#efeee9] border-t-2 border-black overflow-hidden py-1.5 flex" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 px-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-black font-label-badge text-[11px] font-bold">
                OPEN TO NEW WORK &amp; GOOD PROBLEMS
              </span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 px-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-black font-label-badge text-[11px] font-bold">
                OPEN TO NEW WORK &amp; GOOD PROBLEMS
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-black bg-[#faf9f4] p-4 shadow-[0_10px_0px_#000000]">

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-[14px] font-headline-sm text-left cursor-pointer transition-all ${
                    isActive
                      ? 'bg-[#fae100] text-[#201c00] border-2 border-black shadow-[2px_2px_0px_#000000] font-bold'
                      : 'bg-white border-2 border-black text-[#1b1c19] hover:bg-[#efeee9]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
