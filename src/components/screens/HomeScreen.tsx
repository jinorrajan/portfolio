import { useState } from 'react';
import { NavTab, ProjectItem } from '../../types';
import { ASSETS, PROJECTS, SERVICES } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';

interface HomeScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenProject = (projectId: string) => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) setSelectedProject(proj);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1240px] w-full mx-auto px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-10 lg:gap-14">
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative w-full flex flex-col items-center justify-center text-center pt-4 pb-8">
          {/* Top Handwritten Meta Stamp */}
          <div className="flex flex-col items-center mb-2">
            <span className="font-label-badge text-[11px] uppercase tracking-widest text-[#444748] font-bold flex items-center gap-1.5">
              <span className="inline-block w-2 h-0.5 bg-black"></span>
              my name is
              <span className="inline-block w-2 h-0.5 bg-black"></span>
            </span>
            <div className="w-14 h-1 border-b-2 border-dashed border-black mt-0.5"></div>
          </div>

          {/* Massive Chunky Name Box with neo-brutal sticker badges */}
          <div className="relative inline-block my-2">
            {/* Corner tape / sticker pinned to graph paper */}
            <div className="absolute -top-4 -left-4 px-3 py-1 bg-[#e9e8e3] border-2 border-black rotate-[-6deg] shadow-[2px_2px_0px_#000000] font-label-badge text-[11px] z-20 flex items-center gap-1 font-bold">
              <span>✨</span> ENGINEER
            </div>
            <div className="absolute -top-3.5 -right-3 px-3 py-0.5 bg-[#a7f3d0] border-2 border-black text-black rotate-[5deg] shadow-[2px_2px_0px_#000000] font-label-badge text-[11px] z-20 font-bold">
              📍 Zeedz Innovations
            </div>

            {/* Chunky Pixelated / Brutalist Name Frame */}
            <div className="relative bg-white border-4 border-black px-8 sm:px-14 py-4 sm:py-6 shadow-[6px_6px_0px_#000000] rotate-[-0.5deg]">
              <h1 className="font-display-xl font-bold tracking-tight text-black uppercase select-none">
                JINO R
              </h1>
            </div>

            {/* Sticky Note Callout below name */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#fae100] border-2 border-black px-4 py-0.5 shadow-[3px_3px_0px_#000000] rotate-[1.5deg] whitespace-nowrap z-20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span className="font-label-badge text-[11px] text-[#201c00] font-bold tracking-wider uppercase">
                Open to new work &amp; good problems
              </span>
            </div>
          </div>

          {/* Core Tagline & Lead Paragraph */}
          <div className="mt-8 max-w-3xl flex flex-col items-center gap-3">
            <h2 className="font-headline-lg text-black tracking-tight font-bold max-w-2xl">
              Product Engineer building practical digital products.
            </h2>
            <p className="font-body-lg text-[#444748] max-w-2xl leading-relaxed">
              I build mobile applications, backend systems, and digital products that help businesses turn
              ideas into working solutions.
            </p>

            {/* Tactile Sticker Ribbon (Filter / Stacks) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ffe500] border-2 border-black text-black shadow-[2px_2px_0px_#000000] font-label-code text-[12px] font-bold rotate-[-1deg]">
                <span>⚡</span> Flutter Development
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#b4c5ff] border-2 border-black text-black shadow-[2px_2px_0px_#000000] font-label-code text-[12px] font-bold rotate-[1deg]">
                <span>⚙️</span> Backend Engineering
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#a7f3d0] border-2 border-black text-black shadow-[2px_2px_0px_#000000] font-label-code text-[12px] font-bold rotate-[-1.5deg]">
                <span>📐</span> System Design
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-3">
              <button
                onClick={() => onNavigate('projects')}
                className="group flex items-center gap-2 bg-black text-white font-headline-sm text-[16px] px-6 py-3 border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 bg-[#fae100] text-[#201c00] font-headline-sm font-bold text-[16px] px-6 py-3 border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all cursor-pointer"
              >
                <span>Let's Talk</span>
                <span>✉️</span>
              </button>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT ME SECTION ==================== */}
        <section className="relative w-full border-2 border-black bg-white p-5 sm:p-8 lg:p-10 shadow-[5px_5px_0px_#000000]">
          {/* Top Folder Tab Marker */}
          <div className="absolute -top-7 left-6 px-4 py-1 bg-white border-2 border-b-0 border-black font-label-badge text-[11px] text-black uppercase font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            about me!
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left / Top: Polaroid Photo pinned with washi tape */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative p-3 pb-8 bg-white border-2 border-black shadow-[6px_6px_0px_#000000] rotate-[-2.5deg] hover:rotate-0 transition-transform duration-300 max-w-[310px] w-full">
                {/* Translucent Washi Tape on corners */}
                <div className="absolute -top-3.5 left-6 w-24 h-6 bg-[#fffffa]/90 border-l border-r border-dashed border-gray-400 rotate-[-4deg] pointer-events-none shadow-sm"></div>
                <div className="absolute -bottom-3 right-6 w-20 h-6 bg-[#fffffa]/90 border-l border-r border-dashed border-gray-400 rotate-[3deg] pointer-events-none shadow-sm"></div>

                {/* Polaroid Image Frame */}
                <div className="relative w-full aspect-square border border-black overflow-hidden bg-[#e3e3de]">
                  <img
                    alt="Jino R Polaroid Portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    src={ASSETS.polaroidPortrait}
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 text-white font-label-code text-[11px]">
                    LIVE_FEED::01
                  </div>
                </div>

                {/* Polaroid Footer Label */}
                <div className="mt-4 flex items-center justify-between font-label-code text-[11px] text-black font-semibold tracking-tight px-1">
                  <span>Jino R. [Product Eng]</span>
                  <span className="text-[#444748]">OCT '26</span>
                </div>
              </div>
            </div>

            {/* Right: Story Narrative & Credentials */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 bg-black text-white font-headline-sm text-[16px] uppercase tracking-wide font-bold">
                  what's up
                </span>
                <span className="font-label-code text-[11px] text-[#444748]">// engineering dossier</span>
              </div>
              <p className="font-body-lg text-[#1b1c19] leading-relaxed">
                I'm Jino R, a Product Engineer working across mobile development, backend engineering, product
                architecture, and deployment. My core expertise is Flutter development.
              </p>
              <p className="font-body-md text-[#444748] leading-relaxed">
                Over time, I’ve expanded into backend development, system design, web technologies, and product
                engineering to understand and contribute to the complete product lifecycle. I currently work at{' '}
                <strong className="text-black font-bold">Zeedz Innovations</strong>, where I contribute to
                product development, architecture decisions, technical execution, and team coordination.
              </p>

              {/* Metric Sticker Mini-Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#efeee9] border border-black shadow-[2px_2px_0px_#000000]">
                  <div className="font-label-badge text-[10px] text-[#444748] uppercase font-bold">
                    Focus
                  </div>
                  <div className="font-headline-sm text-[16px] text-black font-bold">
                    Cross-Platform
                  </div>
                </div>
                <div className="p-3 bg-[#efeee9] border border-black shadow-[2px_2px_0px_#000000]">
                  <div className="font-label-badge text-[10px] text-[#444748] uppercase font-bold">
                    Current Role
                  </div>
                  <div className="font-headline-sm text-[16px] text-black font-bold">
                    Product Eng.
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 bg-[#fae100] border border-black shadow-[2px_2px_0px_#000000]">
                  <div className="font-label-badge text-[10px] text-[#201c00] uppercase font-bold">
                    Discipline
                  </div>
                  <div className="font-headline-sm text-[16px] text-[#201c00] font-bold">
                    Full Lifecycle
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-black font-headline-sm text-[14px] font-bold underline hover:text-[#6a5f00] flex items-center gap-1 cursor-pointer"
                >
                  Read full bio, gear, and tech background →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== "WHAT I WORK ON" GRID ==================== */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 border-b-2 border-black pb-2">
            <div>
              <span className="font-label-badge text-[11px] uppercase tracking-widest text-[#444748]">
                Core Disciplines &amp; Skills
              </span>
              <h2 className="font-headline-lg text-black uppercase font-bold tracking-tight">
                What I Work On
              </h2>
            </div>
            <span className="font-label-code text-[11px] text-[#444748]">
              // modular engineering capability
            </span>
          </div>

          {/* Neo-brutalist Cards Grid (6 Modules inspired by Kaala / Oatside) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                onClick={() => onNavigate('services')}
                className="group relative bg-white border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all flex flex-col justify-between cursor-pointer"
              >
                <div
                  className="h-3 border-b-2 border-black"
                  style={{ backgroundColor: srv.accentColor }}
                ></div>
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span
                      className="w-9 h-9 rounded border-2 border-black flex items-center justify-center font-headline-sm text-black shadow-[2px_2px_0px_#000000]"
                      style={{ backgroundColor: srv.accentColor }}
                    >
                      {srv.emoji}
                    </span>
                    <span className="font-label-code text-[11px] text-[#444748] uppercase">
                      {srv.specCode}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-black font-bold">
                    {srv.title}
                  </h3>
                  <p className="font-body-md text-[#444748] leading-relaxed">
                    {srv.description}
                  </p>
                </div>
                <div className="px-4 py-2 border-t-2 border-black bg-[#efeee9] flex items-center justify-between font-label-badge text-[11px]">
                  <span className="text-black font-bold">{srv.subLabel}</span>
                  <span className="text-[#444748]">{srv.index}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== "SELECTED WORK" SHOWCASE ==================== */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 border-b-2 border-black pb-2">
            <div>
              <span className="font-label-badge text-[11px] uppercase tracking-widest text-[#444748]">
                Selected Engineering Cases
              </span>
              <h2 className="font-headline-lg text-black uppercase font-bold tracking-tight">
                Selected Work
              </h2>
            </div>
            <div className="flex items-center gap-2 font-label-code text-[12px] text-[#444748]">
              <span>INDEX: 03 PRODUCTS</span>
              <span>●</span>
              <button
                onClick={() => onNavigate('projects')}
                className="text-black font-bold underline hover:text-[#6a5f00] cursor-pointer"
              >
                View All →
              </button>
            </div>
          </div>

          {/* PROJECT 01: Food Delivery Platform (Featured Lead Folder Card) */}
          <div className="relative bg-white border-2 border-black shadow-[6px_6px_0px_#000000] overflow-hidden">
            {/* Folder-style Tab Bar */}
            <div className="flex items-center justify-between bg-black text-white px-4 py-2 font-label-code text-[12px]">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-[#fae100] text-black font-bold text-[11px] uppercase">
                  PROJECT 01
                </span>
                <span className="hidden sm:inline text-[#c8c6c5]">
                  ~/ecosystem/food-delivery-engine
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-8 items-center">
              {/* Case Details */}
              <div className="lg:col-span-7 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[11px] font-bold">
                    ROLE: PRODUCT ENGINEER
                  </span>
                  <span className="px-2 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[11px] font-bold">
                    DURATION: 3 MONTHS
                  </span>
                  <span className="px-2 py-0.5 bg-[#a7f3d0] border border-black font-label-badge text-[11px] text-black font-bold">
                    ✨ PRODUCTION SHIP
                  </span>
                </div>

                <h3 className="font-headline-lg text-black font-bold">
                  Food Delivery Platform
                </h3>
                <p className="font-body-lg text-[#1b1c19] leading-relaxed">
                  Multi-application food delivery ecosystem involving customer, shop, delivery partner, and admin applications.
                </p>

                {/* Key Feature Highlight Box */}
                <div className="p-3 bg-[#efeee9] border-2 border-black shadow-[2px_2px_0px_#000000] flex flex-col gap-1">
                  <div className="font-label-badge text-[11px] text-black uppercase font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    KEY HIGHLIGHT: Smart Dispatch Engine
                  </div>
                  <p className="font-body-sm text-[#444748] leading-relaxed">
                    Architected geofenced real-time order batching and dynamic courier assignment, reducing average pickup latency by 24% under peak lunch concurrency.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    onClick={() => onNavigate('case-study')}
                    className="flex items-center gap-2 bg-[#fae100] text-[#201c00] font-headline-sm text-[16px] font-bold px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <span>→</span>
                  </button>
                  <span className="font-label-code text-[12px] text-[#444748]">
                    Flutter • Go • Redis • WebSockets
                  </span>
                </div>
              </div>

              {/* Visual Tactile Preview (Schematic / Architecture Board) */}
              <div className="lg:col-span-5 relative p-4 bg-[#efeee9] border-2 border-black shadow-[4px_4px_0px_#000000] rotate-[1deg]">
                {/* Translucent Washi Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#fffffa]/90 border-l border-r border-dashed border-gray-400 rotate-[-1deg] pointer-events-none"></div>

                <div className="bg-black text-white p-3 font-label-code text-[12px] border border-black flex flex-col gap-2">
                  <div className="flex justify-between border-b border-white/20 pb-1">
                    <span>APP_TOPOLOGY</span>
                    <span className="text-emerald-400 font-bold">STATUS: HEALTHY</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] leading-4">
                    <div className="p-1.5 bg-white text-black border border-black font-bold">
                      [1] Customer App
                      <br />
                      <span className="text-[#444748] font-normal">iOS &amp; Android Client</span>
                    </div>
                    <div className="p-1.5 bg-white text-black border border-black font-bold">
                      [2] Merchant Portal
                      <br />
                      <span className="text-[#444748] font-normal">Live Tablet POS</span>
                    </div>
                    <div className="p-1.5 bg-white text-black border border-black font-bold">
                      [3] Courier Agent
                      <br />
                      <span className="text-[#444748] font-normal">Background Telemetry</span>
                    </div>
                    <div className="p-1.5 bg-[#fae100] text-black border border-black font-bold">
                      [4] Central Ops
                      <br />
                      <span className="font-normal">Unified Super Admin</span>
                    </div>
                  </div>
                  <div className="pt-1 text-[11px] text-[#c8c6c5]">
                    // Synchronized state via gRPC &amp; real-time event pipeline
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECTS 02 & 03: Split Pair Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 02: ERP Products */}
            <div className="relative bg-white border-2 border-black shadow-[5px_5px_0px_#000000] flex flex-col justify-between">
              <div className="bg-[#efeee9] px-4 py-2 border-b-2 border-black flex items-center justify-between">
                <span className="font-label-badge text-[11px] uppercase font-bold text-black">
                  PROJECT 02 // WORKFLOW ENGINE
                </span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <span className="font-label-code text-[11px] text-[#444748]">
                  MARCH '26 • ENTERPRISE
                </span>
                <h3 className="font-headline-md text-black font-bold">
                  ERP Products
                </h3>
                <p className="font-body-md text-[#444748] leading-relaxed">
                  Product development involving business workflows, application features, backend integration,
                  and deployment. Built to streamline inventory, invoicing, and procurement operations with
                  role-based access security.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[10px] font-bold">
                    WORKFLOW ENGINE
                  </span>
                  <span className="px-2 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[10px] font-bold">
                    ROLE AUTH
                  </span>
                  <span className="px-2 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[10px] font-bold">
                    DATA EXPORTS
                  </span>
                </div>
              </div>
              <div className="p-4 border-t-2 border-black bg-[#f5f4ef] flex items-center justify-between">
                <button
                  onClick={() => handleOpenProject('erp-products')}
                  className="flex items-center gap-2 bg-white text-black font-headline-sm font-bold text-[14px] px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                >
                  <span>View Project</span>
                  <span>→</span>
                </button>
                <span className="font-label-code text-[11px] text-[#444748]">
                  Web &amp; Tablet Integration
                </span>
              </div>
            </div>

            {/* Project 03: Doctor Booking Application */}
            <div className="relative bg-white border-2 border-black shadow-[5px_5px_0px_#000000] flex flex-col justify-between">
              <div className="bg-[#efeee9] px-4 py-2 border-b-2 border-black flex items-center justify-between">
                <span className="font-label-badge text-[11px] uppercase font-bold text-black">
                  PROJECT 03 // HEALTH TECH
                </span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <span className="font-label-code text-[11px] text-[#444748]">
                  JAN '26 • TELEHEALTH
                </span>
                <h3 className="font-headline-md text-black font-bold">
                  Doctor Booking Application
                </h3>
                <p className="font-body-md text-[#444748] leading-relaxed">
                  Client-side and doctor-side applications designed to support doctor booking workflows,
                  consultation scheduling, synchronized calendar slots, and encrypted medical records upload.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="px-2 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[10px] font-bold">
                    APPOINTMENT QUEUES
                  </span>
                  <span className="px-2 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[10px] font-bold">
                    SLOT MANAGEMENT
                  </span>
                  <span className="px-2 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[10px] font-bold">
                    DUAL-CLIENT
                  </span>
                </div>
              </div>
              <div className="p-4 border-t-2 border-black bg-[#f5f4ef] flex items-center justify-between">
                <button
                  onClick={() => handleOpenProject('doctor-booking-app')}
                  className="flex items-center gap-2 bg-white text-black font-headline-sm font-bold text-[14px] px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                >
                  <span>View Project</span>
                  <span>→</span>
                </button>
                <span className="font-label-code text-[11px] text-[#444748]">
                  Flutter Mobile &amp; Cloud DB
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CLOSING CTA BANNER ==================== */}
        <section className="relative w-full border-4 border-black bg-[#fae100] p-6 sm:p-10 shadow-[8px_8px_0px_#000000] overflow-hidden my-2">
          {/* Top tape sticker */}
          <div className="absolute -top-3 right-12 w-28 h-6 bg-white/90 border border-black rotate-[2deg] flex items-center justify-center font-label-badge text-[10px] uppercase font-bold text-black shadow-sm">
            TICKET::OPEN
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
            <div className="px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_#000000] rotate-[-1deg] font-label-badge text-[11px] uppercase font-bold text-black">
              COLLABORATE &amp; BUILD
            </div>
            <h2 className="font-headline-lg text-[#201c00] font-bold tracking-tight">
              Have a product idea or an existing application that needs development?
            </h2>
            <p className="font-body-lg text-[#6f6300] leading-relaxed">
              Let’s discuss what you’re building and how I can contribute to your architecture, frontend
              velocity, and product milestones.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-3 bg-black text-white font-headline-md text-[18px] px-8 py-3.5 border-2 border-black shadow-[4px_4px_0px_#ffffff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#ffffff] active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer font-bold"
              >
                <span>Start a Conversation</span>
                <span className="text-[#fae100] text-[20px]">→</span>
              </button>
            </div>
            {/* Quick Response Guarantee */}
            <div className="font-label-code text-[11px] text-[#201c00] flex items-center gap-2 pt-2">
              <span>⚡</span>
              <span>Usually replies within 24 hours • Chennai &amp; Remote</span>
            </div>
          </div>
        </section>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onGoToCaseStudy={() => onNavigate('case-study')}
      />
    </div>
  );
}
