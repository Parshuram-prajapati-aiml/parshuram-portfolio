import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Send, 
  Zap,
  Terminal,
  FileDown,
  ExternalLink,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onOpenContact
}) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-36 pb-28 sm:pt-40 sm:pb-32 flex flex-col justify-center overflow-hidden bg-[#F8F7F4] transition-colors duration-500"
    >
      {/* Background Geometric Ambient Blur Circles */}
      <div className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] bg-[#E8F2FF] rounded-full blur-[130px] opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[550px] h-[550px] bg-[#EEE9FF] rounded-full blur-[140px] opacity-60 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-[#EAF8F5] rounded-full blur-[120px] opacity-40 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Geometric Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left justify-center"
          >
            {/* Geometric Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E8F2FF] text-[#4F7CFF] text-[10px] font-bold uppercase tracking-widest rounded-full mb-5 border border-[#4F7CFF]/20 shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F7CFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F7CFF]"></span>
              </span>
              <span>Available for Projects & Internships</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[0.95] sm:leading-[0.92] mb-3">
              Hello, I'm <br />
              <span className="text-[#4F7CFF]">Parshuram</span> Prajapati 👋
            </h1>

            {/* Role / Subhead */}
            <p className="text-lg sm:text-xl font-bold text-[#8B6DFF] mb-2 flex items-center gap-2">
              <span>Web Developer & AI Enthusiast</span>
            </p>

            {/* Bio Description from original portfolio */}
            <p className="text-sm text-slate-600 max-w-lg mb-8 leading-relaxed font-normal">
              Computer Science (AIML) student at BLDEA College of Engineering building modern, responsive web applications while exploring the frontiers of Machine Learning.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onExploreProjects}
                id="hero-btn-view-work"
                className="w-full sm:w-auto bg-[#4F7CFF] hover:bg-[#3d6bf0] text-white px-7 py-3.5 rounded-2xl font-bold shadow-lg shadow-[#4F7CFF]/20 hover:shadow-xl hover:shadow-[#4F7CFF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer text-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-btn-resume"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#1D1D1F] border border-gray-200 hover:border-[#4F7CFF]/40 px-6 py-3.5 rounded-2xl font-bold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <FileDown className="w-4 h-4 text-[#8B6DFF]" />
                <span>Resume</span>
              </a>

              <button
                onClick={onOpenContact}
                id="hero-btn-lets-connect"
                className="w-full sm:w-auto bg-[#EEE9FF] hover:bg-[#e4ddff] text-[#8B6DFF] px-6 py-3.5 rounded-2xl font-bold shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Send className="w-4 h-4 text-[#8B6DFF]" />
                <span>Hire Me</span>
              </button>
            </div>

            {/* Quick Tech Badge Strip */}
            <div className="flex items-center gap-2.5 pt-4 border-t border-slate-200/70 w-full flex-wrap">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Core Stack:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { name: "C / C++", bg: "bg-slate-100", text: "text-slate-800" },
                  { name: "Java", bg: "bg-orange-50", text: "text-orange-700" },
                  { name: "Python", bg: "bg-[#E8F2FF]", text: "text-[#4F7CFF]" },
                  { name: "React", bg: "bg-[#E0F7FA]", text: "text-cyan-800" },
                  { name: "HTML / CSS", bg: "bg-[#EEE9FF]", text: "text-[#8B6DFF]" },
                  { name: "PHP", bg: "bg-indigo-50", text: "text-indigo-700" },
                  { name: "AI & ML", bg: "bg-purple-50", text: "text-purple-700" },
                ].map((tag) => (
                  <span
                    key={tag.name}
                    className={`text-xs px-2.5 py-1 rounded-lg font-semibold border border-black/5 ${tag.bg} ${tag.text}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Signature Geometric Balance Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center py-6 min-h-[380px]"
          >
            {/* Rotated Geometric Accent Canvas (Signature Geometric Balance motif) */}
            <div className="w-64 sm:w-72 h-64 sm:h-72 bg-gradient-to-br from-[#4F7CFF] to-[#8B6DFF] rounded-[48px] rotate-3 absolute shadow-xl shadow-[#4F7CFF]/15 transition-transform hover:rotate-6 duration-500" />

            {/* Central Foreground Geometric Card */}
            <div className="w-64 sm:w-72 h-64 sm:h-72 bg-gray-100 rounded-[48px] relative overflow-hidden border-4 border-white shadow-2xl flex flex-col items-center justify-center text-center p-4">
              <div className="w-full h-full bg-[#EEE9FF] rounded-[40px] flex flex-col items-center justify-center relative overflow-hidden">
                
                {/* Visual Avatar Element */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#4F7CFF] to-[#8B6DFF] flex items-center justify-center text-white text-3xl sm:text-4xl font-extrabold shadow-md mb-2 relative">
                  <span className="font-heading tracking-tight">PP</span>
                  <div className="absolute -bottom-1 -right-1 p-1.5 bg-white rounded-full shadow-sm text-[#4F7CFF]">
                    <Terminal className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="font-heading font-extrabold text-sm sm:text-base text-[#1D1D1F] tracking-tight">
                  Parshuram Prajapati
                </p>
                <p className="text-xs text-[#4F7CFF] font-semibold mt-0.5">
                  BLDEA College of Engineering
                </p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                  Vijayapur, Karnataka
                </p>

                {/* Subtle Geometric Overlay Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Floating Tilted Geometric Badge 1 (Top-Right): Specialization */}
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -right-2 sm:-right-6 bg-white/85 backdrop-blur-md p-3 px-4 rounded-2xl border border-white shadow-xl rotate-6 z-20"
            >
              <span className="text-[10px] font-bold block uppercase opacity-50 text-slate-500 tracking-wider">
                Specialization
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#4F7CFF]">
                AI & ML
              </span>
            </motion.div>

            {/* Floating Tilted Geometric Badge 2 (Bottom-Left): Stack */}
            <motion.div 
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-2 -left-2 sm:-left-6 bg-white/85 backdrop-blur-md p-3 px-4 rounded-2xl border border-white shadow-xl -rotate-6 z-20"
            >
              <span className="text-[10px] font-bold block uppercase opacity-50 text-slate-500 tracking-wider">
                Web Dev
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#8B6DFF]">
                React & JavaScript
              </span>
            </motion.div>

            {/* Floating Geometric Icon Pill (Left-Middle): ⚡ */}
            <motion.div 
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-28 -left-4 sm:-left-10 bg-white/85 backdrop-blur-md p-2.5 rounded-full border border-white shadow-lg z-20"
            >
              <div className="w-7 h-7 flex items-center justify-center text-[#4F7CFF]">
                <Zap className="w-5 h-5 fill-current" />
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Featured Mini Bento Cards Row (Geometric Balance 3-Card Pattern) */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 pt-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 01: Portfolio Website */}
            <div className="bg-white/50 backdrop-blur-xl border border-white/80 p-5 sm:p-6 rounded-[32px] shadow-sm hover:shadow-md hover:bg-white/70 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#E8F2FF] rounded-2xl flex items-center justify-center text-[#4F7CFF] font-bold text-sm shadow-2xs">
                  01
                </div>
                <h3 className="font-heading font-bold text-sm text-[#1D1D1F]">
                  Portfolio Website
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                Modern portfolio with HTML/CSS/JS deployed on GitHub Pages and Vercel with smooth interactive components.
              </p>
              <div className="mt-3.5 flex gap-2">
                <span className="px-2.5 py-1 bg-white/80 border border-slate-100 text-[10px] font-bold rounded-lg text-slate-700">
                  JavaScript
                </span>
                <span className="px-2.5 py-1 bg-white/80 border border-slate-100 text-[10px] font-bold rounded-lg text-slate-700">
                  Vercel
                </span>
              </div>
            </div>

            {/* Card 02: Hospital Management System */}
            <div className="bg-white/50 backdrop-blur-xl border border-white/80 p-5 sm:p-6 rounded-[32px] shadow-sm hover:shadow-md hover:bg-white/70 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#EAF8F5] rounded-2xl flex items-center justify-center text-[#10B981] font-bold text-sm shadow-2xs">
                  02
                </div>
                <h3 className="font-heading font-bold text-sm text-[#1D1D1F]">
                  Hospital Management
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                Comprehensive healthcare system with patient records, appointment scheduling, and automated billing features.
              </p>
              <div className="mt-3.5 flex gap-2">
                <span className="px-2.5 py-1 bg-white/80 border border-slate-100 text-[10px] font-bold rounded-lg text-slate-700">
                  Node.js
                </span>
                <span className="px-2.5 py-1 bg-white/80 border border-slate-100 text-[10px] font-bold rounded-lg text-slate-700">
                  Render
                </span>
              </div>
            </div>

            {/* Card 03: Professional Website */}
            <div className="bg-white/50 backdrop-blur-xl border border-white/80 p-5 sm:p-6 rounded-[32px] shadow-sm hover:shadow-md hover:bg-white/70 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#EEE9FF] rounded-2xl flex items-center justify-center text-[#8B6DFF] font-bold text-sm shadow-2xs">
                  03
                </div>
                <h3 className="font-heading font-bold text-sm text-[#1D1D1F]">
                  Business Website
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                Responsive business platform with modern design, micro-animations, and optimized lead conversion flow.
              </p>
              <div className="mt-3.5 flex gap-2">
                <span className="px-2.5 py-1 bg-white/80 border border-slate-100 text-[10px] font-bold rounded-lg text-slate-700">
                  React
                </span>
                <span className="px-2.5 py-1 bg-white/80 border border-slate-100 text-[10px] font-bold rounded-lg text-slate-700">
                  Tailwind
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Bottom Metrics Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/60 backdrop-blur-md p-5 sm:p-6 rounded-[32px] border border-white/80 shadow-sm"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start p-2 text-center sm:text-left">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black font-heading text-[#1D1D1F]">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-[#4F7CFF]">{stat.suffix}</span>
              </div>
              <span className="text-xs text-slate-500 font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
