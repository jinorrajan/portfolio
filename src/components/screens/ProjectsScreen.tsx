import { useState } from 'react';
import { NavTab, ProjectItem } from '../../types';
import { PROJECTS } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';
import { Layers, Cpu, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export default function ProjectsScreen({ onNavigate }: ProjectsScreenProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    { id: 'mobile', label: 'Mobile / Flutter', count: PROJECTS.filter((p) => p.categoryKey === 'mobile').length },
    { id: 'backend', label: 'Backend & Systems', count: PROJECTS.filter((p) => p.categoryKey === 'backend').length },
    { id: 'fullstack', label: 'Fullstack Ecosystem', count: PROJECTS.filter((p) => p.categoryKey === 'fullstack').length },
    { id: 'enterprise', label: 'Enterprise Workflows', count: PROJECTS.filter((p) => p.categoryKey === 'enterprise').length },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.categoryKey === activeFilter;
  });

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1240px] w-full mx-auto px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-black pb-3">
          <div>
            <span className="font-label-badge text-[11px] uppercase tracking-widest text-[#444748] font-bold">
              Engineering Case Registry
            </span>
            <h1 className="font-headline-lg text-black uppercase font-bold tracking-tight">
              Selected Work &amp; Systems
            </h1>
          </div>
          <span className="font-label-code text-[12px] text-[#444748]">
            // {filteredProjects.length} products logged
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3.5 py-1.5 font-label-badge text-[11px] uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#fae100] text-[#201c00] border-2 border-black shadow-[3px_3px_0px_#000000] font-bold translate-x-[-1px] translate-y-[-1px]'
                    : 'bg-white text-[#444748] border-2 border-black hover:bg-[#efeee9]'
                }`}
              >
                <span>{filter.label}</span>
                <span className="ml-1.5 opacity-60">({filter.count})</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white border-2 border-black shadow-[5px_5px_0px_#000000] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000000] transition-all"
            >
              {/* Folder Tab Header */}
              <div className="bg-[#efeee9] px-4 py-2 border-b-2 border-black flex items-center justify-between">
                <span className="font-label-badge text-[11px] uppercase font-bold text-black">
                  {project.projectNumber}
                </span>
                <span className="px-2 py-0.5 bg-white border border-black font-label-code text-[10px] text-black font-semibold">
                  {project.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#a7f3d0] border border-black font-label-badge text-[10px] font-bold text-black">
                    {project.statusBadge}
                  </span>
                  <span className="font-label-code text-[11px] text-[#444748]">
                    {project.date}
                  </span>
                </div>

                <h3 className="font-headline-md text-black font-bold text-[20px] leading-tight">
                  {project.title}
                </h3>

                <p className="font-body-md text-[14px] text-[#444748] line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlight */}
                <div className="p-2.5 bg-[#f5f4ef] border border-black text-[12px] flex flex-col gap-1">
                  <span className="font-label-badge text-[10px] text-black font-bold uppercase">
                    {project.keyHighlight.title}
                  </span>
                  <span className="font-body-sm text-[12px] text-[#444748] line-clamp-2">
                    {project.keyHighlight.description}
                  </span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-white border border-black font-label-code text-[10px] font-semibold text-black"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 bg-[#efeee9] border border-black font-label-code text-[10px] text-[#444748]">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 border-t-2 border-black bg-[#f5f4ef] flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 bg-white text-black font-headline-sm font-bold text-[13px] px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000000] hover:bg-[#fae100] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                >
                  <span>View Specs</span>
                  <span>→</span>
                </button>

                {project.id === 'food-delivery-platform' ? (
                  <button
                    onClick={() => onNavigate('case-study')}
                    className="flex items-center gap-1 text-[12px] font-label-code text-black font-bold underline hover:text-[#6a5f00] cursor-pointer"
                  >
                    <span>Full Case Study</span>
                    <ExternalLink size={12} />
                  </button>
                ) : (
                  <span className="font-label-code text-[11px] text-[#444748]">
                    {project.category.split('/')[0]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <div>
            <div className="font-headline-sm text-[18px] font-bold text-black uppercase">
              Want to see detailed code snippets or schema designs?
            </div>
            <p className="font-body-md text-[14px] text-[#444748] mt-0.5">
              Read the full Food Delivery Platform engineering case study for gRPC protocols and dispatch logic.
            </p>
          </div>
          <button
            onClick={() => onNavigate('case-study')}
            className="shrink-0 px-5 py-2.5 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer flex items-center gap-2"
          >
            <span>Explore Case Study</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onGoToCaseStudy={() => onNavigate('case-study')}
      />
    </div>
  );
}
