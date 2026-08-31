import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowRight,
  Info,
  Layers,
  Bot,
  Globe,
  Play
} from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectSimulatorModal } from './ProjectSimulatorModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | 'AI / MACHINE LEARNING' | 'WEB DEVELOPMENT'>('All');

  const filteredProjects = PROJECTS_LIST.filter(proj => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  return (
    <section 
      id="projects" 
      className="py-20 sm:py-24 relative overflow-hidden bg-[#F5F5FA] transition-colors duration-500"
    >
      {/* Background Soft Ambient Pastel Glows */}
      <div className="absolute top-1/4 -right-24 w-[450px] h-[450px] bg-[#E8F2FF] rounded-full blur-[130px] opacity-70 pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-[400px] h-[400px] bg-[#EEE9FF] rounded-full blur-[120px] opacity-60 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 border border-[#4F7CFF]/20 text-[#4F7CFF] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3.5 shadow-2xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            Featured <span className="text-[#4F7CFF]">Projects</span>
          </h2>
          
          <p className="mt-3 text-slate-600 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
            A selection of projects where I combine technology, creativity, AI, and problem-solving to build real-world digital solutions.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 mt-6 bg-white/90 p-1 rounded-2xl border border-slate-200/80 shadow-2xs">
            {[
              { id: 'All', label: 'All' },
              { id: 'AI / MACHINE LEARNING', label: 'AI & ML' },
              { id: 'WEB DEVELOPMENT', label: 'Web Dev' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#4F7CFF] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#1D1D1F] hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Grid with Proportional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group backdrop-blur-md"
            >
              {/* Top Project Screenshot Area */}
              <div 
                onClick={() => setSelectedProject(project)}
                className="relative overflow-hidden cursor-pointer bg-slate-900 h-44 sm:h-48 border-b border-slate-100"
              >
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Project Number Floating Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <span className="font-mono text-[10px] font-extrabold text-[#1D1D1F]">
                    {project.projectNumber}
                  </span>
                </div>

                {/* Category Badge Floating Top Right */}
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                    {project.category}
                  </span>
                </div>

                {/* Inspect Action Pill on Hover */}
                <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-all transform group-hover:scale-105">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold shadow-xs border border-slate-200/60">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3 text-[#4F7CFF]" />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Metrics */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#1D1D1F] tracking-tight group-hover:text-[#4F7CFF] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Tagline */}
                  <p className="text-[11px] sm:text-xs font-semibold text-[#4F7CFF] mb-2.5">
                    {project.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-2 font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techTags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-lg bg-[#FAF9F6] border border-slate-200 text-slate-700 text-[10px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.techTags.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded-lg bg-slate-100 text-slate-500 text-[10px] font-medium">
                        +{project.techTags.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Buttons: GitHub, Live Demo, View Details */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* Live Demo Button */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`live-demo-btn-${project.id}`}
                        className="px-3 py-1.5 rounded-xl bg-[#4F7CFF] hover:bg-[#3d6bf0] text-white text-[11px] font-bold shadow-xs hover:shadow-sm flex items-center gap-1 transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {/* GitHub Repository Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`github-btn-${project.id}`}
                      className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-bold flex items-center gap-1 transition-all shadow-2xs cursor-pointer"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    id={`view-details-btn-${project.id}`}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <Info className="w-3 h-3 text-[#4F7CFF]" />
                    <span>Details</span>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Project Details & Simulator Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectSimulatorModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
