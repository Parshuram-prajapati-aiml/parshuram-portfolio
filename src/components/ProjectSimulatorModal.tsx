import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  QrCode, 
  UserCheck, 
  GraduationCap, 
  School, 
  Laptop, 
  Database, 
  Smartphone, 
  Zap, 
  ChevronRight,
  ScanFace,
  Mic,
  FileCheck,
  Building2,
  CalendarCheck
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectSimulatorModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectSimulatorModal: React.FC<ProjectSimulatorModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Active Tab for Modal: 'overview' | 'features' | 'techstack' | 'interactive'
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'techstack' | 'interactive'>('overview');

  // Interactive state for Snap Class
  const [activePortal, setActivePortal] = useState<'student' | 'teacher'>('student');
  const [isFaceScanning, setIsFaceScanning] = useState<boolean>(false);
  const [faceVerified, setFaceVerified] = useState<boolean>(false);
  const [isVoiceRecording, setIsVoiceRecording] = useState<boolean>(false);
  const [voiceVerified, setVoiceVerified] = useState<boolean>(false);

  // Interactive state for Fatima School
  const [selectedSchoolTab, setSelectedSchoolTab] = useState<'admissions' | 'academics' | 'facilities'>('admissions');

  const handleSimulateFaceScan = () => {
    setIsFaceScanning(true);
    setFaceVerified(false);
    setTimeout(() => {
      setIsFaceScanning(false);
      setFaceVerified(true);
    }, 1800);
  };

  const handleSimulateVoiceCheck = () => {
    setIsVoiceRecording(true);
    setVoiceVerified(false);
    setTimeout(() => {
      setIsVoiceRecording(false);
      setVoiceVerified(true);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[92vh] flex flex-col text-left"
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 via-white to-slate-50">
          <div className="flex items-center gap-3.5 min-w-0">
            <div 
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-sm font-bold text-sm shrink-0"
              style={{ backgroundColor: project.accentColor }}
            >
              {project.projectNumber}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F7CFF]">
                  {project.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  {project.metrics || 'Verified Project'}
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1D1D1F] tracking-tight truncate">
                {project.title}
              </h3>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0 cursor-pointer ml-3"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 px-6 pt-3 pb-2 border-b border-slate-100 bg-white overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Preview' },
            { id: 'features', label: 'Key Features' },
            { id: 'techstack', label: 'Tech Stack & Architecture' },
            { id: 'interactive', label: 'Interactive Sandbox' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#4F7CFF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-white">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Screenshot Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950 group">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto object-contain max-h-[380px] mx-auto transition-transform duration-500 group-hover:scale-[1.01]" 
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-slate-800 border border-slate-200/80 shadow-xs">
                  {project.tagline}
                </div>
              </div>

              {/* Tagline & Descriptions */}
              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F7CFF] block mb-1">
                  About The Project
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F] mb-2">
                  {project.tagline}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Quick Feature Highlights */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Highlights
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#4F7CFF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KEY FEATURES */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#E8F2FF]/60 border border-[#4F7CFF]/20 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#4F7CFF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#1D1D1F]">
                    Engineered Features & Capabilities
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Explore all technical and functional modules implemented in {project.title}.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-[#4F7CFF]/40 transition-colors flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-xl bg-[#4F7CFF]/10 text-[#4F7CFF] flex items-center justify-center shrink-0 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-800">
                        {feature}
                      </h5>
                      <span className="text-[11px] text-slate-500 mt-0.5 block">
                        Fully integrated and production tested.
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TECH STACK */}
          {activeTab === 'techstack' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/60 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-[#8B6DFF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#1D1D1F]">
                    Technology Stack & Dependencies
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Libraries, frameworks, machine learning models, and cloud database architecture powering {project.title}.
                  </p>
                </div>
              </div>

              {/* All Tech Stack Pills */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Complete Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-[#FAF9F6] border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs flex items-center gap-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#4F7CFF]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-[#4F7CFF]" />
                    <span className="text-xs font-bold text-slate-800">Backend & Persistence</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Powered by Supabase and PostgreSQL for relational table schema, real-time event streaming, and encrypted authentication.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Laptop className="w-4 h-4 text-[#8B6DFF]" />
                    <span className="text-xs font-bold text-slate-800">Frontend & Client Layer</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Engineered with responsive modern design, optimized layout metrics, and smooth transitions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: INTERACTIVE SANDBOX */}
          {activeTab === 'interactive' && (
            <div className="space-y-6">
              
              {/* SNAP CLASS SIMULATOR */}
              {project.id === 'snap-class' && (
                <div className="space-y-6">
                  {/* Mode Selector */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-100 border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">Simulate Portal View:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActivePortal('student')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          activePortal === 'student' ? 'bg-[#4F7CFF] text-white shadow-xs' : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        Student Portal
                      </button>
                      <button
                        onClick={() => setActivePortal('teacher')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          activePortal === 'teacher' ? 'bg-[#8B6DFF] text-white shadow-xs' : 'bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        Teacher Portal
                      </button>
                    </div>
                  </div>

                  {/* Portal Simulation Card */}
                  <div className="p-6 rounded-3xl bg-[#0F172A] text-white border border-slate-800 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-lime-400 text-slate-900 flex items-center justify-center font-black text-xs">
                          SC
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white block">SNAP CLASS PORTAL</span>
                          <span className="text-[10px] text-lime-400 font-mono">
                            {activePortal === 'student' ? '● Student Mode Active' : '● Teacher Mode Active'}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        Supabase Auth: Connected
                      </span>
                    </div>

                    {/* Dual Biometrics Simulation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Biometric 1: FaceID Scan */}
                      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-center">
                        <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-500/20 text-[#4F7CFF] flex items-center justify-center">
                          <ScanFace className={`w-6 h-6 ${isFaceScanning ? 'animate-pulse text-lime-400' : ''}`} />
                        </div>
                        <div>
                          <h6 className="text-xs font-bold text-white">FaceID Authentication</h6>
                          <p className="text-[11px] text-slate-400 mt-0.5">Dlib 68-Point Facial Landmarks</p>
                        </div>
                        <button
                          onClick={handleSimulateFaceScan}
                          disabled={isFaceScanning}
                          className="w-full py-2 px-3 rounded-xl bg-[#4F7CFF] hover:bg-[#3d6bf0] text-white text-xs font-bold transition-all cursor-pointer disabled:opacity-50"
                        >
                          {isFaceScanning ? 'Extracting Face Embeddings...' : faceVerified ? '✓ Face Verified (Confidence: 99.2%)' : 'Test FaceID Check-In'}
                        </button>
                      </div>

                      {/* Biometric 2: Voice Biometric */}
                      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-center">
                        <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-500/20 text-[#8B6DFF] flex items-center justify-center">
                          <Mic className={`w-6 h-6 ${isVoiceRecording ? 'animate-pulse text-lime-400' : ''}`} />
                        </div>
                        <div>
                          <h6 className="text-xs font-bold text-white">Voice Biometric Verification</h6>
                          <p className="text-[11px] text-slate-400 mt-0.5">Resemblyzer Voiceprint Vector</p>
                        </div>
                        <button
                          onClick={handleSimulateVoiceCheck}
                          disabled={isVoiceRecording}
                          className="w-full py-2 px-3 rounded-xl bg-[#8B6DFF] hover:bg-[#7854f7] text-white text-xs font-bold transition-all cursor-pointer disabled:opacity-50"
                        >
                          {isVoiceRecording ? 'Analyzing Voiceprint Spectrum...' : voiceVerified ? '✓ Voice Verified (Match: 98.7%)' : 'Test Voice Biometrics'}
                        </button>
                      </div>
                    </div>

                    {/* Attendance Result Table Simulation */}
                    <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="font-bold text-slate-300">Live Attendance Log (PostgreSQL):</span>
                        <span className="text-[10px] text-lime-400 font-mono">Real-Time Sync</span>
                      </div>
                      <div className="space-y-2 font-mono text-[11px]">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 text-slate-300">
                          <span>PARSHURAM PRAJAPATI (USN: 2BL22CS...)</span>
                          <span className="text-lime-400 font-bold">PRESENT (FaceID + Voice)</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 text-slate-400">
                          <span>SAMPLE STUDENT 02</span>
                          <span className="text-amber-400 font-bold">QR CHECK-IN</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* FATIMA SCHOOL SIMULATOR */}
              {project.id === 'fatima-school-website' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <span className="text-xs font-bold text-emerald-900">Explore School Website Modules:</span>
                    <div className="flex items-center gap-1.5">
                      {[
                        { id: 'admissions', label: 'Admissions 2026-27' },
                        { id: 'academics', label: 'Academics' },
                        { id: 'facilities', label: 'Facilities' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedSchoolTab(tab.id as any)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            selectedSchoolTab === tab.id ? 'bg-emerald-600 text-white shadow-xs' : 'bg-white text-emerald-800 hover:bg-emerald-100/60'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* School Showcase Box */}
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-950 text-white border border-emerald-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold">
                          FIS
                        </div>
                        <div>
                          <h6 className="text-sm font-bold text-white">FATIMAH INTERNATIONAL SCHOOL</h6>
                          <span className="text-[11px] text-amber-300">VIJAYAPURA · KARNATAKA</span>
                        </div>
                      </div>
                      <span className="text-[11px] px-3 py-1 rounded-full bg-amber-400 text-emerald-950 font-bold">
                        Admissions Open
                      </span>
                    </div>

                    {selectedSchoolTab === 'admissions' && (
                      <div className="space-y-3">
                        <h5 className="text-sm font-bold text-white">Admissions Open for Academic Year 2026–27</h5>
                        <p className="text-xs text-emerald-100 leading-relaxed">
                          Nurturing young minds in Vijayapura with knowledge, discipline and moral character for a brighter tomorrow.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <div className="p-3 rounded-xl bg-emerald-800/50 border border-emerald-700/60 text-xs">
                            <span className="font-bold text-amber-300 block mb-1">Online Application Form</span>
                            <span className="text-emerald-100">Integrated React Hook Form with Zod schema verification and instant Supabase lead logging.</span>
                          </div>
                          <div className="p-3 rounded-xl bg-emerald-800/50 border border-emerald-700/60 text-xs">
                            <span className="font-bold text-amber-300 block mb-1">Parent Information Desk</span>
                            <span className="text-emerald-100">Automated fee structures, admission criteria, and age eligibility calculator.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedSchoolTab === 'academics' && (
                      <div className="space-y-3">
                        <h5 className="text-sm font-bold text-white">Academic Curriculum & Values</h5>
                        <p className="text-xs text-emerald-100 leading-relaxed">
                          Quality education integrated with ethical Islamic moral values and modern STEM curriculum.
                        </p>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div className="p-3 rounded-xl bg-emerald-800/40 border border-emerald-700/50">
                            <span className="font-bold block text-white">Primary</span>
                            <span className="text-[10px] text-emerald-200">Foundational Stage</span>
                          </div>
                          <div className="p-3 rounded-xl bg-emerald-800/40 border border-emerald-700/50">
                            <span className="font-bold block text-white">Middle School</span>
                            <span className="text-[10px] text-emerald-200">Analytical STEM</span>
                          </div>
                          <div className="p-3 rounded-xl bg-emerald-800/40 border border-emerald-700/50">
                            <span className="font-bold block text-white">Secondary</span>
                            <span className="text-[10px] text-emerald-200">Excellence & Values</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedSchoolTab === 'facilities' && (
                      <div className="space-y-3">
                        <h5 className="text-sm font-bold text-white">Campus Infrastructure & Facilities</h5>
                        <p className="text-xs text-emerald-100 leading-relaxed">
                          Interactive carousels showcasing smart classrooms, digital computer labs, library, and sports ground.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {["Smart Classrooms", "Science & Computer Labs", "Spacious Library", "Sports & Playground", "Safe Transport", "CCTV Security"].map(f => (
                            <span key={f} className="px-2.5 py-1 rounded-lg bg-emerald-800/60 border border-emerald-700/80 text-[11px] text-emerald-100 font-semibold">
                              ✓ {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer with Action Buttons */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-[#FAF9F6] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.techTags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-[10px] px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold shadow-2xs">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#4F7CFF] hover:bg-[#3d6bf0] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#4F7CFF]/20 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </motion.div>
    </div>
  );
};
