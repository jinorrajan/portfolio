import { useState } from 'react';
import { NavTab } from '../../types';
import { ASSETS, TOOLKIT } from '../../data/portfolioData';
import { FileText, Check, Laptop, Terminal, Sparkles, ExternalLink } from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export default function AboutScreen({ onNavigate }: AboutScreenProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadResume = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1240px] w-full mx-auto px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-black pb-3">
          <div>
            <span className="font-label-badge text-[11px] uppercase tracking-widest text-[#444748] font-bold">
              Background &amp; Philosophy
            </span>
            <h1 className="font-headline-lg text-black uppercase font-bold tracking-tight">
              About Jino R
            </h1>
          </div>
          <span className="font-label-code text-[12px] text-[#444748]">
            // dossier_id::JR_ENG_2026
          </span>
        </div>

        {/* Main Dossier Card */}
        <section className="relative w-full border-2 border-black bg-white p-6 sm:p-10 shadow-[6px_6px_0px_#000000]">
          {/* Top Folder Tab */}
          <div className="absolute -top-7 left-6 px-4 py-1 bg-white border-2 border-b-0 border-black font-label-badge text-[11px] text-black uppercase font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            ACTIVE DOSSIER
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Polaroid Frame with Stamp */}
            <div className="lg:col-span-4 flex flex-col items-center gap-4">
              <div className="relative p-3 pb-8 bg-white border-2 border-black shadow-[6px_6px_0px_#000000] rotate-[-2deg] hover:rotate-0 transition-transform duration-300 w-full max-w-[280px]">
                {/* Washi Tape */}
                <div className="absolute -top-3.5 left-6 w-24 h-6 bg-[#fffffa]/90 border-l border-r border-dashed border-gray-400 rotate-[-3deg] pointer-events-none shadow-sm"></div>

                <div className="relative w-full aspect-square border border-black overflow-hidden bg-[#e3e3de]">
                  <img
                    alt="Jino R Portrait"
                    className="w-full h-full object-cover"
                    src={ASSETS.polaroidPortrait}
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 text-white font-label-code text-[10px]">
                    PORTRAIT::HQ
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between font-label-code text-[11px] text-black font-semibold">
                  <span>Jino R. [Product Eng]</span>
                  <span className="text-[#444748]">Zeedz Innovations</span>
                </div>
              </div>

              {/* Status Stamp Card */}
              <div className="w-full max-w-[280px] p-3 bg-[#efeee9] border-2 border-black shadow-[3px_3px_0px_#000000] flex flex-col gap-1 text-[12px] font-label-code">
                <div className="flex justify-between border-b border-black/10 pb-1 font-bold">
                  <span>LOCATION:</span>
                  <span className="text-black">Chennai, India &amp; Remote</span>
                </div>
                <div className="flex justify-between border-b border-black/10 py-1 font-bold">
                  <span>EXPERTISE:</span>
                  <span className="text-black">Mobile + Backend Systems</span>
                </div>
                <div className="flex justify-between pt-1 font-bold">
                  <span>AVAILABILITY:</span>
                  <span className="text-emerald-700">Open to Select Ventures</span>
                </div>
              </div>

              {/* Resume Action */}
              <button
                onClick={handleDownloadResume}
                className="w-full max-w-[280px] flex items-center justify-center gap-2 px-4 py-2.5 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                {downloaded ? (
                  <>
                    <Check size={16} />
                    <span>Dossier Dispatched!</span>
                  </>
                ) : (
                  <>
                    <FileText size={16} />
                    <span>Download CV / Resume</span>
                  </>
                )}
              </button>
            </div>

            {/* Right: Narrative & Engineering Story */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#ffe500] border border-black font-headline-sm text-[16px] text-[#201c00] font-bold">
                  The Product Engineer Thesis
                </span>
                <span className="font-label-code text-[11px] text-[#444748]">// why silos fail</span>
              </div>

              <div className="font-body-lg text-[#1b1c19] space-y-4 leading-relaxed">
                <p>
                  Most software teams suffer from the chasm between frontend artists and backend architects:
                  client engineers complain about inflexible endpoints, while backend engineers don’t appreciate
                  frame drops and tactile gesture physics.
                </p>
                <p>
                  I position myself right in the middle as a <strong className="text-black">Product Engineer</strong>.
                  My foundation was built deeply in cross-platform mobile engineering with Flutter, mastering reactive
                  state machines, frame-rate consistency, and native operating system platform channels.
                </p>
                <p>
                  To deliver true zero-to-one velocity, I expanded into Go backend services, distributed messaging,
                  PostgreSQL database modeling, and automated cloud deployments. This allows me to take an abstract
                  product requirement and deliver the entire working pipeline — from the tactile touch target on an
                  iPhone to the gRPC event streaming through Redis into an indexed database.
                </p>
              </div>

              {/* Current Role Callout */}
              <div className="p-4 bg-[#efeee9] border-2 border-black shadow-[3px_3px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="font-label-badge text-[10px] text-[#444748] uppercase font-bold">
                    CURRENT COMMITMENT
                  </div>
                  <div className="font-headline-md text-[18px] text-black font-bold">
                    Product Engineer at Zeedz Innovations
                  </div>
                  <p className="font-body-sm text-[13px] text-[#444748] mt-0.5">
                    Engineering mobile client architecture, backend synchronization, and feature delivery for sustainable digital gaming.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('experience')}
                  className="shrink-0 px-3 py-1.5 bg-white border border-black font-headline-sm text-[13px] font-bold text-black shadow-[2px_2px_0px_#000000] hover:bg-[#fae100] cursor-pointer"
                >
                  View Timeline →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Principles */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b-2 border-black pb-2">
            <h2 className="font-headline-lg text-black uppercase font-bold tracking-tight">
              Core Principles
            </h2>
            <span className="font-label-code text-[11px] text-[#444748]">
              // standard_operating_doctrine
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#fae100] border border-black font-label-code text-[12px] font-bold">
                  01
                </span>
                <h3 className="font-headline-sm text-[17px] font-bold text-black">
                  Zero Vanity Code
                </h3>
              </div>
              <p className="font-body-md text-[#444748] leading-relaxed">
                Code that does not directly validate a business assumption, secure data, or delight an active user is structural debt. Architecture should be minimal, modular, and easy to delete.
              </p>
            </div>

            <div className="p-5 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#b4c5ff] border border-black font-label-code text-[12px] font-bold">
                  02
                </span>
                <h3 className="font-headline-sm text-[17px] font-bold text-black">
                  Physical Tactility Over Generic SaaS
                </h3>
              </div>
              <p className="font-body-md text-[#444748] leading-relaxed">
                Users don’t remember sterile software. Interfaces need mathematical weight, tactile feedback, crisp typography, and responsive micro-interactions that feel crafted by human hands.
              </p>
            </div>

            <div className="p-5 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#a7f3d0] border border-black font-label-code text-[12px] font-bold">
                  03
                </span>
                <h3 className="font-headline-sm text-[17px] font-bold text-black">
                  Concurrency Must Be Proven Under Load
                </h3>
              </div>
              <p className="font-body-md text-[#444748] leading-relaxed">
                A system that functions for 10 concurrent requests can completely collapse under 1,000 without geofencing, Redis buffering, and idempotent database transactions. Test for the peak hour.
              </p>
            </div>

            <div className="p-5 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#ffdad6] border border-black font-label-code text-[12px] font-bold">
                  04
                </span>
                <h3 className="font-headline-sm text-[17px] font-bold text-black">
                  Continuous Automated Release Trains
                </h3>
              </div>
              <p className="font-body-md text-[#444748] leading-relaxed">
                Manual app store deployments and untested server SSH updates breed fear. Fastlane pipelines, Dockerized containers, and health check monitors empower shipping with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Toolkit */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b-2 border-black pb-2">
            <h2 className="font-headline-lg text-black uppercase font-bold tracking-tight">
              Technical Stack &amp; Arsenal
            </h2>
            <span className="font-label-code text-[11px] text-[#444748]">
              // production_verified
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TOOLKIT.map((tk, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-3"
              >
                <div className="font-headline-sm text-[15px] font-bold text-black uppercase border-b-2 border-black pb-1.5 flex items-center gap-2">
                  <Terminal size={16} />
                  {tk.category}
                </div>
                <div className="flex flex-col gap-1.5 font-label-code text-[12px] text-[#1b1c19]">
                  {tk.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workstation & Desk Gear */}
        <section className="p-6 bg-[#efeee9] border-2 border-black shadow-[5px_5px_0px_#000000] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Laptop size={20} className="text-black" />
            <h2 className="font-headline-sm text-[18px] font-bold text-black uppercase">
              Engineering Workstation &amp; Rig
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-label-code text-[12px]">
            <div className="p-3 bg-white border border-black">
              <div className="font-bold text-black">COMPUTE</div>
              <div className="text-[#444748]">Apple Silicon M-Series MacBook Pro 32GB + Linux Ubuntu Server</div>
            </div>
            <div className="p-3 bg-white border border-black">
              <div className="font-bold text-black">PERIPHERALS</div>
              <div className="text-[#444748]">Custom Mechanical Keyboard (Tactile 65g switches), 4K Color-Accurate Display</div>
            </div>
            <div className="p-3 bg-white border border-black">
              <div className="font-bold text-black">EDITORS &amp; DEVTOOLS</div>
              <div className="text-[#444748]">VS Code, Android Studio, Xcode, TablePlus, Postman, Docker Desktop</div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-black">
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 bg-white border-2 border-black font-headline-sm text-[14px] text-black shadow-[2px_2px_0px_#000000] hover:bg-[#efeee9] cursor-pointer"
          >
            ← Back to Home
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('services')}
              className="px-4 py-2 bg-white border-2 border-black font-headline-sm text-[14px] font-bold text-black shadow-[2px_2px_0px_#000000] hover:bg-[#fae100] cursor-pointer"
            >
              Explore Services →
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
