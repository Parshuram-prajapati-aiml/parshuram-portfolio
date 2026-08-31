import React from 'react';
import { CertificateItem } from '../types';
import { Award, CheckCircle2, Sparkles, Bot, Database, Trophy, BrainCircuit, Code2, Shield, Cpu, Binary } from 'lucide-react';

interface CertificateGraphicProps {
  certificate: CertificateItem;
  isExpanded?: boolean;
}

export const CertificateGraphic: React.FC<CertificateGraphicProps> = ({ certificate, isExpanded = false }) => {
  // If actual image is available, render authentic image with high-definition rendering
  if (certificate.imageUrl) {
    return (
      <div className={`relative w-full ${isExpanded ? 'min-h-[260px] max-h-[550px]' : 'aspect-[16/10]'} overflow-hidden select-none bg-slate-900 flex items-center justify-center rounded-xl shadow-xs border border-slate-200/90 group`}>
        <img
          src={certificate.imageUrl}
          alt={certificate.title}
          referrerPolicy="no-referrer"
          className={`w-full ${isExpanded ? 'h-auto max-h-[550px] object-contain' : 'h-full object-cover'} bg-slate-950/20 transition-transform duration-500 group-hover:scale-[1.02]`}
        />
        {/* Subtle Watermark Badge */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono font-medium text-white/90 border border-white/10 pointer-events-none">
          Verified Credential
        </div>
      </div>
    );
  }

  // 1. IBM SKILLSBUILD REALISTIC TEMPLATE
  if (certificate.certificateType === 'ibm-skillsbuild') {
    return (
      <div className={`relative w-full aspect-[16/10] overflow-hidden select-none bg-[#F4F4F4] text-[#161616] flex flex-col justify-between rounded-xl shadow-xs border border-slate-300 font-sans ${isExpanded ? 'p-0 shadow-md' : 'p-0'}`}>
        {/* Top Dark Header Bar */}
        <div className="bg-[#9E9E9E] px-4 py-2.5 sm:px-6 sm:py-3 flex items-center justify-between text-black font-mono">
          <div className="flex items-center gap-1 text-xs sm:text-base font-bold tracking-tight">
            <span className="font-black text-black">IBM</span>
            <span className="font-extrabold text-black">SkillsBuild</span>
          </div>
          <div className="text-[11px] sm:text-sm font-normal text-black/90">
            Completion Certificate
          </div>
        </div>

        {/* Certificate Body */}
        <div className="px-4 py-3 sm:px-8 sm:py-5 flex-1 flex flex-col justify-center items-center text-center relative bg-[#F4F4F4]">
          {/* Yellow Ribbon Medal on the left */}
          <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-full border-3 sm:border-4 border-[#F1C21B] bg-white flex items-center justify-center shadow-xs">
              <Award className="w-5 h-5 sm:w-8 sm:h-8 text-[#F1C21B]" />
            </div>
            <div className="flex gap-1 -mt-1 sm:-mt-1.5">
              <div className="w-2 h-4 sm:w-3 sm:h-6 bg-[#F1C21B] rotate-12 rounded-b-xs" />
              <div className="w-2 h-4 sm:w-3 sm:h-6 bg-[#F1C21B] -rotate-12 rounded-b-xs" />
            </div>
          </div>

          <div className="max-w-[80%] mx-auto pl-6 sm:pl-8">
            <p className="text-[9px] sm:text-xs text-slate-700 font-normal mb-1">
              This certificate is presented to
            </p>
            <h3 className="font-heading text-sm sm:text-2xl font-light text-slate-900 tracking-normal mb-2 sm:mb-3">
              {certificate.recipientName || "Parashuram Prajapati"}
            </h3>

            <p className="text-[8px] sm:text-[11px] text-slate-600 font-normal mb-0.5">
              for the completion of
            </p>
            <h4 className="font-heading text-xs sm:text-lg font-black text-black tracking-tight mb-1">
              AI Literacy (Earn a digital credential!)
            </h4>
            <p className="text-[7.5px] sm:text-[10px] text-slate-600 font-mono mb-2 sm:mb-3">
              ({certificate.planCode || "PLAN-1C903152880C"})
            </p>

            <p className="text-[6.5px] sm:text-[9px] text-slate-500 font-normal">
              According to the Your Learning Builder - Plans system of record
            </p>
          </div>
        </div>

        {/* Bottom Dark Footer Bar */}
        <div className="bg-[#9E9E9E] px-4 py-1.5 sm:px-6 sm:py-2 flex items-center justify-between text-black text-[8px] sm:text-[11px] font-medium">
          <div>
            <span className="font-bold">Completion date:</span> {certificate.issueDate || "20 Dec 2025 (GMT)"}
          </div>
          <div className="text-[7px] sm:text-[9px] text-black/80">
            IBM Credential Verification
          </div>
        </div>
      </div>
    );
  }

  // 2. HACKAURA 2026 REALISTIC TEMPLATE
  if (certificate.certificateType === 'hackaura') {
    return (
      <div className={`relative w-full aspect-[16/10] overflow-hidden select-none bg-[#FCFCFD] text-[#0F172A] flex flex-col justify-between rounded-xl shadow-xs border-4 border-[#1E3A8A] font-sans p-3 sm:p-5 ${isExpanded ? 'shadow-md' : ''}`}>
        {/* Inner Golden Border Frame */}
        <div className="absolute inset-1.5 border border-[#D97706]/70 rounded-md pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#1E3A8A] pointer-events-none" />

        {/* Top Header Row with Badges and Institution */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-200/80 pb-1.5 sm:pb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-2xs">
              <Shield className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-amber-300" />
            </div>
            <div className="text-left">
              <div className="text-[6.5px] sm:text-[9px] font-black uppercase text-[#1E3A8A] tracking-wider leading-tight">
                VIDYA SAMVARDHAK MANDAL'S
              </div>
              <div className="text-[5.5px] sm:text-[7.5px] font-bold text-slate-700 leading-tight">
                SOMASHEKHAR R. KOTHIWALE INSTITUTE OF TECHNOLOGY, NIPANI
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="text-right">
              <div className="text-[6px] sm:text-[8px] font-bold text-amber-800 uppercase">सविष्कार</div>
              <div className="text-[5px] sm:text-[7px] text-slate-500 font-medium">Belagavi</div>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-blue-900 bg-blue-50 flex items-center justify-center text-[#1E3A8A] font-bold text-[7px]">
              <Trophy className="w-3.5 h-3.5 text-[#1E3A8A]" />
            </div>
          </div>
        </div>

        {/* HackAura Title Header */}
        <div className="relative z-10 text-center my-0.5 sm:my-1">
          <h3 className="font-heading text-lg sm:text-3xl font-extrabold text-[#DC2626] tracking-tight leading-none mb-0.5">
            HackAura
          </h3>
          <p className="text-[7.5px] sm:text-[10px] font-semibold text-slate-700 italic">
            "Hack, Create, Elevate"
          </p>
          <p className="text-[9px] sm:text-xs font-black text-[#DC2626]">
            2026
          </p>

          {/* Certificate of Participation Golden Ribbon Pill */}
          <div className="inline-block bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 text-amber-950 px-3 py-0.5 sm:px-5 sm:py-1 rounded-full text-[7px] sm:text-[10px] font-black uppercase tracking-widest shadow-2xs border border-amber-400 mt-1">
            CERTIFICATE OF PARTICIPATION
          </div>
        </div>

        {/* Body Text */}
        <div className="relative z-10 text-center max-w-[94%] mx-auto text-[7px] sm:text-[9.5px] text-slate-800 leading-relaxed font-medium">
          <p>
            This is to Certify that <span className="font-bold underline decoration-[#1E3A8A] text-[#0F172A]">Mr. Parshuram R Prajapati</span> of <span className="font-bold text-[#0F172A]">BLDEA'S COLLEGE OF ENGINEERING</span> Has Participated in the <span className="font-bold text-[#DC2626]">HackAura</span> held on <span className="font-semibold text-[#0F172A]">12th and 13th March 2026</span> Organized by <span className="font-bold text-[#1E3A8A]">VSMSRKIT Nipani</span>.
          </p>
          <p className="text-[6px] sm:text-[8px] text-slate-500 italic mt-0.5 sm:mt-1">
            We sincerely appreciate your significant contribution and support towards the success of the Event.
          </p>
        </div>

        {/* Bottom 3 Signatures */}
        <div className="relative z-10 grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/90 text-center">
          <div>
            <div className="h-3 sm:h-4 flex items-center justify-center">
              <span className="font-serif italic text-[8px] sm:text-xs text-blue-900 font-bold opacity-80">C. Kothiwale</span>
            </div>
            <div className="text-[6px] sm:text-[8px] font-bold text-slate-800">Chairman</div>
            <div className="text-[5px] sm:text-[7px] text-slate-500">Shri. Chandrakant Kothiwale</div>
          </div>
          <div>
            <div className="h-3 sm:h-4 flex items-center justify-center">
              <span className="font-serif italic text-[8px] sm:text-xs text-blue-900 font-bold opacity-80">S. Patil</span>
            </div>
            <div className="text-[6px] sm:text-[8px] font-bold text-slate-800">CEO</div>
            <div className="text-[5px] sm:text-[7px] text-slate-500">Dr. Siddagouda Patil</div>
          </div>
          <div>
            <div className="h-3 sm:h-4 flex items-center justify-center">
              <span className="font-serif italic text-[8px] sm:text-xs text-blue-900 font-bold opacity-80">U. Patil</span>
            </div>
            <div className="text-[6px] sm:text-[8px] font-bold text-slate-800">Principal</div>
            <div className="text-[5px] sm:text-[7px] text-slate-500">Dr. Umesh Patil</div>
          </div>
        </div>
      </div>
    );
  }

  // 3. AI ARENA 2.0 REALISTIC TEMPLATE (IEEE BLDEACET)
  if (certificate.certificateType === 'ai-arena-2') {
    return (
      <div className={`relative w-full aspect-[16/10] overflow-hidden select-none bg-[#FAFAFA] text-[#0F172A] flex flex-col justify-between rounded-xl shadow-xs border-2 border-slate-700 font-sans p-3 sm:p-5 ${isExpanded ? 'shadow-md' : ''}`}>
        {/* Futuristic Circuit Board Traces and Nodes Frame */}
        <div className="absolute inset-1.5 border border-cyan-800/40 rounded-sm pointer-events-none" />
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-slate-800 pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-slate-800 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-slate-800 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-slate-800 pointer-events-none" />

        {/* Right Vertical #AIHACKATHON Banner */}
        <div className="absolute right-1 sm:right-2.5 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[7px] sm:text-[10px] font-mono font-black text-slate-700 tracking-widest pointer-events-none">
          #AIHACKATHON
        </div>

        {/* Top Header: Organization Crests & Institution */}
        <div className="relative z-10 flex items-center justify-between gap-1 border-b border-slate-300 pb-1 sm:pb-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-[8px]">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-[6.5px] sm:text-[9px] font-black tracking-tight text-slate-800">
              IEEE <span className="text-slate-500 font-normal">BANGALORE SECTION</span>
            </div>
          </div>

          <div className="text-center flex-1 max-w-[65%]">
            <div className="text-[6.5px] sm:text-[9px] font-black uppercase text-slate-900 leading-tight">
              BLDEA'S V. P. DR. P. G. HALAKATTI COLLEGE OF ENGINEERING & TECHNOLOGY, VIJAYAPURA - 586101
            </div>
            <div className="text-[5.5px] sm:text-[7.5px] font-bold text-slate-600">
              IEEE STUDENT BRANCH BLDEACET (STB 30721)
            </div>
          </div>

          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded bg-blue-900 text-white flex items-center justify-center font-bold text-[7px]">
            IEEE
          </div>
        </div>

        {/* Title and Recipient */}
        <div className="relative z-10 text-center my-0.5 sm:my-1">
          <h3 className="font-heading text-xs sm:text-base font-black text-slate-900 tracking-wider uppercase mb-0.5">
            CERTIFICATE OF PARTICIPATION
          </h3>
          <p className="text-[7px] sm:text-[9px] text-slate-500">This is to certify that</p>
          <div className="my-1 inline-block border-b border-slate-400 pb-0.5 px-4">
            <span className="font-heading text-xs sm:text-lg font-bold text-[#0F172A]">
              Parshuram Prajapati
            </span>
          </div>
        </div>

        {/* Description Body */}
        <div className="relative z-10 text-center max-w-[88%] mx-auto text-[6.5px] sm:text-[9px] text-slate-700 leading-relaxed font-normal">
          has successfully participated in <span className="font-bold text-slate-900">AI Arena 2.0</span> organized by the <span className="font-semibold text-slate-900">IEEE BLDEACET Student Branch</span> at <span className="font-medium text-slate-800">BLDEA's V. P. Dr. P. G. Halakatti College of Engineering & Technology, Vijayapura</span> held on <span className="font-bold text-slate-900">25th March 2026</span>, demonstrating innovation and prototyping abilities in artificial intelligence.
        </div>

        {/* Bottom Row: AI Mascot + 3 Signatures */}
        <div className="relative z-10 grid grid-cols-4 items-end pt-1 border-t border-slate-300 text-center">
          {/* AI Robot Mascot */}
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-cyan-50 border border-cyan-300 flex items-center justify-center shadow-2xs">
              <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-600" />
            </div>
          </div>

          <div>
            <div className="h-2.5 sm:h-3.5 flex items-center justify-center">
              <span className="font-serif italic text-[7px] sm:text-[10px] text-slate-800 font-bold opacity-80">V. Gonal</span>
            </div>
            <div className="text-[5.5px] sm:text-[7.5px] font-bold text-slate-900">Dr. Veeresh Gonal</div>
            <div className="text-[4.5px] sm:text-[6.5px] text-slate-500">IEEE Senior Advisor</div>
          </div>

          <div>
            <div className="h-2.5 sm:h-3.5 flex items-center justify-center">
              <span className="font-serif italic text-[7px] sm:text-[10px] text-slate-800 font-bold opacity-80">S. Patil</span>
            </div>
            <div className="text-[5.5px] sm:text-[7.5px] font-bold text-slate-900">Dr. Shweta Patil</div>
            <div className="text-[4.5px] sm:text-[6.5px] text-slate-500">Branch Counselor</div>
          </div>

          <div>
            <div className="h-2.5 sm:h-3.5 flex items-center justify-center">
              <span className="font-serif italic text-[7px] sm:text-[10px] text-slate-800 font-bold opacity-80">Manjunath P</span>
            </div>
            <div className="text-[5.5px] sm:text-[7.5px] font-bold text-slate-900">Dr. Manjunath P</div>
            <div className="text-[4.5px] sm:text-[6.5px] text-slate-500">Principal BLDEACET</div>
          </div>
        </div>
      </div>
    );
  }

  // 4. STANDARD FALLBACK TEMPLATE
  const getIcon = () => {
    switch (certificate.badgeIcon) {
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Bot': return <Bot className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Trophy': return <Trophy className="w-4 h-4" />;
      case 'BrainCircuit': return <BrainCircuit className="w-4 h-4" />;
      case 'Code2': return <Code2 className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  return (
    <div 
      className={`relative w-full aspect-[16/10] overflow-hidden select-none bg-gradient-to-br from-white via-[#FAF9F6] to-slate-50 border border-slate-200/90 rounded-xl p-4 sm:p-5 flex flex-col justify-between ${
        isExpanded ? 'shadow-inner' : ''
      }`}
    >
      {/* Decorative Outer Border Frame */}
      <div 
        className="absolute inset-1.5 border border-dashed rounded-lg pointer-events-none opacity-40" 
        style={{ borderColor: certificate.accentColor }} 
      />
      <div 
        className="absolute inset-2.5 border border-solid rounded-[6px] pointer-events-none opacity-20" 
        style={{ borderColor: certificate.accentColor }} 
      />

      {/* Top Corner Ornaments */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 rounded-tl-sm pointer-events-none" style={{ borderColor: certificate.accentColor }} />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 rounded-tr-sm pointer-events-none" style={{ borderColor: certificate.accentColor }} />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 rounded-bl-sm pointer-events-none" style={{ borderColor: certificate.accentColor }} />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 rounded-br-sm pointer-events-none" style={{ borderColor: certificate.accentColor }} />

      {/* Subtle Background Watermark Seal */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
        <Award className="w-48 h-48 text-[#1D1D1F]" />
      </div>

      {/* Top Row: Issuer Logo & Verified Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div 
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white shadow-xs text-xs font-bold"
            style={{ backgroundColor: certificate.accentColor }}
          >
            {getIcon()}
          </div>
          <div>
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-700 block leading-tight">
              {certificate.issuer}
            </span>
            <span className="text-[8px] sm:text-[9px] text-slate-400 font-medium">
              Verified Credential
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-white/95 px-2 py-0.5 rounded-full border border-slate-200/80 shadow-2xs">
          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
          <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">
            Verified
          </span>
        </div>
      </div>

      {/* Middle Content: Certificate Subject & Recipient */}
      <div className="relative z-10 text-center my-auto py-1">
        <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">
          Certificate of Completion
        </span>
        <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#1D1D1F] line-clamp-1 tracking-tight">
          {certificate.title}
        </h4>
        <div className="mt-1 flex items-center justify-center gap-1.5">
          <div className="h-px w-6 bg-slate-300" />
          <p className="text-[9px] sm:text-[10px] font-semibold text-slate-600 italic">
            Awarded to <span className="text-[#1D1D1F] font-bold not-italic">Parshuram Prajapati</span>
          </p>
          <div className="h-px w-6 bg-slate-300" />
        </div>
      </div>

      {/* Bottom Row: Seal & Credential Metadata */}
      <div className="relative z-10 flex items-end justify-between pt-1 border-t border-slate-100/90 text-left">
        <div>
          <span className="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-wider text-slate-400 block">
            ID: {certificate.credentialId || 'VERIFIED-RECORD'}
          </span>
          <span className="text-[8px] sm:text-[9px] font-medium text-slate-500 block">
            Issued: {certificate.issueDate}
          </span>
        </div>

        {/* Golden / Blue Embossed Seal Stamp */}
        <div 
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-dashed flex items-center justify-center p-1 shadow-2xs relative"
          style={{ borderColor: certificate.accentColor, backgroundColor: `${certificate.accentColor}10` }}
        >
          <Award className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: certificate.accentColor }} />
        </div>
      </div>
    </div>
  );
};
