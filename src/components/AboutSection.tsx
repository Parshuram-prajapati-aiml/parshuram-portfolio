import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  Terminal, 
  CheckCircle2, 
  ArrowUpRight, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Facebook, 
  FileDown,
  Mail,
  Github
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'bio' | 'skills' | 'vision'>('bio');

  // Formatted syntax-highlighted code structures
  const codeFiles = {
    bio: {
      filename: 'profile.ts',
      language: 'TypeScript',
      lines: [
        { num: 1, content: <span className="text-slate-400 italic">// developer_profile.ts</span> },
        { num: 2, content: <><span><span className="text-purple-600 font-semibold">export const</span> <span className="text-blue-600 font-medium">developer</span> = &#123;</span></> },
        { num: 3, content: <>  <span className="text-slate-600">name</span>: <span className="text-emerald-600">"Parshuram Prajapati"</span>,</> },
        { num: 4, content: <>  <span className="text-slate-600">college</span>: <span className="text-emerald-600">"BLDEACET, Vijayapur"</span>,</> },
        { num: 5, content: <>  <span className="text-slate-600">domain</span>: <span className="text-emerald-600">"AI & Machine Learning"</span>,</> },
        { num: 6, content: <>  <span className="text-slate-600">languages</span>: [<span className="text-amber-600">"C++"</span>, <span className="text-amber-600">"Java"</span>, <span className="text-amber-600">"Python"</span>],</> },
        { num: 7, content: <>  <span className="text-slate-600">webStack</span>: [<span className="text-amber-600">"React"</span>, <span className="text-amber-600">"JS"</span>, <span className="text-amber-600">"PHP"</span>],</> },
        { num: 8, content: <>  <span className="text-slate-600">status</span>: <span className="text-emerald-600">"Open for Internships"</span></> },
        { num: 9, content: <><span>&#125;;</span></> }
      ]
    },
    skills: {
      filename: 'aiml.py',
      language: 'Python',
      lines: [
        { num: 1, content: <span className="text-slate-400 italic"># aiml_pipeline.py</span> },
        { num: 2, content: <><span><span className="text-purple-600 font-semibold">import</span> <span className="text-blue-600">numpy</span> <span className="text-purple-600 font-semibold">as</span> <span className="text-slate-700">np</span></span></> },
        { num: 3, content: <><span><span className="text-purple-600 font-semibold">from</span> <span className="text-blue-600">sklearn.ensemble</span> <span className="text-purple-600 font-semibold">import</span> <span className="text-slate-700">RFC</span></span></> },
        { num: 4, content: <><span><span className="text-purple-600 font-semibold">class</span> <span className="text-blue-700 font-bold">AIPipeline</span>:</span></> },
        { num: 5, content: <>  <span className="text-purple-600 font-semibold">def</span> <span className="text-blue-600">__init__</span>(<span className="text-slate-700">self</span>):</> },
        { num: 6, content: <>    <span className="text-slate-700">self</span>.<span className="text-slate-600">branch</span> = <span className="text-emerald-600">"AIML @ BLDEACET"</span></> },
        { num: 7, content: <>    <span className="text-slate-700">self</span>.<span className="text-slate-600">focus</span> = <span className="text-emerald-600">"Smart Telemetry AI"</span></> },
        { num: 8, content: <>  <span className="text-purple-600 font-semibold">def</span> <span className="text-blue-600">predict</span>(<span className="text-slate-700">self</span>, <span className="text-slate-600">stream</span>):</> },
        { num: 9, content: <>    <span className="text-purple-600 font-semibold">return</span> <span className="text-emerald-600">"Accuracy: 96.8%"</span></> }
      ]
    },
    vision: {
      filename: 'design.css',
      language: 'CSS',
      lines: [
        { num: 1, content: <span className="text-slate-400 italic">/* developer_style.css */</span> },
        { num: 2, content: <><span><span className="text-blue-600 font-semibold">.developer-vision</span> &#123;</span></> },
        { num: 3, content: <>  <span className="text-rose-600">design-theme</span>: <span className="text-emerald-600">"Clean & Modern"</span>;</> },
        { num: 4, content: <>  <span className="text-rose-600">pixel-precision</span>: <span className="text-purple-600">true</span>;</> },
        { num: 5, content: <>  <span className="text-rose-600">problem-solving</span>: <span className="text-purple-600">continuous</span>;</> },
        { num: 6, content: <>  <span className="text-rose-600">user-centricity</span>: <span className="text-amber-600">high-priority</span>;</> },
        { num: 7, content: <><span>&#125;</span></> }
      ]
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'instagram': return <Instagram className="w-4 h-4" />;
      case 'facebook': return <Facebook className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      case 'github': return <Github className="w-4 h-4" />;
      default: return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <section 
      id="about" 
      className="py-28 sm:py-32 relative overflow-hidden bg-[#F3F6FF] transition-colors duration-500"
    >
      {/* Background Soft Geometric Pastel Glow */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#E1ECFF] rounded-full blur-[130px] opacity-70 pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-[#E8E4FF] rounded-full blur-[140px] opacity-60 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/90 border border-[#4F7CFF]/20 text-[#4F7CFF] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 shadow-2xs">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#1D1D1F] tracking-tight">
            Meet <span className="text-[#4F7CFF]">Parshuram Prajapati</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Computer Science undergraduate specializing in AI & Machine Learning at BLDEA College of Engineering, Vijayapur.
          </p>
        </div>

        {/* Bento Grid Layout for About Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Main Story & College info (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white/85 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 border border-white/90 shadow-sm flex flex-col justify-between hover:shadow-md hover:bg-white transition-all">
            <div>
              {/* College & Degree Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#4F7CFF] to-[#8B6DFF] flex items-center justify-center text-white shadow-md shadow-[#4F7CFF]/20 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1D1D1F]">
                    {PERSONAL_INFO.college}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4F7CFF] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#8B6DFF]" />
                    <span>{PERSONAL_INFO.collegeLocation}</span>
                  </div>
                </div>
              </div>

              {/* Exact Bio text from original portfolio */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {PERSONAL_INFO.bio}
              </p>

              {/* Core Languages List from actual portfolio */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Core Languages:
                </span>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.coreLanguages.map((lang) => (
                    <span 
                      key={lang}
                      className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F8FAFC] border border-slate-200/90 text-[#1D1D1F] hover:border-[#4F7CFF] hover:text-[#4F7CFF] transition-colors"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Connect Directly:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {SOCIAL_LINKS.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-slate-700 hover:text-[#4F7CFF] hover:border-[#4F7CFF]/40 hover:shadow-xs transition-all"
                    >
                      {getSocialIcon(soc.name)}
                      <span>{soc.name}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                id="about-resume-btn"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#4F7CFF] text-white hover:bg-[#3d6bf0] shadow-sm shadow-[#4F7CFF]/20 hover:scale-[1.02] transition-all"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>View Google Drive Resume</span>
              </a>

              <a
                href={PERSONAL_INFO.livePortfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#8B6DFF] hover:text-[#4F7CFF] flex items-center gap-1 transition-colors"
              >
                <span>Original Vercel Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Interactive Code Terminal & Stats (5 cols on lg) */}
          <div className="lg:col-span-5 bg-white/85 backdrop-blur-xl rounded-[32px] p-6 sm:p-7 border border-white/90 shadow-sm flex flex-col justify-between hover:shadow-md hover:bg-white transition-all">
            <div>
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
                  <button
                    onClick={() => setActiveCodeTab('bio')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeCodeTab === 'bio' 
                        ? 'bg-white text-[#4F7CFF] shadow-xs' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('skills')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeCodeTab === 'skills' 
                        ? 'bg-white text-[#4F7CFF] shadow-xs' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    aiml.py
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('vision')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeCodeTab === 'vision' 
                        ? 'bg-white text-[#4F7CFF] shadow-xs' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    design.css
                  </button>
                </div>
              </div>

              {/* Code Snippet Box with Clean Syntax Highlighting */}
              <div className="bg-[#FAF9FC] p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 font-mono text-[11px] sm:text-[11.5px] leading-relaxed select-none min-h-[220px] flex flex-col justify-center">
                <div className="space-y-1">
                  {codeFiles[activeCodeTab].lines.map((line) => (
                    <div key={line.num} className="flex items-start gap-2.5">
                      <span className="text-[10px] text-slate-300 select-none font-mono w-4 text-right shrink-0 pt-0.5">
                        {line.num}
                      </span>
                      <div className="text-slate-800 break-words font-mono">
                        {line.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Stats Counters from original portfolio */}
            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs text-center">
                <span className="text-2xl font-black font-heading text-[#4F7CFF] block">5+</span>
                <span className="text-xs text-slate-600 font-semibold">Web Projects</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs text-center">
                <span className="text-2xl font-black font-heading text-[#8B6DFF] block">2+</span>
                <span className="text-xs text-slate-600 font-semibold">Years Learning</span>
              </div>
            </div>

            {/* Quick Summary Highlights */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>BLDEA College of Engineering, Vijayapur (AIML)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>IBM AI Literacy Certified • HackAura & AI Arena 2.0</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
