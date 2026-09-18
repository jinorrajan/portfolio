import { ProjectItem } from '../types';
import { X, ExternalLink, Cpu, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onGoToCaseStudy?: () => void;
}

export default function ProjectModal({ project, onClose, onGoToCaseStudy }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#faf9f4] border-4 border-black shadow-[10px_10px_0px_#000000] p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Window Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between bg-black text-white px-4 py-3 border-b-2 border-black font-label-code text-[12px]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#fae100] text-black font-bold uppercase">
              {project.projectNumber}
            </span>
            <span className="text-[#c8c6c5] hidden sm:inline">
              ~/{project.category.toLowerCase().replace(/\s+/g, '-')}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            </div>
            <button
              onClick={onClose}
              className="p-1 bg-white text-black hover:bg-[#ffe500] border border-black cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex flex-col gap-6">
          {/* Header Specs */}
          <div className="flex flex-col gap-2 border-b-2 border-black pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[11px] font-bold">
                ROLE: {project.role}
              </span>
              <span className="px-2.5 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[11px] font-bold">
                TIMELINE: {project.duration}
              </span>
              <span className="px-2.5 py-0.5 bg-[#a7f3d0] border border-black font-label-badge text-[11px] text-black font-bold">
                ✨ {project.statusBadge}
              </span>
            </div>

            <h2 className="font-headline-lg text-[28px] sm:text-[34px] font-bold text-black tracking-tight">
              {project.title}
            </h2>
            <p className="font-body-lg text-[16px] text-[#444748] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlight Banner */}
          <div className="p-4 bg-[#efeee9] border-2 border-black shadow-[3px_3px_0px_#000000] flex flex-col gap-1.5">
            <div className="font-label-badge text-[12px] text-black uppercase font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              {project.keyHighlight.title}
            </div>
            <p className="font-body-md text-[14px] text-[#1b1c19] leading-relaxed">
              {project.keyHighlight.description}
            </p>
          </div>

          {/* Architecture Topology / Metrics if available */}
          {project.topology && (
            <div className="p-4 bg-black text-white border-2 border-black font-label-code text-[12px] flex flex-col gap-3 shadow-[4px_4px_0px_#000000]">
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="font-bold text-[#fae100]">{project.topology.title}</span>
                <span className="text-emerald-400 font-bold">{project.topology.status}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.topology.nodes.map((node, i) => (
                  <div
                    key={i}
                    className={`p-2 border border-black ${
                      node.highlight ? 'bg-[#fae100] text-black' : 'bg-white text-black'
                    }`}
                  >
                    <div className="font-bold text-[13px]">{node.name}</div>
                    <div className="text-[11px] opacity-80">{node.subtitle}</div>
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-[#c8c6c5] italic">
                {project.topology.annotation}
              </div>
            </div>
          )}

          {/* Metrics Grid if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-3 bg-white border-2 border-black shadow-[3px_3px_0px_#000000] flex flex-col items-center text-center"
                >
                  <span className="font-display-xl text-[24px] sm:text-[28px] font-bold text-black">
                    {m.value}
                  </span>
                  <span className="font-label-badge text-[10px] text-[#444748] uppercase tracking-wider font-bold mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Core Feature Breakdown */}
          <div className="flex flex-col gap-3">
            <h3 className="font-headline-sm text-[18px] font-bold text-black uppercase flex items-center gap-2">
              <Layers size={18} className="text-black" />
              Engineered Workflows &amp; Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white border border-black flex items-start gap-2.5 shadow-[2px_2px_0px_#000000]"
                >
                  <CheckCircle2 size={16} className="text-black shrink-0 mt-0.5" />
                  <span className="font-body-sm text-[13px] text-[#1b1c19] leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-col gap-2 pt-2 border-t-2 border-black">
            <span className="font-label-code text-[11px] text-[#444748] uppercase font-bold flex items-center gap-1.5">
              <Cpu size={14} /> Built With Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white border border-black font-label-code text-[12px] font-semibold text-black shadow-[2px_2px_0px_#000000]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-black">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border-2 border-black font-headline-sm text-[14px] text-black shadow-[2px_2px_0px_#000000] hover:bg-[#efeee9] cursor-pointer"
            >
              Close Window
            </button>
            {project.id === 'food-delivery-platform' && onGoToCaseStudy && (
              <button
                onClick={() => {
                  onClose();
                  onGoToCaseStudy();
                }}
                className="flex items-center gap-2 px-5 py-2 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#000000] cursor-pointer"
              >
                <span>Read Full Deep-Dive Case Study</span>
                <ExternalLink size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
