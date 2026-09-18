import { useState } from 'react';
import { NavTab } from '../../types';
import { SERVICES } from '../../data/portfolioData';
import { Check, ArrowRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

interface ServicesScreenProps {
  onNavigate: (tab: NavTab) => void;
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export default function ServicesScreen({ onNavigate, onSelectServiceForInquiry }: ServicesScreenProps) {
  const [activeTabId, setActiveTabId] = useState<string>('mobile-apps');

  const selectedService = SERVICES.find((s) => s.id === activeTabId) || SERVICES[0];

  const handleInquire = (title: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(title);
    }
    onNavigate('contact');
  };

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1240px] w-full mx-auto px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-black pb-3">
          <div>
            <span className="font-label-badge text-[11px] uppercase tracking-widest text-[#444748] font-bold">
              Product Engineering Offerings
            </span>
            <h1 className="font-headline-lg text-black uppercase font-bold tracking-tight">
              Services &amp; Capabilities
            </h1>
          </div>
          <span className="font-label-code text-[12px] text-[#444748]">
            // 0-to-1 build &amp; scale capabilities
          </span>
        </div>

        {/* Lead Explainer */}
        <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-2xl">
            <div className="font-headline-sm text-[18px] font-bold text-black uppercase">
              End-to-End Execution Without Agency Overhead
            </div>
            <p className="font-body-md text-[#444748] mt-1 leading-relaxed">
              Whether you are an early-stage founder needing a production MVP launched in 4 weeks, or an established company untangling high-concurrency bottlenecks, you work directly with me. No project manager telephone games.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-5 py-2.5 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
          >
            Start an Inquiry →
          </button>
        </div>

        {/* Modular Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {SERVICES.map((srv) => {
            const isActive = srv.id === activeTabId;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveTabId(srv.id)}
                className={`p-3 border-2 border-black text-left flex flex-col justify-between transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#fae100] text-black shadow-[4px_4px_0px_#000000] translate-x-[-1px] translate-y-[-1px] font-bold'
                    : 'bg-white text-[#444748] shadow-[2px_2px_0px_#000000] hover:bg-[#efeee9]'
                }`}
              >
                <div className="flex items-center justify-between text-[16px] mb-2">
                  <span>{srv.emoji}</span>
                  <span className="font-label-code text-[10px] uppercase font-bold">{srv.specCode}</span>
                </div>
                <div className="font-headline-sm text-[13px] leading-tight text-black font-bold line-clamp-2">
                  {srv.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Dossier */}
        <div className="relative bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#000000]">
          {/* Top color bar */}
          <div
            className="absolute top-0 left-0 right-0 h-3 border-b-2 border-black"
            style={{ backgroundColor: selectedService.accentColor }}
          ></div>

          <div className="pt-2 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black pb-4">
              <div className="flex items-center gap-3">
                <span
                  className="w-12 h-12 rounded border-2 border-black flex items-center justify-center font-display-xl text-[24px] text-black shadow-[3px_3px_0px_#000000]"
                  style={{ backgroundColor: selectedService.accentColor }}
                >
                  {selectedService.emoji}
                </span>
                <div>
                  <div className="font-label-badge text-[11px] text-[#444748] uppercase font-bold">
                    {selectedService.specCode} • {selectedService.subLabel}
                  </div>
                  <h2 className="font-headline-lg text-[26px] sm:text-[30px] font-bold text-black">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-[#efeee9] border border-black font-label-code text-[12px] font-bold">
                  TIMELINE: {selectedService.typicalTimeline}
                </div>
                <button
                  onClick={() => handleInquire(selectedService.title)}
                  className="px-4 py-2 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
                >
                  Request This Service →
                </button>
              </div>
            </div>

            <p className="font-body-lg text-[16px] text-[#1b1c19] leading-relaxed max-w-3xl">
              {selectedService.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="flex flex-col gap-3">
              <h3 className="font-headline-sm text-[16px] font-bold text-black uppercase flex items-center gap-2">
                <Layers size={18} />
                Tangible Deliverables &amp; Artifacts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="p-3 bg-[#f5f4ef] border border-black flex items-start gap-3 shadow-[2px_2px_0px_#000000]"
                  >
                    <Check size={16} className="text-black shrink-0 mt-0.5" />
                    <span className="font-body-md text-[14px] text-[#1b1c19] font-medium">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is this best for */}
            <div className="p-4 bg-[#efeee9] border-2 border-black shadow-[2px_2px_0px_#000000] flex flex-col gap-1">
              <div className="font-label-badge text-[11px] text-black uppercase font-bold flex items-center gap-1.5">
                <Sparkles size={14} className="text-black" />
                IDEAL CANDIDATE PROFILE
              </div>
              <p className="font-body-md text-[14px] text-[#444748] leading-relaxed">
                {selectedService.bestFor}
              </p>
            </div>
          </div>
        </div>

        {/* Engagement Models (3 Tiers) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b-2 border-black pb-2">
            <h2 className="font-headline-lg text-black uppercase font-bold tracking-tight">
              Engagement Models
            </h2>
            <span className="font-label-code text-[11px] text-[#444748]">
              // transparent collaboration
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Model 1 */}
            <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[10px] font-bold">
                    SPRINT
                  </span>
                  <span className="font-label-code text-[12px] text-[#444748]">3-5 Weeks</span>
                </div>
                <h3 className="font-headline-md text-black font-bold">
                  Zero-to-One MVP
                </h3>
                <p className="font-body-md text-[14px] text-[#444748] leading-relaxed">
                  Turn product briefs into a functional, published application with complete mobile frontends, database schema, and automated store deploy.
                </p>
                <ul className="font-body-sm text-[13px] text-[#1b1c19] space-y-1.5 pt-2 border-t border-black/10">
                  <li className="flex items-center gap-2">✓ Flutter iOS &amp; Android Client</li>
                  <li className="flex items-center gap-2">✓ Core API &amp; Auth Service</li>
                  <li className="flex items-center gap-2">✓ App Store &amp; Play Store release</li>
                </ul>
              </div>
              <button
                onClick={() => handleInquire('Zero-to-One MVP Sprint')}
                className="mt-6 w-full py-2 bg-white border-2 border-black font-headline-sm text-[14px] font-bold text-black shadow-[2px_2px_0px_#000000] hover:bg-[#fae100] cursor-pointer"
              >
                Inquire for MVP →
              </button>
            </div>

            {/* Model 2 */}
            <div className="p-6 bg-white border-2 border-black shadow-[6px_6px_0px_#000000] flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-4 px-3 py-0.5 bg-[#fae100] border-2 border-black font-label-badge text-[10px] font-bold uppercase shadow-sm">
                MOST POPULAR
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-[#a7f3d0] border border-black font-label-badge text-[10px] font-bold">
                    RETAINER
                  </span>
                  <span className="font-label-code text-[12px] text-[#444748]">Monthly</span>
                </div>
                <h3 className="font-headline-md text-black font-bold">
                  Dedicated Product Lead
                </h3>
                <p className="font-body-md text-[14px] text-[#444748] leading-relaxed">
                  Continuous engineering velocity for growing startups. Dedicated capacity for roadmap feature shipping, backend maintenance, and architecture reviews.
                </p>
                <ul className="font-body-sm text-[13px] text-[#1b1c19] space-y-1.5 pt-2 border-t border-black/10">
                  <li className="flex items-center gap-2">✓ Fullstack feature velocity</li>
                  <li className="flex items-center gap-2">✓ Priority bugfix turnaround</li>
                  <li className="flex items-center gap-2">✓ Weekly sprint syncs &amp; demos</li>
                </ul>
              </div>
              <button
                onClick={() => handleInquire('Dedicated Product Lead Retainer')}
                className="mt-6 w-full py-2 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
              >
                Inquire for Retainer →
              </button>
            </div>

            {/* Model 3 */}
            <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-[#b4c5ff] border border-black font-label-badge text-[10px] font-bold">
                    AUDIT
                  </span>
                  <span className="font-label-code text-[12px] text-[#444748]">1-2 Weeks</span>
                </div>
                <h3 className="font-headline-md text-black font-bold">
                  Architecture &amp; Performance Audit
                </h3>
                <p className="font-body-md text-[14px] text-[#444748] leading-relaxed">
                  Deep-dive code review of your existing Flutter client, Go backend, and database queries. Pinpointing memory leaks, latency spikes, and structural fragility.
                </p>
                <ul className="font-body-sm text-[13px] text-[#1b1c19] space-y-1.5 pt-2 border-t border-black/10">
                  <li className="flex items-center gap-2">✓ Frame-drop &amp; render audit</li>
                  <li className="flex items-center gap-2">✓ Concurrency &amp; lock analysis</li>
                  <li className="flex items-center gap-2">✓ Actionable remediation PRs</li>
                </ul>
              </div>
              <button
                onClick={() => handleInquire('Architecture & Performance Audit')}
                className="mt-6 w-full py-2 bg-white border-2 border-black font-headline-sm text-[14px] font-bold text-black shadow-[2px_2px_0px_#000000] hover:bg-[#fae100] cursor-pointer"
              >
                Inquire for Audit →
              </button>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="p-6 bg-[#fae100] border-2 border-black shadow-[6px_6px_0px_#000000] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-headline-md text-[20px] font-bold text-[#201c00]">
              Need a tailored engagement or custom scope?
            </div>
            <div className="font-body-sm text-[14px] text-[#6f6300]">
              Let’s schedule a 15-minute scoping call to review requirements and architectural feasibility.
            </div>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-6 py-3 bg-black text-white font-headline-sm text-[15px] font-bold border-2 border-black shadow-[3px_3px_0px_#ffffff] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
          >
            Start a Conversation →
          </button>
        </div>
      </div>
    </div>
  );
}
