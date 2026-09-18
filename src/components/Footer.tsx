import { NavTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export default function Footer({ onSelectTab }: FooterProps) {
  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t-2 border-black bg-white">
      <div className="h-2 bg-[#fae100] border-b border-black"></div>
      <div className="max-w-[1240px] mx-auto px-4 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
          {/* Column 1: Bio & Badges */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-headline-lg text-[22px] font-bold text-black uppercase">
                Jino R
              </span>
              <span className="px-1.5 py-0.5 bg-black text-white font-label-badge text-[10px] uppercase font-bold">
                ENGINEER
              </span>
            </div>
            <p className="font-body-md text-[14px] text-[#1b1c19] max-w-md leading-relaxed">
              Inventive, detail-obsessed Product Engineer crafting mathematically sound client experiences,
              scalable backend microservices, and high-performance distributed systems.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#e9e8e3] border border-black font-label-badge text-[11px] text-black rotate-[-1deg] font-bold">
                ⚡ BUILT WITH CODE &amp; TACTILE CRAFT
              </span>
              <span className="px-3 py-1 bg-[#fae100] border border-black font-label-badge text-[11px] text-[#201c00] rotate-[1deg] font-bold">
                NO BORING AI TEMPLATES
              </span>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <div className="font-headline-sm text-[18px] text-black font-bold uppercase tracking-tight">
              Core Capabilities
            </div>
            <ul className="font-label-code text-[13px] text-[#444748] flex flex-col gap-1.5">
              <li className="flex items-center gap-2">
                <span className="text-black font-bold">●</span> Flutter &amp; Mobile Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black font-bold">●</span> Backend Microservices &amp; Go
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black font-bold">●</span> System Design &amp; Distributed Pipelines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-black font-bold">●</span> Tactile UI/UX &amp; Design Systems
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Connect */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <div className="font-headline-sm text-[18px] text-black font-bold uppercase tracking-tight">
              Direct Connect
            </div>
            <div className="flex flex-col gap-1.5 font-label-code text-[13px] text-[#444748]">
              <a
                className="hover:text-black hover:underline"
                href="https://www.linkedin.com/in/jino-r-020b8a235/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn: jino-r
              </a>
              <a
                className="hover:text-black hover:underline"
                href="https://github.com/jinorrajan"
                rel="noreferrer"
                target="_blank"
              >
                GitHub: @jinorrajan
              </a>
              <a
                className="hover:text-black hover:underline"
                href="mailto:jinorrajan@gmail.com"
              >
                Email: jinorrajan@gmail.com
              </a>
              <a
                className="hover:text-black hover:underline"
                href="tel:6369555984"
              >
                Tel: +91 6369555984
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and quick links */}
        <div className="pt-4 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-3 font-label-code text-[11px] text-[#444748]">
          <div>© 2026 Jino R. All rights reserved. Tactile Graph Edition.</div>
          <div className="flex gap-4">
            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-black underline cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className="hover:text-black underline cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('experience')}
              className="hover:text-black underline cursor-pointer"
            >
              Timeline
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-black underline cursor-pointer"
            >
              Terminal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
