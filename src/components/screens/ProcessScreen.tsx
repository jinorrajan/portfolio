import { useState } from 'react';
import { NavTab } from '../../types';
import { PROCESS_STEPS } from '../../data/portfolioData';
import { CheckSquare, Square, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProcessScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export default function ProcessScreen({ onNavigate }: ProcessScreenProps) {
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    spec: true,
    data: true,
    mobile: true,
    concurrency: true,
    ci: false,
    telemetry: false,
  });

  const toggleCheck = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const totalCount = Object.keys(checklist).length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1240px] w-full mx-auto px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-black pb-3">
          <div>
            <span className="font-label-badge text-[11px] uppercase tracking-widest text-[#444748] font-bold">
              Engineering Execution Lifecycle
            </span>
            <h1 className="font-headline-lg text-black uppercase font-bold tracking-tight">
              How I Build &amp; Ship
            </h1>
          </div>
          <span className="font-label-code text-[12px] text-[#444748]">
            // four_stage_delivery_pipeline
          </span>
        </div>

        {/* Lead Manifesto */}
        <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-2xl">
            <div className="font-headline-sm text-[18px] font-bold text-black uppercase">
              Predictable Velocity, Zero Magic
            </div>
            <p className="font-body-md text-[#444748] mt-1 leading-relaxed">
              Great software does not happen by accident. Every product follows a strict progression: eliminate ambiguity, get tactile builds into hands in week one, stress-test the backend, and automate store deployments.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-5 py-2.5 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
          >
            Start a Sprint →
          </button>
        </div>

        {/* 4 Phases Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative bg-white border-2 border-black p-6 shadow-[5px_5px_0px_#000000] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#fae100] border border-black font-label-code text-[12px] font-bold text-black">
                      PHASE {step.step}
                    </span>
                    <span className="font-label-code text-[11px] text-[#444748]">
                      {step.subtitle}
                    </span>
                  </div>
                </div>

                <h2 className="font-headline-md text-black font-bold text-[20px]">
                  {step.title}
                </h2>
                <p className="font-body-md text-[#444748] mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tangible Outputs */}
              <div className="mt-5 pt-3 border-t border-black/15">
                <div className="font-label-badge text-[10px] text-[#444748] uppercase font-bold mb-2">
                  Verified Outputs:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {step.outputs.map((out, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 bg-[#efeee9] border border-black font-label-code text-[11px] text-black font-medium"
                    >
                      • {out}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Production-Readiness Gatekeeper */}
        <section className="p-6 bg-white border-2 border-black shadow-[6px_6px_0px_#000000] flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black pb-3">
            <div>
              <div className="font-label-badge text-[11px] text-[#444748] uppercase font-bold">
                INTERACTIVE GATEKEEPER
              </div>
              <h3 className="font-headline-md text-[20px] font-bold text-black uppercase">
                Production Release Readiness Checklist
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-label-code text-[13px] font-bold text-black">
                SCORE: {completedCount}/{totalCount} ({percentage}%)
              </span>
              <div className="w-28 h-4 bg-[#efeee9] border border-black overflow-hidden p-0.5">
                <div
                  className="h-full bg-[#fae100] transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { id: 'spec', label: 'API contracts & Schema validated with no ambiguities' },
              { id: 'data', label: 'Relational indexes created; no table scan latency' },
              { id: 'mobile', label: 'Flutter client 60fps profile verified on real hardware' },
              { id: 'concurrency', label: 'Atomic Redis lock tested under concurrent stress' },
              { id: 'ci', label: 'Fastlane release train automated to TestFlight & Google Play' },
              { id: 'telemetry', label: 'Sentry error alerting & Prometheus monitoring active' },
            ].map((item) => {
              const isChecked = checklist[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-3 border-2 border-black text-left flex items-start gap-3 transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-[#a7f3d0] text-black shadow-[2px_2px_0px_#000000]'
                      : 'bg-white text-[#444748] hover:bg-[#efeee9]'
                  }`}
                >
                  <span className="shrink-0 mt-0.5">
                    {isChecked ? <CheckSquare size={18} className="text-black" /> : <Square size={18} />}
                  </span>
                  <span className="font-body-sm text-[13px] font-medium leading-snug">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-3 bg-[#efeee9] border border-black font-label-code text-[12px] flex items-center justify-between">
            <span className="text-black">
              {percentage === 100
                ? '🚀 Green light! Build is architecturally hardened for production.'
                : '⚠️ Resolve remaining unverified gates before customer launch.'}
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="px-3 py-1 bg-[#fae100] border border-black font-bold text-[#201c00] hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              Discuss Your Roadmap →
            </button>
          </div>
        </section>

        {/* Bottom Nav */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-black">
          <button
            onClick={() => onNavigate('experience')}
            className="px-4 py-2 bg-white border-2 border-black font-headline-sm text-[14px] text-black shadow-[2px_2px_0px_#000000] hover:bg-[#efeee9] cursor-pointer"
          >
            ← View Experience
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
          >
            Start a Conversation →
          </button>
        </div>
      </div>
    </div>
  );
}
