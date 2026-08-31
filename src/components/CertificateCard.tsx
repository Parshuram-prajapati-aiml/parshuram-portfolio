import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { CertificateItem } from '../types';
import { CertificateGraphic } from './CertificateGraphic';

interface CertificateCardProps {
  certificate: CertificateItem;
  onSelect: (cert: CertificateItem) => void;
  index: number;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onSelect, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onSelect(certificate)}
      id={`certificate-card-${certificate.id}`}
      className="group relative w-[340px] sm:w-[380px] lg:w-[400px] shrink-0 rounded-[20px] bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#4F7CFF]/10 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
    >
      {/* Subtle Top Accent Gradient Line */}
      <div 
        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
        style={{
          background: `linear-gradient(90deg, ${certificate.accentColor}, #8B6DFF)`
        }}
      />

      <div className="p-4 sm:p-5 flex flex-col h-full justify-between">
        
        {/* Certificate Preview Image (Fixed Aspect Ratio 16/10) */}
        <div className="relative rounded-xl overflow-hidden shadow-2xs border border-slate-100/90 mb-4 group-hover:border-[#4F7CFF]/30 transition-colors">
          <CertificateGraphic certificate={certificate} />
          
          {/* Subtle Hover Overlay Glass Shimmer */}
          <div className="absolute inset-0 bg-[#4F7CFF]/0 group-hover:bg-[#4F7CFF]/5 transition-colors duration-300 pointer-events-none" />
        </div>

        {/* Certificate Metadata & Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Top Category Badge & Verified Pill */}
            <div className="flex items-center justify-between mb-2">
              <span 
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                style={{ 
                  backgroundColor: `${certificate.accentColor}15`,
                  color: certificate.accentColor 
                }}
              >
                {certificate.category}
              </span>
              
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                {certificate.issueDate}
              </span>
            </div>

            {/* Certificate Title */}
            <h3 className="font-heading font-bold text-base sm:text-lg text-[#1D1D1F] tracking-tight group-hover:text-[#4F7CFF] transition-colors line-clamp-1 mb-1.5">
              {certificate.title}
            </h3>

            {/* Issuing Organization */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-3">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              <span>{certificate.issuer}</span>
            </div>
          </div>

          {/* Bottom Row: Skills Pill + "View Certificate →" Button */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-2 gap-2">
            <div className="flex items-center gap-1 min-w-0">
              <span className="text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md truncate max-w-[150px] sm:max-w-[180px]">
                {certificate.skills[0]} {certificate.skills[1] ? `+ ${certificate.skills[1]}` : ''}
              </span>
            </div>

            {/* "View Certificate →" button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onSelect(certificate);
              }}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#4F7CFF] bg-[#4F7CFF]/10 group-hover:bg-[#4F7CFF] group-hover:text-white px-3 py-1.5 rounded-xl transition-all shrink-0 cursor-pointer shadow-2xs"
            >
              <span>View Certificate</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
