import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Globe, 
  Layout, 
  Wrench, 
  ArrowUpRight, 
  Code2, 
  BrainCircuit, 
  Lightbulb, 
  Layers, 
  Terminal, 
  Cpu, 
  Coffee, 
  FileCode, 
  FileCode2, 
  Code, 
  Palette, 
  GitBranch, 
  Bot, 
  Table, 
  Activity, 
  Database, 
  Workflow, 
  Gauge, 
  Bug,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_LIST, SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Terminal': return <Terminal className="w-4 h-4" />;
      case 'FileCode': return <FileCode className="w-4 h-4" />;
      case 'FileCode2': return <FileCode2 className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Code': return <Code className="w-4 h-4" />;
      case 'Palette': return <Palette className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4" />;
      case 'Brain': return <BrainCircuit className="w-4 h-4" />;
      case 'Bot': return <Bot className="w-4 h-4" />;
      case 'Table': return <Table className="w-4 h-4" />;
      case 'Activity': return <Activity className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Workflow': return <Workflow className="w-4 h-4" />;
      case 'Gauge': return <Gauge className="w-4 h-4" />;
      case 'Bug': return <Bug className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  const displayedSkillCategories = activeCategoryTab === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(cat => cat.id === activeCategoryTab);

  return (
    <section 
      id="skills" 
      className="py-28 sm:py-32 relative overflow-hidden bg-[#F8F4FF] transition-colors duration-500"
    >
      {/* Subtle Ambient Lavender Background Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[550px] bg-[#EDE4FF] rounded-full blur-[140px] opacity-70 pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#E8EDFF] rounded-full blur-[120px] opacity-60 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 border border-[#8B6DFF]/25 text-[#8B6DFF] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8B6DFF]" />
            <span>Skills & Expertise</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            Technical Skills & <span className="text-[#8B6DFF]">Services</span>
          </h2>

          <p className="mt-3 text-slate-600 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
            Full-stack engineering capabilities, modern frontend frameworks, and AI/ML specialization at BLDEACET.
          </p>
        </div>

        {/* 1. What I Offer - Services Strip */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B6DFF] block mb-0.5">
                Client & Development Solutions
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                Core <span className="text-[#4F7CFF]">Services</span>
              </h3>
            </div>
            <a 
              href="#contact" 
              className="text-xs font-bold text-[#8B6DFF] hover:text-[#4F7CFF] inline-flex items-center gap-1 transition-colors"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES_LIST.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-4 sm:p-5 rounded-2xl shadow-2xs hover:shadow-md hover:bg-white hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105 shadow-2xs"
                    style={{ backgroundColor: `${service.accentColor}18`, color: service.accentColor }}
                  >
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {service.tag}
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#1D1D1F] mb-1 group-hover:text-[#4F7CFF] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-[#8B6DFF] group-hover:text-[#4F7CFF] transition-colors">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Technical Skills Matrix */}
        <div id="skills-matrix">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4F7CFF] block mb-0.5">
                Technology Stack
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                Domain <span className="text-[#8B6DFF]">Competencies</span>
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 flex-wrap bg-white/90 p-1 rounded-2xl border border-slate-200/80 shadow-2xs">
              <button
                onClick={() => setActiveCategoryTab('all')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategoryTab === 'all'
                    ? 'bg-[#8B6DFF] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#1D1D1F] hover:bg-slate-50'
                }`}
              >
                All Domains
              </button>
              {SKILL_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryTab(cat.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategoryTab === cat.id
                      ? 'bg-[#8B6DFF] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#1D1D1F] hover:bg-slate-50'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {displayedSkillCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#EDE4FF] text-[#8B6DFF] flex items-center justify-center font-bold shadow-2xs">
                        {getSkillIcon(category.iconName)}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-[#1D1D1F]">
                          {category.title}
                        </h4>
                        <span className="text-[11px] font-medium text-slate-500">
                          {category.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight pill */}
                  <div className="mb-3.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] text-slate-600 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>{category.highlight}</span>
                  </div>

                  {/* Compact Skill Items Grid/List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-[#FAF9FC] border border-slate-100/90 hover:border-[#8B6DFF]/30 transition-all group flex items-start gap-2"
                      >
                        <span 
                          className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5"
                          style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                        >
                          {getSkillIcon(skill.iconName)}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[11px] font-bold text-[#1D1D1F] group-hover:text-[#4F7CFF] transition-colors truncate">
                              {skill.name}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 truncate mt-0.5">
                            {skill.tag}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
