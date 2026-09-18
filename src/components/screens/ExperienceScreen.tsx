import { NavTab } from '../../types';
import { EXPERIENCES } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Zap } from 'lucide-react';

interface ExperienceScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export default function ExperienceScreen({ onNavigate }: ExperienceScreenProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1240px] w-full mx-auto px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-black pb-3">
          <div>
            <span className="font-label-badge text-[11px] uppercase tracking-widest text-[#444748] font-bold">
              Curriculum Vitae &amp; Track Record
            </span>
            <h1 className="font-headline-lg text-black uppercase font-bold tracking-tight">
              Engineering Experience
            </h1>
          </div>
          <span className="font-label-code text-[12px] text-[#444748]">
            // timeline::2022_to_present
          </span>
        </div>

        {/* Lead Summary Ribbon */}
        <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-headline-sm text-[18px] font-bold text-black uppercase">
              Proven Production Track Record
            </div>
            <p className="font-body-md text-[#444748] mt-1 leading-relaxed max-w-2xl">
              From early mobile engineer to cross-functional Product Engineer at Zeedz Innovations, I have consistently taken ownership of architecture decisions, client state performance, and distributed systems.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-5 py-2.5 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
          >
            Hire / Collaborate →
          </button>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-6 relative">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-white border-2 border-black p-6 sm:p-8 shadow-[5px_5px_0px_#000000]"
            >
              {/* Top Meta Line */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black pb-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline-md text-black font-bold text-[22px]">
                      {exp.role}
                    </h2>
                    <span className="px-2 py-0.5 bg-[#fae100] border border-black font-label-badge text-[10px] font-bold text-[#201c00]">
                      {exp.type}
                    </span>
                  </div>
                  <div className="font-headline-sm text-[16px] text-[#2563eb] font-bold mt-0.5">
                    @ {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-label-code text-[12px] text-[#444748]">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#efeee9] border border-black">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#efeee9] border border-black">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="font-body-lg text-[15px] text-[#1b1c19] my-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="font-label-badge text-[11px] text-black uppercase font-bold flex items-center gap-1.5">
                  <Award size={14} />
                  Key Impact &amp; Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#f5f4ef] border border-black flex items-start gap-2 shadow-[2px_2px_0px_#000000]"
                    >
                      <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5" />
                      <span className="font-body-sm text-[13px] text-[#1b1c19] leading-snug">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-black/10">
                <span className="font-label-code text-[11px] text-[#444748] uppercase font-bold">
                  Technologies:
                </span>
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-0.5 bg-white border border-black font-label-code text-[11px] text-black font-semibold shadow-[1px_1px_0px_#000000]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Independent Credentials */}
        <section className="p-6 bg-[#efeee9] border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-4">
          <div className="font-headline-sm text-[18px] font-bold text-black uppercase">
            Education &amp; Technical Foundation
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-label-code text-[12px]">
            <div className="p-3 bg-white border border-black shadow-[2px_2px_0px_#000000]">
              <div className="font-bold text-black text-[13px]">B.Tech in Computer Science &amp; Engineering</div>
              <div className="text-[#444748] mt-1">Core coursework in Data Structures, Algorithms, Distributed Systems &amp; Database Architecture.</div>
            </div>
            <div className="p-3 bg-white border border-black shadow-[2px_2px_0px_#000000]">
              <div className="font-bold text-black text-[13px]">Open Source &amp; Continuous Learning</div>
              <div className="text-[#444748] mt-1">Active contributor to Flutter developer communities, Go microservice patterns, and system design literature.</div>
            </div>
          </div>
        </section>

        {/* Bottom Nav */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-black">
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 bg-white border-2 border-black font-headline-sm text-[14px] text-black shadow-[2px_2px_0px_#000000] hover:bg-[#efeee9] cursor-pointer"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => onNavigate('process')}
            className="px-4 py-2 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
          >
            Explore How I Work →
          </button>
        </div>
      </div>
    </div>
  );
}
