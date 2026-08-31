import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Sparkles, 
  ShieldAlert, 
  TrainTrack, 
  CodeXml, 
  Cpu, 
  CheckCircle,
  ExternalLink,
  Filter,
  GraduationCap
} from 'lucide-react';
import { CERTIFICATES_LIST, ACHIEVEMENTS_TIMELINE } from '../data/portfolioData';
import { CertificateItem, TimelineItem } from '../types';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';

export const AchievementsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [activeTab, setActiveTab] = useState<'certificates' | 'timeline'>('certificates');
  
  // Carousel scroll refs & state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const categories = ['All', 'Hackathon', 'AI & Hackathon', 'AI & Machine Learning', 'Organizing & Leadership'];

  const filteredCertificates = CERTIFICATES_LIST.filter(cert => {
    if (selectedCategory === 'All') return true;
    return cert.category === selectedCategory;
  });

  // Calculate scroll metrics for progress bar and button enable/disable
  const updateScrollMetrics = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
    } else {
      const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
      setScrollProgress(progress);
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < maxScroll - 10);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollMetrics();
    el.addEventListener('scroll', updateScrollMetrics, { passive: true });
    window.addEventListener('resize', updateScrollMetrics);

    return () => {
      el.removeEventListener('scroll', updateScrollMetrics);
      window.removeEventListener('resize', updateScrollMetrics);
    };
  }, [updateScrollMetrics, filteredCertificates]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#4F7CFF]" />;
      case 'TrainTrack': return <TrainTrack className="w-5 h-5 text-[#8B6DFF]" />;
      case 'CodeXml': return <CodeXml className="w-5 h-5 text-indigo-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-600" />;
      default: return <Award className="w-5 h-5 text-[#4F7CFF]" />;
    }
  };

  return (
    <section 
      id="achievements" 
      className={`py-28 sm:py-32 relative overflow-hidden transition-colors duration-500 ${
        activeTab === 'certificates' ? 'bg-[#FFF8ED]' : 'bg-[#F5F5FA]'
      }`}
    >
      {/* Soft Background Ambiance Shapes */}
      <div className={`absolute top-1/4 left-1/4 w-[550px] h-[550px] rounded-full blur-[140px] opacity-60 pointer-events-none -z-10 transition-all duration-500 ${
        activeTab === 'certificates' ? 'bg-[#FFE8CC]' : 'bg-[#E8E6F5]'
      }`} />
      <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[130px] opacity-50 pointer-events-none -z-10 transition-all duration-500 ${
        activeTab === 'certificates' ? 'bg-[#FFF0DC]' : 'bg-[#ECEAF7]'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Centered Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/90 border border-amber-500/25 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Verified Credentials & Honors</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#1D1D1F] tracking-tight">
            Achievements & <span className="text-[#4F7CFF]">Certifications</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            A collection of hackathons, certifications, and experiences from my learning journey.
          </p>

          {/* Primary View Switcher Tabs (Certificates Carousel vs Timeline Journey) */}
          <div className="flex items-center gap-2 mt-8 bg-white/90 p-1.5 rounded-2xl border border-slate-200/80 shadow-2xs">
            <button
              onClick={() => setActiveTab('certificates')}
              id="tab-certificates-carousel"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'certificates'
                  ? 'bg-[#4F7CFF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#1D1D1F] hover:bg-slate-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Verified Certificates ({CERTIFICATES_LIST.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('timeline')}
              id="tab-achievements-timeline"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-[#4F7CFF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#1D1D1F] hover:bg-slate-50'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Milestone Journey</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Premium Horizontal Certificate Showcase Carousel */}
        {activeTab === 'certificates' && (
          <div className="relative">
            
            {/* Category Filter Pills & Carousel Controls Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'bg-white/80 text-slate-600 hover:text-[#1D1D1F] hover:bg-white border border-slate-200/70'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Desktop Navigation Arrow Controls */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium hidden sm:inline mr-2">
                  Showing {filteredCertificates.length} credentials
                </span>
                
                <button
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeft}
                  id="cert-carousel-prev-btn"
                  aria-label="Previous Certificate"
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-all cursor-pointer ${
                    canScrollLeft
                      ? 'bg-white hover:bg-[#E8F2FF] text-[#1D1D1F] hover:text-[#4F7CFF] border-slate-200 hover:border-[#4F7CFF]/30 shadow-2xs hover:scale-105 active:scale-95'
                      : 'bg-slate-100/70 text-slate-300 border-slate-200/50 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRight}
                  id="cert-carousel-next-btn"
                  aria-label="Next Certificate"
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-all cursor-pointer ${
                    canScrollRight
                      ? 'bg-white hover:bg-[#E8F2FF] text-[#1D1D1F] hover:text-[#4F7CFF] border-slate-200 hover:border-[#4F7CFF]/30 shadow-2xs hover:scale-105 active:scale-95'
                      : 'bg-slate-100/70 text-slate-300 border-slate-200/50 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Carousel Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredCertificates.map((cert, index) => (
                <div key={cert.id} className="snap-start">
                  <CertificateCard
                    certificate={cert}
                    onSelect={(c) => setSelectedCertificate(c)}
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* Bottom Progress Bar & Indicator */}
            <div className="mt-8 flex flex-col items-center gap-3">
              {/* Slim Modern Horizontal Scroll Indicator */}
              <div className="w-48 sm:w-64 h-1.5 bg-slate-200/80 rounded-full overflow-hidden p-0.5 shadow-inner">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#4F7CFF] to-[#8B6DFF] rounded-full"
                  style={{ width: `${Math.max(15, scrollProgress)}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                <span>Swipe horizontally or use arrows to explore certificates</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Achievements & Milestones Timeline */}
        {activeTab === 'timeline' && (
          <div className="relative max-w-4xl mx-auto pt-4">
            
            {/* Vertical Progression Spine */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#4F7CFF] via-[#8B6DFF] to-emerald-400 opacity-30" />

            <div className="space-y-10 sm:space-y-12 relative">
              {ACHIEVEMENTS_TIMELINE.map((item, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 relative ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Left / Right Card Container */}
                    <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:text-left' : 'sm:text-right'}`}>
                      <div className="bg-white/60 backdrop-blur-xl rounded-[32px] p-6 sm:p-7 border border-white/80 shadow-sm hover:shadow-md hover:bg-white/80 transition-all group">
                        
                        {/* Top Meta */}
                        <div className={`flex items-center gap-2 mb-2 flex-wrap ${isEven ? 'sm:justify-start' : 'sm:justify-end'}`}>
                          <span className="text-xs font-bold text-[#4F7CFF] bg-[#E8F2FF] px-2.5 py-0.5 rounded-full">
                            {item.year}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                            {item.period}
                          </span>
                          {item.highlightBadge && (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                              ★ {item.highlightBadge}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-heading font-bold text-lg text-[#1D1D1F] mb-1">
                          {item.title}
                        </h3>

                        {/* Organization */}
                        <p className="text-xs font-semibold text-slate-500 mb-3">
                          {item.organizationOrContext}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 text-left font-normal">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-start' : 'sm:justify-end'}`}>
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200/70 text-slate-600 shadow-2xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Central Node Dot / Icon */}
                    <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-md border-2 border-[#4F7CFF]/40 flex items-center justify-center z-10 group-hover:scale-105 transition-transform">
                        {getTimelineIcon(item.icon)}
                      </div>
                    </div>

                    {/* Empty counterpart spacer for sm layout */}
                    <div className="hidden sm:block sm:w-1/2" />

                  </motion.div>
                );
              })}
            </div>

          </div>
        )}

      </div>

      {/* Interactive Certificate View Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};
