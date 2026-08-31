import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  Calendar, 
  Building2, 
  Sparkles, 
  ShieldCheck,
  Share2
} from 'lucide-react';
import { CertificateItem } from '../types';
import { CertificateGraphic } from './CertificateGraphic';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isZoomed]);

  if (!certificate) return null;

  const handleCopyId = () => {
    if (certificate.credentialId) {
      navigator.clipboard.writeText(certificate.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      if (certificate.imageUrl) {
        const link = document.createElement('a');
        link.href = certificate.imageUrl;
        link.download = `${certificate.id}-certificate.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Trigger a client-side text summary download
        const content = `=====================================================
CERTIFICATE OF ACHIEVEMENT & VERIFIED CREDENTIAL
=====================================================
Recipient: Parshuram Prajapati
Certificate Title: ${certificate.title}
Issuing Organization: ${certificate.issuer}
Date of Issue: ${certificate.issueDate}
Credential ID: ${certificate.credentialId || 'N/A'}
Category: ${certificate.category}
Key Skills: ${certificate.skills.join(', ')}

Description:
${certificate.description}

Verification Status: Authenticated & Verified Record
=====================================================`;
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${certificate.id}-credential-parshuram.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    }, 400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-2xl bg-white rounded-[28px] shadow-2xl border border-slate-100 overflow-hidden z-10 flex flex-col my-auto max-h-[92vh]"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2.5">
              <div 
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-2xs"
                style={{ backgroundColor: certificate.accentColor }}
              >
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-[#1D1D1F]">
                  Certificate Verification
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">
                  Verified Academic & Professional Credential
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              id="close-certificate-modal-btn"
              className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
            
            {/* Visual Certificate Preview */}
            <div className="relative group rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden bg-[#FAF9F6] p-2">
              <CertificateGraphic certificate={certificate} isExpanded={true} />
              
              {/* Overlay Action Buttons for High-Res Image */}
              {certificate.imageUrl && (
                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setIsZoomed(true)}
                    className="px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Full Size</span>
                  </button>
                </div>
              )}
            </div>

            {/* Certificate Details */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span 
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md"
                    style={{ 
                      backgroundColor: `${certificate.accentColor}15`,
                      color: certificate.accentColor 
                    }}
                  >
                    {certificate.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Authenticity
                  </span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
                  {certificate.title}
                </h2>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-2xs flex items-center justify-center text-[#4F7CFF]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Issuing Organization
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {certificate.issuer}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-2xs flex items-center justify-center text-[#8B6DFF]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Issue Date
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {certificate.issueDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Credential ID Box */}
              {certificate.credentialId && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Credential Verification ID
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-800">
                      {certificate.credentialId}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyId}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Signatories Section if available */}
              {certificate.signatories && certificate.signatories.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Authorized Signatories & Officials
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {certificate.signatories.map((sig, idx) => (
                      <div key={idx} className="bg-white p-2.5 rounded-lg border border-slate-200/60 text-center">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {sig.role}
                        </div>
                        <div className="text-xs font-bold text-slate-800 mt-0.5">
                          {sig.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  About This Credential
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {certificate.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Skills & Competencies Validated
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Footer Action Controls */}
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>
                {isDownloading
                  ? 'Downloading...'
                  : certificate.imageUrl
                  ? 'Download Certificate Image'
                  : 'Export Credential Record'}
              </span>
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#4F7CFF] hover:bg-[#3d6bf0] text-white text-xs font-bold shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>
                    {certificate.id === 'hackvyuha-cert'
                      ? 'View Drive Certificate'
                      : certificate.id === 'ibm-ai-literacy'
                      ? 'IBM SkillsBuild Portal'
                      : certificate.id === 'hackaura-cert'
                      ? 'VSM SRKIT Portal'
                      : certificate.id === 'ai-arena-2-cert'
                      ? 'IEEE BLDEACET Portal'
                      : `Verify on ${certificate.issuer}`}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </motion.div>

        {/* Full-Screen Zoom Lightbox Modal */}
        {isZoomed && certificate.imageUrl && (
          <div className="fixed inset-0 z-60 bg-black/90 flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn">
            <div className="absolute top-4 right-4 flex items-center gap-3 z-70">
              <button
                onClick={handleDownload}
                className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save Image</span>
              </button>
              <button
                onClick={() => setIsZoomed(false)}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-w-5xl max-h-[85vh] overflow-auto flex items-center justify-center">
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl border border-white/20"
              />
            </div>
            <div className="mt-3 text-center text-xs text-white/80 font-medium">
              {certificate.title} • {certificate.issuer}
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};
